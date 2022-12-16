import getRefs from './get-refs';
import searchCardsTpl from '/src/templates/movie-cards-on-search.hbs';
import cardsTpl from '/src/templates/movie-cards.hbs';

const refs = getRefs();

function appendAllMoviesCardsMarkup(movies) {
    refs.allMovieList.insertAdjacentHTML('beforeend', cardsTpl(movies));
}

function appendUpcomingMoviesCardsMarkup(movies) {
    refs.upcomingMovieList.innerHTML = cardsTpl(movies);
}

function appendCardsMarkupOnSearch(movies) {
    refs.gallery.innerHTML = searchCardsTpl(movies);
}

export { appendAllMoviesCardsMarkup, appendUpcomingMoviesCardsMarkup, appendCardsMarkupOnSearch };