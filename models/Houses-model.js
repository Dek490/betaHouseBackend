const mongoose=require('mongoose')
//schema
const houseSchema=mongoose.Schema({
    type: {
        type: String,
        required: true
      },
      Address: {
        type: String,
        required: true
      },
      Age: {
        type: String,
        required: true
      },
      Rent: {
        type: String,
        required: true
      },
      Deposit: {
        type: String,
        required: true
      },
      Parking: {
        type: String,
        required: true
      },
      Images: {
        type: String,
        required: true
      },
      Status: {
        type: String,
        required: true
      },
      Rooms: {
        type: String,
        required: true
      },
      Pathrooms: {
        type: String,
        required: true
      },
      Owner: {
        type: String,
        required: true
      }
      // creatorID: {
      //   type: mongoose.Types.ObjectId,
      //   ref: 'User',
      //   required: true
      // }

})
//model
const houseModel=mongoose.model('houses', houseSchema)
//export
module.exports={houseModel}