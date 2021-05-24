import React from 'react';
import './App.css';
import logo from './img/chit-chat.png';
import Messages from "./components/Messages";
import Input from "./components/Input"
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./components/Themes";


function randomName() {

  const adjectives = ["autumn", "hidden", "bitter", "misty", "silent", "empty", "dry", "dark", "summer", "icy", "delicate", "quiet", "white", "cool", "spring", "winter", "patient", "twilight", "dawn", "crimson", "wispy", "weathered", "blue", "billowing", "broken", "cold", "damp", "falling", "frosty", "green", "long", "late", "lingering", "bold", "little", "morning", "muddy", "old", "red", "rough", "still", "small", "sparkling", "throbbing", "shy", "wandering", "withered", "wild", "black", "young", "holy", "solitary", "fragrant", "aged", "snowy", "proud", "floral", "restless", "divine", "polished", "ancient", "purple", "lively", "nameless"];

  const nouns = ["waterfall", "river", "breeze", "moon", "rain", "wind", "sea", "morning", "snow", "lake", "sunset", "pine", "shadow", "leaf", "dawn", "glitter", "forest", "hill", "cloud", "meadow", "sun", "glade", "bird", "brook", "butterfly", "bush", "dew", "dust", "field", "fire", "flower", "firefly", "feather", "grass", "haze", "mountain", "night", "pond", "darkness", "snowflake", "silence", "sound", "sky", "shape", "surf", "thunder", "violet", "water", "wildflower", "wave", "water", "resonance", "sun", "wood", "dream", "cherry", "tree", "fog", "frost", "voice", "paper", "frog", "smoke", "star"];

  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  return adjective + noun;
}

function randomColor() {
  return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
}

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      messages: [],
      member: {
        username: randomName(),
        color: randomColor()
      },
      theme: 'light'
    }

    this.drone = new window.Scaledrone("kOkDDWd0iu2Z6KV5", {
      data: this.state.member
    });
    
  }

  componentDidMount() {

    this.drone.on('open', error => {
      if (error) {
        return console.error(error);
      }
      const member = {...this.state.member};
      member.id = this.drone.clientId;
      this.setState({member});
    });

    const room = this.drone.subscribe("observable-room");
    room.on('data', (data, member) => {
      const messages = this.state.messages;
      messages.push({member, text: data});
      this.setState({messages});
    });
}

  onSendMessage = (message) => {
    this.drone.publish({
      room: "observable-room",
      message
    });
  }

  themeToggler = () => {
    this.state.theme === "light" ? this.setState({theme: 'dark'}) : this.setState({theme: 'light'});
  };

  render() {
    return (
      <ThemeProvider theme={this.state.theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
      <div className="App">
        <div className="col-header">
        <div className="App-header">
          <img src={logo} alt="Logo" />
          <button onClick={this.themeToggler}>Light/Dark</button>
        </div>
        </div>
        
        <Messages
          messages={this.state.messages}
          currentMember={this.state.member}
        />
        <Input
          onSendMessage={this.onSendMessage}
        />
      </div>
      </StyledApp>
    </ThemeProvider>
    );
  }

}