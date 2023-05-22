<template>
    <PhotoForm @addPhoto="addPhoto" />
    <v-row>
        <PhotoCard v-for="photo in photos" :photo="photo" />
    </v-row>
</template>

<script>
import axios from "axios";
import PhotoCard from "@/components/Gallary/PhotoCard.vue";
import PhotoForm from "@/components/Gallary/PhotoForm.vue";
export default {
    components: { PhotoCard, PhotoForm },

    data: () => ({
        photos: [],
    }),

    methods: {
        async fetchPhotos() {
            try {
                const url =
                    "https://api.unsplash.com//photos/random?client_id=cCuvG2e6fEVb_o8kwOXqzVSw-2KWMxk26SRRu4DhDj4&count=12";
                const response = await axios.get(url);
                this.photos = response.data;
            } catch (error) {
                alert(error);
            }
        },
        addPhoto(photo) {
            this.photos.push(photo);
        },
    },
    mounted() {
        this.fetchPhotos();
    },
};
</script>

<style lang="scss" scoped></style>
