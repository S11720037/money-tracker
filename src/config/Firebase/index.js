import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBbpct0hIaeZGS7WR1m48T8IKnoVp_kY1M',
  authDomain: 'moneytracker-9473e.firebaseapp.com',
  databaseURL: 'https://moneytracker-9473e-default-rtdb.firebaseio.com',
  projectId: 'moneytracker-9473e',
  storageBucket: 'moneytracker-9473e.appspot.com',
  messagingSenderId: '261335311170',
  appId: '1:261335311170:web:a991f6e4d362acc929dedb',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
