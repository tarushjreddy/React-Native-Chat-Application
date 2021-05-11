// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import * as firebase from "firebase";
// Optionally import the services that you want to use
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDvMXqCf8UmqZ3-jUCCLu-8ae2iQ-0jBg8",
  authDomain: "signal-build-native.firebaseapp.com",
  projectId: "signal-build-native",
  storageBucket: "signal-build-native.appspot.com",
  messagingSenderId: "518789577757",
  appId: "1:518789577757:web:f66e3947bd347479061af4",
  measurementId: "G-ZGTFCZXM1F",
};

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
