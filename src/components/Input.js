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
    const inputTrim = this.state.text.trim();
    if (inputTrim.length < 1) {
      return;
    }
    this.props.onSendMessage(inputTrim);
    this.setState({text: ""});
    
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

