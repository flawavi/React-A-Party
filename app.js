import React from 'react'
import ReactDOM from 'react-dom'
import { Component } from 'react'
import Greet from './src/components/Greet.js'
import NavBar from './src/components/Layout.js'

export default class App extends Component {
  render(){
    return(
      <div>
        <NavBar />
        <Greet/>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
)
