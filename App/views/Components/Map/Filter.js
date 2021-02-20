import React, { useState, useEffect, useCallback } from "react";
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
  ScrollView,
  Button,
  ButtonGroup,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
// import { element as Icon } from "react-native-elements";
// import DatePicker from "react-native-datepicker";
import DateTimePicker from "@react-native-community/datetimepicker";
import RangeSlider from "rn-range-slider";
// import RangeSlider from "react-native-range-slider";
import { Camera } from "expo-camera";
import Slider from "@react-native-community/slider";
// import { Calendar, CalendarList, Agenda } from "react-native-calendars";
// import Calendar from "react-native-calendar-range-picker";
// import DateRangePicker from "react-native-daterange-picker";
// import Thumb from "./Slider/Thumb";
// import Rail from "./Slider/Rail";
// import RailSelected from "./Slider/RailSelected";
// import Notch from "./Slider/Notch";
// `  `;
// import Label from "./Slider/Label";
// import FilterCalendar from "./Calendar";

export default function Filter({
  modalVisible,
  setModalVisible,
  onStateChange,
}) {
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
      filters: [
        ["בית פרטי", "home", false],
        ["בניין", "office-building", false],
        ["שותפים", "account-group", false],
        ["מיזוג", "air-conditioner", false],
        ["מעלית", "elevator-passenger", false],
        ["WIFI", "wifi", false],
        ["חניה", "parking", false],
        ['בע"ח', "cat", false],
        ["מחסן", "garage", false],
        ["מעשנים", "smoking", false],
        ["ארוך טווח", "calendar-clock", false],
        ["משופצת", "format-paint", false],
        ["ריהוט", "table-furniture", false],
        ["כבלים", "television", false],
      ],
    },
  };

  const [startDate, setStart] = useState(null);
  const [startString, setstartString] = useState("2021-01-01");
  const [endString, setEndString] = useState("2021-01-01");
  const [endDate, setEnd] = useState(null);
  const [show, setShow] = useState(true);
  var string1 = "2021-01-01";

  var dates = {
    string1: {
      startingDay: true,
      color: "#50cebb",
      textColor: "white",
      marked: true,
      dotColor: "white",
    },

    endString: {
      endingDay: true,
      color: "#50cebb",
      textColor: "white",
      marked: true,
      dotColor: "white",
    },
  };

  const markedDates = {
    "2021-05-21": {
      startingDay: true,
      color: "#50cebb",
      textColor: "white",
      marked: true,
      dotColor: "white",
    },
    "2021-05-22": { color: "#70d7c7", textColor: "white" },
    "2021-05-23": {
      color: "#70d7c7",
      textColor: "white",

      dotColor: "white",
    },
    "2021-05-24": { color: "#70d7c7", textColor: "white" },

    "2021-05-25": {
      endingDay: true,
      color: "#50cebb",
      textColor: "white",
      marked: true,
      dotColor: "white",
    },
  };
  var [isPress, setIsPress] = useState(false);
  const [selectedIndex, setselectedIndex] = useState(0);

  const renderThumb = useCallback(() => <Thumb />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderLabel = useCallback((value) => <Label text={value} />, []);
  const renderNotch = useCallback(() => <Notch />, []);
  const handleValueChange = useCallback((low, high) => {
    setLow(low);
    setHigh(high);
  }, []);

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

  var touchProps = {
    activeOpacity: 1,
    underlayColor: "dodgerblue", // <-- "backgroundColor" will be always overwritten by "underlayColor"
    style: isPress ? styles.btnPress : styles.btnImage, // <-- but you can still apply other style changes
    onHideUnderlay: () => setIsPress(false),
    // onShowUnderlay: () => setIsPress(true),
    onPress: () => setIsPress(false), // <-- "onPress" is apparently required
  };
  function setPress(key) {
    press[key] = true;
  }

  function handleDate(day) {
    if (!startDate) setStart(day);
    else {
      if (day.month === startDate.month) {
        if (day.day > startDate.day) setEnd(day);
        else setStart(day);
      }
    }

    console.log("selected day", day);
    console.log("start day", startDate);
    console.log("end day", endDate);
  }

  return (
    <View style={styles.centeredView}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>סינון</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.modalText}>מאפיינים</Text>
          <ScrollView horizontal={true} style={styles.propertyFeatures}>
            {base.product.filters.map((prop, key) => {
              return (
                <View>
                  <TouchableHighlight
                    // {...touchProps}
                    underlayColor={"dodgerblue"}
                    onShowUnderlay={() => setIsPress(true)}
                    onPress={() => {
                      prop[2] = !prop[2];
                    }}
                    key={key}
                    style={prop[2] ? styles.btnPress : styles.btnImage}
                  >
                    <Icon name={prop[1]} size={30} color={"black"} />
                  </TouchableHighlight>
                  <Text style={styles.propText}>{prop[0]}</Text>
                </View>
              );
            })}
          </ScrollView>
          <View style={styles.datePickerContainer}>
            <Text style={styles.modalText}>בחר תקופה</Text>
            {/* <FilterCalendar />
            <Calendar
              startDate="2020-05-05"
              endDate="2020-05-12"
              onChange={({ startDate, endDate }) =>
                console.log({ startDate, endDate })
              }
            /> */}
          </View>
          <View style={styles.sliderContainer}>
            <Text style={styles.modalText}>בחר מחיר</Text>
            <Slider
              style={styles.slider}
              min={0}
              max={10000}
              step={10}
              floatingLabel
              renderThumb={renderThumb}
              renderRail={renderRail}
              renderRailSelected={renderRailSelected}
              renderLabel={renderLabel}
              renderNotch={renderNotch}
              onValueChanged={handleValueChange}
              allowLabelOverflow={true}
            />
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableHighlight
            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
            onPress={() => {
              setModalVisible(!modalVisible);
              onStateChange;
            }}
          >
            <Text style={styles.textStyle}>אשר</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    backgroundColor: "#f5f7fb",
    borderRadius: 20,
    width: "80%",
    padding: 35,
    paddingTop: 10,
    paddingBottom: 10,
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
  header: {
    width: "30%",
    // backgroundColor: "#e5eefa",
    borderRadius: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  body: {
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    // backgroundColor: "#efefef",
  },
  footer: {
    width: "100%",
    // backgroundColor: "#efefef",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  sliderContainer: {
    height: 50,
    width: "100%",
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
    marginTop: 18,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    width: "80%",
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
    marginTop: 50,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },

  modalText: {
    // width: "50%",
    borderRadius: 100,
    // backgroundColor: "#e5eefa",
    color: "#555555",
    marginTop: 15,
    marginBottom: 5,
    textAlign: "center",
    fontWeight: "bold",
  },
  propText: {
    marginTop: 15,
    marginBottom: 5,
    textAlign: "center",
    fontWeight: "bold",
  },
  propertyType: {
    justifyContent: "center",
    flexDirection: "row",
  },
  propertyFeatures: {
    // flex: 1,
    // justifyContent: "center",
    flexDirection: "row",
    width: "100%",
    overflow: "scroll",
  },
  btnColor: {
    height: 40,
    width: 40,
    borderRadius: 40,
    marginHorizontal: 3,
  },
  datePickerContainer: {
    width: "150%",
    height: 300,

    alignItems: "center",
    marginBottom: 20,
    overflow: "scroll",
  },
  datePicker: {
    // margin: 1,
    // width: 80,
    width: 300,
    height: "auto",
    backgroundColor: "#e5eefa",
    borderRadius: 10,
    marginBottom: 20,
    alignSelf: "center",
    // overflow: "scroll",
  },
  btnImage: {
    backgroundColor: "#e5eefa",
    padding: 10,
    borderRadius: 50,
    margin: 5,
  },
  slider: {
    height: 50,
    width: "100%",
  },

  // btnPress: {
  //   backgroundColor: "dodgerblue",
  //   padding: 10,
  //   borderRadius: 50,
  //   margin: 5,
  // },
});
