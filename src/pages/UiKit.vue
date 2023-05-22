<script setup>
import Button from "@/components/UI/Button.vue";
import SideBar from "@/components/SideBar/SideBar.vue";

const eventForButton = () => {
    alert("You clicked danger button");
};
</script>

<template>
    <SideBar />
    <div class="content">
        <h1>Button</h1>
        <h2 class="heading-2">Disabled</h2>
        <div class="line">
            <Button label="Primary" color="primary" disabled />
            <Button label="Secondary" color="second" disabled />
        </div>
        <h2 class="heading-2">Colors</h2>
        <div class="line">
            <Button label="Primary" color="primary" />
            <Button label="Secondary" color="second" />
            <Button label="Success" color="success" />
            <Button label="Info" color="info" />
            <Button label="Warning" color="warning" />
            <Button label="Danger" color="danger" />
        </div>
        <h2 class="heading-2">Rounded</h2>
        <div class="line">
            <Button label="Primary" color="primary" rounded />
            <Button label="Secondary" color="second" rounded />
            <Button label="Success" color="success" rounded />
            <Button label="Info" color="info" rounded />
            <Button label="Warning" color="warning" rounded />
            <Button label="Danger" color="danger" rounded />
        </div>
        <h2 class="heading-2">Outlined</h2>
        <div class="line">
            <Button label="Primary" color="primary" outlined />
            <Button label="Secondary" color="second" outlined />
            <Button label="Success" color="success" outlined />
            <Button label="Info" color="info" outlined />
            <Button label="Warning" color="warning" outlined />
            <Button label="Danger" color="danger" outlined />
        </div>
        <h2 class="heading-2">Icon</h2>
        <div class="line">
            <Button color="primary" icon="home" outlined />
            <Button color="second" icon="menu" />
            <Button color="success" icon="close" outlined />
            <Button color="info" icon="heart" />
            <Button color="warning" icon="check" outlined />
            <Button color="danger" icon="login" />
        </div>
        <h2 class="heading-2">Size</h2>
        <div class="line">
            <Button label="Normal" color="primary" />
            <Button label="Large" color="primary" size="large" />
            <Button label="Small" color="primary" size="small" />
        </div>
        <h2 class="heading-2">Event</h2>
        <div class="line">
            <Button label="@click" color="danger" @click="eventForButton" />
        </div>
    </div>
</template>
<style lang="scss">
.content {
    max-width: 1400px;
    margin-left: 250px;
    padding: 30px;
    transition: 0.2s;
    &_full {
        margin-left: 0;
    }
}
</style>
