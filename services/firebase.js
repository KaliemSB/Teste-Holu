import firebase from "firebase";
import 'firebase/database'

var firebaseConfig = {
  apiKey: "AIzaSyCUpzylVIGqpEPS2ADYkF5VSiK87EsHMfI",
  authDomain: "teste-holu.firebaseapp.com",
  projectId: "teste-holu",
  storageBucket: "teste-holu.appspot.com",
  messagingSenderId: "96808424457",
  appId: "1:96808424457:web:ab016718687ad8abf314d8"
};

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig).database() : firebase.app().database();