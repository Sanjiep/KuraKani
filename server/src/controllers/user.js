const User = require('../models/user')

const registerUser = (req,res)=>{
    User.create(req.body)
    res.json({
        msg:"register sucessfully"
    })
}

module.exports = {registerUser}