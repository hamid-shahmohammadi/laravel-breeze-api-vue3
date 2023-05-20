# 4.login tt
## authenticationsessioncontroller and auth.php route
## seeder uncomment
## pas migrate:fresh --seed
## pa serve

## Home.vue
```
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

```

## Login.vue
```
<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter()
const form=ref({
    email:'',
    password:''
})

const getToken = async () => {
    await axios.get('/sanctum/csrf-cookie');
}

const handleLogin = async ()=>{
    await getToken();
    await axios.post('/login',{
        email:form.value.email,
        password:form.value.password
    })
    router.push('/')
}
</script>

<template>
<div class="bg-gray-300 rounded-md p-4 mt-24 mx-auto w-1/2">
<form @submit.prevent="handleLogin">
  <div class="mb-6">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input v-model="form.email" type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
  </div>
  <div class="mb-6">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input v-model="form.password" type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
  </div>

  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
</div>
</template>
```
