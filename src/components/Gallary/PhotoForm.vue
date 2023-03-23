<template>
    <v-container>
        <v-row class="d-flex align-center">
            <v-text-field variant="outlined" label="Название вашего файла" v-model="title"></v-text-field>
            <v-file-input variant="outlined" label="Выберете файл" v-model="img">
            </v-file-input>
            <v-btn variant="outlined" class="ml-3" @click="addPhoto">Add</v-btn>
        </v-row>
    </v-container>
</template>

<script>

export default {
    data: () => ({
        title: '',
        img: null,
    }),
    methods: {
        addPhoto() {
            const reader = new FileReader()
            reader.onloadend = () => {
                let photo = {
                    id: Date.now(),
                    title: this.title,
                    url: reader.result
                }
                this.$emit('addPhoto', photo)
            }
            reader.readAsDataURL(this.img)
        }
    }
}
</script>

<style lang="scss" scoped></style>