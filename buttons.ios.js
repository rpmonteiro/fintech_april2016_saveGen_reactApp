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

let NextButton = React.createClass({
  render: function() {
    return(
      <View style={styles.footerContainer}>
        <MKButton
          backgroundColor={MKColor.LightGreen}
          width={300}
          shadowRadius={2}
          shadowOffset={{width:0, height:2}}
          shadowOpacity={.7}
          padding={10}
          shadowColor="black"
          onPress={() => {
            this.props.goThrough({
              id: this.props.goTo
            });
          }}>
          <Text pointerEvents="none"
                style={[styles.baseText, styles.buttonText]}>
            Next
          </Text>
        </MKButton>
      </View>
    )
  }
});

export {NextButton};