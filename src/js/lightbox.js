import getRefs from './get-refs';
import {
	addMovieToUserList,
	removeMovieFromUserList,
	getMovieList,
} from './db';
import {
	showLoginPopup,
	hideLoginPopup,
	showMovieDetails,
	hideMovieDetails,
} from './show-hide-partials';

const refs = getRefs();

refs.closeBtn.addEventListener('click', onBtnCloseModalClick);
refs.lightbox.addEventListener('click', onLightboxClickCloseModal);
refs.closePopupBtn.addEventListener('click', onBtnClickClosePopup);
document.addEventListener('keydown', onEscapeKeydown);
refs.movieContainer.addEventListener('click', onListBtn);

function onListBtn(e) {
	const el = e.target;
	const loggedInState = localStorage.getItem('logged-in-state');

	if (el.dataset.action === 'toList') {
		if (loggedInState === 'true') {
			const movieId = el.dataset.movid;

			addMovieToUserList(movieId);
			hideAddToListBtn();
			showRemoveFromListBtn();
			return;
		}
		hideMovieDetails();
		showLoginPopup();
	}
	if (el.dataset.action === 'fromList') {
		if (loggedInState) {
			const movieId = el.dataset.movid;
			removeMovieFromUserList(movieId);
			showAddToListBtn();
			hideRemoveFromListBtn();
		}
	}
	return;
}

export async function checkPresenceMovInList(movieId) {
	const movieList = await getMovieList();

	if (movieList.includes(movieId)) {
		hideAddToListBtn();
		showRemoveFromListBtn();
	}
	return;
}

function onBtnCloseModalClick() {
	lightboxClassRemove();
	bodyClassRemove();
	resetMovieContainer();
}

function onBtnClickClosePopup() {
	lightboxClassRemove();
	bodyClassRemove();
	hideLoginPopup();
	resetMovieContainer();
	showMovieDetails();
}

function onLightboxClickCloseModal(e) {
	const targetEl = e.target;

	if (!targetEl.classList.contains('lightbox')) {
		console.log('don`t close');
		return;
	}

	lightboxClassRemove();
	bodyClassRemove();
	resetMovieContainer();
	hideLoginPopup();
	showMovieDetails();
}

function onEscapeKeydown(e) {
	if (e.code !== 'Escape') {
		return;
	}

	lightboxClassRemove();
	bodyClassRemove();
	resetMovieContainer();
	hideLoginPopup();
	showMovieDetails();
}

function showAddToListBtn() {
	const btn = document.querySelector('button#btnToList');
	btn.classList.remove('visually-hidden');
}

function hideAddToListBtn() {
	const btn = refs.movieContainer.querySelector('button#btnToList');
	btn.classList.add('visually-hidden');
}

function showRemoveFromListBtn() {
	const btn = document.querySelector('button#btnFromList');
	btn.classList.remove('visually-hidden');
}

function hideRemoveFromListBtn() {
	const btn = document.querySelector('button#btnFromList');
	btn.classList.add('visually-hidden');
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

export {
	bodyClassAdd,
	bodyClassRemove,
	lightboxClassAdd,
	lightboxClassRemove,
	resetMovieContainer,
};
