import React from "react";
import {
  View,
  Text,
  Button,
  Image,
  TouchableHighlight,
  FlatList,
  Platform,
  TextInput
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
      ],
      isOnSearch: false,
      filter: ""
    };

    this.onOpenChat = this.onOpenChat.bind(this);
    this.toggleSearchBar = this.toggleSearchBar.bind(this);
  }

  static navigationOptions = { header: null };

  onOpenChat() {
    this.props.navigation.navigate("Chat");
  }

  toggleSearchBar() {
    this.setState(previousState => ({ isOnSearch: !previousState.isOnSearch }));
  }

  render() {
    return (
      <View>
        {this.state.isOnSearch ? (
          <SearchBar
            onGoBack={this.toggleSearchBar}
            onTypingSearch={filter => this.setState({ filter })}
            value={this.state.filter}
          />
        ) : (
          <Header onSearch={this.toggleSearchBar} />
        )}
        <FlatList
          style={styles.timeline}
          data={this.state.chats.filter(
            chat => chat.username.indexOf(this.state.filter) > -1
          )}
          renderItem={({ item }) => (
            <ChatItem
              key={item.key}
              username={item.username}
              lastMessage={item.lastMessage}
              onPress={this.onOpenChat}
            />
          )}
        />
      </View>
    );
  }
}

function SearchBar(props) {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 80,
        paddingLeft: 15,
        alignItems: "center",
        backgroundColor: "#6B5CBB",
        paddingTop: Platform.OS === "ios" ? 20 : StatusBar.currentHeight
      }}
    >
      <Button title="<" color="white" onPress={props.onGoBack} />
      <TextInput
        style={{
          paddingLeft: 15,
          backgroundColor: "#6B5CBB",
          color: "white",
          fontSize: 18
        }}
        placeholder="Search..."
        placeholderTextColor="white"
        value={props.filter}
        onChangeText={props.onTypingSearch}
      />
    </View>
  );
}

function Header(props) {
  return (
    <View
      style={{
        height: 80,
        backgroundColor: "#6B5CBB",
        justifyContent: "space-around",
        paddingTop: Platform.OS === "ios" ? 20 : StatusBar.currentHeight,
        alignItems: "center",
        flexDirection: "row"
      }}
    >
      <Text style={{ fontSize: 25, color: "white", fontWeight: "bold" }}>
        Chatazan
      </Text>
      <Button onPress={props.onSearch} color="white" title="Search" />
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
          <Text style={{ fontWeight: "bold", color: "white" }}>
            {props.username}
          </Text>
          <Text style={{ color: "white" }}> {props.lastMessage}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}
