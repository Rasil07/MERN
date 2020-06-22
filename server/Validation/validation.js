const validator = require('validator');
const isempty = require('is-empty');
module.exports = function(data){
    
    const error = {};
    if(!data.name) error.name = "Name is required";
    if(!data.email) error.email = "Email is required";
    if(!data.password) error.password = "Password is required";
    if(!data.cpassword) error.password = "Confirmation password is required";
    if(!validator.isEmail(data.email)) error.email="Email is not valid";
    if(!validator.equals(data.password,data.cpassword)) error.password="Confirmation password doesnt match";
    if(!validator.isLength(data.password,{min: 8, max: 32})) error.password="Passowrd should be atleast 8 cahracters long";

    return{
        error,   
        isvalid: isempty(error)    
    };
}