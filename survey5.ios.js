import React, {
  Component,
  Text,
  StyleSheet,
  SliderIOS,
  View,
  Image,
} from 'react-native';
import {styles} from './styles.ios.js';
import {setTheme, MKColor, MKButton} from 'react-native-material-kit';
import {NextButton} from './buttons.ios.js'

let Survey5 = React.createClass({
  render: function() {
    return(
      <View style={styles.windowContainer}>
        <View style={styles.textContainer}>
          <Text style={[styles.addMargin, styles.baseText]}>
            How is your credit card situation? Any debts?
          </Text>
        </View>
        <View style={styles.sliderContainer}>
          <Slider />
        </View>
        <NextButton goThrough={this.props.navigator.push} goTo={'welcome'}/>
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
    var image;
    if (this.state.value === 0) {
      image = require('./assets/img/sad.png');
    } else if (this.state.value === 0.5) {
      image = require('./assets/img/neutral.png');
    } else if (this.state.value === 1) {
      image = require('./assets/img/happy.png');
    }
    return (
      <View>
        <SliderIOS
          thumbImage={image}
          step={0.5}
          onValueChange={(value) => this.setState({value: value})} />
      </View>
    );
  }
});

export {Survey5};