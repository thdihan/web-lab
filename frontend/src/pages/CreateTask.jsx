import style from "../style/CreateTask.module.css"
import { useLocation } from "react-router-dom";
export default function CreateTask() {

    const location = useLocation();
    const {formtitle} = location.state || "";
    const {editMode} = location.state || false;
    
    function handleAddTask(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formDataObject = Object.fromEntries(formData);
        console.log("Form Data Example : ", formDataObject);
    }
    return (
        <div>
            <h2>{formtitle || `Task Creation Form`}</h2>
            <form onSubmit={handleAddTask} className={style["task-form"]}>
                <div>
                    <label htmlFor="title">Task Title</label>
                    <input type="text" name="title" id="title" />
                </div>
                
                <div>
                <label htmlFor="description">Description</label>
                    <textarea
                    name="description"
                    id="description"
                    cols="30"
                    rows="10"
                ></textarea></div>
                
                <div><label htmlFor="title">Due Data</label><input type="date" name="due_date" id="" /></div>
                
                <div><label htmlFor="priority">Priority</label><select name="priority" id="priority">
                    <option value="1">High</option>
                    <option value="2">Medium</option>
                    <option value="3">Low</option>
                </select></div>
                
                <input type="submit" value="Add Task" />
            </form>
        </div>
    );
}
