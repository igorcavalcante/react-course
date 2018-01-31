import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './User/UserInput'
import UserOutput from './User/UserOutput'

class App extends Component {

  state = {
    users : [
      {name: "Igor"},
      {name: "João"},
      {name: "Lucas"}
    ]
  }

  changeStateHandler = (event) => {
    this.setState({
      users: [
        {name: event.target.value},
        {name: "João"},
        {name: "Lucas"}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput change={this.changeStateHandler} name={this.state.users[0].name}/>
        <UserOutput {...this.state.users[0]}/>
        <UserOutput {...this.state.users[1]}/>
        <UserOutput {...this.state.users[2]}/>
      </div>
    );
  }
}

export default App;
