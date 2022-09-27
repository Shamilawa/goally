require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

// importing routes modules
const userRoutes = require("./routes/user")
const goalRoutes = require("./routes/goals")

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
app.use("/api/goals", goalRoutes)








// Connect to the DB and then start the port
mongoose.connect(process.env.MONGO_URI,)
    .then(() => {
        // start the server only when the DB connection of success
        app.listen(process.env.PORT, () => {
            console.log("Server started at port 4000");
        })
    })
    .catch((error) => {
        console.log(error);
    })

