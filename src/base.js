import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import Rebase from 're-base';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAzv7uG-DL8cjN6KQcp9P4AbtA1BFpemEU',
  authDomain: 'catch-of-the-day-steve-r-4127f.firebaseapp.com',
  databaseURL:
    'https://catch-of-the-day-steve-r-4127f-default-rtdb.firebaseio.com',
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
