import { useState } from 'react'
import { prerenderToNodeStream } from 'react-dom/static';

function App() {
  const [text, setText] = useState("")

  const [todos, setTodos] = useState ([])

  function handleChange(e) {
    setText(e.target.value);
  }

function handleAdd() {
  const newText=text.trim()

  if (newText === "") return

  const newTodo = {
    id: Date.now(),
    text: newText,
    completed: false
  }

  setTodos([...todos, newTodo])
  setText("")
}

function handleToggle(id){
  const updatedTodos=todos.map(function(todo) {
  if (todo.id === id) {
    return {...todo, completed: !todo.completed }
  }
  return todo
  })

  setTodos(updatedTodos)

}
   return (
  <>
    <h1>Game Backlog</h1>
    <p>Spel jag ska testa:</p>

    <input
      type="text"
      value={text}
      onChange={handleChange}
      placeholder="Skriv in ett spel"
    />
    <button type="button" onClick={handleAdd}>Lägg till</button>

    <ul>
      {todos.map(function (todo) {
      return (
      <li key={todo.id}>
        <input 
        type="checkbox"
        checked={todo.completed}
        onChange={() => handleToggle(todo.id)}
        />
        <span style={{ textDecoration: todo.completed ? "line-through" : "none"}}>
        {todo.text}
        </span>
      </li>
      )
      })}
    </ul>
  </>
)
    
  
}

export default App