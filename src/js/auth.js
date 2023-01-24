import getRefs from './get-refs';
import { firebaseApp } from './fb';
import {
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signOut,
} from 'firebase/auth';
import { newUserDb } from './db';
import { checkLoggedInState } from './my-watchlist';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { notifySettings } from './render-markup';
import { lightboxClassRemove, bodyClassRemove } from './lightbox';
import renderMyList from './render-my-list';
import { hideSigninSection } from './sign-in';
import { onPageLoading } from './search-and-fetch';
import { 
	hideLoginPopup,
	showGallerySection,
	hideGallerySection,
	showHeroSection,
	scrollToTopFunction,
	showMyListSection,
} from './show-hide-partials';

const refs = getRefs();
const auth = getAuth(firebaseApp);
refs.loginForm.addEventListener('submit', onLogin);
refs.loginFormPopup.addEventListener('submit', onLogin);
refs.btnSignup.addEventListener('click', onSignup);
refs.btnLogout.addEventListener('click', onLogout);

async function onLogin(e) {
	e.preventDefault();
	const formId = e.currentTarget.id;

	const email = e.currentTarget.elements.email.value;
	const password = e.currentTarget.elements.password.value;
	try {
		await signInWithEmailAndPassword(auth, email, password);
		Notify.success('You are successfully logged in!', notifySettings);

		if (formId == 'login-form-popup') {
			lightboxClassRemove();
			bodyClassRemove();
			hideLoginPopup();
			return;
		}
		renderMyList();
		showMyListSection();
		hideGallerySection();
		showHeroSection();
		hideSigninSection();
	} catch (error) {
		console.log(error.message);
		Notify.failure(
			'Looks like you don`t have an account. Try again or sign up.',
			notifySettings
		);
	}
}

async function onSignup(e) {
	e.preventDefault();
	const userCredentials = {
		userName: refs.inputUserName.value,
		email: refs.inputEmail.value,
		password: refs.inputPassword.value,
		rptPassword: refs.inputRptPassword.value,
	};

	if (userCredentials.password !== userCredentials.rptPassword) {
		Notify.info(
			'Passwords do not match, please enter the same passwords',
			notifySettings
		);
	} else {
		try {
			await createUser(userCredentials);
			hideSigninSection();
			showHeroSection();
			showGallerySection();
			onPageLoading();
			scrollToTopFunction();
		} catch (error) {
			console.log(error.message);
			Notify.failure(
				'Looks like you already have an account. Try again or log in.',
				notifySettings
			);
		}
	}
}

async function onLogout() {
	try {
		await signOut(auth);
		localStorage.removeItem('user-id');
		Notify.success('You are logged out!', notifySettings);
	} catch (error) {
		console.log(error.message);
	}
}

async function createUser({ userName, email, password }) {
	try {
		const userCredentials = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);
		Notify.success(
			'You are successfully signed in! Lets add movies to your watchlist.',
			notifySettings
		);

		const currentUser = {
			name: userName,
			movies: [],
		};

		newUserDb(userCredentials.user.uid, currentUser);
	} catch (error) {
		console.log(error.message);
		Notify.failure(
			'Looks like you already have an account. Try again or log in.',
			notifySettings
		);
	}
}

onAuthStateChanged(auth, (user) => {
	let loggedInState = false;

	if (user !== null) {
		loggedInState = true;
		checkLoggedInState(loggedInState);
		const currentUserId = user.uid;

		localStorage.setItem('user-id', currentUserId);
		localStorage.setItem('logged-in-state', loggedInState);
	} else {
		checkLoggedInState(loggedInState);
		localStorage.setItem('logged-in-state', loggedInState);
	}
});
