import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

export default function List({ todos, onDelete }) {
  const timerIcon = require('../images/todolist-timer-button.svg')

  function onToggle(todo) {
    return () => {
      setTimeout(() => onDelete(todo.id), 1000)
    }
  }

  return (
    <UlStyled>
      {todos.map(todo => (
        <li key={todo.id}>
          <label onClick={onToggle(todo)}>
            <input type="checkbox" />
            <span>{todo.name}</span>
          </label>
          <div>
            <Link to="/timer">
              <img src={timerIcon} alt="timer icon" />
            </Link>
          </div>
        </li>
      ))}
    </UlStyled>
  )
}

const UlStyled = styled.ul`
  list-style: none;
  padding: 0;
  font-family: 'Josefin Sans', sans-serif;
  height: 264px;
  overflow: auto;

  li {
    margin-top: 10px;
    border: 1px solid rgb(207, 207, 207);
    border-radius: 5px;
    min-height: 40px;
    display: flex;
    align-items: center;
    padding: 8px 15px;

    span {
      margin-left: 10px;
    }

    div {
      margin-left: auto;

      img {
        width: 25px;
      }
    }

    /* input[type='checkbox'] {
      transform: scale(1);
    } */

    > input:checked + span {
      color: lightgray;
      text-decoration: line-through;
      background-color: rgb(258, 248, 248);
    }
  }
`
