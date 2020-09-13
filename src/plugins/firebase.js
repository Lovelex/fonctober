import firebase from 'firebase/app'

import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBXmmugpAx0HrqFL3WsBAIWMSZBozOfmZo",
  authDomain: "fonctober.firebaseapp.com",
  databaseURL: "https://fonctober.firebaseio.com",
  projectId: "fonctober",
  storageBucket: "fonctober.appspot.com",
  messagingSenderId: "103711239964",
  appId: "1:103711239964:web:c8347e780030dbd850d4d9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore()
const auth = firebaseApp.auth()
const storage = firebaseApp.storage()

export { db, auth, storage }