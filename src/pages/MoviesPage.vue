<template>
    <MovieTabs class="d-flex justify-center" />
    <Search v-if="movieStore.activeTab === 1" />
    <MovieListPoster v-if="movieStore.activeTab === 2" />
    <Favorite v-if="movieStore.activeTab === 3" />
</template>

<script setup>
import Favorite from "@/components/Movies/Favorite.vue";
import Search from "@/components/Movies/Search.vue";
import MovieTabs from "@/components/Movies/MovieTabs.vue";
import { useMovieStore } from "@/components/stores/MovieStore";
import MovieListPoster from "@/components/Movies/MovieListPoster.vue";

const movieStore = useMovieStore();
</script>

<style lang="css" scoped></style>
