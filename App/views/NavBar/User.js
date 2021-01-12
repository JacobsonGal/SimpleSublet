import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.avatar}
            source={{
              uri:
                "http://test4.servernet.rs/assets/pages/media/profile/profile_user.jpg",
            }}
          />
        </View>
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
                  </View> */}
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // header: {
  //   backgroundColor: "#EE82EE",
  // },
  // headerContent: {
  //   padding: 30,
  //   alignItems: "center",
  // },
  // avatar: {
  //   width: 130,
  //   height: 130,
  //   borderRadius: 63,
  //   borderWidth: 4,
  //   borderColor: "#FF6347",
  //   marginBottom: 10,
  // },
  header: {
    backgroundColor: "dodgerblue",
    height: 150,
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
    height: "100%",
    justifyContent: "center",
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
    shadowColor: "black",
    shadowOffset: {
      width: 1,
      height: 3,
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
});
// const styles = StyleSheet.create({
//   header: {
//     backgroundColor: "#00BFFF",
//     height: 200,
//   },
//   avatar: {
//     width: 130,
//     height: 130,
//     borderRadius: 63,
//     borderWidth: 4,
//     borderColor: "white",
//     marginBottom: 10,
//     alignSelf: "center",
//     position: "absolute",
//     marginTop: 130,
//   },
//   name: {
//     fontSize: 22,
//     color: "black",
//     fontWeight: "600",
//   },
//   body: {
//     marginTop: 40,
//   },
//   bodyContent: {
//     flex: 1,
//     alignItems: "center",
//     padding: 30,
//   },
//   name: {
//     fontSize: 28,
//     color: "#696969",
//     fontWeight: "600",
//   },
//   info: {
//     fontSize: 16,
//     color: "#00BFFF",
//     marginTop: 10,
//   },
//   description: {
//     fontSize: 16,
//     color: "#696969",
//     marginTop: 10,
//     textAlign: "center",
//   },
//   buttonContainer: {
//     marginTop: 10,
//     height: 45,
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 20,
//     width: 250,
//     borderRadius: 30,
//     backgroundColor: "#00BFFF",
//   },
// });
