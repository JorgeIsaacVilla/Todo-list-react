import "./TodoItem.css";

function TodoItem(props) {
    return (
      <li className="TodoItem">
        <p className= {`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}> {props.text} </p>
        <span className="Icon Icon-delete">✖</span>
        <span className= {`Icon ICon-check ${props.completed && "Icon-check--active"}`}>✔</span>  
      </li>
    );
    }

    export {TodoItem};