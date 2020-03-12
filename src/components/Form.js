import React, { useState } from 'react'
import styled from 'styled-components/macro'

export default function Form({ onSubmit }) {
  const [todoText, setTodoText] = useState('')

  return (
    <FormStyled onSubmit={handleSubmit}>
      <input
        type="text"

        name="todo-input"
        placeholder="What are your tasks for today?"
        value={todoText}
        onChange={updateInputText}
      />
      <button> + </button>
    </FormStyled>
  )

  function updateInputText(event) {
    setTodoText(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    form[0].focus()
    todoText.length > 0
      ? onSubmit(todoText) && setTodoText('')
      : setTodoText('')
  }
}

const FormStyled = styled.form`
  display: flex;
  height: 58px;
  font-family: 'Josefin Sans', sans-serif;

  input {
    font-size: 22px;
    border-radius: 5px 0 0 5px;
    border: 1px solid lightgray;
    padding-left: 10px;
    font-family: 'Josefin Sans', sans-serif;
    flex-grow: 1;

    ::placeholder {
      font-size: 17px;
    }
  }

  button {
    font-size: 1.5em;
    border: none;
    border-radius: 0 5px 5px 0;
    background-color: lightgray;
    font-family: 'Josefin Sans', sans-serif;
    width: 40px;
  }
`
