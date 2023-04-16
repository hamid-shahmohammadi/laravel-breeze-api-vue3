<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';

const user = ref()

onMounted(async () => {
    const data = await axios.get('api/user')
    user.value = data.data
    console.log(user.value)
})
</script>

<template>
    <div class="mx-auto w-3/4">
        <h2>{{ user?.name }}</h2>
        <p>{{ user?.email }}</p>
    </div>
</template>

<style scoped></style>
