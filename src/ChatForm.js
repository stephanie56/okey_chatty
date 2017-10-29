import React, { Component } from 'react';

class ChatForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      body: ""
    }

    this._handleNameInput = this._handleNameInput.bind(this);
    this._handleBodyInput = this._handleBodyInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(e){
    e.preventDefault();
    const username = this.state.username;
    const body = this.state.body;
    const newMsg = {
      username,
      body
    }
    this.props.submitMsg(newMsg);
  }

  _handleNameInput(e){
    // console.log(e.target.value);
    this.setState({
      username: e.target.value
    });
  }

  _handleBodyInput(e){
    // console.log(e.target.value);
    this.setState({
      body: e.target.value
    });
  }

  render () {
    return (
      <form className="chatForm" onSubmit={this._handleSubmit}>
        <input type="text" name="username" placeholder="Name" onChange={this._handleNameInput} />
        <input type="text" name="message" placeholder="Message" onChange={this._handleBodyInput}/>
        <input type="submit" value="Send"/>
      </form>
    )
  }
}

export default ChatForm;
