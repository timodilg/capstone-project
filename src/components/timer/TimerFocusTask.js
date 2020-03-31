import React from 'react'
import styled from 'styled-components/macro'

export default function TimerFocusTask({ currentTodo, onDelete }) {
  function onToggle(id) {
    return () => {
      setTimeout(() => onDelete(id), 1000)
    }
  }

  return currentTodo ? (
    <TimerFocusTaskStyled>
      <label onClick={onToggle(currentTodo.id)}>
        <input type="checkbox" />
        <span name="focusTask">{currentTodo.name}</span>
      </label>
    </TimerFocusTaskStyled>
  ) : (
    <EmptySpace></EmptySpace>
  )
}

const TimerFocusTaskStyled = styled.li`
  width: 280px;
  padding: 12px 15px;
  margin: 0 auto;
  border-radius: 5px;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.3);
  padding-left: 15px;
  list-style: none;
  background: white;
  text-align: left;
  font-size: 20px;

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
`

const EmptySpace = styled.div`
  height: 56px;
`
