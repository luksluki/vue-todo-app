import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

db.settings({
  timestamosInSnapshots: true
});

export default db;