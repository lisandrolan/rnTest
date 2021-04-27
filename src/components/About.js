// About.js

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class AboutScreen extends Component {
  render() {
    return (
      <View style={styles.textStyle}>
        <Text>Welcome, About Screen</Text>
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
});

export default AboutScreen;
