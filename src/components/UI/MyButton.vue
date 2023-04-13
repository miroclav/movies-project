<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "MyButton",
};
</script>

<style lang="css">
.btns {
    display: flex;
    gap: 20px;
    align-items: center;
}
.btn {
    display: inline-block;
    padding: 8px 10px;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    background-color: #1e88e5;
    color: aliceblue;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.btn-suc {
    color: #fff;
    background: #4caf50;
}
.btn-del {
    color: #fff;
    background: #ff2a2a;
}

.btn:hover {
    opacity: 0.8;
}

.btn:active {
    opacity: 0.9;
    color: #fff;
}
</style>
