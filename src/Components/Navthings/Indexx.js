import React from 'react'

import {Nav ,NavIcon,NavLink, Bars} from './Navbar'

const Navcar = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavLink to='/'></NavLink>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Bars />
          
        </NavIcon>
      </Nav>
    </>
  )
}

export default Navcar
