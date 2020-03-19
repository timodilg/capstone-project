import React from 'react'
import styled from 'styled-components/macro'

export default function TimerFocusTask({
  currentTodo,
  setCurrentTodo,
  todos,
  setTodos,
  deleteTodo,
}) {
  return currentTodo ? (
    <TimerFocusTaskStyled>
      <label onClick={onDelete(currentTodo.id)}>
        <input type="checkbox" />
        <span>{currentTodo.name}</span>
      </label>
    </TimerFocusTaskStyled>
  ) : (
    <EmptySpace></EmptySpace>
  )

  function onDelete(id) {
    return () => {
      deleteTodo(id)
      setCurrentTodo('hi')
      console.log(currentTodo)
    }
  }
}

const TimerFocusTaskStyled = styled.li`
  border-radius: 5px;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.3);
  height: 56px;
  line-height: 60px;
  padding-left: 15px;
  list-style: none;
  background: white;
  text-align: left;
  font-size: 20px;
  width: 280px;
  margin: 0 auto;

  label {
    input[type='checkbox'] {
      /* justify-self: left;
        align-self: center; */
    }

    > input:checked + span {
      text-decoration: line-through;
      background-color: lightyellow;
    }

    span {
      margin-left: 10px;
    }
  }
`

const EmptySpace = styled.div`
  height: 56px;
`

// onClick={onDelete(currentTodo)}
// {() => deleteTodo(currentTodo.id)}
