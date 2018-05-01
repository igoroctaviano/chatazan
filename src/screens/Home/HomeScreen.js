import React from "react";
import {
  View,
  Text,
  Button,
  Image,
  TouchableHighlight,
  FlatList
} from "react-native";

import styles from "./styles";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chats: [
        {
          key: "1",
          username: "Igor Octaviano",
          lastMessage: "last message..."
        },
        { key: "2", username: "Sabrina Alves", lastMessage: "last message..." },
        {
          key: "3",
          username: "Larissa Oliveira",
          lastMessage: "last message..."
        },
        {
          key: "4",
          username: "Gabriel Octaviano",
          lastMessage: "last message..."
        },
        { key: "5", username: "Thiago Castro", lastMessage: "last message..." },
        {
          key: "6",
          username: "Marcos Moreira",
          lastMessage: "last message..."
        },
        {
          key: "7",
          username: "Sebastião Augusto",
          lastMessage: "last message..."
        },
        {
          key: "8",
          username: "Augusto Ribeiro",
          lastMessage: "last message..."
        }
      ]
    };

    this.onOpenChat = this.onOpenChat.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  static navigationOptions = {
    headerTitle: <Header onSearch={this.onSearch} />,
    headerStyle: {
      backgroundColor: "#6B5CBB"
    },
    headerTintColor: "#fff"
  };

  onOpenChat = () => this.props.navigation.navigate("Chat");

  onSearch = () => console.log("Testing!");

  render() {
    return (
      <FlatList
        style={styles.timeline}
        data={this.state.chats}
        renderItem={({ item }) => (
          <ChatItem
            key={item.key}
            username={item.username}
            lastMessage={item.lastMessage}
            onPress={this.onOpenChat}
          />
        )}
      />
    );
  }
}

function Header(props) {
  return (
    <View style={{ flex:1, justifyContent: "space-around", alignItems: 'center', flexDirection: "row" }}>
      <Text style={{ fontSize: 25, color: "white", fontWeight: "bold" }}>
        Chatazan
      </Text>
      <Button onPress={props.onPress} color="white" title="Search" />
    </View>
  );
}

function ChatItem(props) {
  return (
    <TouchableHighlight onPress={props.onPress}>
      <View style={{ flexDirection: "row", padding: 15 }}>
        <Image
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            marginRight: 10,
            backgroundColor: "white"
          }}
        />
        <View style={{ justifyContent: "center" }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
            {props.username}
          </Text>
          <Text style={{ color: "white" }}> {props.lastMessage}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}
