import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Alert,
  ScrollView,
  Button,
} from "react-native";
import { TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import NativeForms from "native-forms";

export default class ProductView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      userSelected: [],
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
        colors: [
          // "#00BFFF",
          // "#FF1493",
          // "#00CED1",
          // "#228B22",
          // "#20B2AA",
          // "#FF4500",
          "home",
          "office-building",
          "google-classroom",
        ],
      },
    };
  }

  __setImageSelected = (image) => {
    this.setState({ selectedImage: image });
  };

  __renderImages = () => {
    return (
      <View style={styles.smallImagesContainer}>
        {this.state.product.images.map((prop, key) => {
          return (
            <TouchableOpacity
              key={key}
              onPress={() => {
                this.__setImageSelected(prop);
              }}
            >
              <Image style={styles.smallImage} source={{ uri: prop }} />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  __renderColors = () => {
    return (
      <View style={styles.contentColors}>
        {this.state.product.colors.map((prop, key) => {
          return (
            <TouchableOpacity key={key} style={[styles.btnColor]}>
              <Icon
                name={prop}
                size={30}
                color={"black"}
                style={styles.btnImage}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  render() {
    var mainImage = this.state.selectedImage
      ? this.state.selectedImage
      : this.state.product.images[0];
    return (
      <View style={styles.container}>
        {/* <Text>NativeForms.com</Text>

        <Button title="Show Form" color="#20f" /> */}

        <NativeForms form="https://my.nativeforms.com/QU2Bja10jZmMTWRdnWS1Db" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 20,
    // direction: "rtl",
    backgroundColor: "#ebf0f7",
  },
  content: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 40,
  },
  header: {
    flexDirection: "row",
  },
  mainImageContainer: { justifyContent: "center" },
  mainImage: {
    width: 100,
    height: 100,
    // backgroundColor: "#ddd",
    borderWidth: 1,
    padding: 50,
    borderRadius: 5,
  },
  smallImagesContainer: {
    flexDirection: "row",
    // marginLeft: 30,
    // marginBottom: 5,
    alignSelf: "center",
    // padding: 20,
  },
  smallImage: {
    width: 50,
    height: 50,
    margin: 2,
    // marginTop: 8,
    // backgroundColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
  },
  btnColor: {
    height: 40,
    width: 40,
    borderRadius: 40,
    marginHorizontal: 3,
  },

  contentColors: {
    justifyContent: "center",
    flexDirection: "row",
  },
  name: {
    fontSize: 22,
    color: "#696969",
    fontWeight: "bold",
  },
  price: {
    marginTop: 10,
    fontSize: 18,
    color: "green",
    fontWeight: "bold",
  },
  description: {
    fontSize: 18,
    color: "#696969",
  },
  shareButton: {
    marginTop: 10,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "#00BFFF",
  },
  shareButtonText: {
    color: "#FFFFFF",
    fontSize: 20,
  },

  /******** card **************/
  card: {
    shadowColor: "#00000021",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    borderRadius: 30,
    direction: "inherit",
    justifyContent: "center",
    marginVertical: 5,
    backgroundColor: "white",
    marginHorizontal: 5,
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
    justifyContent: "center",
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 12.5,
    paddingBottom: 5,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardInput: {
    borderRadius: 30,
  },
  cardTitle: {
    color: "#00BFFF",
  },
});

// <ScrollView style={styles.content}>
//   <View style={styles.card}>
//     <View style={styles.cardHeader}>
//       <Text style={styles.name}>{this.state.product.name}</Text>
//     </View>
//     <View style={styles.cardContent}>
//       <View style={styles.mainImageContainer}>
//         <View style={styles.header}>
//           {/* <Image style={styles.mainImage} source={{ uri: mainImage }} /> */}
//         </View>
//         {this.__renderImages()}
//       </View>
//     </View>
//   </View>

//   <View style={styles.card}>
//     <View style={styles.cardHeader}>
//       <Text style={styles.cardTitle}>סוג הנכס</Text>
//     </View>
//     <View style={styles.cardContent}>{this.__renderColors()}</View>
//   </View>

//   <View style={styles.card}>
//     <View style={styles.cardHeader}>
//       <Text style={styles.cardTitle}>תיאור</Text>
//     </View>
//     <View style={styles.cardContent}>
//       <TextInput
//         style={styles.cardInput}
//         // onChangeText={(text) => onChangeText(text)}
//         // value={value}
//       />
//     </View>
//   </View>
//   <View style={styles.card}>
//     <View style={styles.cardHeader}>
//       <Text style={styles.cardTitle}>Description</Text>
//     </View>
//     <View style={styles.cardContent}>
//       <Text style={styles.description}>{this.state.product.description}</Text>
//     </View>
//   </View>
//   <View style={styles.card}>
//     <View style={styles.cardHeader}>
//       <Text style={styles.cardTitle}>Description</Text>
//     </View>
//     <View style={styles.cardContent}>
//       <Text style={styles.description}>{this.state.product.description}</Text>
//     </View>
//   </View>
//   <View style={styles.card}>
//     <View style={styles.cardHeader}>
//       <Text style={styles.cardTitle}>Description</Text>
//     </View>
//     <View style={styles.cardContent}>
//       <Text style={styles.description}>{this.state.product.description}</Text>
//     </View>
//   </View>

//   <View style={styles.card}>
//     <View style={styles.cardContent}>
//       <TouchableOpacity
//         style={styles.shareButton}
//         onPress={() => this.clickEventListener()}
//       >
//         <Text style={styles.shareButtonText}>Add To Cart</Text>
//       </TouchableOpacity>
//     </View>
//   </View>
// </ScrollView>;
