import * as WebBrowser from 'expo-web-browser';
import React, { Component, useState } from 'react';
import {
  StyleSheet,
  Button,
  TouchableOpacity,
  TextInput,
  Alert,
  SafeAreaView,
  View,
  Text,
  ImageBackground
} from 'react-native';
import firebase from '../config/firestore';
import SetDateComponent from '../components/SetDateComponent';

class HabitDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ImageBackground 
        source={require('../assets/images/background-img.jpeg')} 
        style={styles.backgroundImage}>
        <SafeAreaView>
          <View style={styles.container}>
            <Text style={styles.heading}>Running</Text>
            <Text>Set routine</Text>
            <SetDateComponent></SetDateComponent>
            <Text>Set time</Text>
            <Button
              title="Confirm"
              onPress={() => Alert.alert('Simple Button pressed')}
            ></Button>
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}


var styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },

  heading: {
    fontSize: 50,
    textAlign: 'center'
  },
});

export default HabitDetail;
