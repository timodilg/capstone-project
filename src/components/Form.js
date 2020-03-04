import React, { useState } from 'react'
import '../styles.css'

export default function Form({ onSubmit }) {
  const [todoText, setTodoText] = useState('')

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        name="name"
        placeholder="Add task"
        value={todoText}
        onChange={updateInputText}
        className="form-input"
      />
      <button className="form-btn">+</button>
    </form>
  )

  function updateInputText(event) {
    setTodoText(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    todoText.length > 0
      ? onSubmit(todoText) && setTodoText('')
      : setTodoText('')
    //   todoText.reset()
    // form.todo.focus()
  }
}
