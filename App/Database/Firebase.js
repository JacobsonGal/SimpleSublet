import React from "react";
import database from "@react-native-firebase/database";
import firebase from "@react-native-firebase/app";
import "@react-native-firebase/auth";

function Firebase(props) {
  const user = firebase.auth().currentUser;
  const reference = database().ref("/users/123");
  database()
    .ref("/users/123")
    .once("value")
    .then((snapshot) => {
      console.log("User data: ", snapshot.val());
    });
  return (
    <div>
      <script src="/__/firebase/8.2.3/firebase-app.js"></script>
      <script src="/__/firebase/8.2.3/firebase-analytics.js"></script>
      <script src="/__/firebase/init.js"></script>
    </div>
  );
}

export default Firebase;
