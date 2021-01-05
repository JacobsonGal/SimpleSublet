// rsf
import React from "react";
import { StyleSheet, Platform, SafeAreaView } from "react-native";
import colors from "../../config/colors";
import { BottomNavigation, Text } from "react-native-paper";

import Map from "./Map";
import Upload from "./Upload";
import Dashboard from "./Dashboard";
import Chat from "./Chat";
import User from "./User";

const MapRoute = () => {
  if (Platform.OS === "ios") {
    return <Map />;
  } else {
    return <Text>Map</Text>;
  }
};

const UploadRoute = () => <Text>Add</Text>;
const DashboardRoute = () => <Text>Dashboard</Text>;
const ChatRoute = () => <Text>Chat</Text>;
const UserRoute = () => <Text>User</Text>;

export default function Home({ navigation }) {
  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    { key: "map", title: "Map", icon: "map", color: "#00BFFF" },
    { key: "dashboard", title: "Dashboard", icon: "home", color: "#FF6347" },
    { key: "upload", title: "Upload", icon: "plus-circle", color: "#32CD32" },
    { key: "chat", title: "Chat", icon: "send", color: "#3F51B5" },
    { key: "user", title: "User", icon: "account-circle", color: "#009688" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    dashboard: Dashboard,
    map: MapRoute,
    upload: Upload,
    chat: Chat,
    user: User,
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
