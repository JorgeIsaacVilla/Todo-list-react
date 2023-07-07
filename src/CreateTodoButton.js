import "./style.css"

function CreateTodoButton () {
    return(
        <div className="canva-button"  >
            <button 
            onClick={
                (event) => {
                    console.log("agregaste una nueva actividad")
                    console.log(event)
                }
            }
            >➕</button>
        </div>

    );
}
export { CreateTodoButton }