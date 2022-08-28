import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyD_UJ5yKAQFoqJ-Yeh-ANtXmRXY7u86Bl0",
    authDomain: "complaint-5db05.firebaseapp.com",
    projectId: "complaint-5db05",
    storageBucket: "complaint-5db05.appspot.com",
    messagingSenderId: "1004884826569",
    appId: "1:1004884826569:web:89a307fbca54797760b018"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
