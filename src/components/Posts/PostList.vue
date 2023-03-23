<template>
    <PostItem
        v-for="post in posts"
        v-if="posts.length > 0"
        :key="posts.id"
        :post="post"
        @remove="$emit('remove', post)"
    >
    </PostItem>

    <div v-else style="color: red">Список постов пуст</div>
</template>

<script>
import PostItem from "@/components/Posts/PostItem.vue";

export default {
    components: {
        PostItem,
    },
    props: {
        posts: {
            type: Array,
            default: true,
        },
    },
};
</script>

<style lang="scss" scoped></style>
