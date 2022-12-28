import getRefs from "./get-refs";

const refs = getRefs();

console.log(refs.inputEmail.value);

refs.signinLink.addEventListener('click', onSigninLink);
// refs.joinWithEmail.addEventListener('click', onJoinWithEmail);
refs.loginLink.addEventListener('click', onLoginLink);

function onSigninLink() {
	console.log('fddjbvcjkd');
	showSigninSection();
	hideHeroSection();
	hideGallerySection();
}

function onJoinWithEmail() {
	hideJoinSection();
	showSignupEmailSection();

}

function onLoginLink() {
	showLoginSection();
	hideSignupEmailSection();
}

// function onLoginError() {

// }

function showSigninSection() {
	refs.signinSection.classList.remove('visually-hidden');
}

function hideSigninSection() {
	refs.signinSection.classList.add('visually-hidden');
}

function showJoinSection() {
	refs.joinSection.classList.remove('visually-hidden');
}

function hideJoinSection() {
	refs.joinSection.classList.add('visually-hidden');
}

function showLoginSection() {
	refs.loginSection.classList.remove('visually-hidden');
}

function hideLoginSection() {
	refs.loginSection.classList.add('visually-hidden');
}

function showSignupEmailSection() {
	refs.signupEmailSection.classList.remove('visually-hidden');
}

function hideSignupEmailSection() {
	refs.signupEmailSection.classList.add('visually-hidden');
}

function showGallerySection() {
	refs.gallery.classList.remove('visually-hidden');
}

function hideGallerySection() {
	refs.gallery.classList.add('visually-hidden');
}

function showHeroSection() {
	refs.heroSection.classList.remove('visually-hidden');
}

function hideHeroSection() {
	refs. heroSection.classList.add('visually-hidden');
}
