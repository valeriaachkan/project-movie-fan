import { getMovieList } from './db';
import MoviesApiService from './api-service';
import getRefs from './get-refs';
import { appendMyMovieListMarkup, renderErrorPage } from './render-markup';
import { lightboxClassAdd, bodyClassAdd } from './lightbox';
import {
	showMyListSection,
	showLoginPopup,
	hideMovieDetails,
	hideGallerySection,
	scrollToTopFunction,
} from './show-hide-partials';

const refs = getRefs();
const moviesApiService = new MoviesApiService();

refs.myListLink.addEventListener('click', onMyListLink);

async function onMyListLink() {
	const loggedInState = localStorage.getItem('logged-in-state');

	if (loggedInState === 'true') {
		hideGallerySection();
		showMyListSection();
		renderMyList();
		return;
	}
	hideMovieDetails();
	lightboxClassAdd();
	bodyClassAdd();
	showLoginPopup();
}

export default async function renderMyList() {
	const movies = await getMovieList();

	if (movies.length == 0) {
		return;
	}

	try {
		const promises = movies.map((id) =>
			moviesApiService.fetchMovieDetailsList(id)
		);
		const movieList = await Promise.all(promises);
		console.log(movieList);
		appendMyMovieListMarkup(movieList);
		changeHeadingOnMyListPage();
		scrollToTopFunction();
	} catch (error) {
		renderErrorPage();
		console.log(error.message);
	}
}

function changeHeadingOnMyListPage() {
	const markup = `<h1 class="hero__heading">Add new item</h1>`;
	refs.headingThumb.innerHTML = markup;
}
