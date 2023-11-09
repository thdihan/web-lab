import { useState } from "react";
import style from "../style/TaskDetails.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import UserApi from "../api/UserApi";
import { formatDateAndTime } from "../utilities/formatDate";
export default function TaskDetails() {
    const navigate = useNavigate();

    const location = useLocation();
    const { task } = location.state;
    const { title, description, dueDate, priority, categories, completed } =
        task;
    const [completeStatus, setCompleteStatus] = useState(completed);
    //     {
    //     "_id": "654c89b5ccd284640d863930",
    //     "title": "abdfds",
    //     "description": "dsfsdfsd",
    //     "dueDate": "2023-11-10T00:00:00.000Z",
    //     "priority": 2,
    //     "completed": false,
    //     "categories": [
    //         "sdf",
    //         "vdfgd"
    //     ],
    //     "__v": 0
    // }
    console.log("TASK DETAILS :", task);

    async function markAsDone() {
        const categories = task.categories
            ?.map((category) => category)
            .join(",");
        const dueDate = formatDateAndTime(task.dueDate).date;
        const tempObj = {
            ...task,
            completed: 1,
            task_id: task._id,
            categories,
            due_date: dueDate,
        };
        console.log("Temp obj", tempObj);
        try {
            //
            const response = await UserApi.put("/update-task", tempObj, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            console.log(response.data);
            setCompleteStatus(true);
        } catch (err) {
            //
            console.log(err);
        }
    }
    async function deleteTask() {
        try {
            //
            const response = await UserApi.post(
                "/delete-task",
                { task_id: task._id },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            console.log(response.data);
            navigate("/");
        } catch (err) {
            //
            console.log(err);
        }
    }

    return (
        <>
            <div className={style["task-details-page"]}>
                <h2>{title}</h2>
                <p>
                    <b>Task Description: </b>
                    {description}
                </p>
                <p>
                    <b>Due Date: </b>
                    {formatDateAndTime(dueDate).date}
                </p>
                <p>
                    <b>Priority</b>
                    {priority}
                </p>
                <p>
                    <b>Categories: </b>
                    {categories?.map((category) => category).join(", ")}
                </p>
                <p>
                    <b>Status: </b>
                    {completeStatus ? "Done" : "Pending..."}
                </p>
            </div>

            <div className={style["details-button"]}>
                <Link
                    to="/create-task"
                    state={{
                        editMode: true,
                        task,
                    }}
                    className="btn"
                >
                    Edit Details
                </Link>
                <button
                    className="btn"
                    onClick={markAsDone}
                    disabled={completeStatus}
                >
                    {completeStatus ? "Already Done" : "Mark As Done"}
                </button>
                <button onClick={deleteTask} className="btn">
                    Delete
                </button>
            </div>
        </>
    );
}
