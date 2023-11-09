const express = require("express");

const router = express.Router();

const {
    createTask,
    filterTaskPriority,
    filterTaskDueDate,
    getTasks,
    updateTask,
    getTaskByDate,
    sortTaskByPriority,
    deleteTask,
} = require("../controllers/taskControllers");

router.route("/create-task").post(createTask);
router.route("/filter-priority").get(filterTaskPriority);
router.route("/filter-date").get(filterTaskDueDate);
router.route("/get-taskByDate").post(getTaskByDate);
router.route("/get-tasks").get(getTasks);
router.route("/get-taskByPriority").post(sortTaskByPriority);
router.route("/update-task").put(updateTask);
router.route("/delete-task").post(deleteTask);

module.exports = router;
