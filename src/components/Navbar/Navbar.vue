<template>
    <v-toolbar density="compact" color="primary" >
        <v-btn @click="$router.push('./')" class="ml-3"> Registration </v-btn>
        <v-btn @click="$router.push('./photos')" class="ml-3"> Gallery </v-btn>
        <v-btn @click="$router.push('./posts')" class="ml-3"> Posts </v-btn>
        <v-btn @click="$router.push('./todo')" class="ml-3"> ToDo </v-btn>
        <v-btn @click="$router.push('./calc')" class="ml-3"> Calculator </v-btn>
        <v-btn @click="$router.push('./movies')" class="ml-3"> Movies </v-btn>
        <v-btn @click="$router.push('./uikit')" class="ml-3"> Ui Kit </v-btn>
        <v-spacer></v-spacer>
    </v-toolbar>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
