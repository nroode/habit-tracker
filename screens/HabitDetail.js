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
import { ScrollView } from 'react-native-gesture-handler';
import firebase from '../config/firestore';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();

class HabitDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView>
        <View>
          <Text>
            <h1>Drink Water</h1>
            <h2>Select recurring days</h2>
            <form method="get">
              <input type="checkbox" value="Sunday" />
              <label>Sun</label>
              <input type="checkbox" value="Monday" />
              <label>Mon</label>
              <input type="checkbox" value="Tuesday" />
              <label>Tues</label>
              <input type="checkbox" value="Wednesday" />
              <label>Wed</label>
              <input type="checkbox" value="Thursday" />
              <label>Thurs</label>
              <input type="checkbox" value="Friday" />
              <label>Fri</label>
              <input type="checkbox" value="Saturday" />
              <label>Sat</label>
            </form>

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
