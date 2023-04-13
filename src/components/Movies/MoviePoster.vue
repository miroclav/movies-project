<template>
    <div class="movie-wrap ma-2">
        <img
            :src="film.posterUrlPreview"
            :alt="film.nameOriginal"
            class="movie-img"
        />

        <div class="movie-overlay">
            <div class="movie-text">
                <h3>{{ film.nameRu }}</h3>
                <span>Кинопоиск: {{ film.rating }}</span>
                <span>Страна: {{ film.countries[0].country }}</span>
                <Button
                    @click="movieStore.addToFavorite(film)"
                    class="movie-btn"
                    label="Добавить"
                    color="success"
                    rounded
                    size="small"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import { useMovieStore } from "../stores/MovieStore";
import Button from "../UI/Button.vue";
const movieStore = useMovieStore();
const props = defineProps({
    film: {
        type: Object,
        required: true,
        default: () => {},
    },
    isSearch: { type: Boolean, default: false },
});
</script>

<style lang="css" scoped>
.movie-img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
}
.movie-wrap {
    position: relative;
    max-height: 290px;
    max-width: 190px;
}

.movie-overlay {
    background: rgba(0, 0, 0, 0.66);

    align-items: center;
    color: #fff;
    position: absolute;
    border-radius: 10px;

    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 0.5s ease;
    display: flex;
    justify-content: center;
    align-items: center;
}

.movie-overlay:hover {
    opacity: 1;
}

.movie-text {
    height: 150px;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: space-around;
    font-size: 14px;
}

.movie-btn {
    margin: 0 auto;
    color: #fff;
    font-size: 13px;
    justify-content: flex-end;
}
</style>
