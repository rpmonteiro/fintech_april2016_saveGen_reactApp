import React, {
  Component,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';
import {styles} from './styles.ios.js';
import {setTheme, MKColor, MKButton, MKIconToggle} from 'react-native-material-kit';

var SubmitButton = React.createClass({
  render : function () {
    return (
        <TouchableHighlight
          style={styles.button}
          underlayColor="#B5B5B5"
          onPress={this.props.onPress}>
          <Text style={styles.menuText}>Submit</Text>
        </TouchableHighlight>
      )
  }
})

var TrackerIcon = React.createClass({
  render: function () {
    return (
      <View style={styles.trackerListItem}>
        <MKIconToggle
          checked={true}
          onCheckedChange={this.props.onChange.bind(null, this.props.type)}
          onPress={this._onIconClicked}>
          <Text state_checked={true}
                pointerEvents="none"
                style={styles.toggleTextOff}>{this.props.type}</Text>
          <Text pointerEvents="none"
                style={[styles.toggleText, styles.toggleTextOn]}>{this.props.type}</Text>
        </MKIconToggle>
      </View>
    ) 
  }
})

var TrackerList = React.createClass({
  getInitialState: function () {
    return {
      trackers: []
    }
  },
  submitTrackers: function () {
    var theForm = new FormData();
    theForm.append("vices", this.state.trackers.join(","));
    console.log(theForm);
    fetch("https://savegen.eu-gb.mybluemix.net/api/users/404/vices", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/x-www-form-urlencoded"
      }),
      body: theForm
    }).then(function (response) {
      console.log("it worked! (or didnt error), response:", response)
    }).catch(function (error) {
      console.log("something went wrong:", error)
    }).done();
  },
  iconOnChange: function (type, checkedState) {
    var newState = this.state.trackers;
    console.log("called");
    console.log(newState);
    console.log(this.state.trackers);
    if (!checkedState.checked) {
      console.log("item was checked")
      newState.push(type)
    } else {
      console.log("item was not checked", checkedState)
      newState.splice(newState.indexOf(type), 1);
    }
    this.setState({trackers: newState});
  },
  render: function () {
    var trackers = [
      {component: <TrackerIcon type={"Coffee"} key="1" onChange={this.iconOnChange} />},
      {component: <TrackerIcon type={"Clothes"} key="2" onChange={this.iconOnChange} />},
      {component: <TrackerIcon type={"Gadgets"} key="3" onChange={this.iconOnChange} />},
      {component: <TrackerIcon type={"Drinks"} key="4" onChange={this.iconOnChange} />},
    ];
    return (
        <View style={styles.trackerListForm}>
          {trackers.map(function (item) {
            return item.component;
          })}
          <SubmitButton onPress={this.submitTrackers} />
        </View>
      )
  }
})


export {TrackerList};