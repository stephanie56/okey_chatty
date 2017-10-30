import React, { Component } from 'react';

class ChatList extends Component {



  render () {
    const messages = this.props.messageList;
    return (
      <div className="chatList">
        <ol>
          <li className="chatbot__text">Chatbot: Enjoy chatting!</li>
          {
            messages.map(function(message, idx){
              const username = message.username;
              const body = message.body;
              return (<li key={idx} className="user__text"><span>{username}: {body}</span></li>)
            })
          }
        </ol>
      </div>
    )
  }
}

export default ChatList;
