const express = require("express")
const validator = require("validator")
const User = require("../models/userModel")
const bcrypt = require("bcrypt")

const router = express.Router()


// Get a specific user data
router.post("/login", async (req, res) => {
    const { email, password } = req.body


    // User data validations
    // Used validator package to check user validation
    if (!email || !password) {
        return res.status(400).json({ error: "All fields must be filled" })
    }

    // Check the user have entered the correct email
    const user = await User.findOne({ email })

    if (!user) {
        return res.status(400).json({ error: "Username or Password is incorrect" })
    }

    // check the user have entered the correct password
    const isPasswordMatch = await bcrypt.compare(password, user.password)

    if (!isPasswordMatch) {
        return res.status(400).json({ error: "Username or Password is incorrect" })
    }

    // Login Credentials are valid
    return res.status(200).json({ user })
})


//Add new user data
router.post("/signup", async (req, res) => {

    // Getting data from user
    const { fullName, email, password, startTutorial } = req.body


    // User data validations
    // Used validator package to check user validation
    if (!fullName || !email || !password) {
        return res.status(400).json({ error: "All fields must be filled" })
    }

    if (!validator.isEmail(email)) {
        return res.status(400).json({ error: "Please enter valid email" })
    }

    if (!validator.isStrongPassword(password)) {
        return res.status(400).json({ error: "Password is not strong enough" })
    }


    // check the email availability. Email should be unique.
    const isEmailAvailable = await User.findOne({ email })

    if (isEmailAvailable) {
        return res.status(400).json({ error: "Email already in use" })
    }


    // Generate the hash password
    const salt = await bcrypt.genSalt(10)
    const hassPassword = await bcrypt.hash(password, salt)

    // Add new user to database
    const user = await User.create({ fullName, email, password: hassPassword, startTutorial: false })

    return res.status(200).json({ fullName, email })
})


module.exports = router