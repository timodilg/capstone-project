import React from 'react'
import styled from 'styled-components/macro'

export default function List({ todos, onDelete }) {
  return (
    <UlStyled>
      {todos.map(todo => (
        // <span onClick={setTimeout(() => onDelete(todo.id), 3000)}>
        // onClick={() => onDelete(todo.id)}
        <label>
          <li key={todo.id} className="todo">
            <input type="checkbox" />
            <span>{todo.name}</span>
          </li>
        </label>
      ))}
    </UlStyled>
  )

  function handleCheckbox {


    
  }
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
    height: 33px;
    padding-top: 10px;

    label {
      margin-left: 10px;
    }
    > input:checked + span {
      color: lightgray;
      text-decoration: line-through;
      background-color: rgb(58, 248, 248);
    }
  }
`
