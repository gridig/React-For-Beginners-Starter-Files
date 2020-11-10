import Rebase from "re-base";
import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyATagw61hG2nMbQKa8BJHeekI2CEZY1hLU",
  authDomain: "catch-of-the-day-igor-a.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-igor-a.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;
