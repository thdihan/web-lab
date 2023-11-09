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
router.route("/get-taskByDate").get(getTaskByDate);
router.route("/get-tasks").get(getTasks);
router.route("/get-taskByPriority").get(sortTaskByPriority);
router.route("/update-task").put(updateTask);
router.route("/delete-task").delete(deleteTask);

module.exports = router;
