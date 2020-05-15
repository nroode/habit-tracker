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
import { MonoText } from '../components/StyledText';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.firestoreRef = firebase.firestore().collection('habits');

    this.state = {
      habitsArr: [],
    };
  }

  getCollection = (querySnapshot) => {
    const habitsArr = [];
    querySnapshot.forEach((res) => {
      const { name, id, description } = res.data();
      habitsArr.push({
        res,
        name,
        id,
        description,
      });
    });
    this.setState({
      habitsArr,
    });
  };

  componentDidMount() {
    firebase
      .database()
      .ref('habits')
      .on('value', (snapshot) => {
        const habitsArr = snapshot.val();
        this.setState({ habitsArr });
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
          {this.state.habitsArr.map((habit, i) => {
            return <ListItem key={i} title={habit} />;
          })}
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
