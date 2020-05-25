import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
  TouchableOpacity,
  TextInput,
  Text,
  View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import firebase from '../config/firestore';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this);

    this.state = {
      name: [],
      description: '',
      id: '',
    };
  }

  getData() {
    const db = firebase.firestore().collection('habits');

    db.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        console.log(doc.id, data);
        console.log('this type is ', typeof data);

        this.setState((data) => ({
          name: data.name.map((e) => e),
        }));
      });
    });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
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
