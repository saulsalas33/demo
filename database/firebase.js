import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBzT_DVa92NG03J7V4j4Rytm7DfH3JH4fw",
  authDomain: "react-native-firebase-656cc.firebaseapp.com",
  projectId: "react-native-firebase-656cc",
  storageBucket: "react-native-firebase-656cc.appspot.com",
  messagingSenderId: "477944470415",
  appId: "1:477944470415:web:646eb8b6da7f5a8eefc9fa"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db
};
