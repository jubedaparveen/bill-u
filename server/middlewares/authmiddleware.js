
const jwt = require('jsonwebtoken');
const User = require('../models/user'); 

const protect = async (req, res, next) =>{

     let token
     try{

          if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
               token = req.headers.authorization.split(" ")[1]
               //Verify Token
               const decoded = jwt.verify(token, process.env.JWT_SECRET)
               //Get user from token
               // Find user by ID and exclude password field
               const user = await User.findById(decoded.id).select("-password")
               if (user) {
                    req.user = user
                    next()
               }  
          }else{
               res.status(401)
               throw new Error('Unautharization!!...TOKEN')
          }
     }
     catch(error){
          res.status(401)
          throw new Error('Unautharization!!...')
     }
}

module.exports = protect