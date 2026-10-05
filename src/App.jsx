import { useState } from 'react'

function App() {
  const [text, setText] = useState("")

  function handleChange(e) {
    setText(e.target.value);
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
  </>
)
    
  
}

export default App