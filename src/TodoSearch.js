import React from "react";
import "./style.css"

function TodoSearch({
  searchValue,
  setSearchValue,
}) {
 
    return (
      <input 
        placeholder="Editor de texto"
        value={searchValue} 
        onChange={(event) => {

        console.log("escribiste en el imput");
        console.log(event.target);
        console.log(event.target.value); {/*con esto podemos evaluar en el console.log los cambios realizados en el imput*/}

        setSearchValue(event.target.value); {/*esto es para guardar el nuevo estado del imput dentro de SetSearchValue para que se reemplazen las palabras en searchValue. sin esto, el imput mantendra en la constante el React.useState("") con los ("") vacio por defecto que programamos  */}
      }}
      />
    );
  }
  export { TodoSearch };