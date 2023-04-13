<template>
    <div class="container-center">
        <form @submit.prevent="movieStore.getSearchMovies(searchMovie)">
            <input
                class="input"
                type="text"
                placeholder="Input movie"
                v-model="searchMovie"
            />
        </form>
        <h4>Найдено фильмов: {{ movieStore.films.length }}</h4>
        <Loader v-if="movieStore.loader" />

        <div v-else>
            <Movie
                v-for="film in movieStore.searchFilms"
                :key="film.filmId"
                :film="film"
                :is-search="true"
            />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useMovieStore } from "../stores/MovieStore";

import Movie from "./Movie.vue";
import Loader from "@/components/Movies/Loader.vue";

const movieStore = useMovieStore();
const searchMovie = ref("");
</script>

<style lang="css" scoped>
.container-center {
    display: flex;
    flex-direction: column;
    max-width: 700px;
    margin: 0 auto;
}
</style>
