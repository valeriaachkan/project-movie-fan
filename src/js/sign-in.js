import MoviesApiService from './api-service';
import getRefs from './get-refs';
import {
	hideGallerySection,
	hideHeroSection,
	scrollToTopFunction,
} from './show-hide-partials';

const refs = getRefs();

refs.signinLink.addEventListener('click', onSigninLink);
refs.loginLink.addEventListener('click', onLoginLink);

const moviesApiService = new MoviesApiService();

function onSigninLink() {
	scrollToTopFunction();
	showSigninSection();
	hideHeroSection();
	hideGallerySection();
}

function onLoginLink() {
	showLoginSection();
	scrollToTopFunction();
	hideSignupEmailSection();
}

function showSigninSection() {
	refs.signinSection.classList.remove('visually-hidden');
}

function hideSigninSection() {
	refs.signinSection.classList.add('visually-hidden');
}

function showLoginSection() {
	refs.loginSection.classList.remove('visually-hidden');
}

function hideSignupEmailSection() {
	refs.signupEmailSection.classList.add('visually-hidden');
}

export { hideSigninSection };
