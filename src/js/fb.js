import getRefs from './get-refs';
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, onAuthStateChanged, connectAuthEmulator, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
// import 'firebase/database';

const refs = getRefs();
// const firebase = require('firebase');
// const firebaseui = require('firebaseui');
  
export const firebaseApp = initializeApp({
	apiKey: 'AIzaSyCrZjddHvIGSq4G-PZ1kGIGoJwzZnrVDzA',
	authDomain: 'moviefan-aa8b6.firebaseapp.com',
	projectId: 'moviefan-aa8b6',
	storageBucket: 'moviefan-aa8b6.appspot.com',
	messagingSenderId: '260470795887',
	appId: '1:260470795887:web:2271b8c30ffe97b756e79a',
	measurementId: 'G-ZXMYVTH0B2',
});
const database = getDatabase(firebaseApp);

// console.log(database);