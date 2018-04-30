import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

export default class SignUp extends React.Component {
  render() {
    return <View style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
