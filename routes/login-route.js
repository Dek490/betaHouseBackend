const express=require('express')
const  {Login} = require('../controllers/LoginController')
const route=express.Router()
 
//login
route.post("/", Login)


module.exports = route