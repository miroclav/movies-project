<template>
    <div class="btns">
        <Button
            @click="setTab(1)"
            :class="{ 'tabs-active': movieStore.activeTab === 1 }"
            label="Поиск"
            color="primary"
            outlined
        />
        <Button
            @click="setTab(2) & movieStore.getMovies()"
            :class="{ 'tabs-active': movieStore.activeTab === 2 }"
            label="Лучшие фильмы - Кинопоиск"
            color="primary"
            outlined
        />

        <Button
            @click="setTab(3)"
            :class="{ 'tabs-active': movieStore.activeTab === 3 }"
            label="Любимые"
            color="primary"
            outlined
        />
    </div>
</template>

<script setup>
import Button from "../UI/Button.vue";
import { useMovieStore } from "@/components/stores/MovieStore";

const movieStore = useMovieStore();
const setTab = (id) => movieStore.setActiveTab(id);
</script>

<style lang="scss" scoped>
.tabs-active {
    background: var(--primary);
    color: #fafafa;
}
</style>
