import getRefs from './get-refs';
import { firebaseApp } from './fb'; 
// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, onAuthStateChanged, connectAuthEmulator, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import checkLoggedInState from './my-watchlist';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { notifySettings } from './render-markup';
// import 'firebase/database';

const refs = getRefs();

const auth = getAuth(firebaseApp);

refs.btnLogin.addEventListener('click', onLogin);
refs.btnSignup.addEventListener('click', onSignup);
refs.btnLogout.addEventListener('click', onLogout);

console.log(refs.inputEmail.value);
console.log(refs.inputPassword.value);

async function onLogin(e) {
    e.preventDefault();

    const email = refs.loginEmail.value;
    const password = refs.loginPassword.value;

    try {
        await signInWithEmailAndPassword(auth, email, password);
        Notify.success('You are successfully logged in!', notifySettings);
        // await loginEmailPassword(loginEmail, loginPassword);
    } catch (error) {
        console.log(error.message);
        Notify.failure('Looks like you don`t have an account. Try again or sign up.', notifySettings);
        // onLoginError();
    }
    
}

async function onSignup(e) {
    e.preventDefault();

    const email = refs.inputEmail.value;
    console.log(email);
    const password = refs.inputPassword.value;    

    try {
        await createUser(email, password);
        Notify.success('You are successfully signed in! Lets add movies to your watchlist.', notifySettings);
    } catch (error) {
        console.log(error.message);
        Notify.failure('Looks like you already have an account. Try again or log in.', notifySettings);
        // onSignupError();
    }
}

async function onLogout() {
    try {
        await signOut(auth);
        Notify.success('You are logged out!', notifySettings);
    } catch (error) {
        console.log(error.message);
    }
}

// connectAuthEmulator(auth, "http://localhost:9099");

// async function loginEmailPassword(email, password) {
//     await signInWithEmailAndPassword(auth, email, password);
// }

async function createUser(email, password) {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log(userCredential.user);
}






export let loggedInState = false;
// const ui = new firebaseui.auth.AuthUI(app.auth());
// console.log(ui);




onAuthStateChanged(auth, user => {
    if(user !== null) {
        loggedInState = true;
        checkLoggedInState(loggedInState);
        console.log('logged in!');
        console.log(user);
    } else {
        loggedInState = false;
        checkLoggedInState(loggedInState);
        console.log('No user');
    }
    return loggedInState;
});


// const analytics = getAnalytics(app);