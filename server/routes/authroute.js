const express = require('express')

const authrouter = express.Router()

const { 
     register, 
     login, 
     privateController, 
     generateOtp, 
     verifyOtp } = require('../controllers/authcontroller')

const  protect  = require('../middlewares/authmiddleware')

authrouter.post('/register', register)
authrouter.post('/login', login)
authrouter.post('/private', protect, privateController)

authrouter.post('/generate-otp', generateOtp)
authrouter.post('/verify-otp', verifyOtp)

module.exports = authrouter