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
  display: grid;
  grid-template-columns: 275px 40px;
  margin-top: 10px;
  height: 58px;
  font-family: 'Josefin Sans', sans-serif;
  justify-self: center;

  input {
    font-size: 22px;
    border-radius: 5px 0 0 5px;
    border: 1px solid #f1f1f1;
    padding-left: 10px;
    font-family: 'Josefin Sans', sans-serif;
    flex-grow: 1;

    ::placeholder {
      font-size: 17px;
    }
  }

  button {
    font-size: 2em;
    border: none;
    border-radius: 0 5px 5px 0;
    background-color: #009999;
    font-family: 'Josefin Sans', sans-serif;
    width: 40px;
    color: white;
  }
`
