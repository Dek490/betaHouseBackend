
const jwt = require('jsonwebtoken')
const { usersModel } = require('../models/users-model')

require('dotenv').config()



const AuthernticateRoute= (AllowedRoles)=>{

    return async (req,res,next)=>{
        const TokenHeader  =req.headers['authorization']

        if(!TokenHeader) return res.status(401).send('Access Token is not provided')


        const token = TokenHeader.split(' ')[1]
 
        try {


const TokenVerify=jwt.verify(token,process.env.SECRET_KEY)

// console.log("xohgtaTokenka",TokenVerify.id)

//  check if user is exist

const User = await usersModel.findById(TokenVerify.id)
if(!User) return res.status(404).send('User not found')

if(!User.status=='active') return res.status(401).send('User is not active')

console.log(User.role)

if(!AllowedRoles.includes(User.role)) return res.status(401).send('You are not allowed to access this route')

next()

            
        } catch (error) {
            res.status(401).send(error.message);
        }

    }

}

module.exports=AuthernticateRoute