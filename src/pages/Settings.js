import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

export default function Settings({
  name,
  setName,
  interval,
  setInterval,
  breakInterval,
  setBreakInterval,
}) {
  return (
    <SettingsStyled>
      <h1>Settings</h1>
      <form onSubmit={handleSubmit}>
        <p>Name</p>
        <input
          type="text"
          placeholder="Your name..."
          value={name}
          name="changeName"
          onChange={e => setName(e.target.value)}
        ></input>

        <p>Timer interval</p>
        <input
          type="number"
          value={interval}
          name="changeInterval"
          onChange={e => setInterval(e.target.value)}
        ></input>

        <p>Break interval</p>
        <input
          type="number"
          value={breakInterval}
          name="changeBreak"
          onChange={e => setBreakInterval(e.target.value)}
        ></input>
      </form>

      <ButtonStyled to="/timer">
        <button>Save</button>
      </ButtonStyled>
    </SettingsStyled>
  )

  function handleSubmit(e) {
    e.preventDefault()
  }
}

const SettingsStyled = styled.div`
  margin: 30px auto;
  font-size: 20px;
  height: 100vh;
  width: 300px;

  form {
    display: grid;
    margin-top: 20px;

    p {
      font-size: 20px;
      margin-top: 20px;
      margin-bottom: 5px;
    }

    input {
      border: 1px solid black;
      border-radius: 5px;
      height: 44px;
      font-size: 22px;
      padding-left: 10px;
    }
  }
`
const ButtonStyled = styled(Link)`
  display: grid;
  align-self: start;
  text-decoration-line: none;
  height: 120px;

  button {
    width: 300px;
    height: 48px;
    background: #009999;
    border-radius: 5px;
    box-shadow: 2px 2px 5px lightgray;
    margin: 40px auto;
    color: white;
    font-size: 1.5rem;
  }
`
