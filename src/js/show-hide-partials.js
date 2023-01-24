import getRefs from './get-refs';
const refs = getRefs();

// my-watchlist
function showLoginPopup() {
	refs.loginPopup.classList.remove('visually-hidden');
}

function hideLoginPopup() {
	refs.loginPopup.classList.add('visually-hidden');
}

function showMovieDetails() {
	refs.movieDetails.classList.remove('visually-hidden');
}

function hideMovieDetails() {
	refs.movieDetails.classList.add('visually-hidden');
}

//render-my-list
function scrollToTopFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

//sign-in
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
	refs.heroSection.classList.add('visually-hidden');
}

function showMyListSection() {
	refs.myListSection.classList.remove('visually-hidden');
}

function hideMyListSection() {
	refs.myListSection.classList.add('visually-hidden');
}

export {
	showMyListSection,
	hideMyListSection,
	showLoginPopup,
	hideLoginPopup,
	showMovieDetails,
	hideMovieDetails,
	showGallerySection,
	hideGallerySection,
	showHeroSection,
	hideHeroSection,
	scrollToTopFunction,
};
