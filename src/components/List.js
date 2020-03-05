import React from 'react'
import '../styles.css'

export default function List({ todos, onDelete }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {/* <span onClick={() => onDelete(todo.id)}> */}
          <input type="checkbox" className="todo-checkbox" />
          <span className="todo-text">{todo.name}</span>
          {/* </span> */}
        </li>
      ))}
    </ul>
  )
}

{
  /* <label class="todo">
    <input type="checkbox" ${todo.done ? 'checked' : ''}> <span>${
      todo.name
    }</span>
  </label> */
}
