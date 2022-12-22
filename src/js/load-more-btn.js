import getRefs from "./get-refs";

const refs = getRefs();

function showLoadBtn() {
    refs.loadBtn.classList.remove('visually-hidden');
}
function hideLoadBtn() {
    refs.loadBtn.classList.add('visually-hidden');
}

function smoothScroll() {
	const { height: cardHeight } = document
		.querySelector('.movie__list--all')
		.firstElementChild.getBoundingClientRect();

	window.scrollBy({
		top: cardHeight * 1,
		behavior: 'smooth',
	});
}

export { showLoadBtn, hideLoadBtn, smoothScroll };