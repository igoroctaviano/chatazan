import React, { Component } from "react";
import { Platform, StatusBar } from "react-native";
import { StackNavigator } from "react-navigation";

import ChatScreen from "./src/screens/Chat/ChatScreen";
import HomeScreen from "./src/screens/Home/HomeScreen";
import LoginScreen from "./src/screens/Login/LoginScreen";
import SignUpScreen from "./src/screens/SignUp/SignUpScreen";

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    SignUp: {
      screen: SignUpScreen
    },
    Login: {
      screen: LoginScreen
    },
    Chat: {
      screen: ChatScreen
    }
  },
  {
    initialRouteName: "Home"
  }
);

/* const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
}); */

// type Props = {};
// export default class App extends Component<Props> {
export default function App(props) {
  return <RootStack style={{ paddingTop: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight }} />;
}
