import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/analytics'

var firebaseConfig = {
  apiKey: "AIzaSyDGlWwqInc_QMbpxn1oQ2lmvjzyrwwJINo",
  authDomain: "kapok-test.firebaseapp.com",
  projectId: "kapok-test",
  storageBucket: "kapok-test.appspot.com",
  messagingSenderId: "97508664374",
  appId: "1:97508664374:web:75c7c63fcb0f2459566497",
  measurementId: "G-X4WQNYX8LS",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;