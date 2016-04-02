/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Navigator,
  ScrollView,
  TouchableHighlight
} from 'react-native';
import {styles} from './styles.ios.js';
import {WelcomeScreen} from './welcome.ios.js';
import {FormScreen} from './form.ios.js';
import {Survey1} from './survey1.ios.js'
// import {Survey1} from './survey1.ios.js'
// import {Survey1} from './survey1.ios.js'
// import {Survey1} from './survey1.ios.js'

class Main extends Component {
  renderScene(route, nav) {
    switch (route.id) {
      case 'welcome':
        return <WelcomeScreen navigator={nav} />;
      case 'survey':
        return <Survey1 navigator={nav} />;
      case 'slider':
        return <SliderExample navigator={nav} />;
      default:
        return (
          <NavMenu
            message={route.message}
            navigator={nav}
          />
        );
    }
  }
  render() {
    return (
      <Navigator
        ref={this._setNavigatorRef}
        style={styles.container}
        initialRoute={{ id: 'welcome', }}
        renderScene={this.renderScene}
        configureScene={(route) => {
          if (route.sceneConfig) {
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.FloatFromBottom;
        }}
      />
      );
  }

  componentWillUnmount() {
    this._listeners && this._listeners.forEach(listener => listener.remove());
  }


  _setNavigatorRef(navigator) {
    if (navigator !== this._navigator) {
      this._navigator = navigator;

      if (navigator) {
        var callback = (event) => {
          console.log(
            `TabBarExample: event ${event.type}`,
            {
              route: JSON.stringify(event.data.route),
              target: event.target,
              type: event.type,
            }
          );
        };
        // Observe focus change events from the owner.
        this._listeners = [
          navigator.navigationContext.addListener('willfocus', callback),
          navigator.navigationContext.addListener('didfocus', callback),
        ];
      }
    }
  }

}

class NavMenu extends React.Component {
  render() {
    return (
      <ScrollView>
        <Text style={styles.messageText}>{this.props.message}</Text>
        <NavButton
          onPress={() => {
            this.props.navigator.push({
              id: 'survey',
              sceneConfig: Navigator.SceneConfigs.FloatFromBottom,
            });
          }}
          text="Take me to the survey"
        />
        <NavButton
          onPress={() => {
            this.props.navigator.push({
              id: 'SliderExample',
              sceneConfig: Navigator.SceneConfigs.FloatFromBottom,
            });
          }}
          text="Take me to the slider"
        />
      </ScrollView>
    );
  }
}

class NavButton extends React.Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.button}
        underlayColor="#B5B5B5"
        onPress={this.props.onPress}>
        <Text style={styles.menuText}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}

////////////////////////
////////////////////////
////////////////////////
////////////////////////

var SliderExample = React.createClass({
  getInitialState() {
    return {
      value: 0,
    };
  },

  render() {
    return (
      <View>
        <Text style={styles2.text} >
          {this.state.value}
        </Text>
        <SliderIOS
          {...this.props}
          onValueChange={(value) => this.setState({value: value})} />
      </View>
    );
  }
});

var styles2 = StyleSheet.create({
  slider: {
    height: 10,
    margin: 10,
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
    margin: 10,
  },
});

exports.title = '<SliderIOS>';
exports.displayName = 'SliderExample';
exports.description = 'Slider input for numeric values';
exports.examples = [
  {
    title: 'Default settings',
    render(): ReactElement {
      return <SliderExample />;
    }
  },
  {
    title: 'minimumValue: -1, maximumValue: 2',
    render(): ReactElement {
      return (
        <SliderExample
          minimumValue={-1}
          maximumValue={2}
        />
      );
    }
  },
  {
    title: 'step: 0.25',
    render(): ReactElement {
      return <SliderExample step={0.25} />;
    }
  },
  {
    title: 'Custom min/max track tint color',
    render(): ReactElement {
      return (
        <SliderExample
          minimumTrackTintColor={'red'}
          maximumTrackTintColor={'green'}
        />
      );
    }
  },
  {
    title: 'Custom thumb image',
    render(): ReactElement {
      return <SliderExample thumbImage={require('./uie_thumb_big.png')} />;
    }
  },
  {
    title: 'Custom track image',
    render(): ReactElement {
      return <SliderExample trackImage={require('./slider.png')} />;
    }
  },
  {
    title: 'Custom min/max track image',
    render(): ReactElement {
      return (
        <SliderExample
          minimumTrackImage={require('./slider-left.png')}
          maximumTrackImage={require('./slider-right.png')}
        />
      );
    }
  },
];

AppRegistry.registerComponent('saveGen', () => Main);