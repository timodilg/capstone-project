import React, { useState } from 'react'
import styled from 'styled-components/macro'

export default function Form({ onSubmit }) {
  const [todoText, setTodoText] = useState('')

  return (
    <FormBackground>
      <FormStyled onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo-input"
          placeholder="What are your tasks for today?"
          value={todoText}
          onChange={updateInputText}
        />
        <button>+</button>
      </FormStyled>
    </FormBackground>
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
  grid-template-columns: 275px auto;
  height: 58px;
  justify-self: center;
  margin-top: 0px;

  input {
    font-size: 20px;
    border-radius: 5px 0 0 5px;
    border: 1px solid #f1f1f1;
    padding-left: 10px;
    flex-grow: 1;

    ::placeholder {
      font-size: 17px;
    }
  }

  button {
    border: none;
    border-radius: 0 5px 5px 0;
    background-color: #3e3e3e;
    width: 40px;
    color: white;
    font-size: 20px;
    padding: 0px;
  }
`
const FormBackground = styled.div`
  background-color: #009999;
  display: grid;
`
