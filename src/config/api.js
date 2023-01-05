import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3005/api/user/getUser',
    timeout: 10000,
    headers: { 'Content-Type': 'Aplication/json' }
})


export default api;