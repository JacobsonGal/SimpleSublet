import React, { Component } from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, ActivityIndicator } from "react-native";
import * as firebase from "firebase";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./Redux/reducers";
import thunk from "redux-thunk";
// ************************ Components ***********************//
import WelcomeScreen from "./App/views/WelcomeScreen";
import Main from "./App/views/Main";
import Login from "./App/views/Components/Authentication/Login";
import Register from "./App/views/Components/Authentication/Register";

const store = createStore(rootReducer, applyMiddleware(thunk));
const Stack = createStackNavigator();
const firebaseConfig = {
  apiKey: "AIzaSyDwMnPFWAqwD2fvqtS--0Zqf-nvet1jrNQ",
  authDomain: "simsub-1.firebaseapp.com",
  projectId: "simsub-1",
  storageBucket: "simsub-1.appspot.com",
  messagingSenderId: "65161035779",
  appId: "1:65161035779:web:9eff179fbaea84da08ce36",
  measurementId: "G-3HMN5XL9DG",
};
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      guest: false,
    };
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.setState({ loggedIn: false, loaded: true });
      } else {
        this.setState({ loggedIn: true, loaded: true });
      }
    });
  }

  render() {
    const { loggedIn, loaded } = this.state;
    const { guest } = this.state;
    if (!loaded) {
      return (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
    if (!loggedIn && !guest) {
      return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Welcome"
              component={WelcomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{ headerBackTitleVisible: false }}
            />
            <Stack.Screen
              name="Main"
              component={Main}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}
