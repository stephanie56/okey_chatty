import React, { Component } from 'react';
import PropTypes from 'prop-types';

import io from 'socket.io-client';

import firebaseData from './firebase';
const msgRef = firebaseData.ref('messages');


import ChatList from './ChatList';
import ChatForm from './ChatForm';

const Header = () => {
  return (<h1 className="app__title">Okey Chatty</h1>);
}

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      messageList:[] // all list appears here will be rendered
    }

    this.submitMsg = this.submitMsg.bind(this);
  }

  // if history is not empty, fetch data from firebase
  componentWillMount(){
    console.log("Fetching data...");
    msgRef.once('value', snapshot => {
      const dataObj = snapshot.val();
      let newArr = [];
      if(this.state.messageList.length === 0){
        for(var key in dataObj){
          newArr.push(dataObj[key]);
        }
        this.setState({
          messageList: newArr
        });
      }
    });
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
    msgRef.once('value', snapshot => {
      msgRef.push(obj);
    });
  }

  render () {
    return (
      <div className="app">
        <Header />
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

ChatList.propTypes = {
  messageList: PropTypes.array
}
