import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
background-color: dodgerblue;
`
const Title = styled.div`
color: white;
text-align: center;
font-size: 24px;
padding: 5px;
`

function Greet(){
  return (
    <Wrapper>
      <Title>
        Welcome To Start A Party
      </Title>
    </Wrapper>
  )
}

export default Greet
