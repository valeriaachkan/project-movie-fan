import './sass/main.scss';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, onAuthStateChanged, connectAuthEmulator, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { } from 'firebase/database';

const ref = {
    loginEmail: document.querySelector('input#txtEmail'),
    loginPassword: document.querySelector('input#txtPassword'),
}


console.log(ref.loginEmail);
console.log(ref.loginPassword);

// const firebase = require('firebase');
// const firebaseui = require('firebaseui');
  
const firebaseApp = initializeApp({
	apiKey: 'AIzaSyCrZjddHvIGSq4G-PZ1kGIGoJwzZnrVDzA',
	authDomain: 'moviefan-aa8b6.firebaseapp.com',
	projectId: 'moviefan-aa8b6',
	storageBucket: 'moviefan-aa8b6.appspot.com',
	messagingSenderId: '260470795887',
	appId: '1:260470795887:web:2271b8c30ffe97b756e79a',
	measurementId: 'G-ZXMYVTH0B2',
});
const auth = getAuth(firebaseApp);
// connectAuthEmulator(auth, "http://localhost:9099")
// const ui = new firebaseui.auth.AuthUI(app.auth());
// console.log(ui);
onAuthStateChanged(auth, user => {
    if(user !== null) {
        console.log('logged in!');
    } else {
        console.log('No user');
    }
});

// const analytics = getAnalytics(app);