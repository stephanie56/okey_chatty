import React, { Component } from 'react';

class ChatForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      body: ""
    }

    this._handleInput = this._handleInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(e){
    e.preventDefault();
    const {username, body} = this.state;
    const newMsg = {
      username,
      body
    }
    if(newMsg.body !== ""){
      this.props.submitMsg(newMsg);
      this.setState({
        body:""
      });
    }
    else{
      console.log('chatbot: cannot post empty content');
    }
  }

  _handleInput(e){
    // console.log(e.target.name);
    const propName = e.target.name;
    this.setState({
      [propName]: e.target.value
    });
  }


  render () {
    return (
      <form className="chatForm" onSubmit={this._handleSubmit}>
        <input type="text" name="username" placeholder="Name" value={this.state.username} onChange={this._handleInput} />
        <input type="text" name="body" placeholder="Message" value={this.state.body} onChange={this._handleInput}/>
        <input type="submit" value="Send"/>
      </form>
    )
  }
}

export default ChatForm;
