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
  { text:"Cortar Cebolla", completed:true },
  { text:"Tomar Curso de Platzi", completed:false },
  { text:"Pagar las cuentas", completed:true },
  { text:"Hacer la tesis", completed:false },
  { text:"Hacer la comida", completed:true },
  { text:"Pagar las cuentas", completed:true },
  { text:"Pagar las cuentas", completed:true },
  { text:"Hacer la tesis", completed:false },
  { text:"Hacer la comida", completed:true },
  { text:"Pagar las cuentas", completed:true },
  { text:"Pagar las cuentas", completed:true },
  { text:"Hacer la tesis", completed:false },
  { text:"Hacer la comida", completed:true },
  { text:"Pagar las cuentas", completed:true },
];

function App() {
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
      <TodoCounter completed={16} total={25} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo =>(
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
