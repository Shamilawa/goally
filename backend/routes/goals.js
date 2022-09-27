const express = require("express")
const router = express.Router()
const requireAuth = require("../middleware/requireAuth")

// Import the goalController
const { getGoals, addGoal, deleteGoal, updateGoal } = require("../controllers/goalController")

// setting up the requireAuth with router as a middleware
router.use(requireAuth)

// Get all the goals
router.get("/", getGoals)


// Add a goal
router.post("/", addGoal)


// Delete a goal
router.delete("/:id", deleteGoal)


// Update a goal
router.patch("/:id", updateGoal)


module.exports = router