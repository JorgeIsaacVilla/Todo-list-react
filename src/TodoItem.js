function TodoItem(props) {
    return (
      <li>
        <p> {props.text} </p>
        <span>✖</span><span> ✔ </span>  
      </li>
    );
    }

    export {TodoItem};