import getRefs from './get-refs';
import MoviesApiService from './api-service';
import { smoothScroll } from './load-more-btn';
import { showLoadBtn } from './load-more-btn';
import { bodyClassAdd, lightboxClassAdd } from './lightbox';
import { appendAllMoviesCardsMarkup, appendUpcomingMoviesCardsMarkup, appendCardsMarkupOnSearch, renderMovieDetails } from './render-markup.js';

const refs = getRefs();
const moviesApiService = new MoviesApiService();

refs.searchForm.addEventListener('submit', onSearch);
refs.gallery.addEventListener('click', onMovieClick);

function onPageLoading() {
    fetchUpcomingMov();
    fetchAllMov();
    showLoadBtn();
}

function onSearch(e) {
    e.preventDefault();
	const searchQuery = queryTrasform(e.currentTarget.elements.searchQuery.value);
    console.log(searchQuery);

    // moviesApiService.query = searchQuery;
    fetchSearchMovies(searchQuery);

}

function onMovieClick(e) {
    // console.log(e);
    if(!e.target.classList.contains('movie__card')) {
        return;
    }

	const targetMovie = e.target;
    const movieId = targetMovie.getAttribute('data-id');
    console.log(targetMovie);
    console.log(movieId);

    fetchMovieDetails(movieId);
    bodyClassAdd();
    lightboxClassAdd();
}

function queryTrasform (query) {
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
        const movies = data.filter(movie => { return movie.popularity >= 20 && movie.vote_average >= 7.5});
        // console.log(movies);

        appendUpcomingMoviesCardsMarkup(movies);
    } catch (error) {
        console.log(error.message);
    }
}

async function fetchAllMov() {
    try {
        const res = await moviesApiService.fetchAllMovies();
        const data = res.results;
        // console.log(data);

        appendAllMoviesCardsMarkup(data);

        if(moviesApiService.page > 2) {
            smoothScroll();
        }
    } catch (error) {
        console.log(error.message);
    }
}

async function fetchSearchMovies(query) {
    moviesApiService.query = query;
    try {
        const res = await moviesApiService.fetchMovie();
        const data = res.results;
        const movies = data.filter(movie => { return movie.popularity >= 10});
        console.log(movies);

        appendCardsMarkupOnSearch(movies);
    } catch (error) {
        console.log(error.message);
    }
}

async function fetchMovieDetails(movieId) {
    moviesApiService.id = movieId;
    try {
        const res = await moviesApiService.fetchMovieDetails();
        console.log(res);

        renderMovieDetails(res);

    } catch (error) {
        console.log(error.message);
    }
}

export { fetchAllMov, fetchUpcomingMov, fetchSearchMovies, fetchMovieDetails, onPageLoading }