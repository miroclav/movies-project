<template>
    <input :value="modelValue" @input="updateInput" type="text" class="input" />
</template>

<script>
export default {
    name: "MyInput",
    props: {
        modelValue: {
            type: [Number, String],
        },
    },
    methods: {
        updateInput(event) {
            this.$emit("update:modelValue", event.target.value);
        },
    },
};
</script>

<style>
.input {
    display: block;
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border-radius: 4px;
    border: 2px solid #50cbd2;
    box-sizing: border-box;
}

.input:focus {
    border-color: #50cbd2;
}

.input:hover {
    border-color: #666;
}

.input:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}
</style>
