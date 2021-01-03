import { StatusBar } from "expo-status-bar";
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
  Platform,
  StatusBar as Status,
  Dimensions,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import WelcomeScreen from "./App/views/WelcomeScreen";
import ViewImageScreen from "./App/views/ViewImageScreen";

export default function App() {
  return <ViewImageScreen />;
}

{
  /*
   return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "100%",
          height: orientation ? "100%" : "30%",
        }}
      ></View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
    const containerStyle = { backgroundColor: "dodgerblue" };

   <Text numberOfLines={1}>Welcome to Simple Sublet!</Text>
   <TouchableOpacity>
        <Button
          color="blue"
          title={"Click me"}
          // onPress={() =>
          //   Alert.alert("My Title", "My Massage", [
          //     { text: "Yes", onPress: () => console.log("Yes") },
          //     { text: "No", onPress: () => console.log("No") },
          //   ])
          // }
          onPress={() =>
            Alert.prompt("My Title", "My Massage", (text) => console.log(text))
          }
        ></Button>
        <View
          style={{ width: 200, height: 70, backgroundColor: "black" }}
        ></View>
        <Image
          blurRadius={1}
          fadeDuration={1000}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableOpacity> */
}
