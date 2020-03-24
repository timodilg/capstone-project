import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

export default function SettingsNav() {
  return (
    <ButtonStyled to="/timer">
      <button>Save</button>
    </ButtonStyled>
  )
}

const ButtonStyled = styled(Link)`
  width: 300px;
  background: #33cccc;
  border-radius: 5px;
  margin: 20px auto;
`
