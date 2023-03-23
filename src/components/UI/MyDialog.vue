<template>
    <div class="dialog" @click="closeDialog" v-if="show">
        <div @click.stop class="dialog-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: false,
        };
    },
    name: "MyDialog",
    props: {
        show: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        closeDialog() {
            this.$emit("update:show", false);
        },
    },
};
</script>

<style>
.dialog {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
}

.dialog-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    border-radius: 12px;
    width: 80%;
}
</style>
