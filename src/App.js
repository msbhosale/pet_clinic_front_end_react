import React, { Component } from 'react';
import Owners from './components/Owners';
import './App.css';

class App extends Component {

  state = {
    owners: [
      {
        id:1,
        name:"Ajay Patil",
      },
      {
        id:2,
        name:"Jay Bhosale"
      },
      {
        id:3,
        name:"Kalpna Shetti"
      },
    ]
  }

  render() {
    console.log(this.state.owners);
    
    return (
      <div className="App">
        <h1> Pet Clinic App </h1>
        <Owners/>
      </div>
    );
  }
}

export default App;