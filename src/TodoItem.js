import "./TodoItem.css";
/*import { CompleteICon } from "./CompleteIcon"
import { DeleteIcon } from "./DeleteIcon" */

function TodoItem(props) {
    return (
      <li className="TodoItem">

        <p 
        className= {`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}
        > {props.text} 
        </p>

        {/*<CompleteICon/>
        <DeleteIcon/> */}

     <span 
        className="Icon Icon-delete"
        onClick={props.onDelete}
        > ✖
        </span>
        
        <span 
        className= {`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
        >✔
      </span> 

      </li>
    );
    }

    export {TodoItem};