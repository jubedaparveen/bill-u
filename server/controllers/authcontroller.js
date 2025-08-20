
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodeMailer = require('nodemailer');
const User = require('../models/user');

const otpStore = new Map(); // In-memory storage for OTPs

const register = async (req, res) => {
    const { name, email, phone, password } = req.body;

    // Check if all fields are provided
    if (!name || !email || !phone  || !password) {
        res.status(400);
        throw new Error('All fields are required');
    }

    // Check if user already exists
    const userExists = await User.findOne({ email: email, phone: phone });

    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }
   
    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const user = await User.create({
        name,
        email,
        phone,
        password: hashedPassword
    }); 

    if (!user) {
        res.status(400);
        throw new Error('User registration failed');
    }
    
    // Respond with user details and token
    res.status(201).json({
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        token: generateToken(user._id)
    });
    
    // console.log("User registered successfully:", user);
}

const login = async (req, res) => {
    // Get email and password from request body
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
        res.status(400);
        throw new Error('Email and password are required');
    }

    // Find user by email
    const user = await User.findOne({ email: email });

    if (user && await bcrypt.compare(password, user.password)) {
        res.json({
            id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            role: user.role,
            token: generateToken(user._id)
        });
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }
    console.log("Login successful for user:", user);
}

const privateController = (req, res) => {
    res.status(200).json(req.user);
}

const generateToken = (id) => {
    const token =  jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
    return token;
}

const generateOtp = async (req, res) => {
    const { email } = req.body;
    if (!email) {
             res.status(400);
             throw new Error('Email is required');
         }
            // Check if user exists
         const user = await User.find({ email: email });
         if (!user) {
             res.status(404);
             throw new Error('User not found');
         }
          
         console.log('user..........', user);
         const otp = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit OTP
    
         otpStore.set(email, otp); // Store OTP in memory
    
         console.log('Generated OTP:', otp);
    
         setTimeout(() => {
             otpStore.delete(email); // Remove OTP after 5 minutes
         }, 5 * 60 * 1000);
    
         // Send OTP via email
         const transporter = nodeMailer.createTransport({
               service: 'gmail',
               auth: {
                    user: process.env.APP_EMAIL ,
                    pass: process.env.APP_PASS
               }
          });
    
         const mailOptions = {
              from: process.env.APP_EMAIL,
              to: req.body.email,
              subject: 'Password Reset OTP',
              text: `Your OTP for password reset is ${otp}`
         };
    
         transporter.sendMail(mailOptions, (error, decode) => {
              if (error) return res.status(500)
              throw new Error('Error sending OTP email');
              res.status(200).json('OTP sent successfully');
         })
}

const verifyOtp = async (req, res) => {
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
    
            res.status(200).json({ message: 'OTP verified successfully', userId: _id });
            
}



module.exports = {
    register,
    login,

    privateController,
    
    generateOtp,
    verifyOtp,
    
}