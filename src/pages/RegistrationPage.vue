<template>
    <div class="container">
        <form class="form" @submit.prevent="submit">
            <v-text-field
                class="mb-2"
                density="compact"
                variant="outlined"
                v-model="name.value.value"
                :counter="10"
                :error-messages="name.errorMessage.value"
                label="Имя"
            ></v-text-field>
            <v-text-field
                class="mb-2"
                density="compact"
                variant="outlined"
                v-model="lastname.value.value"
                :counter="10"
                :error-messages="name.errorMessage.value"
                label="Фамилия"
            ></v-text-field>

            <v-text-field
                class="mb-2"
                density="compact"
                variant="outlined"
                v-model="phone.value.value"
                :counter="7"
                :error-messages="phone.errorMessage.value"
                label="Ваш телефон"
            ></v-text-field>

            <v-text-field
                class="mb-2"
                density="compact"
                variant="outlined"
                v-model="email.value.value"
                :error-messages="email.errorMessage.value"
                label="E-mail"
            ></v-text-field>

            <v-select
                class="mb-2"
                variant="outlined"
                density="compact"
                v-model="select.value.value"
                :items="items"
                :error-messages="select.errorMessage.value"
                label="Выберете Страну "
            ></v-select>

            <v-checkbox
                class="text-caption"
                density="compact"
                v-model="checkbox.value.value"
                :error-messages="checkbox.errorMessage.value"
                value="1"
                label="Даю согласие на обработку данных"
                type="checkbox"
            ></v-checkbox>
            <div class="btns">
                <Button class="ml-auto" label="Отправить" />
            </div>
        </form>
    </div>
</template>
<script>
import { ref } from "vue";
import { useField, useForm } from "vee-validate";
import Button from "@/components/UI/Button.vue";
import Loader from "@/components/Movies/Loader.vue";
export default {
    components: {
        Button,
        Loader,
    },
    data: () => ({ loading: false }),

    methods: {
        load() {
            this.loading = true;
            setTimeout(() => (this.loading = false), 3000);
        },
    },
    setup() {
        const { handleSubmit, handleReset } = useForm({
            validationSchema: {
                name(value) {
                    if (value?.length >= 2) return true;

                    return "Не менее двух знаков";
                },
                lastname(value) {
                    if (value?.length >= 3) return true;

                    return "Не трех двух знаков";
                },
                phone(value) {
                    if (value?.length > 9 && /[0-9-]+/.test(value)) return true;

                    return "Должно быть 9 чисел";
                },
                email(value) {
                    if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;

                    return "Введите свою почту";
                },
                select(value) {
                    if (value) return true;

                    return "Выберете вариант.";
                },
                checkbox(value) {
                    if (value === "1") return true;

                    return "Обязательное условие.";
                },
            },
        });
        const name = useField("name");
        const lastname = useField("lastname");
        const phone = useField("phone");
        const email = useField("email");
        const select = useField("select");
        const checkbox = useField("checkbox");

        const items = ref(["Россия", "США", "Китай"]);

        const submit = handleSubmit((values) => {
            alert(JSON.stringify(values, null, 2));
        });

        return {
            name,
            lastname,
            phone,
            email,
            select,
            checkbox,
            items,
            submit,
            handleReset,
        };
    },
};
</script>
<style lang="css" scoped>
.container {
    display: flex;
    justify-content: center;
    margin: 0 auto;
}
.form {
    margin-top: 20px;
    width: 400px;
    padding: 1.5rem;
    border-radius: 12px;
    border: 2px solid rgb(191, 190, 190);
    box-shadow: 8px 8px 8px 8px rgb(242, 240, 240);
}
v-label {
    font-size: 12px;
}
form::placeholder {
    color: white;
}
.btn {
    background: var(--primary);
    color: aliceblue;
}
</style>
