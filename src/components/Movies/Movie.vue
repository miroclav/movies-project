<template>
    <v-card max-width="700" class="d-flex mt-3">
        <div class="pa-3">
            <img
                v-if="movieStore.activeTab === 3"
                class="movie-img-tab-3"
                :src="film.posterUrl"
                :alt="film.nameOriginal"
            />
            <img
                v-else
                class="movie-img"
                :src="film.posterUrl"
                :alt="film.nameOriginal"
            />
        </div>
        <div class="movie-content pt-3 flex-column">
            <div class="movie-par">
                <div class="movie-title">
                    <h3 overflow-x-auto>{{ film.nameRu }} {{ film.year }}</h3>
                    <h4>
                        <span v-if="film.nameEn != null"
                            >({{ film.nameEn }})</span
                        >
                    </h4>
                </div>

                <div v-if="movieStore.activeTab !== 3" class="movie-text">
                    {{ film.description }}
                </div>
                <div class="movie-subtitle">
                    <div>Страна: {{ film.countries[0].country }}</div>
                    <div>Число голосов: {{ film.ratingVoteCount }}</div>
                    <div>Рейтинг- {{ film.rating }}</div>
                    <div>
                        Жанр: <span>{{ film.genres[0].genre }}</span>
                    </div>
                </div>
            </div>

            <div class="d-flex align-center btn-end">
                <div v-if="movieStore.activeTab === 3">
                    <Button
                        v-if="film.isWatched"
                        @click="movieStore.toggleWatched(film.filmId)"
                        label="Просмотренный"
                        color="Secondary"
                        size="small"
                        rounded
                    />
                    <Button
                        v-else
                        @click="movieStore.toggleWatched(film.filmId)"
                        label="Неросмотренный"
                        color="Secondary"
                        size="small"
                        rounded
                    />
                    <Button
                        v-if="movieStore.activeTab === 3"
                        @click="movieStore.deleteMovie(film.filmId)"
                        label="Удалить"
                        color="danger"
                        size="small"
                        rounded
                    />
                    <v-btn icon="mdi-delete-outline"></v-btn>
                </div>

                <Button
                    v-else
                    label="Добавить в любимые"
                    color="success"
                    rounded
                    @click="movieStore.addToFavorite(film)"
                />
            </div>
        </div>
    </v-card>
</template>

<script setup>
import Button from "../UI/Button.vue";
import { useMovieStore } from "../stores/MovieStore";
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

<style scoped lang="css">
.movie-content {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 15px;
}

.movie-img {
    max-height: 300px;
    width: 210px;
    object-fit: cover;
}
.movie-img-tab-3 {
    max-height: 220px;
}
.movie-title {
    margin-bottom: 10px;
}

.movie-text {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin-bottom: 10px;
}

.movie-subtitle {
    font-size: 14px;
    color: dimgray;
}
.btn-end {
    justify-content: flex-end;
}
</style>
