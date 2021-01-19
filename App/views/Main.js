import React, { useRef, useEffect, Component } from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./NavBar/Home";

const Stack = createStackNavigator();

export default class Main extends Component {
  render() {
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false, headerTransparent: true }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
