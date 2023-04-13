<template>
    <v-app>
        <Navbar class="d-flex justify-center" />
        <v-container>
            <router-view></router-view>
        </v-container>
    </v-app>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar.vue";

export default {
    components: { Navbar },
};
</script>

<style lang="scss">
@import "@/components/styles/global.scss";
</style>
