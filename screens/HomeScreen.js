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
    this.getData = this.getData.bind(this);
  }

  getData() {
    let firestore = firebase.firestore();
    const docRef = firestore.collection('habits');

    docRef
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, ' => ', doc.data());
        });
      })
      .catch(function (error) {
        console.log('Error getting documents: ', error);
      });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          {this.getData}
          <TestComponent></TestComponent>
        </View>
        <View style={styles.button}>
          <Button title="Continue" color="#19AC52" />
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
