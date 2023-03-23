<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'MyButton',
}
</script>

<style >
.btn {
    display: inline-block;
    padding: 8px;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    background-color: #44b3b9;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.btn:hover {
    background-color: #b6fbff;
}

.btn:active {
    background-color: #50cbd2;
}
</style>