import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React, { Suspense } from 'react';

import { Canvas } from 'react-three-fiber';
import { Office } from './Components/office3d/Office';
import { OrbitControls } from '@react-three/drei';

import "./style.css"

const defaultTodos =[
  { text:"Puedes filtrar con el editor de texto", completed:false },
  { text:"Escribe en el editor de texto y pulsa (➕) para agregar tareas", completed:false },
  { text:"con (✔) podras tachar la tarea que completaste", completed:true },
  { text:"con (❌) podras eliminar la tarea que completaste", completed:false },
  { text:"El entorno es 3D, puedes manipularlo para relajarte y divertirte mientras completas tus tareas 😊❤ disfrutalo", completed:false },
];

function App() {
 {/*para programar la cantidad de tareas con TRUE real en la lista */}

  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState(""); {/* en esta costante "searchValue" es el estado programado, (nosotros elegimos el nombre), pero "setSearchValue" es el que va a sensar el estado de "searchValue" tambien puedo inventarle el nombre, pero por convección el sistema estaria de la siguiente manera: 
  
  const [ejemplo, SetEjemplo] = React.useState(); 

  React.useState() = esto es necesario porque cuando se inicializa el programa, la constante debe tener un valor inicial, que para este cas sera un string vacio

*/}

  const completedTodos = todos.filter(todo => !!todo.completed).length; {/* recuerda que la propiedad length nos permite sacar la cantidad de caracteres en una cadena de texto. pero para este caso lo usaremos para calcular la cantidad de "todos" que pasaron este filtro */}

  {/*para programar la cantidad de tareas real en la lista */}

  const totalTodos =  defaultTodos.length;

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

  return (
    <React.Fragment>

      <div className='office'>
      <Canvas camera={{zoom:1,  position:[0,0,1.3]}}>
          <ambientLight intensity={0.5} />
          <pointLight position={[35, 35, 0]} intensity={ 0.4 }/>
          <pointLight position={[-35, 35, 0]} intensity={ 0.4 }/>
          <Suspense fallback={null}>
          <Office />
          </Suspense>
          <OrbitControls
            autoRotate={true}
            autoRotateSpeed={0.2}  
            enableZoom={false}
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
        {searchedTodo.map(todo =>(
          <TodoItem 
          key={todo.text} 
          text={todo.text}  
          completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
      </div>
    </React.Fragment>
  );
}

export default App;
