<template>
    <v-col cols="3">
        <v-card @click="dialogVisible = true" class=" mx-auto" max-width="400">
            <v-img class="align-end text-white" height="200" :src="photo.urls.regular" cover>
                <v-card-title>{{ photo.user.name }}</v-card-title>
            </v-img>
            <v-card-subtitle class="pt-4">
                {{ photo.alt_description }}
            </v-card-subtitle>

            <v-card-text class="d-flex justify-space-around align-center">
                <div>
                    <v-icon size="small" color="green-darken-2" icon="mdi-arrow-up-bold-box-outline"></v-icon>
                    <span>{{ photo.downloads }}</span>
                </div>
                <div>
                    <v-icon size="small" color="red-darken-2" icon="mdi-heart"></v-icon>
                    <span>{{ photo.likes }}</span>
                </div>
                <div>
                    <v-icon size="small" color="blue-darken-2" icon="mdi-eye-outline"></v-icon>
                    <span>{{ photo.downloads }}</span>
                </div>

            </v-card-text>
            <v-btn color="primary" block>
                Open Photo
                <v-dialog v-model="dialogVisible" activator="parent" width="auto">
                    <v-card>
                        <v-card-text>
                            <v-img class="align-end text-white" height="550" width="700" :src="photo.urls.full" cover />

                        </v-card-text>
                        <v-btn color="primary" block @click="dialogVisible = false">Close Photo</v-btn>
                    </v-card>
                </v-dialog>
            </v-btn>
        </v-card>
    </v-col>
</template>

<script>
export default {
    data: () => ({
        dialogVisible: false
    }),
    props: {
        photo: {
            type: Object,
            required: true,
        },
    },
    methods: {

    }
};
</script>

<style scoped>
span {
    margin-left: 5px;
}
</style>
