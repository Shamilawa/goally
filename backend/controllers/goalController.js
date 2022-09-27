const getGoals = async (req, res) => {
    res.send("Get all the Goals")
}

const addGoal = async (req, res) => {
    res.send("Add new goal")
}

const deleteGoal = async (req, res) => {
    res.send("Delete a goal")
}

const updateGoal = async (req, res) => {
    res.send("Update a article")
}

module.exports = { getGoals, addGoal, deleteGoal, updateGoal }