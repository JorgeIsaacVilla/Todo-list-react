import React from "react";
//import "./EmptyTodos.css"

function EmptyTodos() {

    return(
        <>
            🤷‍♂️No se encuentran tareas registradas...

            <ul>
                <li>Puedes filtrar con el editor de texto</li>
                <li>Escribe en el editor de texto y pulsa (➕) para agregar tareas</li>
                <li>con (✔) podras tachar la tarea que completaste</li>
                <li>con (❌) podras eliminar la tarea que completaste</li>
                <li>El entorno es 3D, puedes manipularlo para relajarte y divertirte mientras completas tus tareas 😊❤ disfrutalo. (Manipula fuera de la lista)</li>
            </ul>


        </>
    );
}

export {EmptyTodos};