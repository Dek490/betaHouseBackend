const { aboutModel } = require("../models/about-model")
const { usersModel } = require("../models/users-model")
const { loginValidation } = require("../validations/login-validation")
const bycrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require("dotenv").config()







const   Login = async(req,res) => {
const {error} =loginValidation(req.body)

if(error) return res.status(400).send({error})
 try {

    
// soo hel userka xogtiisa adigoo isticmaalaaya email status active uu yahay

const user = await usersModel.findOne({email:req.body.email,status:'active'})

if(!user) return res.status(404).send({error:'Email not found'})

const passcheck = await bycrypt.compare(req.body.password,user.password)

if(!passcheck) return res.status(400).send({error:'Invalid password'})


// generate token
// xogta,sectkey,expire
const token = jwt.sign({email:user.email,id:user._id},process.env.SECRET_KEY,{expiresIn:'1h'})


return res.status(200).send({AccessToken:token,login:true})

    
 } catch (error) {
    res.status(400).send({error})
 }

}


module.exports = {Login}