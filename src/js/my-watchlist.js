import getRefs from './get-refs';
// import { loggedInState } from './auth';

const refs = getRefs();

export default function checkLoggedInState(state) {
    if(state) {
        showNavWatchlist();
        showNavLogout();
        hideNavSignin();
    } else {
        showNavSignin();
        hideNavLogout();
        hideNavWatchlist();
    }
}


function showNavWatchlist() {
    refs.navWatchlist.classList.remove('visually-hidden');
}

function hideNavWatchlist() {
    refs.navWatchlist.classList.add('visually-hidden');
}

function showNavSignin() {
    refs.navSignin.classList.remove('visually-hidden');
}

function hideNavSignin() {
    refs.navSignin.classList.add('visually-hidden');
}

function showNavLogout() {
    refs.navLogout.classList.remove('visually-hidden');
}

function hideNavLogout() {
    refs.navLogout.classList.add('visually-hidden');
}