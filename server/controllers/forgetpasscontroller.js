const bcrypt = require('bcryptjs');
const nodeMailer = require('nodemailer');
const User = require('../models/user');


const otpStore = new Map(); // In-memory storage for OTPs

const ForgetPasswordGenerateOTP = async (req, res) => {
    console.log('req.body.............', req.body);
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: 'Email is required' });
    }

    // Check if user exists
    const user = await User.findOne({ email: email });
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    const otp = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit OTP
    otpStore.set(email, otp);

    console.log('Generated OTP:', otp);

    setTimeout(() => {
        otpStore.delete(email); // Remove OTP after 5 minutes
    }, 5 * 60 * 1000);

    // Send OTP via email
    const transporter = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.APP_EMAIL,
            pass: process.env.APP_PASS
        }
    });

    const mailOptions = {
        from: process.env.APP_EMAIL,
        to: email,
        subject: 'Password Reset OTP',
        text: `Your OTP for password reset is ${otp}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending OTP:', error);
            return res.status(500).json({ message: 'Error sending OTP email' });
        }

        return res.status(200).json({ message: 'OTP sent successfully' });
    });
};


const ForgetPasswordVerifyOTP = async (req, res) => {
     const { email, otp } = req.body;
     if (!email || !otp) {
         res.status(400);
         throw new Error('Email and OTP are required');
     }

     const user = await User.findOne({ email: email });
     console.log('User found...........', user);

     if (!user) {
         res.status(404);
         throw new Error('User not found');
     }

        // Check if OTP matches
     const sentOtp = otpStore.get(req.body.email)
     if(Number(req.body.otp) !== sentOtp) return res.status(401).json({message: 'invalid otp'});


        if (user.otpExpiresAt < new Date()) {
          return res.status(400).json({ message: "OTP has expired" });
        }
    
        // Clear OTP after successful verification
        user.otp = null;
        user.otpExpiresAt = null;
        await user.save();

        const { _id } = user._doc;

        res.status(200).json({ message: 'OTP verified successfully', userId: user._id });
}

const ForgetPasswordResetPassword = async (req, res) => {
  try {
    const { email, newPassword } = req.body;

    if (!email || !newPassword) {
      return res.status(400).json({ message: "Email and new password are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    user.password = hashedPassword;
    await user.save();

    res.status(200).json({ message: "Password reset successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};



module.exports = {
    ForgetPasswordGenerateOTP,
    ForgetPasswordVerifyOTP,
    ForgetPasswordResetPassword
};
   