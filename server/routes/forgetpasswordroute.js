const express = require('express');
const { ForgetPasswordGenerateOTP, ForgetPasswordVerifyOTP, ForgetPasswordResetPassword } = require('../controllers/forgetpasscontroller');
const router = express.Router();


router.post('/generate-otp', ForgetPasswordGenerateOTP);
router.post('/verify-otp', ForgetPasswordVerifyOTP);
router.post('/reset-password', ForgetPasswordResetPassword);


module.exports = router;