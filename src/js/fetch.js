import MoviesApiService from './api-service';
import { appendAllMoviesCardsMarkup, appendUpcomingMoviesCardsMarkup, appendCardsMarkupOnSearch } from './render-markup.js';

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
    } catch (error) {
        console.log(error.message);
    }
}

async function fetchSearchMovies() {
    try {
        const res = await moviesApiService.fetchMovie();
        const data = res.results;
        const movies = data.filter(movie => { return movie.popularity >= 10});
        // console.log(movies);

        appendCardsMarkupOnSearch(movies);
    } catch (error) {
        console.log(error.message);
    }
}

export { fetchAllMov, fetchUpcomingMov, fetchSearchMovies }