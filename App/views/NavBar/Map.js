import React, { useState } from "react";
import MapView, { Marker, Polyline } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions, Platform } from "react-native";
// import GetLocation from "react-native-get-location";

const mapStyle = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#1d2c4d",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#8ec3b9",
      },
    ],
  },
  // ...
  {
    featureType: "water",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#3e73fd",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#4e6d70",
      },
    ],
  },
];

const CustomMarker = () => (
  <View
    style={{
      paddingVertical: 10,
      paddingHorizontal: 30,
      backgroundColor: "#fff",
      borderColor: "#eee",
      borderRadius: 5,
      elevation: 10,
    }}
  >
    <Text>Tel-Aviv</Text>
  </View>
);
export default function Map() {
  // var MapView = require("react-native-maps");
  // const [region, setRegion] = useState("");

  // const onRegionChange = (region) => {
  //   setRegion(region);
  // };

  const TelAviv = {
    title: "Tel-Aviv",
    description: "North",
    latitude: 32.0853,
    longitude: 34.781769,
  };
  const Holon = {
    latitude: 32.011261,
    longitude: 34.774811,
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
        <Marker
          title={TelAviv.title}
          description={TelAviv.description}
          coordinate={TelAviv}
          // image={require("../../assets/icon.png")}
        />
        {/* <CustomMarker />
        </Marker> */}
        {/* <Polyline coordinates={[TelAviv, Holon]} /> */}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
