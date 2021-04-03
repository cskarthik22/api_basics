import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import APP from './JSX/App';
import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAlA0tvzahGR7fkzSbYH9RN9d3GOwpnLFA",
  authDomain: "my-cart-c18bf.firebaseapp.com",
  projectId: "my-cart-c18bf",
  storageBucket: "my-cart-c18bf.appspot.com",
  messagingSenderId: "307494522528",
  appId: "1:307494522528:web:e0d391decfefa5736d43c5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
ReactDOM.render(
  <React.StrictMode>
    <APP />
  </React.StrictMode>,
  document.getElementById('root')
);
