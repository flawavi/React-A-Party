import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const Nav = styled.nav`
  background-color: lightgrey;
  text-decoration: none;
  height: 50px;
`

function NavBar() {
  return (
    <div>
      <Nav>
        <span>
          <a href="/">
            SAP
          </a>
        </span>
      </Nav>
    </div>
  )
}

export default NavBar
