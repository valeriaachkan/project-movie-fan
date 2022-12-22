import getRefs from './get-refs';

const refs = getRefs();

function lightboxClassAdd() {
    refs.lightbox.classList.add('is-open');
	refs.lightbox.classList.remove('lightbox--hidden');
}

function lightboxClassRemove() {
	refs.lightbox.classList.remove('is-open');
	refs.lightbox.classList.add('lightbox--hidden');
}

function bodyClassAdd() {
	refs.body.classList.add('modal-open');
}

function bodyClassRemove() {
	refs.body.classList.remove('modal-open');
}

function resetMovieContainer() {
	refs.movieContainer.innerHTML = '';
} 

export { bodyClassAdd, bodyClassRemove, lightboxClassAdd, lightboxClassRemove, resetMovieContainer };