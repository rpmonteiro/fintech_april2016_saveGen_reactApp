import React, {
  Component,
  Text,
  SliderIOS,
  View,
  Image,
} from 'react-native';
import {styles} from './styles.ios.js';
import {setTheme, MKColor, MKButton} from 'react-native-material-kit';

let Survey1 = React.createClass({
  render: function() {
    return(
      <View style={styles.mainContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.baseText}>
            Tell us a bit more about how you feel regarding your finances
          </Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.baseText}>
            Slider goes in here
          </Text>
        </View>
      </View>
    )
  }
});

var Slider = React.createClass({
  getInitialState() {
    return {
      value: 0,
    };
  },

  render() {
    return (
      <View>
        <Text style={styles.baseText} >
          {this.state.value}
        </Text>
        <SliderIOS
          {...this.props}
          onValueChange={(value) => this.setState({value: value})} />
      </View>
    );
  }
});

export {Survey1};