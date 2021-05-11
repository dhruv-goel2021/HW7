const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyDgBJ54AFSx1j0gWrGooygFEIFOT7SnLvA",
    authDomain: "kiei-week-7.firebaseapp.com",
    projectId: "kiei-week-7",
    storageBucket: "kiei-week-7.appspot.com",
    messagingSenderId: "759381741186",
    appId: "1:759381741186:web:bc9df16dccbfc6e6e6ee9b"
} // replace

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase