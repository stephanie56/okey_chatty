import React, { Component } from 'react';

class ChatForm extends Component {
  render () {
    return (
      <form className="chatForm">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Message" />
        <input type="submit" value="Send" />
      </form>
    )
  }
}

export default ChatForm;
