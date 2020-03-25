import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components/macro'
import Todo from './pages/Todo'
import Timer from './pages/Timer'
import Settings from './pages/Settings'
import GlobalStyle from './GlobalStyle'

export default function App() {
  const [name, setName] = useState('there')
  const [interval, setInterval] = useState('10')
  const [breakInterval, setBreakInterval] = useState('5')
  const [currentTodo, setCurrentTodo] = useState('')
  const [todos, setTodos] = useState([])

  return (
    <Router>
      <GlobalStyle />
      <AppGrid>
        <Switch>
          <Route exact path={['/', '/todo']}>
            <Todo
              name={name}
              todos={todos}
              setTodos={setTodos}
              interval={interval}
              currentTodo={currentTodo}
              setCurrentTodo={setCurrentTodo}
              addTodo={addTodo}
              deleteTodo={deleteTodo}
            />
          </Route>
          <Route path="/timer">
            <Timer
              interval={interval}
              breakInterval={breakInterval}
              currentTodo={todos.find(todo => todo.id === currentTodo)}
              setCurrentTodo={setCurrentTodo}
              todos={todos}
              setTodos={setTodos}
              deleteTodo={deleteTodo}
              onDelete={onDelete}
            />
          </Route>
          <Route path="/settings">
            <Settings
              setName={setName}
              name={name}
              interval={interval}
              setInterval={setInterval}
              breakInterval={breakInterval}
              setBreakInterval={setBreakInterval}
            />
          </Route>
        </Switch>
      </AppGrid>
    </Router>
  )

  function addTodo(todo) {
    setTodos([{ name: todo, done: false, id: 1 + Math.random() }, ...todos])
    return true
  }

  function deleteTodo(id) {
    const index = todos.findIndex(todo => todo.id === id)
    setTodos([...todos.slice(0, index), ...todos.slice(index + 1)])
  }

  function onDelete(id) {
    deleteTodo(id)
    setCurrentTodo('')
  }
}

const AppGrid = styled.div`
  margin: 0 auto;
  max-width: 100%;
  height: 100vh;
  font-family: 'Baloo 2', cursive;
`
