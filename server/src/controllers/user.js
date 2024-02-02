const User = require('../models/user')
const bcrypt = require('bcrypt');
const saltRounds = 10;

const registerUser = async (req,res)=>{
    const hashPass = await bcrypt.hash(req.body.password, saltRounds )
    req.body.password = hashPass
    await User.create(req.body)
    res.json({
        msg:"register sucessfully"
    })
}

module.exports = {registerUser}