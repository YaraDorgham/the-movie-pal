import firebase from "firebase"; 
 
 var firebaseConfig =  {
    apiKey: "AIzaSyBGcqsSwamMYXl1C95KOdfhSkb9bMsViFM",
    authDomain: "the-movie-pal.firebaseapp.com",
    projectId: "the-movie-pal",
    storageBucket: "the-movie-pal.appspot.com",
    messagingSenderId: "679129437307",
    appId: "1:679129437307:web:37ce1430bec07a31b5fede"
  };

  var fireDb = firebase.initializeApp(firebaseConfig);  
  
export default fireDb;  