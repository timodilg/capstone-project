import React from 'react'
import '../styles.css'
import styled from 'styled-components/macro'

export default function List({ todos, onDelete }) {
  return (
    <UlStyled>
      {todos.map(todo => (
        <li key={todo.id}>
          {/* <span onClick={() => onDelete(todo.id)}> */}
          <input type="checkbox" className="todo-checkbox" />
          <span className="todo-text">{todo.name}</span>
          {/* </span> */}
        </li>
      ))}
    </UlStyled>
  )
}

const UlStyled = styled.ul`
  overflow-y: auto;
  align-content: flex-start;
`
// Hier weitermachen: Die Liste der Todos soll scrollbar sein sodass das input feld und der 25 button immer sichtbar sind
