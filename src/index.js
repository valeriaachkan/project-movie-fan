import './sass/main.scss';
import getRefs from './js/get-refs';
import MoviesApiService from './js/api-service';
import searchCardsTpl from './templates/movie-cards-on-search.hbs';
import cardsTpl from './templates/movie-cards.hbs';

const refs = getRefs();
const moviesApiService = new MoviesApiService();

refs.searchForm.addEventListener('submit', onSearch);

onPageLoading();

function onPageLoading() {
    fetchUpcomingMov();
}

async function fetchUpcomingMov() {
    try {
        const res = await moviesApiService.fetchUpcomingMovies();
        const data = res.results;
        const movies = data.filter(movie => { return movie.popularity >= 20 && movie.vote_average >= 7.5});
        console.log(movies);

        appendCardsMarkupOnPageLoading(movies);
    } catch (error) {
        console.log(error.message);
    }
}

function onSearch(e) {
    e.preventDefault();
	const searchQuery = queryTrasform(e.currentTarget.elements.searchQuery.value);
    console.log(searchQuery);

    moviesApiService.query = searchQuery;
    fetchMovies();

}
function appendCardsMarkupOnPageLoading(movies) {
    refs.upcomingMovieList.innerHTML = cardsTpl(movies);
}

async function fetchMovies() {
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

function appendCardsMarkupOnSearch(movies) {
    refs.gallery.innerHTML = searchCardsTpl(movies);
}

function queryTrasform (query) {
    if (query === '') {
        return;
    }

    const trasformedQuery = query.trim().toLowerCase().split(' ').join('+');
    return trasformedQuery;
}