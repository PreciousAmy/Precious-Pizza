import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <div>
      <ButtonStyled>click</ButtonStyled>
    </div>
  )
}

const ButtonStyled = styled.button`
  background-color: green;
`

export default Header
