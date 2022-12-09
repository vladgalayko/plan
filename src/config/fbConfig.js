import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore' 

// Replace this with your own config details
var config = {
    apiKey: "AIzaSyDyfKR2_BciwiZ7VZWlHKcJekZ8V__kXAY",
    authDomain: "mario-plan-e4c76.firebaseapp.com",
    projectId: "mario-plan-e4c76",
    storageBucket: "mario-plan-e4c76.appspot.com",
    messagingSenderId: "1060111527374",
    appId: "1:1060111527374:web:1fb6ac66d479d37b778f9f",
    measurementId: "G-B7K8T4EDH5"
  };
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true, merge: true });

export default firebase 
