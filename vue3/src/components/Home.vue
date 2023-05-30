<script setup>
import { onMounted } from 'vue';
import { useAuthStore } from '../stores/auth';

const authStore = useAuthStore()

onMounted(async () => {
    authStore.getUser()
})
</script>

<template>
    <div class="mx-auto w-1/2">
        <div v-if="authStore.user">
            <h1>{{ authStore.user.name }}</h1>
            <p>{{ authStore.user.email }}</p>
        </div>
        <div v-else>
            <h1>Pls Login</h1>
        </div>
    </div>
</template>


