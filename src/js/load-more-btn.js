import getRefs from "./get-refs";
import { fetchAllMov } from "./search-and-fetch";

const refs = getRefs();

refs.loadBtn.addEventListener('click', onLoadMore);

async function onLoadMore() {
    // try {
    //     const res = await moviesApiService.fetchAllMovies();
    //     const data = res.results;
    //     // console.log(data);

    //     appendAllMoviesCardsMarkup(data);
    //     smoothScroll();
    // } catch (error) {
    //     console.log(error.message);
    // }
    // smoothScroll();
    fetchAllMov();
}

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