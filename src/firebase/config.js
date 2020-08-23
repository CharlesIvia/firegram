import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBZEw3R6Ueohfg8od6p9GKjMS9r6XTYx9E",
  authDomain: "firegram-a089f.firebaseapp.com",
  databaseURL: "https://firegram-a089f.firebaseio.com",
  projectId: "firegram-a089f",
  storageBucket: "firegram-a089f.appspot.com",
  messagingSenderId: "207633480526",
  appId: "1:207633480526:web:f38e51889854b945713c1f",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
