import React, { Component } from "react";
import "react-native-gesture-handler";

import WelcomeScreen from "./App/views/WelcomeScreen";
import Main from "./App/views/Main";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      component: <WelcomeScreen />,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ component: <Main /> });
    }, 5000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutHandle);
  }
  render() {
    return this.state.component;
  }
}
