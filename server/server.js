const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./routes/user');
const app = express();
require('dotenv').config();

app.use(express.json());
const port = 5000;
const uri = process.env.uri;
mongoose.connect(uri,{useNewUrlParser: true, useUnifiedTopology: true });

app.listen(port,(req,res)=>{
    try{
        console.log("Server running at port:",port);
    }catch(err){
        res.status(400).send("Error:",err);
    }
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Database connected");
});

app.use('/user',userRoute);

