import React, {
  Component,
  Text,
  View,
  Image,
} from 'react-native';
import {styles} from './styles.ios.js';
import {setTheme, MKColor, MKButton} from 'react-native-material-kit';

const MK = require('react-native-material-kit');
const {
  MKCardStyles
} = MK;

let Dashboard = React.createClass({
  render: function () {
    console.log('rendered welcome with props:', this.props)
    return (
      <View>
        <Text style={styles.baseText}>
          Hello
        </Text>
      </View>
    )
  }
});



export {Dashboard};