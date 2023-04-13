<template>
    <v-container>
        <v-row class="d-flex">
            <v-text-field
                density="compact"
                variant="outlined"
                label="Название вашего файла"
                v-model="title"
            ></v-text-field>
            <v-file-input
                density="compact"
                variant="outlined"
                label="Выберете файл"
                v-model="img"
            >
            </v-file-input>
            <MyButton class="ml-3" @click="addPhoto">Add</MyButton>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        title: "",
        img: null,
    }),
    methods: {
        addPhoto() {
            const reader = new FileReader();
            reader.onloadend = () => {
                let photo = {
                    id: Date.now(),
                    title: this.title,
                    url: reader.result,
                };
                this.$emit("addPhoto", photo);
            };
            reader.readAsDataURL(this.img);
        },
    },
};
</script>

<style lang="scss" scoped></style>
