export default function getRefs() {
    return {
        body: document.querySelector('body'),
        searchForm: document.querySelector('form#search-form'),
        gallery: document.querySelector('div.gallery'),
        upcomingMovies: document.querySelector('section.upcoming-movies'),
        upcomingMovieList: document.querySelector('ul.movie__list--upcoming'),
        allMovieList: document.querySelector('ul.movie__list--all'),
        sentinel: document.querySelector('#sentinel'),
        lightbox: document.querySelector('div.lightbox'),
        closeBtn: document.querySelector('[data-action="close-lightbox"]'),
    }
}