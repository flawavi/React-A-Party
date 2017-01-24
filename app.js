import React from 'react'
import ReactDOM from 'react-dom'
import { Component } from 'react'
import Greet from './src/components/Greet.js'

export default class App extends Component {
  render(){
    return(
      <div>
        <Greet/>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
)
