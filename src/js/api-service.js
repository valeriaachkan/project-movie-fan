import axios from 'axios';
// https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher

export default class MoviesApiService {
	#key;
	#baseUrl;

	constructor() {
		this.searchQuery = '';
		this.#key = 'd7b55c78972af1312b499784f8cdaa54';
		this.#baseUrl = 'https://api.themoviedb.org/3/';
		this.page = 1;
	}

	async fetchMovie() {
		const searchParams = new URLSearchParams({
			api_key: this.#key,
		});

		const url = `${this.#baseUrl}search/movie?${searchParams}&query=${this.searchQuery}`;
        const response = await axios.get(url);
		const data = response.data;

        return data;
	}

	async fetchUpcomingMovies() {
		const searchParams = new URLSearchParams({
			api_key: this.#key,
			page: 1,
			language: 'en-US',
		});
		const url = `${this.#baseUrl}movie/upcoming?${searchParams}`;
		const response = await axios.get(url);
		const data = response.data;

        return data;
	}

	async fetchAllMovies() {

		// https://api.themoviedb.org/3/movie/top_rated?api_key=d7b55c78972af1312b499784f8cdaa54&language=en-US&page=1
		const searchParams = new URLSearchParams({
			api_key: this.#key,
			page: this.page,
			language: 'en-US',
		});
		const url = `${this.#baseUrl}movie/top_rated?${searchParams}`;
		const response = await axios.get(url);
		const data = response.data;
		this.incrementPage();

        return data;
	}

	incrementPage() {
		this.page += 1;
	}

	resetPage() {
		this.page = 1;
	}

	get query() {
		return this.searchQuery;
	}
	set query(newQuery) {
		return (this.searchQuery = newQuery);
	}
}

// https://api.themoviedb.org/3/trending/all/week?api_key=d7b55c78972af1312b499784f8cdaa54
// https://api.themoviedb.org/3/movie/top_rated?api_key=d7b55c78972af1312b499784f8cdaa54&language=en-US&page=1