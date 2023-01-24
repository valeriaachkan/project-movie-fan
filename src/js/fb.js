import getRefs from './get-refs';
import { initializeApp } from 'firebase/app';

const refs = getRefs();

export const firebaseApp = initializeApp({
	apiKey: "AIzaSyCrZjddHvIGSq4G-PZ1kGIGoJwzZnrVDzA",
	authDomain: "moviefan-aa8b6.firebaseapp.com",
	databaseURL: "https://moviefan-aa8b6-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "moviefan-aa8b6",
	storageBucket: "moviefan-aa8b6.appspot.com",
	messagingSenderId: "260470795887",
	appId: "1:260470795887:web:2271b8c30ffe97b756e79a"
});
