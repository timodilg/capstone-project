import React from 'react'
import Form from '../components/Form'
import List from '../components/List'
import Greeting from '../components/Greeting'
import ButtonTimer from '../components/ButtonTimer'
import styled from 'styled-components/macro'

export default function Todo({
  name,
  interval,
  currentTodo,
  setCurrentTodo,
  todos,
  setTodos,
  deleteTodo,
  addTodo,
}) {
  console.log(currentTodo)
  return (
    <TodoStyled>
      <Greeting name={name} />
      <Form onSubmit={addTodo} />
      <List
        todos={todos}
        currentTodo={currentTodo}
        setCurrentTodo={setCurrentTodo}
        onDelete={deleteTodo}
      />
      <ButtonTimer interval={interval} />
    </TodoStyled>
  )

  // alle functionen die den state verändern sollten in der app liegen
}

// UID erstmal rausgenommen. Orientiert an BeispieL: https://codesandbox.io/s/start-delete-item-from-state-o2edo stattdessen mit Math.random eine ID generiert.

const TodoStyled = styled.div`
  margin: 0 auto;
  font-size: 20px;
  display: grid;
  grid-template-rows: auto auto auto auto;
  height: 100vh;
`
