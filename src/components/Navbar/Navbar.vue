<template>
    <v-app-bar color="primary">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-btn @click="$router.push('./')" class="ml-3"> Registration </v-btn>
        <v-btn @click="$router.push('./photos')" class="ml-3"> Gallery </v-btn>
        <v-btn @click="$router.push('./posts')" class="ml-3"> Posts </v-btn>
        <v-btn @click="$router.push('./todo')" class="ml-3"> ToDo </v-btn>
        <v-btn @click="$router.push('./calc')" class="ml-3"> Calculator </v-btn>
        <v-spacer></v-spacer>
        <v-btn icon="mdi-heart"></v-btn>

        <v-btn icon="mdi-magnify"></v-btn>

        <v-btn icon="mdi-dots-vertical"></v-btn>
    </v-app-bar>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
