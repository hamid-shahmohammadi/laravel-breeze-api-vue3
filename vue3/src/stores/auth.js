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
            await this.getToken()
            this.authToken = localStorage.getItem("token-login");
            const data = await axios.get('/api/user', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + this.authToken
                }
            });
            this.authUser=data.data
        },
        async login(data){
            try{
                await this.getToken()
                await axios.post('/login',data)
                return 'ok';
            }catch(err){
                return err.response;
            }

        }

    }
})
