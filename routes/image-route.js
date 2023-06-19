const express=require('express')
const route=express.Router()
const { get, Post ,Put,getaById,Delete}=require('../controllers/image-controllers')
//get 
route.get('/',get)
route.get('/:id',getaById)
//post
route.post('/',Post)
//put
route.put('/:id',Put)
//delete
route.delete('/:id',Delete)

module.exports = route