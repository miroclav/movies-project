<template>
    <v-toolbar color="white" active class="navbar" density="compact">
        <v-spacer></v-spacer>
        <v-btn-toggle
            class="navbar-toggle text-subtitle-1"
            color="primary"
            variant="text"
        >
            <v-btn @click="$router.push('./')"> Registration </v-btn>
            <v-btn @click="$router.push('./movies')"> Movies </v-btn>
            <v-btn @click="$router.push('./photos')"> Gallery </v-btn>
            <v-btn @click="$router.push('./posts')"> Posts </v-btn>
            <v-btn @click="$router.push('./todo')"> ToDo </v-btn>
            <v-btn @click="$router.push('./uikit')"> Ui Kit </v-btn>
        </v-btn-toggle>
        <v-spacer></v-spacer>
    </v-toolbar>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navbar {
    z-index: 1;
    position: fixed;
    border-bottom: 2px solid var(--primary);
}
.navbar-toggle {
    color: var(--primary);
}
.activeTab:checked {
    border: 1px solid #fff;
}
</style>
