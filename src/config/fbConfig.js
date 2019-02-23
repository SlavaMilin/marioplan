import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCWobxKjc5VHsS-SyD8m5DC6qKZjaR9d6o",
  authDomain: "net-nenja-marioplan.firebaseapp.com",
  databaseURL: "https://net-nenja-marioplan.firebaseio.com",
  projectId: "net-nenja-marioplan",
  storageBucket: "net-nenja-marioplan.appspot.com",
  messagingSenderId: "885565525475"
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;
