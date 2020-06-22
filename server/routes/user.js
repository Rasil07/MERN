const express = require('express');
const router = express.Router();
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
       
            const user = new User({
                name,
                email,
                password
            });
            try{
                user.save()
                .then(()=>res.status(200).send("User registered"))
                .catch(err=>res.status(400).json(err));
        }catch(err){
            res.status(500).send(`Error: ${err}`);
        }
    }else{
        res.status(400).json(error);
    }
})
module.exports = router;

