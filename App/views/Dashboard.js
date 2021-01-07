import React from "react";
import { Image, StyleSheet, View } from "react-native";
import colors from "../config/colors";

export default function Dashboard(props) {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },

  image: {
    width: "100%",
    height: "100%",
  },
});
