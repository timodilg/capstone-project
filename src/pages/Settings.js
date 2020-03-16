import React from 'react'
import styled from 'styled-components/macro'
import NameForm from '../components/NameForm'

export default function Settings({ name, setName }) {
  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <SettingsStyled>
      <h1>Settings</h1>
      <form onSubmit={handleSubmit}>
        <p>Your name</p>
        <input
          type="text"
          placeholder="Your name..."
          value={name}
          onChange={e => setName(e.target.value)}
        ></input>
      </form>

      <form>
        <p>Time intervall</p>
        <input type="number" placeholder="25"></input>
      </form>

      <form>
        <p>Short break</p>
        <input type="number" placeholder="5"></input>
      </form>

      <form>
        <p>Long break</p>
        <input type="number" placeholder="30"></input>
      </form>
      <NameForm />
    </SettingsStyled>
  )
}

const SettingsStyled = styled.div`
  display: grid;
  grid-template-rows: 80px 80px 80px 80px;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 22px;
  form {
    display: flex;
    justify-content: space-evenly;
    margin-top: 20px;

    input {
      border: 1px solid black;
      background-color: lightcoral;
      height: 44px;
      font-family: 'Josefin Sans', sans-serif;
      font-size: 22px;
      padding-left: 10px;

      ::placeholder {
        /* display: flex; */
        justify-content: center;
      }
    }
  }
`
