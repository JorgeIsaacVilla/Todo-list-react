import "./style.css"

function TodoList({children}) {
    return (
      <div className="list-activity">
        <ul>
          {children}
        </ul>
      </div>
    );
  }
  export {TodoList};