import React, {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  windowContainer: {
    flexDirection: 'column',
    flex: 1,
  },
  mainContainer: {
    alignItems: 'center',
    flex: 1,
  },
  footerContainer: {
    alignItems: 'center',
    flex: 0.2,
  },
  textContainer: {
    marginTop: 30,
    alignItems: 'center',
    flex: 0.2,
  },
  iconContainer: {
    alignItems: 'center',
  },
  baseText: {
    textAlign: 'center',
    fontFamily: 'Avenir',
    fontSize: 20,
  },
  buttonText: {
    fontWeight: '900',
    color: 'white',
  },
  copywriteText: {
    fontSize: 20,
  },
  welcomeText: {
    fontSize: 40,
    color: 'black',
  },
  icon: {
    margin: 70,
    justifyContent: 'center',
    height: 300,
    width: 300,
  },
  textfieldWithFloatingLabel: {
    height: 70,  // have to do it on iOS
    marginTop: 30,
  },
  row: {
    flexDirection: 'row',
  },
  col: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: 7, marginRight: 7,
  },
  menuText: {
    fontWeight: '900',
  },
  trackerContainer: {
    flexDirection: 'row',
  },
  trackerIcon: {
    flex : 1,
    width: 120,
    height: 120,
  },
});

export {styles};