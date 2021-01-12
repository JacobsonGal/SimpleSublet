import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          image:
            "https://img.icons8.com/color/70/000000/administrator-male.png",
          //   title: "פרטי איש קשר",
          description: "פרטי איש קשר",
        },
        {
          id: 2,
          image: "https://img.icons8.com/color/70/000000/filled-like.png",
          //   title: "מועדפים",
          description: "אזור",
        },
        {
          id: 3,
          image: "https://img.icons8.com/color/70/000000/cottage.png",
          //   title: "הסיבלוטים שלי",
          description: "תקופה",
        },
        {
          id: 4,
          image: "https://img.icons8.com/color/70/000000/facebook-like.png",
          //   title: "אזורים מועדפים",
          description: "מאפיינים",
        },
      ],
    };
  }
  location = {
    title: "Tel-Aviv",
    description: "North",
    latitude: 32.0853,
    longitude: 34.781769,
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <View style={styles.header}> */}
        <Image
          style={styles.header}
          source={{
            uri: "https://img.mako.co.il/2015/07/02/GGkldd14_x5.jpg",
          }}
        />
        <MapView style={styles.map}>
          <Marker
            title={this.location.title}
            description={this.location.description}
            coordinate={this.location}
            // image={{ uri: "https://img.mako.co.il/2015/07/02/GGkldd14_x5.jpg" }}
          />
        </MapView>

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
  header: {
    height: 150,
  },

  map: {
    height: 150,
    // borderRadius: 30,
    // margin: 10,
    // marginHorizontal: 13,
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
    paddingTop: 10,
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
