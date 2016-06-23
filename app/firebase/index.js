import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyAp-da4fUEx_lXqXoRgUpMs83lEQIB6B8o",
    authDomain: "rg-todo-app.firebaseapp.com",
    databaseURL: "https://rg-todo-app.firebaseio.com",
    storageBucket: "rg-todo-app.appspot.com",
  };

  firebase.initializeApp(config);
  console.log("Firebase is running...");
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
