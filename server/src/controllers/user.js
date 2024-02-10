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

const loginUser = async (req, res) => {
    try {
        const userDetails = await User.findOne({ email: req.body.email });

        if (userDetails) {
            const match = await bcrypt.compare(req.body.password, userDetails.password);

            if (match) {
                // const token = jwt.sign({ userId: userDetails._id, userEmail: userDetails.email }, 'asdfghjklpoiuytrewq', { expiresIn: '1h' });
                res.status(200).json({
                    msg: 'Login successful',
                    // token,
                    // userDetails
                });
            } else {
                res.status(403).json({
                    msg: 'Incorrect password',
                });
            }
        } else {
            res.status(403).json({
                msg: 'Email does not exist',
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            msg: 'Internal Server Error',
        });
    }
};

module.exports = {registerUser, loginUser}