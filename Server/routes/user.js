const express = require('express')


//controller
const {signUpUser, loginUser } = require('../Controllers/userController.js')

const router = express.Router()

//login
router.post('/login',loginUser)


//sign up
router.post('/signup', signUpUser)

module.exports = router