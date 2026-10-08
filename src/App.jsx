import { useState } from 'react'

function App() {
  const [text, setText] = useState("")

  const [quests, setQuests] = useState ([])

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleAddQuest() {
    const newText = text.trim()

    if (newText === "") return
    
    const newQuest = {
      id: Date.now(),
      title: newText,
      todoText: "",
      todos: []
    }

    setQuests([...quests, newQuest])
    setText("")
  }

function handleDelete(questId, todoId) {
  const updatedQuests = quests.map(function(quest) {

    if (quest.id === questId) {
      const updatedTodos = quest.todos.filter(function(todo){
        return todo.id !== todoId
      })

      return {
        ...quest,
        todos: updatedTodos
      }
    }
    return quest
  })
   setQuests(updatedQuests)
}

function handleQuestTextChange(id, newText) {
  const updatedQuests = quests.map(function(quest) {
    if (quest.id === id) {
      return {...quest, todoText: newText}
    }

    return quest
  })
  setQuests(updatedQuests)
}

function handleAddTodo(questId) {
  const updatedQuests = quests.map(function(quest) {
    if (quest.id === questId) {
      const newText = quest.todoText.trim()

      if (newText === "") return quest

      const newTodo = {
        id: Date.now(),
        text: newText,
        completed: false
      }

      return {
        ...quest,
        todos: [...quest.todos, newTodo],
        todoText: ""
      }
    }

    return quest
  })

  setQuests(updatedQuests)
}

function handleQuestTodoToggle(questId, todoId) {
  const updatedQuests = quests.map(function(quest) {
    if (quest.id === questId) {

      const updatedTodos = quest.todos.map(function(todo) {
        if (todo.id === todoId) {
          return {...todo, completed: !todo.completed}
        }

        return todo
      })

      return {
        ...quest,
        todos: updatedTodos
      }
    }

    return quest
  })

  setQuests(updatedQuests)
}

function handleDeleteQuest(questId) {
  const updatedQuests = quests.filter(function(quest) {
    return quest.id !== questId
  })

  setQuests(updatedQuests)
}


   return (
  <>
    <h1>Game Backlog</h1>
    <p>Skapa nytt quest:</p>

    <input
      className="game-input"
      type="text"
      value={text}
      onChange={handleChange}
      placeholder="Questname"
    />
    <button 
    className="add-button"
    type="button" 
    onClick={handleAddQuest}
    >
      Skapa quest</button>


  {quests.map(function (quest) {
    return (
      <div key={quest.id}>
        <h2>{quest.title}</h2>

        <input
        type="text"
        value={quest.todoText}
        onChange={(e) => handleQuestTextChange(quest.id,
          e.target.value)}
        placeholder="Skriv ett uppdrag"
        />

        <button type="button" onClick={() => handleAddTodo(quest.id)}>
          Lägg till
        </button>

   <ul>
        {quest.todos.map(function(todo) {
          return (
         <li key={todo.id}>
         <input 
         type="checkbox"
         checked={todo.completed}
         onChange={() => handleQuestTodoToggle(quest.id, todo.id)}
         />
         <span style={{ textDecoration: todo.completed ? "line-through" : "none"}}>
          {todo.text}
         </span>
          
        

          <button 
          className="delete-button"
          type="button" 
          onClick={() => handleDelete(quest.id, todo.id)}>X</button>
                
          
                </li>
              )
            })}
          </ul>

          <button
        type="button"
        onClick={() => handleDeleteQuest(quest.id)}
      >
        Radera quest
      </button>
        </div> 
      )
  })}


   </>

)
    
  
}

export default App