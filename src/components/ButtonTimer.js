import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

export default function ButtonTimer() {
  return <LinkStyled to="/timer">25</LinkStyled>
}

const LinkStyled = styled(Link)`
  margin: 0 auto;
  width: 100px;
  height: 80px;
  border-radius: 50%;
  background-color: #326f6f;
  font-size: 4rem;
  text-decoration-line: none;
  color: white;
  text-align: center;
  padding-top: 20px;
  box-shadow: 3px 2px 5px 0px #112626;
`
