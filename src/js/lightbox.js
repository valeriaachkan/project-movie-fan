import getRefs from './get-refs';

const refs = getRefs();

refs.closeBtn.addEventListener('click', onBtnCloseModalClick);
refs.lightbox.addEventListener('click', onLightboxClickCloseModal);
document.addEventListener('keydown', onEscapeKeydown);

function onBtnCloseModalClick() {
	lightboxClassRemove();
    bodyClassRemove();
    resetMovieContainer();
}

function onLightboxClickCloseModal(e) {
	const targetEl = e.target;

	if (!targetEl.classList.contains('lightbox')) {
		return;
	}

	lightboxClassRemove();
    bodyClassRemove();
    resetMovieContainer();
}

function onEscapeKeydown(e) {
	if (e.code !== 'Escape') {
		return;
	}

	lightboxClassRemove();
    bodyClassRemove();
    resetMovieContainer();
}

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