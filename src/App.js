import React, { Component } from 'react';
import io from 'socket.io-client';


import ChatList from './ChatList';
import ChatForm from './ChatForm';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      messageList: [{username: 'chatbot', body: 'this is the history chat from firebase'}] || [] // all list appears here will be rendered
    }

    this.submitMsg = this.submitMsg.bind(this);
  }

  // if history is not empty, fetch data from firebase
  componentWillMount(){
    console.log("Fetching data...");
  }

  componentDidMount(){
    console.log("Fetched data!");
    const that = this;
    this.socket = io('/');

    // if client receive a new message from server - update local state and render the new list on view
    this.socket.on('message', function(message){
      let lastIdx = that.state.messageList.length - 1;
      if(message !== that.state.messageList[lastIdx]){
        that.setState({
          messageList: [...that.state.messageList, message]
        });
      }
    })
  }

  submitMsg(obj){
    // when user press enter, emit a message
    this.socket.emit('message', obj);

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

export default App;
