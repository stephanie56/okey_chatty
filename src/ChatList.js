import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ChatList extends Component {

  constructor(props){
    super(props);
    this.state={
      isScrollMaxed: false
    }
  }

  componentDidUpdate(){
    const scroll_clientHeight = 300;
    if(this.chatlist.scrollHeight - scroll_clientHeight > 0 && this.state.isScrollMaxed !== true){
      this.setState({
        isScrollMaxed: true
      });
    }
  }

  render () {
    const messages = this.props.messageList;
    const listClass = this.state.isScrollMaxed ? 'pinToBottom' : null;

    return (
      <div className="chatList">
        <ol className={ listClass } ref={node => this.chatlist = node} >
          <li className="chatbot__text"><span>Chatbot: Enjoy chatting!</span></li>
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
