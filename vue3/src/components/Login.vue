<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router'

const router= useRouter()
const errors = ref({
    email:'',
    password:'',
});
const form = ref({
    email:'',
    password:''
})

const getToken = async () => {
    await axios.get('/sanctum/csrf-cookie')
}

const hndllogin = async () => {
    await getToken();
    try {
        const token = await axios.post('/login', {
            email: form.value.email,
            password: form.value.password
        });

        localStorage.setItem("token-login", token.data);
        router.push('/')
    } catch (err) {
        console.log(err.response.data.errors)
        errors.value = err.response.data.errors
    }
}
</script>

<template>
<div class="my-20 rounded bg-gray-200 p-20 mx-auto w-1/2">
<form @submit.prevent="hndllogin">
  <div class="mb-6">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input v-model="form.email" type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email" >
    <small class="text-red-500 text-xs" v-if="errors.email">{{ errors.email[0] }}</small>
  </div>
  <div class="mb-6">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input v-model="form.password" type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
    <small class="text-red-500 text-xs" v-if="errors.password">{{ errors.password[0] }}</small>
  </div>

  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
</div>
</template>


