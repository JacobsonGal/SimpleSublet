import React, { useState, useCallback, useEffect, Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  TextInput,
  FlatList,
  Button,
  Dimensions,
  KeyboardAvoidingView,
  SafeAreaView,
} from "react-native";
import { GiftedChat } from "react-native-gifted-chat";

export function Example() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "This is a quick reply. Do you love Gifted Chat?",
        createdAt: new Date(),
        quickReplies: {
          type: "checkbox", // or 'checkbox',
          keepIt: true,
          values: [
            {
              title: "😋 Yes",
              value: "yes",
            },
            {
              title: "📷 Yes, let me show you with a picture!",
              value: "yes_picture",
            },
            // {
            //   title: "😞 Nope. What?",
            //   value: "no",
            // },
          ],
        },
        user: {
          _id: 2,
          name: "React Native",
          avatar:
            "https://media-exp1.licdn.com/dms/image/C4D03AQF_1rnZ2Nimmg/profile-displayphoto-shrink_400_400/0/1605471826895?e=1616025600&v=beta&t=03wepwEpwMSiNHluI6Td0dxajAOUB1C3FaDOVtdKKsk",
        },
      },
      {
        _id: 2,
        text: "This is a quick reply. Do you love Gifted Chat?",
        createdAt: new Date(),
        quickReplies: {
          type: "checkbox", // or 'radio',
          values: [
            {
              title: "Yes",
              value: "yes",
            },
            {
              title: "Yes, let me show you with a picture!",
              value: "yes_picture",
            },
            {
              title: "Nope. What?",
              value: "no",
            },
          ],
        },
        user: {
          _id: 1,
          name: "Gal Jacobson",
          avatar:
            "https://media-exp1.licdn.com/dms/image/C4D03AQF_1rnZ2Nimmg/profile-displayphoto-shrink_400_400/0/1605471826895?e=1616025600&v=beta&t=03wepwEpwMSiNHluI6Td0dxajAOUB1C3FaDOVtdKKsk",
        },
      },
      {
        // _id: 2,
        // text: "My message",
        // createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)),
        // user: {
        //   _id: 2,
        //   name: "React Native",
        //   avatar:
        //     "https://media-exp1.licdn.com/dms/image/C4D03AQF_1rnZ2Nimmg/profile-displayphoto-shrink_400_400/0/1605471826895?e=1616025600&v=beta&t=03wepwEpwMSiNHluI6Td0dxajAOUB1C3FaDOVtdKKsk",
        // },
        // image: "https://facebook.github.io/react/img/logo_og.png",
        // You can also add a video prop:
        // video:
        //   "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        // Mark the message as sent, using one tick
        sent: true,
        // Mark the message as received, using two tick
        received: true,
        // Mark the message as pending with a clock loader
        // pending: true,
        // Any additional custom parameters are passed through
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 2,
      }}
    />
  );
}
const { width, height } = Dimensions.get("window");
export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "",
      users: [
        {
          id: 1,
          description: "Gal Jacobson",
          image:
            "https://media-exp1.licdn.com/dms/image/C4D03AQF_1rnZ2Nimmg/profile-displayphoto-shrink_400_400/0/1605471826895?e=1616025600&v=beta&t=03wepwEpwMSiNHluI6Td0dxajAOUB1C3FaDOVtdKKsk",
        },
        {
          id: 2,
          description: "Dan Mor",
          image:
            "https://media-exp1.licdn.com/dms/image/C4E03AQFGzKboo0ZmHA/profile-displayphoto-shrink_100_100/0/1572585145860?e=1616025600&v=beta&t=k1y8m7KDzmyOiKHEfvaQ0grHyDFAPSBlIGZtSiAnVbU",
        },
      ],
      messages: [
        {
          id: 1,
          sent: true,
          msg: "היי אחי ! \n  אני שואל לגבי הדירה",
          image:
            "https://media-exp1.licdn.com/dms/image/C4D03AQF_1rnZ2Nimmg/profile-displayphoto-shrink_400_400/0/1605471826895?e=1616025600&v=beta&t=03wepwEpwMSiNHluI6Td0dxajAOUB1C3FaDOVtdKKsk",
        },
        {
          id: 2,
          sent: true,
          msg: "sit amet, consectetuer",
          image: "https://www.bootdey.com/img/Content/avatar/avatar1.png",
        },
        {
          id: 3,
          sent: false,
          msg: "adipiscing elit. Aenean ",
          image: "https://www.bootdey.com/img/Content/avatar/avatar6.png",
        },
        {
          id: 4,
          sent: true,
          msg: "commodo ligula eget dolor.",
          image: "https://www.bootdey.com/img/Content/avatar/avatar1.png",
        },
        {
          id: 5,
          sent: false,
          msg:
            "Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes",
          image: "https://www.bootdey.com/img/Content/avatar/avatar6.png",
        },
        {
          id: 6,
          sent: true,
          msg:
            "nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo",
          image: "https://www.bootdey.com/img/Content/avatar/avatar1.png",
        },
        {
          id: 7,
          sent: false,
          msg: "rhoncus ut, imperdiet",
          image: "https://www.bootdey.com/img/Content/avatar/avatar6.png",
        },
        {
          id: 8,
          sent: false,
          msg: "a, venenatis vitae",
          image: "https://www.bootdey.com/img/Content/avatar/avatar6.png",
        },
      ],
    };
    this.send = this.send.bind(this);
    this.reply = this.reply.bind(this);
    this.renderItem = this._renderItem.bind(this);
  }

  reply() {
    var messages = this.state.messages;
    messages.push({
      id: Math.floor(Math.random() * 99999999999999999 + 1),
      sent: false,
      msg: this.state.msg,
      image: this.state.image,
      //   image:
      //     "https://media-exp1.licdn.com/dms/image/C4D03AQF_1rnZ2Nimmg/profile-displayphoto-shrink_400_400/0/1605471826895?e=1616025600&v=beta&t=03wepwEpwMSiNHluI6Td0dxajAOUB1C3FaDOVtdKKsk",
    });
    this.setState({ msg: "", messages: messages });
  }

  send() {
    if (this.state.msg.length > 0) {
      var messages = this.state.messages;
      messages.push({
        id: Math.floor(Math.random() * 99999999999999999 + 1),
        sent: true,
        msg: this.state.msg,
        image: this.state.image,
        //   image:
        //     "https://media-exp1.licdn.com/dms/image/C4D03AQF_1rnZ2Nimmg/profile-displayphoto-shrink_400_400/0/1605471826895?e=1616025600&v=beta&t=03wepwEpwMSiNHluI6Td0dxajAOUB1C3FaDOVtdKKsk",
      });
      this.setState({ messages: messages });
      setTimeout(() => {
        this.reply();
      }, 2000);
    }
  }

  _renderItem = ({ item }) => {
    if (item.sent === false) {
      return (
        <View style={styles.eachMsg}>
          <Image source={{ uri: item.image }} style={styles.userPic} />
          <View style={styles.msgBlock}>
            <Text style={styles.msgTxt}>{item.msg}</Text>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.rightMsg}>
          <View style={styles.rightBlock}>
            <Text style={styles.rightTxt}>{item.msg}</Text>
          </View>
          <Image source={{ uri: item.image }} style={styles.userPic} />
        </View>
      );
    }
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Example />
        {/* <KeyboardAvoidingView behavior="padding" style={styles.keyboard}>
          <FlatList
            style={styles.list}
            extraData={this.state}
            data={this.state.messages}
            keyExtractor={(item) => {
              return item.id;
            }}
            renderItem={this.renderItem}
          />
          <View style={styles.input}>
            <TextInput
              style={{ flex: 1 }}
              value={this.state.msg}
              placeholderTextColor="#696969"
              onChangeText={(msg) => this.setState({ msg })}
              blurOnSubmit={false}
              onSubmitEditing={() => this.send()}
              placeholder="Type a message"
              returnKeyType="send"
            />
          </View>
        </KeyboardAvoidingView>
       */}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  keyboard: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    width,
    height,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#075e54",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  right: {
    flexDirection: "row",
  },
  chatTitle: {
    color: "#fff",
    fontWeight: "600",
    margin: 10,
    fontSize: 15,
  },
  chatImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    margin: 5,
  },
  input: {
    flexDirection: "row",
    alignSelf: "flex-end",
    padding: 10,
    height: 40,
    width: width - 20,
    backgroundColor: "#fff",
    margin: 10,
    shadowColor: "#3d3d3d",
    shadowRadius: 2,
    shadowOpacity: 0.5,
    borderRadius: 15,
    shadowOffset: {
      height: 1,
    },
    borderColor: "#696969",
    borderWidth: 1,
  },
  eachMsg: {
    flexDirection: "row",
    alignItems: "flex-end",
    margin: 5,
  },
  rightMsg: {
    flexDirection: "row",
    alignItems: "flex-end",
    margin: 5,
    alignSelf: "flex-end",
  },
  userPic: {
    height: 40,
    width: 40,
    margin: 5,
    borderRadius: 20,
    backgroundColor: "#f8f8f8",
  },
  msgBlock: {
    width: 220,
    borderRadius: 5,
    backgroundColor: "#ffffff",
    padding: 10,
    shadowColor: "#3d3d3d",
    shadowRadius: 2,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 1,
    },
  },
  rightBlock: {
    width: 220,
    borderRadius: 5,
    backgroundColor: "#97c163",
    padding: 10,
    shadowColor: "#3d3d3d",
    shadowRadius: 2,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 1,
    },
  },
  msgTxt: {
    fontSize: 15,
    color: "#555",
    fontWeight: "600",
  },
  rightTxt: {
    fontSize: 15,
    color: "#202020",
    fontWeight: "600",
  },
});
