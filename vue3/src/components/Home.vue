<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

const user = ref();

onMounted(async () => {
    const data = await axios.get('/api/user')
    user.value = data.data
})
</script>

<template>
    <div class="mx-auto w-1/2">
        <h1>home</h1>
        <h1>{{ user?.name }}</h1>
        <h1>{{ user?.email }}</h1>
    </div>
</template>


