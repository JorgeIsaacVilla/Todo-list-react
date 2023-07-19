import "./TodoCounter.css";

function TodoCounter({total, completed}) {

    /*let textH1 

      if(total===0 && completed===0){
        textH1 = "No tienes tareas pendientes ✌😎";
      } else{
        textH1 = "Has completado" + {completed} + " de " + {total} + "tareas."
      }*/
    const textH1 = total === 0 && completed === 0 ? "No tienes tareas pendientes ✌😎" : `Has completado ${completed} de ${total} tareas.`;


    return (
      <h1> 
       {textH1}
      </h1>
    );
  }
  export {TodoCounter};