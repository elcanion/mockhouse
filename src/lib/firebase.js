import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyArnvEKwGNxEhLaq0wC_WB7VPi4t1kIIAg", 
    authDomain: "siad-69fc4.firebaseapp.com",  
    projectId: "siad-69fc4",  
    storageBucket: "siad-69fc4.appspot.com",  
    messagingSenderId: "1059746105248",  
    appId: "1:1059746105248:web:aa058350c003aed2b246c5"  
  };
  

firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
export { auth, firebase };