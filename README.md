
## .env
```
APP_URL=http://localhost:8000
FRONTEND_URL=http://localhost:3000
SANCTUM_STATEFUL_DOMAINS=localhost:3000
SESSION_DOMAIN=localhost

DB_DATABASE=lba_vue
```

## config/sanctum.php sanctum ducoment same top level domain
```
SANCTUM_STATEFUL_DOMAINS
```

## config/session.php support any subdomain
```
SESSION_DOMAIN=localhost
```

## migrate
```
pa migrate
```

## vite.config.js
```
export default defineConfig({
  plugins: [vue()],
  server:{
    port:3000
  }
})
```

## vue router
```
npm install vue-router@4
```

## pinia store
```
npm install pinia
```
## axios
```
npm install axios
```

## src/axios.js
```
import axios from "axios";

axios.defaults.withCredentials = true;

axios.defaults.baseURL="http://localhost:8000";
```
## src/main.js
```
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router/index.js'

import './axios'
import './style.css'
import App from './App.vue'

const pinia = createPinia()
const app=createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
```

## router/index.js
```
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'

const routes = [
    {path: '/', name:'Home', component: Home},
    {path: '/login', name:'login', component:()=> import('../components/Login.vue')},
    {path: '/register', name:'register', component:()=> import('../components/Register.vue')}
]

const router=createRouter({
    history:createWebHistory(),
    routes,
})

export default router;
```

