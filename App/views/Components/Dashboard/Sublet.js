import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ImageBackground,
} from "react-native";
// import MapView, { Marker, Polyline } from "react-native-maps";
import Carousel from "react-native-snap-carousel";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
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
      carouselItems: [
        {
          id: 1,
          title: "סאבלט בעיר הגדולה",
          location: "סלון",
          image: "https://img.mako.co.il/2015/07/02/GGkldd14_x5.jpg",
        },
        {
          id: 2,
          title: "סאבלט בעיר הגדולה",
          location: "מטבח",
          image: "https://img.mako.co.il/2015/07/01/GGkldd03_i.jpg",
        },
        {
          id: 3,
          title: "סאבלט בעיר הגדולה",
          location: "חדר שינה",
          image: "https://img.mako.co.il/2015/07/01/GGkldd05_i.jpg",
        },
        {
          id: 4,
          title: "סאבלט בעיר הגדולה",
          location: "שירותים",
          image: "https://img.mako.co.il/2015/07/01/GGkldd09_i.jpg",
        },
        {
          id: 5,
          title: "סאבלט בעיר הגדולה",
          location: "מרפסת",
          image: "https://img.mako.co.il/2015/07/01/GGkldd10_i.jpg",
        },
        {
          id: 6,
          title: "סאבלט בעיר הגדולה",
          location: "מקלחת",
          image:
            "https://q-xx.bstatic.com/xdata/images/hotel/840x460/171170838.jpg?k=61e429dc79a6ca574886d85e577d413adea5d4c9e6cf76dff15b9b7c1c60fcc7&o=",
        },
        {
          id: 7,
          title: "סאבלט בעיר הגדולה",
          location: "בריכה",
          image: "https://img.mako.co.il/2015/07/01/HkkRRe08_c.jpg",
        },
        {
          id: 8,
          title: "סאבלט בעיר הגדולה",
          location: "כניסה",
          image: "https://img.mako.co.il/2015/07/01/GGkldd16_c.jpg",
        },
      ],
    };
  }

  _renderItem({ item, index }) {
    return (
      <ImageBackground style={styles.header} source={{ uri: item.image }}>
        <View
          style={{
            // backgroundColor: "floralwhite",
            borderRadius: 15,
            height: 250,
            // padding: 50,
            marginLeft: 25,
            marginRight: 25,
          }}
        >
          <Text style={{ fontSize: 30 }}>{item.location}</Text>
          <Text>{item.title}</Text>
        </View>
      </ImageBackground>
    );
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
        {/* <MapView style={styles.map}>
          <Marker
            title={this.location.title}
            description={this.location.description}
            coordinate={this.location}
            // image={{ uri: "https://img.mako.co.il/2015/07/02/GGkldd14_x5.jpg" }}
          />
        </MapView> */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <Carousel
            layout={"default"}
            ref={(ref) => (this.carousel = ref)}
            data={this.state.carouselItems}
            sliderWidth={300}
            itemWidth={280}
            renderItem={this._renderItem}
            onSnapToItem={(index) => this.setState({ activeIndex: index })}
            autoplay={true}
            autoplayDelay={1}
            autoplayInterval={2000}
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
  header: {
    height: 150,
  },
  container: {
    backgroundColor: "#F7F8FC",
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
    borderWidth: 1,
    borderColor: "#DCD9D952",
    shadowColor:
      "rgba(210.75000000000003, 210.75000000000003, 210.75000000000003, 0.5)",
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
