import React from 'react'
import styled from 'styled-components/macro'

export default function List({ todos, onDelete }) {
  function onToggle(todo) {
    return () => {
      setTimeout(() => onDelete(todo.id), 1000)
    }
  }

  return (
    <UlStyled>
      {todos.map(todo => (
        <label onClick={onToggle(todo)}>
          <li key={todo.id}>
            <input type="checkbox" />
            <span>{todo.name}</span>
          </li>
        </label>
      ))}
    </UlStyled>
  )
}

const UlStyled = styled.ul`
  list-style: none;
  padding: 0;

  /* align-content: flex-start; */
  /* // Hier weitermachen: Die Liste der Todos soll scrollbar sein sodass das input feld und der 25 button immer sichtbar sind */

  li {
    margin-top: 10px;
    border: 1px solid rgb(207, 207, 207);
    border-radius: 5px;
    background-color: rgb(248, 248, 248);
    height: 56px;
    line-height: 56px;
    padding-left: 15px;

    span {
      margin-left: 10px;
    }

    input[type='checkbox'] {
      transform: scale(1);
    }

    > input:checked + span {
      color: lightgray;
      text-decoration: line-through;
      background-color: rgb(258, 248, 248);
    }
  }
`
