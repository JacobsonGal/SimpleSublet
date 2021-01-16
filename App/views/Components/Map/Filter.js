import React, { useState, useCallback } from "react";
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
  Button,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
// import DatePicker from "react-native-datepicker";
import DateTimePicker from "@react-native-community/datetimepicker";
import RangeSlider from "rn-range-slider";
import Slider from "@react-native-community/slider";

export default function Filter({ modalVisible, setModalVisible }) {
  const base = {
    modalVisible: false,
    userSelected: [],
    date: new Date().getDate(),
    product: {
      name: "העלה תמונות של הנכס",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
      created: "",
      images: [
        "https://icons-for-free.com/iconfiles/png/512/box+document+outline+share+top+upload+icon-1320195323221671611.png",
        "https://icons-for-free.com/iconfiles/png/512/box+document+outline+share+top+upload+icon-1320195323221671611.png",
        "https://icons-for-free.com/iconfiles/png/512/box+document+outline+share+top+upload+icon-1320195323221671611.png",
        "https://icons-for-free.com/iconfiles/png/512/box+document+outline+share+top+upload+icon-1320195323221671611.png",
      ],
      colors: [
        // "#00BFFF",
        // "#FF1493",
        // "#00CED1",
        // "#228B22",
        // "#20B2AA",
        // "#FF4500",
        "home",
        "office-building",
        "google-classroom",
      ],
    },
  };

  const [startDate, setStart] = useState(new Date());
  const [endDate, setEnd] = useState(new Date());
  const [show, setShow] = useState(true);

  const onStartChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    // setShow(Platform.OS === "ios");
    setStart(currentDate);
  };
  const onEndChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    // setShow(Platform.OS === "ios");
    setEnd(currentDate);
  };

  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>סינון</Text>

        <View style={styles.contentColors}>
          {base.product.colors.map((prop, key) => {
            return (
              <TouchableOpacity key={key} style={[styles.btnColor]}>
                <Icon
                  name={prop}
                  size={30}
                  color={"black"}
                  style={styles.btnImage}
                />
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={styles.datePickerContainer}>
          <Text style={styles.modalText}>בחר תקופה</Text>
          <Text>כניסה</Text>

          <DateTimePicker
            style={styles.datePicker}
            testID="dateTimePicker"
            value={startDate}
            mode={"date"}
            is24Hour={true}
            display="default"
            onChange={onStartChange}
          />

          <Text>יציאה</Text>

          <DateTimePicker
            style={styles.datePicker}
            testID="dateTimePicker"
            value={endDate}
            mode={"date"}
            is24Hour={true}
            display="default"
            onChange={onEndChange}
          />
        </View>

        <View style={styles.datePickerContainer}>
          <Text style={styles.modalText}>בחר מחיר</Text>
          <Slider
            style={{ width: 200, height: 40 }}
            minimumValue={0}
            maximumValue={1000}
            minimumTrackTintColor="#000000"
            maximumTrackTintColor="dodgerblue"
            onSlidingStart={null}
            onSlidingComplete={null}
            minimumTrackImage={"0$"}
            maximumTrackImage={"1000$"}
          />
        </View>

        <TouchableHighlight
          style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <Text style={styles.textStyle}>אשר</Text>
        </TouchableHighlight>
      </View>
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
    borderRadius: 10,
    padding: 10,
    margin: 10,
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
  datePickerContainer: {
    width: 150,
    alignItems: "center",
  },
  datePicker: {
    margin: 1,
    width: 80,
    alignSelf: "center",
  },
  slider: {
    height: 100,
  },
});
