// import something here

// "async" is optional
// export default async ({ /* app, router, Vue, ... */ }) => {
//   // something to do
// }
import firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyDpwGjOMmavsLVnKGhm4aymlE0UWVtVTqg',
  authDomain: 'message-d5717.firebaseapp.com',
  databaseURL: 'https://message-d5717.firebaseio.com',
  projectId: 'message-d5717',
  storageBucket: 'message-d5717.appspot.com',
  messagingSenderId: '731313429259',
  appId: '1:731313429259:web:1df96dbdc699ee07c4200e'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

var db = firebase.firestore()

window.db = db
