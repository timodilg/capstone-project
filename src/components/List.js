import React from 'react'

export default function List({ todos, onDelete }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {/* <span onClick={() => onDelete(todo.id)}> */}
          <input type="checkbox" />
          <span>{todo.name}</span>
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
