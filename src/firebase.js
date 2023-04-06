import firebase from 'firebase/compat/app'
import "firebase/compat/auth"
import "firebase/compat/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCc3mUJWjC63rf8C7C_xrDQKcm8pn9kMgs",
    authDomain: "clone-zach.firebaseapp.com",
    projectId: "clone-zach",
    storageBucket: "clone-zach.appspot.com",
    messagingSenderId: "477464706683",
    appId: "1:477464706683:web:52997958b744a92aaf2cde",
    measurementId: "G-CQDMX66XFF"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db,auth,provider};
export default firebaseApp;