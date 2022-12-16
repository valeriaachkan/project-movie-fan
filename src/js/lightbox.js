import getRefs from './get-refs';

const refs = getRefs();

function lightboxClassAdd() {
    refs.lightbox.classList.add('is-open');
}

function lightboxClassRemove() {
	refs.lightbox.classList.remove('is-open');
}

function bodyClassAdd() {
	refs.body.classList.add('modal-open');
}

function bodyClassRemove() {
	refs.body.classList.remove('modal-open');
}

export { bodyClassAdd, bodyClassRemove, lightboxClassAdd, lightboxClassRemove };