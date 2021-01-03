// rsf
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  Button,
  SafeAreaView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  ImageBackground,
  Platform,
  StatusBar as Status,
  Dimensions,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

import colors from "../config/colors";
import { StatusBar } from "expo-status-bar";

export default function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/telaviv.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/house.png")} />
        {/* <Text style={styles.text}> Simple Sublet </Text> */}
      </View>
    </ImageBackground>
  );
}
// rnss
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
  logo: {
    width: 500,
    height: 500,
    color: colors.white,
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors.black,
    fontFamily: "Cochin",
    fontSize: 40,
    fontWeight: "900",
    bottom: 50,
  },
});
