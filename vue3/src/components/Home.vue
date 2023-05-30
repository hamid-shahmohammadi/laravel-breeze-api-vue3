<script setup>
import { onMounted } from 'vue';
import { useAuthStore } from "../stores/auth"

const authStore = useAuthStore()

onMounted(async () => {
    authStore.getUser()
})
</script>

<template>
    <div class="mx-auto w-3/4">
        <h2>{{ authStore.user?.name }}</h2>
        <p>{{ authStore.user?.email }}</p>
    </div>
</template>

<style scoped></style>
