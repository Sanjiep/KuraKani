const express = require('express')
const {registerUser} = require('../controllers/user')

router = express.Router()

router.post('/register', registerUser) 

module.exports = router