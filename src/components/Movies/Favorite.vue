<template>
    <div class="container d-flex mt-3">
        <div class="container-column">
            <h3 class="mb-2">Непросмотренные фильмы</h3>
            <Movie
                v-for="film of movieStore.unWatchedMovie"
                :key="film.filmId"
                :film="film"
            />
        </div>
        <div class="container-column">
            <h3 class="mb-2">Просмотренные фильмы</h3>
            <Movie
                v-for="film of movieStore.watchedMovie"
                :key="film.filmId"
                :film="film"
            />
        </div>
    </div>
</template>

<script setup>
import Movie from "./Movie.vue";
import { useMovieStore } from "../stores/MovieStore";
const movieStore = useMovieStore();
</script>

<style lang="css" scoped>
.container {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 0 auto;
}
.container-column {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 555px;
}
</style>
