import React, { useState } from 'react'
// import './styles.css'
import Form from '../components/Form'
import List from '../components/List'

export default function Todo() {
  const [todos, setTodos] = useState([])

  return (
    <div className="App">
      <Form onSubmit={addTodo} />
      <List todos={todos} onDelete={deleteTodo} />
    </div>
  )

  function addTodo(todo) {
    setTodos([{ name: todo, done: false, id: 1 + Math.random() }, ...todos])
  }

  function deleteTodo(id) {
    const index = todos.findIndex(todo => todo.id === id)
    setTodos([...todos.slice(0, index), ...todos.slice(index + 1)])
  }
}

// UID erstmal rausgenommen. Orientiert an BeispieL: https://codesandbox.io/s/start-delete-item-from-state-o2edo stattdessen mit Math.random eine ID generiert.
