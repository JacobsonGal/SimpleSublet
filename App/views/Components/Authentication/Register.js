import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  SafeAreaView,
  Button,
} from "react-native";
import colors from "../../../config/colors";
import * as firebase from "firebase";
import { result } from "lodash";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      c_password: "",
      name: "",
    };
    this.onSignUp = this.onSignUp.bind(this);
  }
  onSignUp() {
    const { email, password, name } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        firebase
          .firestore()
          .collection("user")
          .doc(firebase.auth().currentUser.uid)
          .set({ name, email });

        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });

    // this.props.navigation.navigate("Home");
  }
  render() {
    return (
      <ImageBackground
        style={styles.background}
        source={require("../../../assets/telaviv.jpg")}
      >
        <SafeAreaView>
          <View style={styles.login}>
            <Text style={styles.text}> Simple Sublet </Text>
            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                placeholder="Full Name"
                placeholderTextColor="#003f5c"
                onChangeText={(name) => this.setState({ name })}
              />
            </View>
            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                placeholder="Email"
                placeholderTextColor="#003f5c"
                onChangeText={(email) => this.setState({ email })}
              />
            </View>
            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                placeholder="Password"
                placeholderTextColor="#003f5c"
                secureTextEntry={true}
                onChangeText={(password) => this.setState({ password })}
              />
            </View>
            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                placeholder="Confirm Password"
                placeholderTextColor="#003f5c"
                secureTextEntry={true}
                onChangeText={
                  (c_password) =>
                    c_password == this.state.password
                      ? this.setState({ c_password })
                      : null
                  // alert("Password doesn't match")
                }
              />
            </View>

            <TouchableOpacity
              style={styles.signupBtn}
              onPress={() =>
                this.state.c_password == this.state.password
                  ? this.onSignUp()
                  : alert("Password doesn't match")
              }
            >
              <Text style={styles.BthText}>SIGN UP</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  }
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
