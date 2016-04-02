import React, {
  Component,
  Text,
  View,
  Image,
} from 'react-native';
import {styles} from './styles.ios.js';
import {setTheme, MKColor, MKButton} from 'react-native-material-kit';

let WelcomeScreen = React.createClass({
  render: function () {
    console.log('rendered welcome with props:', this.props)
    return (
      <View style={styles.windowContainer}>
        <View style={styles.mainContainer}>
          <WelcomeImage/>
          <WelcomeMessage/>
          <WelcomeCopywrite/>
        </View>
        <FooterButton goThrough={this.props.navigator.push} />
      </View>
    )
  }
});

let WelcomeMessage = React.createClass({
  render: function() {
    return (
      <View>
        <Text style={[styles.baseText, styles.welcomeText]}>
          Welcome!
        </Text>
      </View>
    )
  }
});

let WelcomeCopywrite = React.createClass({
  render: function() {
    return (
      <View>
        <Text style={styles.baseText}>
          Are you ready to save some money?
        </Text>
      </View>
    )
  }
});

let WelcomeImage = React.createClass({
  render: function() {
    return (
    <View style={styles.iconContainer}>
      <Image
        style={styles.icon}
        source={require('./assets/img/smileyGreen.png')}
      />
      <Image/>
    </View>
    )
  }
});

let FooterButton = React.createClass({
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
              id: 'shouldnotloadnaything',
              message: 'You just tapped through!'
            });
          }}>
          <Text pointerEvents="none"
                style={[styles.baseText, styles.buttonText]}>
            Yeah! Let's do it!
          </Text>
        </MKButton>
      </View>
    )
  }
});


export {WelcomeScreen};