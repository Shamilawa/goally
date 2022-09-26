require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

// importing routes modules
const userRoutes = require("./routes/user")

// setting up app
const app = express()
app.use(express.json())
app.use(cors())

// Root Route
app.get("/", (req, res) => {
    res.send("Hello")
})


// Registering Routes
app.use("/api/user", userRoutes)








// Conneting to the database
mongoose.connect(process.env.MONGO_URI, () => {
    // startin the PORT after connected to the DB
    app.listen(process.env.PORT, () => {
        console.log(`Server Started at Port ${process.env.PORT}`);
    })
})

