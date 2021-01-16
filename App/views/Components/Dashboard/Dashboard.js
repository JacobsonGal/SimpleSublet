import React, { Component, useCallback } from "react";
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
  SliderComponent,
  Label,
} from "react-native";
import { FAB, Portal, Provider, theme, Searchbar } from "react-native-paper";
import DropDownPicker from "react-native-dropdown-picker";
import Icon from "react-native-vector-icons/FontAwesome";
// import Slider from "rn-range-slider";

// renderThumb = useCallback(() => <View />, []);
// renderRail = useCallback(() => <View />, []);
// renderRailSelected = useCallback(() => <View />, []);
// renderLabel = useCallback((value) => <Label text={value} />, []);
// renderNotch = useCallback(() => <View />, []);
// handleValueChange = useCallback((low, high) => {
//   setLow(low);
//   setHigh(high);
// }, []);
export default class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      country: "uk",
      visible: false,
      picked: null,
      data: [
        {
          id: 1,
          title: "סאבלט בעיר הגדולה",
          time: "1 days a go",
          likes: "10",
          image: "https://img.mako.co.il/2015/07/02/GGkldd14_x5.jpg",
        },
        {
          id: 2,
          title: "Sit amet, consectetuer",
          time: "2 minutes a go",
          likes: "20",

          image: "https://img.mako.co.il/2015/07/01/GGkldd03_i.jpg",
        },
        {
          id: 3,
          title: "Dipiscing elit. Aenean ",
          time: "3 hour a go",
          likes: "30",
          image: "https://img.mako.co.il/2015/07/01/GGkldd05_i.jpg",
        },
        {
          id: 4,
          title: "Commodo ligula eget dolor.",
          time: "4 months a go",
          likes: "40",
          image: "https://img.mako.co.il/2015/07/01/GGkldd09_i.jpg",
        },
        {
          id: 5,
          title: "Aenean massa. Cum sociis",
          time: "5 weeks a go",
          likes: "50",

          image: "https://img.mako.co.il/2015/07/01/GGkldd10_i.jpg",
        },
        {
          id: 6,
          title: "Natoque penatibus et magnis",
          time: "6 year a go",
          likes: "60",
          image: "https://img.mako.co.il/2015/07/01/GGkldd10_i.jpg",
        },
        {
          id: 7,
          title: "Dis parturient montes, nascetur",
          time: "7 minutes a go",
          likes: "70",

          image:
            "https://q-xx.bstatic.com/xdata/images/hotel/840x460/171170838.jpg?k=61e429dc79a6ca574886d85e577d413adea5d4c9e6cf76dff15b9b7c1c60fcc7&o=",
        },
        {
          id: 8,
          title: "Ridiculus mus. Donec quam",
          time: "8 days a go",
          likes: "80",

          image: "https://img.mako.co.il/2015/07/01/HkkRRe08_c.jpg",
        },
        {
          id: 9,
          title: "Felis, ultricies nec, pellentesque",
          time: "9 minutes a go",
          likes: "90",

          image: "https://img.mako.co.il/2015/07/01/GGkldd16_c.jpg",
        },
      ],
    };
  }

  onShow = () => {
    this.setState({ visible: true });
  };

  onSelect = (picked) => {
    this.setState({
      picked: picked,
      visible: false,
    });
  };

  onCancel = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchBox}>
          <DropDownPicker
            items={[
              {
                label: "תל-אביב",
                value: "תל-אביב",
                icon: () => <Icon name="map" size={18} color="#900" />,
              },
              {
                label: "יפו",
                value: "יפו",
                icon: () => <Icon name="map" size={18} color="#900" />,
              },
              {
                label: "חולון",
                value: "חולון",
                icon: () => <Icon name="map" size={18} color="#900" />,
              },
              {
                label: "ראשון-לציון",
                value: "ראשון-לציון",
                icon: () => <Icon name="map" size={18} color="#900" />,
              },
            ]}
            placeholder="בחר עיר"
            placeholderStyle={{ color: "dodgerblue", textAlign: "center" }}
            searchable={true}
            searchablePlaceholder="חפש עיר"
            searchablePlaceholderTextColor="gray"
            seachableStyle={{}}
            searchableError={() => <Text>Not Found</Text>}
            multiple={true}
            multipleText="%d ערים נבחרו"
            min={0}
            max={10}
            defaultValue={this.state.country}
            containerStyle={{ height: 40, width: "33%", borderRadius: "200px" }}
            style={{ backgroundColor: "#fafafa", borderRadius: "200px" }}
            itemStyle={{
              justifyContent: "flex-start",
            }}
            dropDownStyle={{ backgroundColor: "#fafafa" }}
            onChangeItem={(item) =>
              this.setState({
                country: item.value,
              })
            }
          />
          <DropDownPicker
            items={[
              {
                label: "דירת שותפים",
                value: "שותפים",
                icon: () => <Icon name="home" size={18} color="dodgerblue" />,
              },
              {
                label: "בית פרטית",
                value: "פרטי",
                icon: () => <Icon name="home" size={18} color="dodgerblue" />,
              },
              {
                label: "חדר",
                value: "חדר",
                icon: () => <Icon name="home" size={18} color="dodgerblue" />,
              },
              {
                label: "יחידת דיור",
                value: "יחידת דיור",
                icon: () => <Icon name="home" size={18} color="dodgerblue" />,
              },
            ]}
            placeholder="בחר סוג סאבלט"
            placeholderStyle={{ color: "dodgerblue", textAlign: "center" }}
            searchable={true}
            searchablePlaceholder="חפש סוג"
            searchablePlaceholderTextColor="gray"
            seachableStyle={{}}
            searchableError={() => <Text>Not Found</Text>}
            multiple={true}
            multipleText="%d סוגים נבחרו"
            min={0}
            max={10}
            defaultValue={this.state.country}
            containerStyle={{ height: 40, width: "33%", borderRadius: "200px" }}
            style={{ backgroundColor: "#fafafa", borderRadius: "200px" }}
            itemStyle={{
              justifyContent: "flex-start",
            }}
            dropDownStyle={{ backgroundColor: "#fafafa" }}
            onChangeItem={(item) =>
              this.setState({
                country: item.value,
              })
            }
          />
          <DropDownPicker
            items={[
              {
                label: "על הים",
                value: "ים",
                icon: () => <Icon name="flag" size={18} color="green" />,
              },
              {
                label: "מרכזי",
                value: "מרכזי",
                icon: () => <Icon name="flag" size={18} color="green" />,
              },
              {
                label: "שקט",
                value: "שקט",
                icon: () => <Icon name="flag" size={18} color="green" />,
              },
            ]}
            placeholder="בחר סגנון"
            placeholderStyle={{ color: "dodgerblue", textAlign: "center" }}
            searchable={true}
            searchablePlaceholder="חפש סגנון"
            searchablePlaceholderTextColor="gray"
            seachableStyle={{}}
            searchableError={() => <Text>Not Found</Text>}
            multiple={true}
            multipleText="%d סגנונות נבחרו"
            min={0}
            max={10}
            defaultValue={this.state.country}
            containerStyle={{
              backgroundColor: "#fafafa",
              height: 40,
              width: "33%",
            }}
            style={{ backgroundColor: "" }}
            itemStyle={{
              justifyContent: "flex-start",
            }}
            dropDownStyle={{ backgroundColor: "#fafafa" }}
            onChangeItem={(item) =>
              this.setState({
                country: item.value,
              })
            }
          />
        </View>
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
                    <View style={styles.socialBarSection}>
                      <TouchableOpacity style={styles.socialBarButton}>
                        <Image
                          style={styles.icon}
                          source={{
                            uri:
                              "https://img.icons8.com/color/70/000000/filled-like.png",
                          }}
                        />
                        <Text style={styles.socialBarLabel}>{item.likes}</Text>
                      </TouchableOpacity>
                    </View>

                    {/* <View style={styles.cardFooter}>
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
                  */}
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
    // backgroundColor: "#E6E6E6",
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
  searchBox: {
    flexDirection: "row",
    zIndex: 999,
  },
});
