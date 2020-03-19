import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

export default function List({ todos, onDelete, currentTodo, setCurrentTodo }) {
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
            <Link to="/timer" onClick={() => setCurrentTodo(todo.id)}>
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
  justify-self: center;

  li {
    margin-top: 10px;
    border: 1px solid rgb(207, 207, 207);
    border-radius: 5px;
    display: grid;
    grid-template-columns: 233px 50px;
    padding: 15px;

    label {
      display: grid;
      grid-template-columns: 35px auto;

      span {
        align-self: center;
      }

      input[type='checkbox'] {
        justify-self: left;
        align-self: center;
      }

      > input:checked + span {
        text-decoration: line-through;
        background-color: lightyellow;
      }
    }

    div {
      justify-self: center;
      align-self: center;

      img {
        width: 28px;
      }
    }
  }
`

// { name: todo.name, done: false, id: todo.id }
