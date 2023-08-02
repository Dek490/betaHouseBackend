const mongoose = require('mongoose');

const aboutShmea = new mongoose.Schema({
  FaahFaahin: {
    type: String,
    required: true,
  },
  FaahFaaahinYar: {
    type: String,
    required: true,
  },
<<<<<<< HEAD
},{timestamps:true});
=======

},
{ timestamps: true });
>>>>>>> aba8bbbf15db145360c64140a0fb2c0e971f9b16

const aboutModel = mongoose.model('About', aboutShmea);



module.exports = {
  aboutModel,
 
};
