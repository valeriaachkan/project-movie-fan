import getRefs from './get-refs';

const refs = getRefs();

function checkLoggedInState(state) {
	if (state) {
		showNavLogout();
		hideNavSignin();
	} else {
		showNavSignin();
		hideNavLogout();
	}
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

export { checkLoggedInState };
