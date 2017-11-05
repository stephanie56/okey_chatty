import React, { Component } from 'react';

import Splash from './Splash';
import ChatBox from './Chatbox';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      username: localStorage.getItem('username')
    }
  }

  render () {
    return (
      <div>
        <Splash />
      </div>
    )
  }
}

export default App;
