import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Chats extends React.Component {
  render() {
    return (
      <View style={styles.chats}>
        <View style={styles.header}>
          <View style={styles.timeline}>
            <View>

            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
