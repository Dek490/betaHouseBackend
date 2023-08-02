const joi = require('joi')
//house validation
function houseValidation(house){
    const houseVal=joi.object({
        type: joi.string().required(),
        Address: joi.string().required(),
        Age: joi.string().required(),
        Rent: joi.string().required(),
        Deposit: joi.string().required(),
        Images: joi.string().required(),
        Parking: joi.string().required(),
        Status: joi.string().required(),
        Rooms: joi.string().required(),
        Pathrooms: joi.string().required(),
        Owner: joi.string().required(),
        // creatorID: joi.string().required()
    })
    return houseVal.validate(house)
}
module.exports={houseValidation}