const joi = require('joi')
//image validation
function imagesValidation(image){
    const imageVal=joi.object({
        HomeID: joi.string().required(),
        ImagePath:joi.string().required(),
    })
    return imageVal.validate(image)
}
module.exports={imagesValidation}