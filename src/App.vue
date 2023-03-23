<template>
    <v-app>
        <Navbar />
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

<style scoped>
.container {
    margin-top: 60px;
}
</style>
