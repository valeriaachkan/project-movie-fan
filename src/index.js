import './sass/main.scss';
import getRefs from './js/get-refs';
import MoviesApiService from './js/api-service';
import { fetchAllMov, fetchUpcomingMov, fetchSearchMovies } from './js/fetch';
import { bodyClassAdd, bodyClassRemove, lightboxClassAdd, lightboxClassRemove } from './js/lightbox';

const refs = getRefs();
const moviesApiService = new MoviesApiService();

refs.searchForm.addEventListener('submit', onSearch);
refs.gallery.addEventListener('click', onMovieClick);
refs.closeBtn.addEventListener('click', onBtnCloseModalClick);
refs.lightbox.addEventListener('click', onLightboxClickCloseModal);
document.addEventListener('keydown', onEscapeKeydown);

onPageLoading();

function onPageLoading() {
    fetchUpcomingMov();
    fetchAllMov();
}

function onSearch(e) {
    e.preventDefault();
	const searchQuery = queryTrasform(e.currentTarget.elements.searchQuery.value);
    console.log(searchQuery);

    moviesApiService.query = searchQuery;
    fetchSearchMovies();

}

function queryTrasform (query) {
    if (query === '') {
        return;
    }

    const trasformedQuery = query.trim().toLowerCase().split(' ').join('+');
    return trasformedQuery;
}

const options = {
	rootMargin: '400px',
};
const callback = (entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			fetchAllMov();
		}
	});
};
const observer = new IntersectionObserver(callback, options);

observer.observe(refs.sentinel);

function onMovieClick(e) {
    console.log(e);
    if(!e.target.classList.contains('movie__card')) {
        return;
    }

	const targetMovie = e.target;
    console.log(targetMovie);

    bodyClassAdd();
    lightboxClassAdd();
}

function onBtnCloseModalClick() {
	lightboxClassRemove();
    bodyClassRemove();
}

function onLightboxClickCloseModal(e) {
	const targetEl = e.target;

	if (!targetEl.classList.contains('lightbox__overlay')) {
		return;
	}

	lightboxClassRemove();
    bodyClassRemove();
}

function onEscapeKeydown(e) {
	if (e.code !== 'Escape') {
		return;
	}

	lightboxClassRemove();
    bodyClassRemove();
}