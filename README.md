# 7.pinia

## stores/auth.js
```
import {defineStore} from 'pinia'
import axios from 'axios';

export const useAuthStore = defineStore("auth", {
    state: () => ({
        authUser: null,
        authToken:null
    }),
    getters:{
        user: (state) => state.authUser,
        token: (state) => state.authToken,
    },
    actions:{
        async getToken(){
            await axios.get('/sanctum/csrf-cookie')
        },
        async getUser() {
            this.getToken()
            this.authToken = localStorage.getItem("token-login");
            const data = await axios.get('/api/user', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + this.authToken
                }
            });
            this.authUser=data.data
        }

    }
})

```

## Home.vue
```
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



```
