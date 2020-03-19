import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

export default function ButtonTimer({ interval }) {
  return (
    <LinkStyled to="/timer">
      <div>{interval}</div>
    </LinkStyled>
  )
}

const LinkStyled = styled(Link)`
  display: grid;
  align-self: start;

  div {
    margin: auto;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #009999;
    font-size: 2.5rem;
    text-decoration-line: none;
    color: white;
    box-shadow: 1px 1px 3px lightslategray;
    font-family: 'Roboto', sans-serif;
    display: grid;
    justify-content: center;
    align-content: center;
  }
`
