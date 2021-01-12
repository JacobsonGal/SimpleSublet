import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Button,
} from "react-native";

export default class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          title: "סאבלט בעיר הגדולה",
          time: "1 days a go",
          image: "https://img.mako.co.il/2015/07/02/GGkldd14_x5.jpg",
        },
        {
          id: 2,
          title: "Sit amet, consectetuer",
          time: "2 minutes a go",
          image: "https://img.mako.co.il/2015/07/01/GGkldd03_i.jpg",
        },
        {
          id: 3,
          title: "Dipiscing elit. Aenean ",
          time: "3 hour a go",
          image: "https://img.mako.co.il/2015/07/01/GGkldd05_i.jpg",
        },
        {
          id: 4,
          title: "Commodo ligula eget dolor.",
          time: "4 months a go",
          image: "https://img.mako.co.il/2015/07/01/GGkldd09_i.jpg",
        },
        {
          id: 5,
          title: "Aenean massa. Cum sociis",
          time: "5 weeks a go",
          image: "https://img.mako.co.il/2015/07/01/GGkldd10_i.jpg",
        },
        {
          id: 6,
          title: "Natoque penatibus et magnis",
          time: "6 year a go",
          image:
            "https://lh3.googleusercontent.com/proxy/1UIb--JDIMi2qmsP3Co4uw_etuEz_Wo6qk4JIwst8RZ0WiHhRysAfWgdqyCU8eA18MiyA6ZOZIWvf6RV8IT1V5SOoxvDOdnJqOFBMg3Hv1YroaEpYg",
        },
        {
          id: 7,
          title: "Dis parturient montes, nascetur",
          time: "7 minutes a go",
          image:
            "https://q-xx.bstatic.com/xdata/images/hotel/840x460/171170838.jpg?k=61e429dc79a6ca574886d85e577d413adea5d4c9e6cf76dff15b9b7c1c60fcc7&o=",
        },
        {
          id: 8,
          title: "Ridiculus mus. Donec quam",
          time: "8 days a go",
          image: "https://img.mako.co.il/2015/07/01/HkkRRe08_c.jpg",
        },
        {
          id: 9,
          title: "Felis, ultricies nec, pellentesque",
          time: "9 minutes a go",
          image: "https://img.mako.co.il/2015/07/01/GGkldd16_c.jpg",
        },
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={this.state.data}
          keyExtractor={(item) => {
            return item.id;
          }}
          ItemSeparatorComponent={() => {
            return <View style={styles.separator} />;
          }}
          renderItem={(post) => {
            const item = post.item;
            return (
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Sublet")}
              >
                <View style={styles.card}>
                  <Image
                    style={styles.cardImage}
                    source={{ uri: item.image }}
                  />
                  <View style={styles.cardContent}>
                    <View>
                      <Text style={styles.title}>{item.title}</Text>
                      <Text style={styles.time}>{item.time}</Text>
                    </View>

                    <View style={styles.cardFooter}>
                      <View style={styles.socialBarContainer}>
                        <View style={styles.socialBarSection}>
                          <TouchableOpacity style={styles.socialBarButton}>
                            <Image
                              style={styles.icon}
                              source={{
                                uri:
                                  "https://img.icons8.com/color/70/000000/filled-like.png",
                              }}
                            />
                            <Text style={styles.socialBarLabel}>78</Text>
                          </TouchableOpacity>
                        </View>

                        <View style={styles.socialBarSection}>
                          <TouchableOpacity style={styles.socialBarButton}>
                            <Image
                              style={styles.icon}
                              source={{
                                uri:
                                  "https://img.icons8.com/ios-glyphs/75/ffffff/comments.png",
                              }}
                            />
                            <Text style={styles.socialBarLabel}>25</Text>
                          </TouchableOpacity>
                        </View>

                        <View style={styles.socialBarSection}>
                          <TouchableOpacity style={styles.socialBarButton}>
                            <Image
                              style={styles.icon}
                              source={{
                                uri:
                                  "https://img.icons8.com/material/50/ffffff/retweet.png",
                              }}
                            />
                            <Text style={styles.socialBarLabel}>13</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 20,
  },
  list: {
    backgroundColor: "#E6E6E6",
  },
  separator: {
    marginTop: 1,
  },
  /******** card **************/
  card: {
    margin: 0,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "#DCDCDC",
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardContent: {
    backgroundColor: "black",
    paddingVertical: 12.5,
    paddingHorizontal: 16,
    //overlay efect
    flex: 1,
    height: 200,
    width: null,
    position: "absolute",
    zIndex: 100,
    left: 0,
    right: 0,
    backgroundColor: "transparent",
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 15,
    paddingBottom: 0,
    paddingVertical: 7.5,
    paddingHorizontal: 0,
  },
  cardImage: {
    // flex: 1,
    opacity: 0.6,
    height: 150,
    width: null,
  },
  /******** card components **************/
  title: {
    fontSize: 22,
    // backgroundColor: "white",
    color: "black",
    fontWeight: "bold",
  },
  time: {
    fontSize: 13,
    color: "black",
    marginTop: 5,
  },
  icon: {
    width: 25,
    height: 25,
  },
  /******** social bar ******************/
  socialBarContainer: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "row",
    flex: 1,
  },
  socialBarSection: {
    justifyContent: "flex-start",
    flexDirection: "row",
    flex: 1,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: "flex-start",
    justifyContent: "center",
    color: "black",
  },
  socialBarButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
