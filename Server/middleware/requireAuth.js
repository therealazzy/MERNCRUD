const JWT = require('jsonwebtoken')
const User = require('../Models/userModel')

const requireAuth = async(req, res, next) => {

    const { authorization } = req.headers

    if (!authorization){
        return res.status(401).json({error: 'Invalid authorization'})
    }

    const token = authorization.split(' ')[1]

    try{
        const {_id} = JWT.verify(token, process.env.SECRET)

        req.user = await User.findOne({ _id }).select('_id')
        next()

    }catch(error){
        console.log(error)
        res.status(401).json({error: 'Unauthorized request'})
    }

}

module.exports = requireAuth
