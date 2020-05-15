import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
  TouchableOpacity,
  TextInput,
  View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import firebase from '../config/firestore';
import TestComponent from '../components/TestComponent';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      habits: [],
    };
    console.log(`my state is: ${this.state.habits}`);
  }

  componentDidMount() {
    const habitsRef = firebase.database().ref('habit');
    console.log(`ref is ${habitsRef}`);
    habitsRef.on('value', (snapshot) => {
      let habits = snapshot.val();
      let habitArr = [];

      for (let habit in habits) {
        habitArr.push({
          id: habit,
          name: habit.name,
          description: habit.description,
        });
      }
      this.setState({
        habits: habitArr,
      });
    });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <h1>Welcome to Habit Tracker!</h1>
          <p>
            Microdosing brooklyn lomo, drinking vinegar dreamcatcher slow-carb
            helvetica. Chartreuse kickstarter vegan occupy jianbing bushwick
            swag godard prism unicorn locavore shabby chic offal meditation.
            Normcore four dollar toast occupy unicorn. Chillwave tattooed cliche
            man braid trust fund narwhal ugh live-edge banjo. Knausgaard
            drinking vinegar man braid tattooed everyday carry bicycle rights.
            Beard YOLO cardigan blog.
          </p>
          <h2>Render mock data here: </h2>
          {this.state.habits.map((habit) => {
            return (
              <div>
                <p>{habit.name}</p>
              </div>
            );
          })}
          <TestComponent></TestComponent>
        </View>
        <View style={styles.button}>
          <Button
            title="Continue"
            onPress={() => this.storeUser()}
            color="#19AC52"
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
