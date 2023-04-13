<template>
    <div class="container">
        <MoviePoster
            v-for="film in movieStore.films"
            :key="film.filmId"
            :film="film"
        />
    </div>
</template>

<script setup>
import MoviePoster from "./MoviePoster.vue";
import { useMovieStore } from "../stores/MovieStore";
const movieStore = useMovieStore();
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
</style>
