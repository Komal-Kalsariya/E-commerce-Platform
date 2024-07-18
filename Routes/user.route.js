const { Router } = require('express')
const { homePage, signuoPage, loginPage, createUser, Login, deleteUser, updataUser, getUsers } = require('../controllers/user.controller')
const isValid = require('../middlewares/dataValid')


let userRoute = Router()

userRoute.get("/", getUsers)

userRoute.post('/', isValid, createUser)
userRoute.post('/login', Login)

userRoute.delete('/:id', deleteUser)
userRoute.patch('/:id', updataUser)

userRoute.get("/home", homePage)
userRoute.get("/signup", signuoPage)
userRoute.get("/login", loginPage)

module.exports = userRoute