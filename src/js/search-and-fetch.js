import getRefs from './get-refs';
import MoviesApiService from './api-service';
import { smoothScroll } from './load-more-btn';
import { showLoadBtn } from './load-more-btn';
import {
	bodyClassAdd,
	lightboxClassAdd,
	checkPresenceMovInList,
} from './lightbox';
import {
	appendAllMoviesCardsMarkup,
	appendUpcomingMoviesCardsMarkup,
	appendCardsMarkupOnSearch,
	renderMovieDetails,
	renderErrorPage,
	renderNoSearchResults,
} from './render-markup.js';

const refs = getRefs();
const moviesApiService = new MoviesApiService();

refs.searchForm.addEventListener('submit', onSearch);
refs.gallery.addEventListener('click', onMovieClick);
refs.myListSection.addEventListener('click', onMovieClick);

function onPageLoading() {
	fetchUpcomingMov();
	fetchAllMov();
	showLoadBtn();
}

function onSearch(e) {
	e.preventDefault();
	const searchQuery = queryTrasform(e.currentTarget.elements.searchQuery.value);

	if (searchQuery === '') {
		renderNoSearchResults();
		return;
	}

	fetchSearchMovies(searchQuery);
}

function onMovieClick(e) {
	if (!e.target.classList.contains('movie__card')) {
		return;
	}

	const targetMovie = e.target;
	const movieId = targetMovie.getAttribute('data-id');
	const loggedInState = localStorage.getItem('logged-in-state');

	if (loggedInState === 'true') {
		checkPresenceMovInList(movieId);
	}

	fetchMovieDetails(movieId);
	bodyClassAdd();
	lightboxClassAdd();
}

function queryTrasform(query) {
	if (query === '') {
		return;
	}

	const trasformedQuery = query.trim().toLowerCase().split(' ').join('+');
	return trasformedQuery;
}

async function fetchUpcomingMov() {
	try {
		const res = await moviesApiService.fetchUpcomingMovies();
		const data = res.results;
		const movies = data.filter((movie) => {
			return movie.popularity >= 20 && movie.vote_average >= 7.5;
		});

		appendUpcomingMoviesCardsMarkup(movies);
	} catch (error) {
		renderErrorPage();
		console.log(error.message);
	}
}

async function fetchAllMov() {
	try {
		const res = await moviesApiService.fetchAllMovies();
		const data = res.results;

		appendAllMoviesCardsMarkup(data);

		if (moviesApiService.page > 2) {
			smoothScroll();
		}
	} catch (error) {
		renderErrorPage();
		console.log(error.message);
	}
}

async function fetchSearchMovies(query) {
	moviesApiService.query = query;
	try {
		const res = await moviesApiService.fetchMovie();
		const data = res.results;
		const movies = data.filter((movie) => {
			return movie.popularity >= 10;
		});

		if (movies.length == 0) {
			renderNoSearchResults();
			return;
		}

		appendCardsMarkupOnSearch(movies);
	} catch (error) {
		renderErrorPage();
		console.log(error.message);
	}
}

async function fetchMovieDetails(movieId) {
	moviesApiService.id = movieId;
	try {
		const res = await moviesApiService.fetchMovieDetails();
		renderMovieDetails(res);
	} catch (error) {
		renderErrorPage();
		console.log(error.message);
	}
}

export {
	fetchAllMov,
	fetchUpcomingMov,
	fetchSearchMovies,
	fetchMovieDetails,
	onPageLoading,
};
