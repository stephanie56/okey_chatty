import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';

import ChatList from './ChatList';
import ChatForm from './ChatForm';


class App extends Component {
  render () {
    return (
      <div className="app">
        <h1 className="app__title">Okey Chatty</h1>
        <ChatList />
        <ChatForm />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
