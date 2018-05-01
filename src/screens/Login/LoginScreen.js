import React from "react";
import { View, Text } from "react-native";

import styles from './styles';

export default class LoginScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>Chatazana</Text>
        <View>
          <TextInput placeholder="Type your username" />
          <TextInput placeholder="Type your password" />
        </View>
        <Button>Login</Button>
      </View>
    );
  }
}
