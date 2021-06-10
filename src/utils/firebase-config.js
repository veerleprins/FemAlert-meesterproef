// Externals
import firebase from 'firebase'

// Firebase configuration
let config = {
  apiKey: process.env.SAPPER_APP_KEY,
  authDomain: process.env.SAPPER_APP_AUTH,
  projectId: process.env.SAPPER_APP_DB_PROJECT_ID,
  storageBucket: process.env.SAPPER_APP_DB_BUCKET,
  messagingSenderId: process.env.SAPPER_APP_DB_MESSAGE_ID,
  appId: process.env.SAPPER_APP_DB_APP_ID,
}

// Initialize Firebase
firebase.initializeApp(config)

// Exporting fire store
export const db = firebase.firestore()
