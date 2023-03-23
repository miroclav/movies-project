<template>
    <v-form @submit.prevent>
        <h2 class="title">Название постов</h2>
        <MyInput
            v-model="post.title"
            type="text"
            placeholder="Название"
        ></MyInput>
        <MyInput
            v-model="post.body"
            type="text"
            class="input"
            placeholder="Описание"
        ></MyInput>
        <MyButton @click="createPost" class="btn">Создание поста </MyButton>
    </v-form>
</template>

<script>
export default {
    data() {
        return {
            post: {
                title: "",
                body: "",
            },
        };
    },
    methods: {
        createPost() {
            this.post.id = Date.now();
            this.$emit("create", this.post);
            this.post = {
                title: "",
                body: "",
            };
        },
    },
};
</script>

<style>
.input {
    display: block;
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    font-size: 16px;
    border-radius: 4px;
    border: 2px solid grey;
    box-sizing: border-box;
}

.input:focus {
    border-color: #4caf50;
}

.input:hover {
    border-color: #666;
}

.input:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}
</style>
