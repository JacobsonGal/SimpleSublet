// rsf
import React, { useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import colors from "../config/colors";
import { StatusBar } from "expo-status-bar";

export default function Home({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/telaviv.jpg")}
    >
      <Text style={styles.text}> Simple Sublet </Text>
      <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require("../assets/house.png")} />
        </View>
      </TouchableOpacity>
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
    color: colors.white,
    alignItems: "center",
    fontFamily: "Cochin",
    fontSize: 40,
    fontWeight: "900",
    top: -20,
  },
});
