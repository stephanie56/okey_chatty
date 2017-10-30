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

  componentDidMount(){
    const that = this;
    this.socket = io('/');
    this.socket.on('message', function(message){
      console.log('updated a message', message);
      let lastIdx = that.state.messageList.length - 1;
      if(message !== that.state.messageList[lastIdx]){
        that.setState({
          messageList: [...that.state.messageList, message]
        });
      }
    })
  }

  submitMsg(obj){
    this.socket.emit('message', obj);
    console.log(this.state.messageList);
  }

  render () {
    return (
      <div className="app">
        <h1 className="app__title">Okey Chatty</h1>
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
