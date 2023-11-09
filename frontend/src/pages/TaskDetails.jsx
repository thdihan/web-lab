import { useState } from "react"
import style from "../style/TaskDetails.module.css"
import { Link } from "react-router-dom";
export default function TaskDetails() {

    const [isEditing, setIsEditing] = useState(false);
    return <>
    <div className={style['task-details-page']}>
        <h2>Task Name</h2>
        <p>Description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem magnam, quia delectus minus excepturi exercitationem accusantium, neque incidunt impedit pariatur error nisi facere autem iste quisquam eaque et quidem hic deleniti! Porro optio a obcaecati, nemo architecto minima, dolor temporibus illo, praesentium aliquid quis possimus cumque reiciendis quam explicabo iure magnam consequuntur nobis distinctio recusandae velit. Quibusdam error adipisci id placeat hic. Iure suscipit, repellendus sequi cum reprehenderit beatae est praesentium adipisci voluptate obcaecati voluptas laborum dolores eaque aliquid exercitationem amet modi? Assumenda blanditiis tempore, vitae repellat quibusdam, debitis pariatur cum iusto officiis ea animi minima iure, voluptas non corporis!</p>
        
    </div>

    <div className={style["details-button"]}>
        <Link to="/create-task" state={{formtitle: `Edit Task`, editMode: true}} className="btn">Edit Details</Link>      
        <button className="btn">Mark As Done</button>
        <button className="btn">Delete</button>
    </div>
    </>
}