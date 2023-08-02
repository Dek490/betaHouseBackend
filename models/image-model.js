const mongoose=require('mongoose')
//schema
const imageSchema=mongoose.Schema({
    HomeID:{
        type:mongoose.Types.ObjectId, 
        ref:'Houses',
        required:true
    },
    ImagePath:{
        type:String, 
        required:true
    },
})
//model
const imagesModel=mongoose.model('images', imageSchema)
//exporting
module.exports={imagesModel}