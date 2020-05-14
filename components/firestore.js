import * as firebase from 'firebase';
import "firebase/firestore";

// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyDAcXiSQ0d0mUfdgFs_tco7yRBdKqpIyGA",
  authDomain: "habits-1b9ab.firebaseapp.com",
  databaseURL: "https://habits-1b9ab.firebaseio.com",
  projectId: "habits-1b9ab",
  storageBucket: "habits-1b9ab.appspot.com",
  messagingSenderId: "1030050050826",
  appId: "1:1030050050826:web:1b32c82fdad2892e7f00f3",
  measurementId: "G-W9VX4DKZQX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

