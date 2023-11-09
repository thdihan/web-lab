import { useState } from "react";
import style from "../style/Home.module.css"
import { Link } from "react-router-dom";
export default function Home() {

    const [priority, setPriority] = useState();
    const [due_date, setDueDate] = useState();
    const [sortDate, setSortDate] = useState();
    const [sortPriority, setSortPriority] = useState();




    return <div>

        <div className={style["filter-sort"]}>
            <form>
            <div><label htmlFor="priority">Priority</label><select name="priority" id="priority" value={priority} onChange={(e)=>{setPriority(e.target.value)}}>
                    <option value="1">High</option>
                    <option value="2">Medium</option>
                    <option value="3">Low</option>
                </select></div>
                <div><label htmlFor="due_date">Due Data</label><input type="date" name="due_date" id="due_date" value={due_date} onChange={(e)=>{setDueDate(e.target.value)}}/></div>
                <div><label htmlFor="priority-sort">Sort By Priority</label><input type="checkbox" name="priority-sort" id="priority-sort" value={sortDate} onChange={()=>{setSortDate((prev)=>!prev)}} /></div>
                <div><label htmlFor="date-sort">Sort By Date</label><input type="checkbox" name="date-sort" id="date-sort" value={sortPriority} onChange={()=>{setSortPriority((prev)=>!prev)}} /></div>
            </form>
        </div>

        <div className={style["search-box"]}> 
            <input type="text" name="search-box" id="" placeholder="Search Box (Title or Category)" />
        </div>

        <div className={style["taskbox"]}>
            <h1>Task List</h1>
            <div className={style["singleBox"]}>
                <h3>Task Title</h3>
                <div className={style["task-info"]}><p><b>Due Date: </b>12/09/2023</p> <p><b>Priority: </b>High</p></div>
                <a href="#">View Details</a>
            </div>
            <div className={style["singleBox"]}>
                <h3>Task Title</h3>
                <div className={style["task-info"]}><p><b>Due Date: </b>12/09/2023</p> <p><b>Priority: </b>High</p></div>
                <Link className="btn" to="/task-details">View Details</Link>
            </div>
            
            
        </div>
    </div>;
}
