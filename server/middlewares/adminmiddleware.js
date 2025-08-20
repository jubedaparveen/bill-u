const jwt = require('jsonwebtoken')
const User = require('../models/user')

const adminProtect = async (req, res, next) => {
     if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        let token
        try {

            token = req.headers.authorization.split(" ")[1]
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user = await User.findById(decoded.id).select("-password")
            if (req.user.role === 'admin') {
                next()
            } else {
                res.status(401)
                throw new Error('Invalid Request : Unauthorised Only Admin')
            }
        } catch (error) {
            res.status(401)
            throw new Error('Invalid Request : Unauthorised')
        }
    } else {
        res.status(401)
        throw new Error('Invalid Request : Unauthorised')
    }

    console.log('req.headers.authorization', req.headers.authorization)
}

module.exports = adminProtect