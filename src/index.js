import './sass/main.scss';
// import getRefs from './js/get-refs';
import MoviesApiService from './js/api-service';
import './js/search-and-fetch';
import './js/render-markup';
import './js/load-more-btn';
import './js/lightbox';
import './js/sign-in';
import './js/fb';
import './js/auth';
import './js/my-watchlist';

import { onPageLoading } from './js/search-and-fetch';
import checkLoggedInState from './js/my-watchlist';
import { loggedInState } from './js/auth';
import { bodyClassAdd, bodyClassRemove, lightboxClassAdd, lightboxClassRemove, resetMovieContainer } from './js/lightbox';
import { showLoadBtn, hideLoadBtn, smoothScroll } from './js/load-more-btn';
import { appendAllMoviesCardsMarkup } from './js/render-markup';


// const refs = getRefs();
// const moviesApiService = new MoviesApiService();

// refs.searchForm.addEventListener('submit', onSearch);
// refs.gallery.addEventListener('click', onMovieClick);
// refs.closeBtn.addEventListener('click', onBtnCloseModalClick);
// refs.lightbox.addEventListener('click', onLightboxClickCloseModal);
// document.addEventListener('keydown', onEscapeKeydown);
// refs.loadBtn.addEventListener('click', onLoadMore);
console.log(loggedInState);

onPageLoading();
// checkLoggedInState(loggedInState);

// function onPageLoading() {
//     fetchUpcomingMov();
//     fetchAllMov();
//     showLoadBtn();
// }

// function onSearch(e) {
//     e.preventDefault();
// 	const searchQuery = queryTrasform(e.currentTarget.elements.searchQuery.value);
//     console.log(searchQuery);

//     // moviesApiService.query = searchQuery;
//     fetchSearchMovies(searchQuery);

// }

// async function onLoadMore() {
//     // try {
//     //     const res = await moviesApiService.fetchAllMovies();
//     //     const data = res.results;
//     //     // console.log(data);

//     //     appendAllMoviesCardsMarkup(data);
//     //     smoothScroll();
//     // } catch (error) {
//     //     console.log(error.message);
//     // }
//     // smoothScroll();
//     fetchAllMov();
// }

// function queryTrasform (query) {
//     if (query === '') {
//         return;
//     }

//     const trasformedQuery = query.trim().toLowerCase().split(' ').join('+');
//     return trasformedQuery;
// }

// function onMovieClick(e) {
//     console.log(e);
//     if(!e.target.classList.contains('movie__card')) {
//         return;
//     }

// 	const targetMovie = e.target;
//     const movieId = targetMovie.getAttribute('data-id');
//     console.log(targetMovie);
//     console.log(movieId);

//     fetchMovieDetails(movieId);
//     bodyClassAdd();
//     lightboxClassAdd();
// }

// function onBtnCloseModalClick() {
// 	lightboxClassRemove();
//     bodyClassRemove();
//     resetMovieContainer();
// }

// function onLightboxClickCloseModal(e) {
// 	const targetEl = e.target;

// 	if (!targetEl.classList.contains('lightbox')) {
// 		return;
// 	}

// 	lightboxClassRemove();
//     bodyClassRemove();
//     resetMovieContainer();
// }

// function onEscapeKeydown(e) {
// 	if (e.code !== 'Escape') {
// 		return;
// 	}

// 	lightboxClassRemove();
//     bodyClassRemove();
//     resetMovieContainer();
// }