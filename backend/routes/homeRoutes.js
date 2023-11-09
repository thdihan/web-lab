const express = require("express");

const router = express.Router();

const {
    createTask,
    getTasks,
    updateTask,
    deleteTask,
} = require("../controllers/taskControllers");

router.route("/create-task").post(createTask);
router.route("/get-tasks").get(getTasks);
router.route("/update-task").put(updateTask);
router.route("/delete-task").post(deleteTask);

module.exports = router;
