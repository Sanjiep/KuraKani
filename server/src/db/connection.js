const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/KuraKaniDB');

const connection = async() =>{
    try{
        const isConnect = await mongoose.connect('mongodb://127.0.0.1:27017/KuraKaniDB');
        if(isConnect){
            console.log("Database Connected")
        }
    }catch(err){
        console.log("Failed to Connect DB")
    }
}

module.exports = connection