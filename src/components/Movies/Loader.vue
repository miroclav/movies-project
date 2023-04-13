<template>
    <span class="loader"></span>
</template>

<style>
.loader {
    width: 60px;
    height: 60px;
    margin-top: 50px;
    margin-left: 400px;
    border-radius: 50%;
    display: inline-block;
    border-top: 4px solid #1c55b1;
    border-right: 3px solid transparent;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
}

@keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
