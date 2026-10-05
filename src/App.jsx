import { useState } from 'react'

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
      return <li key={todo.id}>{todo.text}</li>
      })}
    </ul>
  </>
)
    
  
}

export default App