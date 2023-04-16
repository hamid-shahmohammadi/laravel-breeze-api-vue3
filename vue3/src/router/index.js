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
