<template>
    <span class="loader"></span>
</template>

<style>
.loader {
    border: 5px solid #f3f3f3; /* Цвет загрузчика */
    border-top: 5px solid var(--primary); /* Цвет загрузчика при движении */
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation: spin 2s linear infinite;
    margin: 0 auto;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
