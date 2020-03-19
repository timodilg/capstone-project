import React from 'react'
import styled from 'styled-components/macro'

export default function Greeting({ name }) {
  const profilePicture = require('../images/men-working.jpg')
  return (
    <GreetingStyled>
      <h2>
        Hello <br />
        {name}
      </h2>
      <img
        src={profilePicture}
        alt="Men sitting and working on Laptop"
        height="200"
        width="200"
      />
    </GreetingStyled>
  )
}

const GreetingStyled = styled.div`
  display: grid;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 18px;
  color: #333233;
  padding: 20px 40px 0 40px;
  width: 280px;

  h2 {
    position: absolute;
  }

  img {
    justify-self: end;
  }
`
