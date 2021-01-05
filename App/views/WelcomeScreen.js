import React, { useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Animated,
  Easing,
} from "react-native";
import colors from "../config/colors";

const FadeInView = (props) => {
  useEffect(() => {
    Animated.timing(props.fadeAnim, {
      toValue: 1,
      duration: 4000,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(props.fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        props.navigation.navigate("Login");
      });
    });
  }, [props.fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        flex: 1,
        opacity: props.fadeAnim, // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
};

export default function WelcomeScreen({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  return (
    <FadeInView navigation={navigation} fadeAnim={fadeAnim}>
      <ImageBackground
        style={styles.background}
        source={require("../assets/telaviv.jpg")}
      >
        {/* <Text style={styles.text}> Simple Sublet </Text> */}
        {/* <Animated.text
          value="Simple Sublet"
          text="text"
          style={[
            styles.text,
            {
              transform: [
                {
                  scaleX: fadeAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 2],
                  }),
                },
                {
                  scaleY: fadeAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 2],
                  }),
                },
              ],
            },
          ]}
        /> */}
        <View style={styles.logoContainer}>
          {/* <Image style={styles.logo} source={require("../assets/house.png")} /> */}
          <Animated.Image
            source={require("../assets/house.png")}
            style={[
              styles.logo,
              {
                transform: [
                  {
                    scaleX: fadeAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [1, 1.5],
                    }),
                  },
                  {
                    scaleY: fadeAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [1, 1.5],
                    }),
                  },
                ],
              },
            ]}
          />
        </View>
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
