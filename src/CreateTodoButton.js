import "./style.css"

function CreateTodoButton ({searchValue, onClick}) {
    const handleClick = (event) =>{
        
        console.log(event);
        console.log("Los usuarios quieren agregar '" + searchValue + "' como tarea.");
        onClick(searchValue);

    };

    return(
        <div className="canva-button"  >
            <button 
            onClick={handleClick}>➕</button>
        </div>

    );
}
export { CreateTodoButton }