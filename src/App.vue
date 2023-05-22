<template>
    <v-app>
        <Navbar />
        <div class="container">
            <router-view></router-view>
        </div>
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
.container {
    margin-top: 5rem;
    padding: 0 5rem;
}
</style>
