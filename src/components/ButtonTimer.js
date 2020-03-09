import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

export default function ButtonTimer() {
  return <LinkStyled to="/timer">25</LinkStyled>
}

const LinkStyled = styled(Link)`
  display: inline-block;
  margin: 0 auto;
  width: 100px;
  border-radius: 50%;
  background-color: rgba(44, 115, 94, 0.71);
  font-size: 4rem;
  text-decoration-line: none;
  color: white;
  text-align: center;
  padding-top: 20px;
  box-shadow: 2px 2px 4px 0px rgba(10, 28, 26, 1);
`
// const Link = styled.link`
//   text-decoration: none;
// `
