import firebase from "firebase";

var config = {
    apiKey: "apiKey",
    authDomain: "drugme-5e199.firebaseapp.com",
    databaseURL: "https://drugme-5e199.firebaseio.com",
    storageBucket: "drugme-5e199.appspot.com",
    messagingSenderId: "601919834378"
};

export default firebase.initializeApp(config);
