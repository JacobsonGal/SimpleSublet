// rsf
import React, { useCallback } from "react";
import { StyleSheet, Platform, SafeAreaView } from "react-native";
import colors from "../../config/colors";
import { BottomNavigation, IconButton, Text } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUser } from "../../../Redux/actions/index";
import firebase from "firebase";
require("firebase/firestore");
require("firebase/firebase-storage");

import User from "../Components/User/User";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "../Components/Dashboard/Dashboard";
import Sublet from "../Components/Dashboard/Sublet";
import Message from "../Components/Massaging/Message";
import Chats from "../Components/Massaging/Chats";
import Map from "../Components/Map/Map";
import Upload from "../Components/Upload/Upload";

const Stack = createStackNavigator();

export default function Home({ currentUser }) {
  const [index, setIndex] = React.useState(0);
  const MapRoute = () => {
    if (Platform.OS === "ios") {
      return <Map />;
    } else {
      return <Text>Map</Text>;
    }
    // return <Text>Map</Text>;
  };
  const UploadRoute = () => (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="העלה סבלט חדש"
          component={Upload}
          options={{ headerBackTitleVisible: false, headerLeft: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
  const DashboardRoute = () => (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ headerBackTitleVisible: false, headerLeft: false }}
        />
        <Stack.Screen name="Sublet" component={Sublet} options={{}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  const ChatRoute = () => (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="Chats"
          options={{ headerBackTitleVisible: false, headerLeft: false }}
        >
          {(props) => <Chats {...props} currentUser={currentUser} />}
        </Stack.Screen>
        <Stack.Screen name="Message" component={Message} options={{}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  const UserRoute = () => (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="User"
          options={{ headerShown: false, headerLeft: false }}
        >
          {(props) => <User currentUser={currentUser} />}
        </Stack.Screen>
        {/* <Stack.Screen name="Settings" component={Settings} options={{}} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );

  const [routes] = React.useState([
    {
      key: "map",
      title: "מפה",
      icon: () => <Icon name="map" size={20} color="white" />,
      color: "#7FDBFF",
    },
    {
      key: "dashboard",
      title: "סאבלטים",
      icon: () => <Icon name="home" size={25} color="white" />,
      color: "#39CCCC",
    },
    {
      key: "upload",
      title: "העלה",
      icon: () => <Icon name="plus-circle" size={25} color="white" />,
      color: "#0074D9",
    },
    {
      key: "chat",
      title: "צ'אט",
      icon: () => <Icon name="paper-plane" size={25} color="white" />,
      color: "#3F51B5",
    },
    {
      key: "user",
      title: "פרופיל",
      icon: () => <Icon name="user-circle" size={24} color="white" />,
      color: "#001f3f",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    dashboard: DashboardRoute,
    map: MapRoute,
    upload: UploadRoute,
    chat: ChatRoute,
    user: UserRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
}
// rnss
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
