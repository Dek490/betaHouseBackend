const express=require('express')
const route=express.Router()
const { get, Post ,Put,getaById,Delete}=require('../controllers/house-controllers')
const AuthernticateRoute = require('./AuthernicationMiddleWare')
//get 
route.get('/',get)
route.get('/:id',getaById)
//post
route.post('/',AuthernticateRoute(),Post)
//put
route.put('/:id',AuthernticateRoute(),Put)
//delete
route.delete('/:id',AuthernticateRoute(),Delete)

module.exports = route