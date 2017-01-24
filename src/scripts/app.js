import React from 'react'
import ReactDOM from 'react-dom'
import { Component } from 'react'

export default class Greet extends Component {
  render(){
    return(
      <div>Welcome to Start A Party</div>
    )
  }
}

ReactDOM.render(
  <Greet />,
  document.getElementById("root")
)
