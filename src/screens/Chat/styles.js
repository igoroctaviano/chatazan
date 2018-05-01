import { StyleSheet, Platform, StatusBar } from 'react-native';

const screenPadding = 10;

export default StyleSheet.create({
  chat: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
    backgroundColor: '#6B5CBB'
  },
  message: {
    padding: 10,
    marginTop: 15
  },
  menu: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: screenPadding,
    paddingRight: screenPadding
  },
  timeline: {
    flex: 7,
    flexGrow: 7,
    paddingLeft: screenPadding,
    paddingRight: screenPadding
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  answerBaloon: {
    alignSelf: 'flex-start',
    backgroundColor: 'white',
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderTopRightRadius: 15
  },
  messageBaloon: {
    alignSelf: 'flex-end',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15
  }
});
