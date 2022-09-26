const express = require("express")
const { login, signup } = require("../controllers/userController")

const router = express.Router()

// Get a specific user data
router.post("/login", login)


//Add new user data
router.post("/signup", signup)


module.exports = router