import React, { Component } from "react";
import "./App.css";
import GitInfo from "./Components/GitInfo";
import { Button } from "semantic-ui-react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      active: false
    };

    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent(event) {
    if (!this.state.active) {
      fetch("https://api.github.com/users/jomorro")
        .then(res => res.json())
        .then(userInfo => this.setState({ user: userInfo, active: true }));
    } else {
      this.setState({ active: false });
    }
  }

  render() {
    let user = null;
    if (this.state.active) {
      user = (
        <GitInfo
          avatar_url={this.state.user.avatar_url}
          login={this.state.user.login}
          bio={this.state.user.bio}
          /*type={this.state.user.type}*/
          html_url={this.state.user.html_url}
        />
      );
    }
    return (
      <div className="user_and_button">
        <button onClick={this.handleEvent} className="user_button">
          {this.state.active ? "Hide User" : "Show User"}
        </button>
        {user}
      </div>
    );
  }
}

/*Semantic ui toggle button

import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

class ButtonExampleToggle extends Component {
  state = {}

  handleClick = () => this.setState({ active: !this.state.active })

  render() {
    const { active } = this.state

    return (
      <Button toggle active={active} onClick={this.handleClick}>
        Toggle
      </Button>
    )
  }
}

export default ButtonExampleToggle

*/

export default App;
