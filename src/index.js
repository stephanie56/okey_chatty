import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';

import ChatList from './ChatList';
import ChatForm from './ChatForm';

const css = require('./styles/app.scss');


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      messageList: []
    }

    this.submitMsg = this.submitMsg.bind(this);

  }

  submitMsg(obj){
    this.setState({
      messageList: [...this.state.messageList, obj]
    });
  }

  render () {
    return (
      <div className="app">
        <h1 className="app__title">Okey Chatty !!!</h1>
        <ChatList
          messageList={this.state.messageList}
        />
        <ChatForm
          submitMsg={this.submitMsg}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
