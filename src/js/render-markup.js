import getRefs from './get-refs';
import searchCardsTpl from '/src/templates/movie-cards-on-search.hbs';
import cardsTpl from '/src/templates/movie-cards.hbs';
import movieDetailsTpl from '/src/templates/movie-details-lightbox.hbs';

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

function renderMovieDetails(data) {
    refs.movieContainer.insertAdjacentHTML('afterbegin', movieDetailsTpl(data));
}

export { appendAllMoviesCardsMarkup, appendUpcomingMoviesCardsMarkup, appendCardsMarkupOnSearch, renderMovieDetails };