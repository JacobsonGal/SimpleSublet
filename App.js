import React, { Component } from "react";
import "react-native-gesture-handler";
import WelcomeScreen from "./App/views/WelcomeScreen";
import Main from "./App/views/Main";
import Login from "./App/views/Login";
// import { Platform } from "react-native";
// import { setCustomText } from "react-native-global-props";
// const customTextProps = {
//   style: {
//     fontSize: 16,
//     fontFamily: Platform.OS === "ios" ? "Cochin" : "HelveticaNeue",
//     color: "black",
//   },
// };
// setCustomText(customTextProps);

export default function App() {
  return <Main />;
}

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       component: <WelcomeScreen />,
//     };
//   }

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({ component: <Main /> });
//     }, 5000);
//   }

//   componentWillUnmount() {
//     clearTimeout(this.timeoutHandle);
//   }
//   render() {
//     // return this.state.component;
//     return <Main />;
//   }
// }
