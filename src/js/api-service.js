import axios from 'axios';

export default class MoviesApiService {
	#key;
	#baseUrl;

	constructor() {
		this.searchQuery = '';
		this.#key = 'd7b55c78972af1312b499784f8cdaa54';
		this.#baseUrl = 'https://api.themoviedb.org/3/';
		this.page = 1;
		this.movieId = 0;
	}

	async fetchMovie() {
		const searchParams = new URLSearchParams({
			api_key: this.#key,
		});

		const url = `${this.#baseUrl}search/movie?${searchParams}&query=${
			this.searchQuery
		}`;
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

	async fetchMovieDetails() {
		const searchParams = new URLSearchParams({
			api_key: this.#key,
			language: 'en-US',
		});

		const url = `${this.#baseUrl}movie/${this.movieId}?${searchParams}`;
		const response = await axios.get(url);
		const data = response.data;

		return data;
	}

	async fetchMovieDetailsList(movieId) {
		const searchParams = new URLSearchParams({
			api_key: this.#key,
			language: 'en-US',
		});

		const url = `${this.#baseUrl}movie/${movieId}?${searchParams}`;
		const response = await axios.get(url);
		const data = response.data;

		return data;
	}

	async createRequestToken() {
		const url = `${this.#baseUrl}authentication/token/new?api_key=${this.#key}`;
		const response = await axios.get(url);
		const data = response.data;

		localStorage.setItem('request-token', data.request_token);
		return data.request_token;
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

	get id() {
		return this.movieId;
	}
	set id(movId) {
		return (this.movieId = movId);
	}
}
