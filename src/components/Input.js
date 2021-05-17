import {Component} from "react";
import React from "react";
import sendImg from '../img/send.png';

export default class Input extends Component {
  state = {
    text: ""
  }

  onChange(e) {
    this.setState({text: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({text: ""});
    this.props.onSendMessage(this.state.text);
  }

  render() {
    return (
      <div className="Input">
        <form onSubmit={e => this.onSubmit(e)}>
          <input
            onChange={e => this.onChange(e)}
            value={this.state.text}
            type="text"
            placeholder="Message..."
            autoFocus={true}
          />
          <button><img src={sendImg} alt="send" /></button>
        </form>
      </div>
    );
  }
}

