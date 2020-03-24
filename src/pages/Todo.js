import React from 'react'
import Form from '../components/todo/Form'
import List from '../components/todo/List'
import Greeting from '../components/todo/Greeting'
import ButtonTimer from '../components/todo/ButtonTimer'
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
        deleteTodo={deleteTodo}
      />
      <ButtonTimer interval={interval} />
    </TodoStyled>
  )
}

const TodoStyled = styled.div`
  margin: 0 auto;
  font-size: 20px;
  display: grid;
  grid-template-rows: auto auto auto auto;
  height: 100vh;
`
