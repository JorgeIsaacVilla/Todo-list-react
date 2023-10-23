import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React, { Suspense } from 'react';

import { Canvas } from 'react-three-fiber';
import { Office } from './Components/office3d/Office';
import { OrbitControls } from '@react-three/drei';

import { TodosLoading } from "./TodosLoading";
import { TodosError } from "./TodosError";
import { EmptyTodos } from "./EmptyTodos";

import "./style.css";

/*localStorage.removeItem("TODOS_V1")
const defaultTodos =[
  { text:"Puedes filtrar con el editor de texto", completed:false },
  { text:"Escribe en el editor de texto y pulsa (➕) para agregar tareas", completed:false },
  { text:"con (✔) podras tachar la tarea que completaste", completed:true },
  { text:"con (❌) podras eliminar la tarea que completaste", completed:false },
  { text:"El entorno es 3D, puedes manipularlo para relajarte y divertirte mientras completas tus tareas 😊❤ disfrutalo", completed:false },
]; 
localStorage.setItem("TODOS_V1",JSON.stringify(defaultTodos));*/

function useLocalStorage (itemName, initialValue) {
const [item, setItem] = React.useState(initialValue);
const [loading,setLoading] = React.useState(true);
const [error,setError] = React.useState(false);

React.useEffect(() => {
setTimeout(() => {

  try {
    const localStorageItem = localStorage.getItem(itemName);
  
  let parsedItem;
    
    if (!localStorageItem){
      localStorage.setItem(itemName, JSON.stringify([]));
      parsedItem=[];
     } else {
      parsedItem= JSON.parse(localStorageItem);
      setItem(parsedItem);
     }
     setLoading(false);
  }catch(error){
    setLoading(false);
    setError(true);
  }

}, 2000);
}, []);

{/*React.useEffect es para agregar un efecto de carga a las librerias, API´s o cualquier elemento que cargue datos */}

 const saveItem = (newItem) => {
  localStorage.setItem(itemName,JSON.stringify(newItem ));
  setItem(newItem);
};

return {item, saveItem, error, loading};

}

function App() {
 {/*para programar la cantidad de tareas con TRUE real en la lista */}
 //const [todos, setTodos] = React.useState(defaultTodos);

  const {item: todos, saveItem: saveTodos,loading,error} = useLocalStorage ("TODOS_V1",[]);
  const [searchValue, setSearchValue] = React.useState(""); {/* en esta costante "searchValue" es el estado programado, (nosotros elegimos el nombre), pero "setSearchValue" es el que va a sensar el estado de "searchValue" tambien puedo inventarle el nombre, pero por convección el sistema estaria de la siguiente manera: 
  
  const [ejemplo, SetEjemplo] = React.useState(); 

  React.useState() = esto es necesario porque cuando se inicializa el programa, la constante debe tener un valor inicial, que para este cas sera un string vacio
*/}

  const handleCreateTodo =(searchValue)=> {
    console.log("valor de searchValue: " + searchValue + " desde App.js")

    if(searchValue.trim() !==""){
      const newTodo = {
        text: searchValue,
        completed:false
      };
      saveTodos([...todos, newTodo]);
      console.log("nueva tarea creada: " + newTodo);
      setSearchValue("");
    }

  }
  const completedTodos = todos.filter(todo => !!todo.completed).length; 
  {/* recuerda que la propiedad length nos permite sacar la cantidad de caracteres en una cadena de texto. pero para este caso lo usaremos para calcular la cantidad de "todos" que pasaron este filtro */}
  {/*para programar la cantidad de tareas real en la lista */}

  const totalTodos =  todos.length;

  const searchedTodo = todos.filter(
    (todo) => {

      const todoText = todo.text.toLocaleLowerCase();
      const searchText = searchValue.toLowerCase();

      return  todoText.includes(searchText);
      {/*si ponemos solo "return  todo.text.includes(searchValue);" lo que pasara es que se filtraran solo los textos que sean 100% similares va a omitir si es mayuscula o minuscula e imprimira ejemplo "LA" los textos que tenga LA, y "la" los textos que tenga la.
    
      para arreglar esto se puede poner: "return  todo.text.toLowerCase()includes(searchValue).toLocaleLowerCase()); y lo que hara el metodo .toLowerCase() es transformar todo a minuscula */}
    }
  );

  console.log("Los usuarios buscan Todos de " + searchValue)

  {/* esto: => es un arrow fuctions; Las funciones de flecha, o arrow functions son una nueva forma de definir funciones y hay distintas variantes en la sintaxis:Función de un solo parámetro.Al crear una arrow function de un solo parámetro no es necesario escribír los paréntesis, tampoco es necesario escribír las llaves, esto se puede cuando la función es de una sola línea y devuelve un valor. */}

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };


  return (
    <React.Fragment>

      <div className='office'>
      <Canvas camera={{zoom:1,  position:[5,5,3]}}>
          <ambientLight intensity={0.5} />
          <pointLight position={[-35, 35, 0]} intensity={ 0.4 }/>
          <Suspense fallback={null}>
          <Office />
          </Suspense>
          <OrbitControls
            autoRotate={true}
            autoRotateSpeed={0.2}  
            enableZoom={true}
          />
      </Canvas>
      </div>

      <div className='todo-list'>
      <TodoCounter 
        completed={completedTodos} 
        total={totalTodos} 
      />
      <TodoSearch 
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}
      />

      <TodoList>
        {/*loading && <p>Cargando Aplicación...</p> */}
        {loading && <TodosLoading />}
        {/*error && <p>!#ERROR FATAL</p>*/}
        {error && <TodosError/>}
        {/*(!loading && searchedTodo.length === 0) && <p>No se Encuentran Tareas 😃✨</p>*/}
        {(!loading && searchedTodo.length === 0) && <EmptyTodos/>}

        {searchedTodo.map(todo =>(
          <TodoItem 
          key={todo.text} 
          text={todo.text}  
          completed={todo.completed}
          onComplete={ () => completeTodo(todo.text)}
          onDelete ={() => deleteTodo(todo.text)} //pasar SearhValue como props a TodoITem.js
          />
        ))}
      </TodoList>

      <CreateTodoButton 
      searchValue= {searchValue} 
      onClick={handleCreateTodo}/>
      </div>
    </React.Fragment>
  );
}

export default App;
/*Local Storage: es una herramaienta que nos ayuda a hacer persistencia de datos en un navegador, eso significa que uando los usuarios entren al navegador, guarden informacion en el local storage y despues se vallan y cierran la App, ahí sigan teniendo esa información

En el navegador en la opcion de "inspeccionar" se escrive <locaStorage>
*/

/*Custom Hooks es una herramienta de React que nos permite extraer una parte de la logica de nuestros componentes para que quede mucho más limpio y se pueda reutilizar mucho más 

una conveccion que nos pide utilizar React para los "CustomHooks" es que las funciones en la que utilizaremos esta herramienta, siempre lo comenzemos por use.

ejemplo:
function useLocalStorage(){}
*/
/*"React Context" es una herramienta que nos permite crear estados globales para evitar el problema de prodg grining en nuestras aplicaciones.

"useContext" es una herramienta que se utiliza para usar los props es similar a "consumer" la sintaxis es "React.useContext()"
*/

/*React Portals es una herramienta de React para abrir portales y renderizar información en nodos HTML */

/*los React Portals son herramientas de React para teletransportar contenidos de un componente a otro componente. podria utilizar esto para navegacion entre distintas paginas cambiando el estado de false a true para mostrar un contenido u otro segun el que necesite. */