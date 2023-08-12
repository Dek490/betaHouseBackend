const mongoose=require('mongoose')
//schema
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:['active','pending',],
        default: 'active',
   
    },
    role:{
        type:String,
        default:"user",
        
        required:true
    },
    

})
//model
const usersModel=mongoose.model('users', userSchema)
//export
module.exports={usersModel}