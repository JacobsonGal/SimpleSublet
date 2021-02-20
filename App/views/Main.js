import React, { useRef, useEffect, Component } from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./NavBar/Home";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUser } from "../../Redux/actions/index";
import firebase from "firebase";
require("firebase/firestore");
require("firebase/firebase-storage");

const Stack = createStackNavigator();

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    const { currentUser } = this.props;
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            options={{ headerShown: false, headerTransparent: true }}
          >
            {(props) => <Home {...props} currentUser={currentUser} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
});
const mapDispatchProps = (dispatch) =>
  bindActionCreators({ fetchUser }, dispatch);
export default connect(mapStateToProps, mapDispatchProps)(Main);
