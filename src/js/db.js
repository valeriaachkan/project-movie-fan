import { getFirestore } from 'firebase/firestore';
import {
	getDoc,
	doc,
	setDoc,
	updateDoc,
	arrayUnion,
	arrayRemove,
} from 'firebase/firestore';

const db = getFirestore();

export function newUserDb(userId, newUser) {
	const userList = doc(db, `users/${userId}`);

	setDoc(userList, newUser);
}

export async function addMovieToUserList(movieId) {
	const userId = localStorage.getItem('user-id');
	const movieListRef = doc(db, 'users', userId);

	try {
		await updateDoc(movieListRef, { movies: arrayUnion(`${movieId}`) });
	} catch (error) {
		console.log(error.message);
	}
}

export async function removeMovieFromUserList(movieId) {
	const userId = localStorage.getItem('user-id');
	const movieListRef = doc(db, 'users', userId);

	try {
		await updateDoc(movieListRef, { movies: arrayRemove(`${movieId}`) });
	} catch (error) {
		console.log(error.message);
	}
}

export async function getMovieList() {
	const userId = localStorage.getItem('user-id');
	const userDataRef = doc(db, 'users', userId);
	const dataSnap = await getDoc(userDataRef);

	if (dataSnap.exists()) {
		const data = dataSnap.data();
		const movies = data.movies;

		return movies;
	}
}
