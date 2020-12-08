import React from 'react';
import {Component} from 'react'

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount () {
    fetch('http://localhost:3001/emails')
    .then(response => response.json())
    .then(myjson => this.setState({ data: myjson }))
    console.log(this.state.data);
  }

  render () {
    return ( 
      <div> 
        {this.state.data.map( i => { 
        return ( 
          <> 
            <div>{i.sender}</div> 
            <div>{i.recipient}</div> 
            <div>{i.subject}</div> 
            <div>{i.message}</div> 
            <div>{i.date}</div> 
            <div>{i.id}</div> 
          </> 
        )})} 
      </div>
    )
  } 
}

export default App;
