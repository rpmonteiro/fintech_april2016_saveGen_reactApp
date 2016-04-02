/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  SliderIOS,
  View,
  Navigator,
  ScrollView,
  TouchableHighlight
} from 'react-native';
import {styles} from './styles.ios.js';
import {WelcomeScreen} from './welcome.ios.js';
import {FormScreen} from './form.ios.js';
import {TrackerList} from './tracker-form.ios.js';
import {Survey1} from './survey1.ios.js'
import {Survey2} from './survey2.ios.js'
import {Survey3} from './survey3.ios.js'
import {Survey4} from './survey4.ios.js'
import {Survey5} from './survey5.ios.js'
import {Dashboard} from './dashboard.ios.js';

class Main extends Component {
  renderScene(route, nav) {
    switch (route.id) {
      case 'welcome':
        return <WelcomeScreen navigator={nav} />;
      case 'trackers':
        return <TrackerList navigator={nav} />;
      case 'dashboard':
        return <Dashboard navigator={nav} />;
      case 'surveyStart':
        return <Survey1 navigator={nav} />;
      case 'survey1':
        return <Survey2 navigator={nav} />
      case 'surveyQuestion1':
        return <Survey2 navigator={nav} />
      case 'surveyQuestion2':
        return <Survey3 navigator={nav} />
      case 'surveyQuestion3':
        return <Survey4 navigator={nav} />
      case 'surveyQuestion4':
        return <Survey5 navigator={nav} />
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
              id: 'surveyStart',
              sceneConfig: Navigator.SceneConfigs.FloatFromBottom,
            });
          }}
          text="Take me to the surveyStart"
        />
        <NavButton
          onPress={() => {
            this.props.navigator.push({
              id: 'survey1',
              sceneConfig: Navigator.SceneConfigs.FloatFromBottom,
            });
          }}
          text="The first survey question"
        />
        <NavButton
          onPress={() => {
            this.props.navigator.push({
              id: 'dashboard',
              sceneConfig: Navigator.SceneConfigs.FloatFromBottom,
            });
          }}
          text="Take me to the dashboard"
        />
        <NavButton
          onPress={() => {
            this.props.navigator.push({
              id: 'trackers',
              sceneConfig: Navigator.SceneConfigs.FloatFromBottom,
            });
          }}
          text="Click here to add a tracker"
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