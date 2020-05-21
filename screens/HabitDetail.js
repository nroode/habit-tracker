import * as WebBrowser from 'expo-web-browser';
import React, { Component, useState } from 'react';
import {
  StyleSheet,
  Button,
  TouchableOpacity,
  TextInput,
  Alert,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import firebase from '../config/firestore';
import SetDateComponent from '../components/SetDateComponent';

class HabitDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView>
        <View>
          <Text>
            <h1>Running</h1>
            <h2>Set routine</h2>
            <SetDateComponent></SetDateComponent>
            <h2>Set time</h2>
          </Text>
        </View>
        <View>
          <Button
            title="Confirm"
            onPress={() => Alert.alert('Simple Button pressed')}
          ></Button>
        </View>
      </SafeAreaView>
    );
  }
}

export default HabitDetail;
