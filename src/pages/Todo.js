import React, { useState } from 'react'
import Form from '../components/Form'
import List from '../components/List'
import Greeting from '../components/Greeting'
import ButtonTimer from '../components/ButtonTimer'
import styled from 'styled-components/macro'

export default function Todo({ name }) {
  const [todos, setTodos] = useState([])

  return (
    <TodoStyled>
      <Greeting name={name} />
      <Form onSubmit={addTodo} />
      <List todos={todos} onDelete={deleteTodo} />
      <ButtonTimer />
    </TodoStyled>
  )

  function addTodo(todo) {
    setTodos([{ name: todo, done: false, id: 1 + Math.random() }, ...todos])
    return true
  }

  function deleteTodo(id) {
    const index = todos.findIndex(todo => todo.id === id)
    setTodos([...todos.slice(0, index), ...todos.slice(index + 1)])
  }
}

// UID erstmal rausgenommen. Orientiert an BeispieL: https://codesandbox.io/s/start-delete-item-from-state-o2edo stattdessen mit Math.random eine ID generiert.

const TodoStyled = styled.div`
  margin: 40px auto;
  font-size: 20px;
  display: grid;
  grid-template-rows: 33% 8% 49% 10%;
`
