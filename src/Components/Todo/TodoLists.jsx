import React, {useState} from 'react'
import AddTodo from './AddTodo'

function TodoLists() {
  const [todo, setTodo] = useState([]);



  return (
    <div>
        <h1>TodoLists</h1>
        <AddTodo setTodo={setTodo} />
        <div>
           <h2>Todo Items</h2>
           {todo.map((todo) => (
            <div key={todo.id}>
              <h3>{todo.title}</h3>
              <p>{todo.description}</p>
             </div>
           ))}
            </div>
         </div>
  )
}

export default TodoLists