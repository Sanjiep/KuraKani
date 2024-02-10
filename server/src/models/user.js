const mongoose = require('mongoose');
const { Schema } = mongoose;

const userDetails = new Schema({
    
  // userName : {
  //   type:String,
  //   required: true,
  // },
  email : {
    type:String,
    required: true,
  },
  password: {
    type:String,
    required: true,
  }
});

const User = mongoose.model('User', userDetails);

module.exports = User