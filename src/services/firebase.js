import * as firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASECONFIG_API_KEY,
    authDomain:  process.env.REACT_APP_FIREBASECONFIG_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASECONFIG_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASECONFIG_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASECONFIG_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASECONFIG_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASECONFIG_APP_ID
  };


firebase.initializeApp(firebaseConfig);
export const fire =  firebase
const database = fire.database();
export default database;