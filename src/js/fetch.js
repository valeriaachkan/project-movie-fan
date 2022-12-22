import MoviesApiService from './api-service';
import { smoothScroll } from './load-more-btn';
import { appendAllMoviesCardsMarkup, appendUpcomingMoviesCardsMarkup, appendCardsMarkupOnSearch, renderMovieDetails } from './render-markup.js';

const moviesApiService = new MoviesApiService();

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

export { fetchAllMov, fetchUpcomingMov, fetchSearchMovies, fetchMovieDetails }