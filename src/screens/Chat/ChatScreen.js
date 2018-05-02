import React from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  Image,
  ScrollView,
  FlatList
} from "react-native";

import styles from "./styles";

export default class ChatScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      messages: [
        { key: "1", text: "Hey dude!", isAnswer: false },
        {
          key: "2",
          text: "Hey! how are you?!",
          isAnswer: true
        },
        { key: "3", text: "Awesome!!!!", isAnswer: false },
        {
          key: "4",
          text: "Wooooooowwwww! thats amazing!!!!!!!",
          isAnswer: true
        }
      ]
    };

    this.onSendMessage = this.onSendMessage.bind(this);
  }

  static navigationOptions = {
    headerTitle: <Header onGoBack={this.onGoBack} />,
    headerStyle: {
      backgroundColor: "#6B5CBB",
      height: 60
    },
    headerTintColor: "#fff"
  };

  isEmpty = () => this.state.text.trim() !== "";

  onSendMessage() {
    if (this.isEmpty()) {
      this.setState(previousState => {
        previousState.messages.push({
          key: (this.state.messages.length + 1).toString(),
          text: this.state.text,
          isAnswer: false
        });
        const newMessages = previousState.messages;
        return { messages: newMessages, text: "" };
      });
    } else {
      this.setState({ text: "" });
    }
  }

  render() {
    return (
      <View style={styles.chat}>
        <Timeline messages={this.state.messages} />
        <InputBar
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
          onSendMessage={this.onSendMessage}
        />
      </View>
    );
  }
}

function Header(props) {
  return (
    <View style={styles.header}>
      <Image
        style={{
          width: 40,
          height: 40,
          borderRadius: 20,
          marginRight: 10,
          backgroundColor: "white"
        }}
      />
      <View>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
          Igor Octaviano
        </Text>
        <Text style={{ color: "white" }}>last seen on...</Text>
      </View>
    </View>
  );
}

function Message(props) {
  return (
    <View
      style={[
        styles.message,
        props.isAnswer ? styles.answerBaloon : styles.messageBaloon
      ]}
    >
      <Text style={{ fontWeight: "bold", color: "#6B5CBB" }}>
        Igor Octaviano
      </Text>
      <Text>{props.text}</Text>
    </View>
  );
}

function AutoScrollDownFlatList(props) {
  const scrollDown = () => {
    if (this.flatList) {
      this.flatList.scrollToEnd({ animated: true });
    }
  };

  return (
    <FlatList
      style={props.style}
      data={props.data}
      renderItem={props.renderItem}
      /* Keyboard popping up triggers a layout, so it fix messages behind keyboard.
       New chat messages arriving trigger content changes,
       so it also scrolls to the bottom, so you can see the messages. */
      ref={ref => (this.flatList = ref)}
      onContentSizeChange={this.scrollDown}
      onLayout={this.scrollDown}
    />
  );
}

function Timeline(props) {
  return (
    <AutoScrollDownFlatList
      style={styles.timeline}
      data={props.messages}
      renderItem={({ item }) => (
        <Message text={item.text} isAnswer={item.isAnswer} />
      )}
    />
  );
}

function InputBar(props) {
  return (
    <View style={styles.menu}>
      <TextInput
        style={{
          flex: 1,
          padding: 10,
          backgroundColor: "white",
          borderRadius: 15
        }}
        onChangeText={props.onChangeText}
        value={props.value}
        onSubmitEditing={props.onSendMessage}
        placeholder="Type a message"
      />
    </View>
  );
}
