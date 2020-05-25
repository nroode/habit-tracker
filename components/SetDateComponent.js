import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import firebase from '../config/firestore';

class SetDateComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      days: [],
    };
  }
  setSchedule() {
    // Firestore reference
    const db = firebase.firestore().collection('habits').doc('running');
    let day = document.getElementsByName('day');
    let setDays = [];

    for (let i = 0; i < day.length; i++) {
      day[i].checked ? setDays.push(day[i].value) : null;
    }
    this.setState({
      days: setDays,
    });

    db.update({
      days: setDays,
    })
      .then(function (db) {
        console.log('Document written with ID: ', db.id);
      })
      .catch(function (error) {
        console.error('Error adding document: ', error);
      });
  }

  render() {

    return (
      <SafeAreaView>
        <View>
          <Text>
            <form method="get">
              <input
                type="checkbox"
                name="day"
                value="Sunday"
                onChange={(e) => this.setSchedule()}
              />
              <label>Sun</label>
              <input
                type="checkbox"
                name="day"
                value="Monday"
                onChange={(e) => this.setSchedule()}
              />
              <label>Mon</label>
              <input
                type="checkbox"
                name="day"
                value="Tuesday"
                onChange={(e) => this.setSchedule()}
              />
              <label>Tues</label>
              <input
                type="checkbox"
                name="day"
                value="Wednesday"
                onChange={(e) => this.setSchedule()}
              />
              <label>Wed</label>
              <input
                type="checkbox"
                name="day"
                value="Thursday"
                onChange={(e) => this.setSchedule()}
              />
              <label>Thurs</label>
              <input
                type="checkbox"
                name="day"
                value="Friday"
                onChange={(e) => this.setSchedule()}
              />
              <label>Fri</label>
              <input
                type="checkbox"
                name="day"
                value="Saturday"
                onChange={(e) => this.setSchedule()}
              />
              <label>Sat</label>
            </form>
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default SetDateComponent;
