/* eslint-disable react/prop-types */
// Home.js

import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.textStyle}>
        <Text>Welcome, Home Screen</Text>
        <TouchableOpacity
          style={styles.buttonContainerStyle}
          onPress={() => this.props.navigation.navigate('About')}>
          <Text style={styles.buttonTextStyle}>Open About Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainerStyle}
          onPress={() => this.props.navigation.navigate('Webview')}>
          <Text style={styles.buttonTextStyle}>Open WebView Screen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainerStyle: {
    backgroundColor: '#222',
    borderRadius: 5,
    padding: 10,
    margin: 20,
  },
  buttonTextStyle: {
    fontSize: 20,
    color: '#fff',
  },
});

export default HomeScreen;
