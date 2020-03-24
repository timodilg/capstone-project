import React from 'react'
import styled from 'styled-components/macro'
import SettingsNav from '../components/SettingsNav'

export default function Settings({ name, setName, interval, setInterval }) {
  return (
    <SettingsStyled>
      <h1>Settings</h1>
      <form onSubmit={handleSubmit}>
        <p>Name</p>
        <input
          type="text"
          placeholder="Your name..."
          value={name}
          onChange={e => setName(e.target.value)}
        ></input>

        <p>Timer interval</p>
        <input
          type="number"
          value={interval}
          onChange={e => setInterval(e.target.value)}
        ></input>

        <p>Short break</p>
        <input type="number" placeholder="5"></input>

        <p>Long break</p>
        <input type="number" placeholder="30"></input>
      </form>
      <SettingsNav />
    </SettingsStyled>
  )

  function handleSubmit(e) {
    e.preventDefault()
  }
}

const SettingsStyled = styled.div`
  margin: 30px auto;
  font-size: 20px;
  display: grid;
  /* grid-template-rows: auto auto auto auto; */
  height: 100vh;
  width: 300px;

  h1 {
    /* margin-top: 30px; */
  }

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
