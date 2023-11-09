import style from "../style/CreateTask.module.css";
import { useLocation } from "react-router-dom";

import UserApi from "../api/UserApi";
import { useState } from "react";
import { formatDateAndTime } from "../utilities/formatDate";
export default function CreateTask() {
    const location = useLocation();
    const { editMode } = location.state || false;
    const { task } = location.state || false;

    const [title, setTitle] = useState(false);
    const [description, setDescription] = useState(false);
    const [category, setCategory] = useState(false);
    const [dueDate, setDueDate] = useState(false);
    const [priority, setPriority] = useState(false);

    async function handleAddTask(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formDataObject = Object.fromEntries(formData);
        console.log("Form Data Example : ", formDataObject);
        formDataObject["priority"] = parseInt(formDataObject["priority"]);

        try {
            //
            const response = await UserApi.post(
                "/create-task",
                formDataObject,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            console.log(response.data);
        } catch (err) {
            //
            console.log(err);
        }
    }
    async function handleUpdateTask(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formDataObject = Object.fromEntries(formData);

        formDataObject["task_id"] = task._id;
        formDataObject["priority"] = parseInt(formDataObject["priority"]);
        console.log("Form Data Example : ", formDataObject);

        try {
            //
            const response = await UserApi.put("/update-task", formDataObject, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            console.log(response.data);
        } catch (err) {
            //
            console.log(err);
        }
    }

    return (
        <div>
            <h2>{editMode ? `Edit Form` : `Task Creation Form`}</h2>
            <form
                onSubmit={!editMode ? handleAddTask : handleUpdateTask}
                className={style["task-form"]}
            >
                <div>
                    <label htmlFor="title">Task Title</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={
                            editMode && title === false
                                ? task.title
                                : title === false
                                ? ""
                                : title
                        }
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                    />
                </div>

                <div>
                    <label htmlFor="description">Description</label>
                    <textarea
                        name="description"
                        id="description"
                        cols="30"
                        rows="10"
                        value={
                            editMode && description === false
                                ? task.description
                                : description === false
                                ? ""
                                : description
                        }
                        onChange={(e) => {
                            setDescription(e.target.value);
                        }}
                    ></textarea>
                </div>

                <div>
                    <label htmlFor="category">Category</label>
                    <input
                        type="text"
                        name="categories"
                        id="category"
                        placeholder="comma separated"
                        value={
                            editMode && category === false
                                ? task.categories
                                      ?.map((category) => category)
                                      .join(", ")
                                : category === false
                                ? ""
                                : category
                        }
                        onChange={(e) => {
                            setCategory(e.target.value);
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="title">Due Data</label>
                    <input
                        type="date"
                        name="due_date"
                        id=""
                        value={
                            editMode && dueDate === false
                                ? formatDateAndTime(task.dueDate).date
                                : dueDate === false
                                ? ""
                                : dueDate
                        }
                        onChange={(e) => {
                            setDueDate(e.target.value);
                        }}
                    />
                </div>

                <div>
                    <label htmlFor="priority">Priority</label>
                    <select
                        name="priority"
                        id="priority"
                        value={
                            editMode && priority === false
                                ? task.priority
                                : priority === false
                                ? ""
                                : priority
                        }
                        onChange={(e) => {
                            setPriority(e.target.value);
                        }}
                    >
                        <option value={1}>High</option>
                        <option value={2}>Medium</option>
                        <option value={3}>Low</option>
                    </select>
                </div>

                <input
                    type="submit"
                    value={editMode ? "Update Task" : "Add Task"}
                />
            </form>
        </div>
    );
}
