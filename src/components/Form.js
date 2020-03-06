import React, { useState } from 'react'
import styled from 'styled-components/macro'

export default function Form({ onSubmit }) {
  const [todoText, setTodoText] = useState('')

  return (
    <FormStyled onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Add task"
        value={todoText}
        onChange={updateInputText}
      />
      <button>+</button>
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
  grid-template-columns: auto 48px;

  input {
    font-size: 20px;
    border-radius: 5px 0 0 5px;
    border: 1px solid lightgray;
    padding-left: 10px;
  }

  button {
    font-size: 1.5em;
    border: none;
    border-radius: 0 5px 5px 0;
    background-color: lightgray;
  }
`
