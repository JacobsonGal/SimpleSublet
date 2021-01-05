import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  SafeAreaView,
} from "react-native";
import colors from "../config/colors";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/telaviv.jpg")}
    >
      <SafeAreaView>
        <View style={styles.login}>
          <Text style={styles.text}> Simple Sublet </Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Email"
              placeholderTextColor="#003f5c"
              onChangeText={(text) => setEmail({ text })}
              value={email}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Password"
              placeholderTextColor="#003f5c"
              onChangeText={(text) => setPassword({ text })}
              value={password}
            />
          </View>
          <TouchableOpacity>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.BthText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.signupBtn}
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text style={styles.BthText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  login: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: "auto",
    backgroundColor: "rgba(255,255,255,0.5)",
    borderRadius: 50,
    margin: "5%",
    padding: 30,
  },
  forgot: {
    marginTop: 20,
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Cochin",
  },
  loginBtn: {
    width: 250,
    backgroundColor: "dodgerblue",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  BthText: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Cochin",
  },
  signupBtn: {
    width: 100,
    backgroundColor: "rgba(255,255,255,0.8)",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  inputView: {
    width: 350,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Cochin",
  },

  text: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Cochin",
    fontWeight: "bold",
    fontSize: 45,
    color: colors.white,
    marginBottom: 30,
  },
});
