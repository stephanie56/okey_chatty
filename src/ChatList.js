import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const UserChatItem = (props) => {
  const {id, username, body} = props;
  return(
    <li key={id} className="user__text"><span>{username}: {body}</span></li>
  )
}

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
    const {messageList} = this.props;
    const listClass = this.state.isScrollMaxed ? 'pinToBottom' : null;

    return (
      <div className="chatList">
        <ol className={ listClass } ref={node => this.chatlist = node} >
          <li className="chatbot__text"><span>Chatbot: Enjoy chatting!</span></li>
          {
            messageList.map(function(message, idx){
              return (
                <UserChatItem
                  key = {idx}
                  id = {idx}
                  username = {message.username}
                  body = {message.body}
                />)
            })
          }
        </ol>
      </div>
    )
  }
}

export default ChatList;

UserChatItem.propTypes = {
  id: PropTypes.number,
  username: PropTypes.string,
  body: PropTypes.string
}
