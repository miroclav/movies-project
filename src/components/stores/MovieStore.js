import { defineStore } from "pinia";

const urlTop = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1'
const urlSearch = 'https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword='

export const useMovieStore = defineStore("movieStore", {
  state: () => ({
    films: [],
    searchFilms: [],
    favorite: [],
    activeTab: 1,
    isWatched: false,
    loader: false,
  }),
  actions: {
    async getMovies() {
      this.loader = true
      const res = await fetch(urlTop, {
        method: 'GET',
        headers: {
          'X-API-KEY': 'e8d19d5c-9c24-4f5b-bab8-0d01fa0fbff7',
          'Content-Type': 'application/json',
        },
      })
      const data = await res.json()
      this.films = data.films
      this.loader = false
    },
    async getSearchMovies(search) {
      this.loader = true
      const res = await fetch(`${urlSearch}${search}`, {
        method: 'GET',
        headers: {
          'X-API-KEY': 'e8d19d5c-9c24-4f5b-bab8-0d01fa0fbff7',
          'Content-Type': 'application/json',
        },
      })
      const data = await res.json()
      this.searchFilms = data.films
      this.loader = false
    },

    addToFavorite(film) {
      this.favorite.push({ ...film, isWatched: false })
      this.activeTab = 3
    },

    setActiveTab(id) {
      this.activeTab = id
    },
    toggleWatched(id) {
      const idx = this.favorite.findIndex((el) => el.filmId === id)
      this.favorite[idx].isWatched = !this.favorite[idx].isWatched
    },
    deleteMovie(id) {
      this.favorite = this.favorite.filter(el => el.filmId !== id)
    }
  },
  getters: {
    watchedMovie() {
      return this.favorite.filter(el => (el.isWatched))
    },
    unWatchedMovie() {
      return this.favorite.filter(el => (el.isWatched === false))
    },
    favoriteMovie() {
      return this.favorite
    },
    totalCountMovies() {
      return this.films.length
    }
  },

});
