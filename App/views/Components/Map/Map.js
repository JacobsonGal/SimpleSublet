import React, { useState } from "react";
import MapView, { Marker, Polyline, Circle } from "react-native-maps";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Platform,
  TextInput,
  StatusBar,
  Alert,
  Modal,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { FAB, Portal, Provider, theme, Searchbar } from "react-native-paper";
import {
  MenuProvider,
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Filter from "./Filter";

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

  const [modalVisible, setModalVisible] = useState(false);

  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

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
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <Filter modalVisible={modalVisible} setModalVisible={setModalVisible} />
      </Modal>
      <MapView
        style={styles.map}
        showsUserLocation={true}
        userLocationUpdateInterval={500}
        userLocationAnnotationTitle={"Me"}
        showsScale={true}
      >
        <Searchbar
          style={styles.searchBar}
          placeholder="איפה תרצה לסבלט?"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
        <Circle
          center={TelAviv}
          radius={1000}
          lineCap={"square"}
          strokeWidth={2}
        />
        <Marker
          title={TelAviv.title}
          description={TelAviv.description}
          coordinate={TelAviv}
        />
      </MapView>
      <Provider>
        <Portal>
          <FAB.Group
            style={styles.fab}
            fabStyle={styles.button}
            open={open}
            icon={open ? "map" : "filter"}
            theme={theme}
            actions={
              [
                //   { icon: "plus", onPress: () => console.log("Pressed add") },
                //   {
                //     icon: "filter",
                //     label: "סנן",
                //     onPress: () => {
                //       setModalVisible(true);
                //     },
                //   },
                //   {
                //     icon: "heart",
                //     label: "מועדפים",
                //     onPress: () => console.log("Pressed notifications"),
                //     small: false,
                //   },
                //   {
                //     icon: "home",
                //     label: "מיקום",
                //     onPress: () => console.log("Pressed notifications"),
                //     small: false,
                //   },
              ]
            }
            onStateChange={onStateChange}
            onPress={() => {
              setModalVisible(true);
              if (open) {
                // do something if the speed dial is open
              }
            }}
          />
        </Portal>
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  fab: {
    position: "absolute",
    right: 0,
    bottom: 40,
  },
  button: {
    backgroundColor: "dodgerblue",
  },
  searchBar: {
    top: 100,
    width: "90%",
    alignSelf: "center",
    borderRadius: 15,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  contentColors: {
    justifyContent: "center",
    flexDirection: "row",
  },
  btnColor: {
    height: 40,
    width: 40,
    borderRadius: 40,
    marginHorizontal: 3,
  },
});
