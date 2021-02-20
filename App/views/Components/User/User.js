import React, { useState, Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { launchImageLibrary } from "react-native-image-picker";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUser } from "../../../../Redux/actions/index";
import firebase from "firebase";
require("firebase/firestore");
require("firebase/firebase-storage");
var ImagePicker = require("react-native-image-picker");

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // usersData: [],
      photo: null,
      data: [
        {
          id: 1,
          image:
            "https://img.icons8.com/color/70/000000/administrator-male.png",
          title: "פרטי משתמש",
          description: "פרטי משתמש",
        },
        {
          id: 2,
          image: "https://img.icons8.com/color/70/000000/filled-like.png",
          title: "מועדפים",
          description: "מועדפים",
        },
        {
          id: 3,
          image: "https://img.icons8.com/color/70/000000/cottage.png",
          title: "הסיבלוטים שלי",
          description: "הסיבלוטים שלי",
        },
        {
          id: 4,
          image: "https://img.icons8.com/color/70/000000/facebook-like.png",
          title: "אזורים מועדפים",
          description: "אזורים מועדפים",
        },
      ],
    };
  }

  render() {
    const { currentUser } = this.props;
    const childPath = `post/${
      firebase.auth().currentUser.uid
    }/${Math.random().toString(36)}`;

    const pickImage = () => {
      const option = { mediaType: "photo" };
      launchImageLibrary(option, (response) => {
        console.log("response", response);
        if (response.uri) {
          this.setState({ photo: response });
        }
      });

      //Do A Popup

      // ImagePicker.launchCamera(option, (response) => {
      //   console.log("response", response);
      //   if (response.uri) {
      //     this.setState({ photo: response });
      //   }
      // });
      uploadImage();
    };
    const uploadImage = async () => {
      const uri = this.state.photo.uri;
      const response = await fetch(uri);
      const blob = await response.blob();
      const task = firebase.storage.ref().child(childPath).put(blob);
      const taskProgress = () => {
        console.log(`transferred: ${task.snapshot.bytesTransferred}`);
      };
      const taskCompleted = () => {
        task.snapshot.ref.getDownloadURL().then((snapshot) => {
          console.log(snapshot);
        });
      };
      const taskError = () => {
        console.log(task.snapshot);
      };
      task.on("state_changed", taskProgress, taskError, taskCompleted);
    };
    console.log(currentUser);

    // if (currentUser === undefined) {
    //   return (
    //     <View>
    //       <Text>undefined</Text>
    //     </View>
    //   );
    // }
    const logout = () => {
      firebase.auth().signOut();
    };
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.header}
            source={{
              uri:
                "https://scontent.ftlv6-1.fna.fbcdn.net/v/t1.0-9/34561813_10214643179140882_7248566277680136192_o.jpg?_nc_cat=100&ccb=2&_nc_sid=e3f864&_nc_ohc=n8edfUcQBOUAX_HaXtG&_nc_ht=scontent.ftlv6-1.fna&oh=0cdebfc3d981f2ff159f18874a1b8b92&oe=6028AC27",
            }}
          />
        </View>
        <View>
          <Text style={styles.name}>
            <Text>{currentUser ? currentUser.name : "name"}</Text>
          </Text>
          <Text style={styles.phone}>
            <Text>{currentUser ? currentUser.email : "email"}</Text>
          </Text>
        </View>
        {currentUser.photoURI ? (
          <Image style={styles.photo} source={{ uri: currentUser.photoURI }} />
        ) : (
          <TouchableOpacity onPress={pickImage}>
            <Image
              style={styles.photo}
              source={{
                uri:
                  "http://test4.servernet.rs/assets/pages/media/profile/profile_user.jpg",
              }}
            />
          </TouchableOpacity>
        )}

        <View style={styles.body}>
          <FlatList
            style={styles.bodyContent}
            enableEmptySections={true}
            data={this.state.data}
            keyExtractor={(item) => {
              return item.id;
            }}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity>
                  {/* <View style={styles.box}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Image
                      style={styles.btn}
                      source={{
                        uri: "https://img.icons8.com/customer/office/40",
                      }}
                    />
                  </View>   */}
                  <View style={styles.card}>
                    <View style={styles.cardHeader}>
                      <Image style={styles.icon} source={{ uri: item.image }} />

                      <Text style={styles.cardTitle}>{item.description}</Text>
                    </View>
                    <View style={styles.cardContent}>
                      <Text style={styles.description}>{item.title}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <TouchableOpacity onPress={logout}>
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.LogoutTitle}>LOGOUT</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f7fb",
  },
  header: {
    backgroundColor: "dodgerblue",
    height: 150,
  },
  photo: {
    backgroundColor: "dodgerblue",
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginTop: -60,
    // marginBottom: -20,
    alignSelf: "center",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    marginTop: 80,
    position: "absolute",
  },
  name: {
    fontSize: 22,
    color: "black",
    fontWeight: "600",
  },

  icon: {
    width: 40,
    height: 40,
  },
  title: {
    fontSize: 18,
    color: "#EE82EE",
    marginLeft: 4,
  },
  btn: {
    marginLeft: "auto",
    width: 40,
    height: 40,
  },
  body: {
    // height: "100%",
    justifyContent: "center",
    marginTop: -50,
  },
  bodyContent: {
    // padding: 30,
    // marginTop: 50,
    position: "relative",
    paddingTop: 70,
  },

  box: {
    padding: 5,
    marginBottom: 2,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 1,
      width: -2,
    },
    elevation: 2,
  },
  username: {
    color: "#20B2AA",
    fontSize: 22,
    alignSelf: "center",
    marginLeft: 10,
  },
  /******** card **************/
  card: {
    // shadowColor: "#e5eefa",
    shadowColor: "#e5eefa",
    shadowOffset: {
      width: 5,
      height: 10,
    },
    shadowOpacity: 0.37,
    shadowRadius: 4,
    elevation: 12,
    borderRadius: 30,

    marginVertical: 5,
    backgroundColor: "white",
    marginHorizontal: 13,
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardTitle: {
    color: "#00BFFF",
  },
  LogoutTitle: {
    color: "#00BFFF",
    justifyContent: "center",
    textAlign: "center",
    width: "100%",
  },
  name: {
    marginTop: 30,
    marginLeft: 30,
    marginBottom: -50,
    fontFamily: "Verdana",
    fontSize: 15,
    fontWeight: "500",
  },
  phone: {
    marginTop: 33,
    marginLeft: 290,
    marginBottom: -50,
    fontFamily: "Verdana",
    fontSize: 15,
    fontWeight: "500",
  },
});
