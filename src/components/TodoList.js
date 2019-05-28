import React, {useState, useEffect} from 'react'
import axios from 'axios'

function TodoList(){
  const [todos, setTodos] = useState([])
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res => setTodos(res.data))
      .catch(console.log)
  }, [])
  return (
    <div>
      {todos.map((val, i) => (
        <h1 key={i}>{val.title}</h1>
      ))}
    </div>
  )
}

export default TodoList