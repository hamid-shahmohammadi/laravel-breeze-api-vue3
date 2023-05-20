<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

const user = ref();

onMounted(async () => {

    let token = localStorage.getItem("token-login");
    console.log(token)
    const data = await axios.get('/api/user', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    })
    user.value = data.data
    console.log(user.value)

})
</script>

<template>
    <div class="mx-auto w-1/2">
        <h1>home</h1>
        <h1>{{ user?.name }}</h1>
        <h1>{{ user?.email }}</h1>
    </div>
</template>

<style scoped></style>
