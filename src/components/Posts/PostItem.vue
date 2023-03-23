<template>
    <div class="post-card d-flex align-items-center">
        <div class="post-image">
            <img src="post-image.jpg" alt="Post Image" />
        </div>
        <div class="post-content">
            <h2 class="post-title">{{ post.title }}</h2>
            <p class="post-text">{{ post.body }}</p>
            <MyButton @click="$emit('remove', post)" class="ma-2"
                >Удалить</MyButton
            >
        </div>
    </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Array,
            requred: true,
        },
    },
};
</script>

<style>
.post-card {
    width: 100%;
    border: 2px solid #50cbd2;
    border-radius: 5px;
    overflow: hidden;
    margin: 15px 0;
}

.post-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.post-card .post-title {
    font-size: 1.5rem;
    margin: 10px;
}

.post-card .post-text {
    margin: 10px;
}

.post-card .read-more {
    display: block;
    text-align: center;
    background-color: #ccc;
    color: #fff;
    padding: 10px;
}
</style>
