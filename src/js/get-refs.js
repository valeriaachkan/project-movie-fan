export default function getRefs() {
    return {
        searchForm: document.querySelector('form#search-form'),
        gallery: document.querySelector('div.gallery'),
        upcomingMovies: document.querySelector('section.upcoming-movies'),
        upcomingMovieList: document.querySelector('ul.movie__list--upcoming'),
        
    }
}