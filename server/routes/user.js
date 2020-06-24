const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const validateRegistration=require("../Validation/validation");
const User = require('../Model/User');
router.post('/register',async(req, res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const cpassword = req.body.cpassword;
    const data = {name, email, password, cpassword};
    const {error, isvalid} = await validateRegistration(data);
    if(isvalid){
            const saltRounds = 10;
            const user = new User({
                name,
                email,
                password
            });
            try{
                bcrypt.hash(password, saltRounds, function(err, hash) {
                    // Store hash in your password DB.
                    user.password = hash;
                    user.save()
                    .then(()=>res.status(200).send("User registered"))
                    .catch(err=>res.status(400).json(err));
                });               
        }catch(err){
            res.status(500).send(`Error: ${err}`);
        }
    }else{
        res.status(400).json(error);
    }
});
router.post('/login', (req, res)=>{
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({email: email}).then(user=>{
        if(!user) res.status(400).send("User not registered");
        bcrypt.compare(password, user.password,(err,isMatch)=>{
          if(isMatch){
                const token = jwt.sign({payload: {
                    id: user._id,
                    name: user.name
                }},process.env.secret, (err,token)=>{
                    res.json({"token": "Bearer"+token});
                })
                         
          }else{
              res.send('Password is incorrect');
          }
        })
    })
});
module.exports = router;

