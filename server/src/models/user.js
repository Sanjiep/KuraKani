const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogSchema = new Schema({
    
  userName : {
    type:String,
    required: true,
  },
  email : {
    type:String,
    required: true,
    unique:true,
  },
  password: {
    type:String,
    required: true,
  }
});