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
import {TrackerList} from './tracker-form.ios.js';

class Main extends Component {
  renderScene(route, nav) {
    switch (route.id) {
      case 'welcome':
        return <WelcomeScreen navigator={nav} />;
      case 'icons':
        return <TrackerList />;
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
              id: 'icons',
              sceneConfig: Navigator.SceneConfigs.FloatFromBottom,
            });
          }}
          text="Pick some Trackers"
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

AppRegistry.registerComponent('saveGen', () => Main);