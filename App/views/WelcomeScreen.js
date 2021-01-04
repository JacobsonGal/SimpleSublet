import React, { useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Animated,
} from "react-native";
import colors from "../config/colors";

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 4000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        flex: 1,
        opacity: fadeAnim, // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
};

// export default function WelcomeScreen({ navigation }) {
export default function WelcomeScreen() {
  return (
    <FadeInView>
      <ImageBackground
        style={styles.background}
        source={require("../assets/telaviv.jpg")}
      >
        <Text style={styles.text}> Simple Sublet </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require("../assets/house.png")}
            />
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </FadeInView>
  );
}

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
