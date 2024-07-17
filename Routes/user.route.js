const { Router } = require('express')
const { homePage, signuoPage, loginPage, createUser, Login } = require('../controllers/user.controller')


let userRoute = Router()

userRoute.post('/', createUser)
userRoute.post('/login', Login)


userRoute.get("/home", homePage)
userRoute.get("/signup", signuoPage)
userRoute.get("/login", loginPage)

module.exports = userRoute