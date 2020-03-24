import React from 'react'
import styled from 'styled-components/macro'

export default function Greeting({ name }) {
  const profilePicture = require('../../images/men-working-new.png')
  return (
    <GreetingStyledBackground>
      <GreetingStyled>
        <h2>
          Hi <br />
          {name}!
        </h2>
        <img src={profilePicture} alt="Men sitting and working on Laptop" />
      </GreetingStyled>
    </GreetingStyledBackground>
  )
}

const GreetingStyled = styled.div`
  display: grid;
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  color: #333233;
  margin: 20px 40px 0 40px;
  width: 280px;

  h2 {
    position: absolute;
    margin-top: 50px;
    color: white;
    line-height: 29px;
  }

  img {
    justify-self: end;
    align-self: end;
    height: 190px;
    width: 190px;
  }
`
const GreetingStyledBackground = styled.div`
  background-color: #009999;
`
