import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})

export default api;

api.interceptors.request.use((config)=>{
    const access = localStorage.getItem('access_token')
    if(access){
        config.headers['Authorization'] = 'Bearer ' + access;
    }
    return config
})

async function refreshToken() {
    try {
        const result = await api.post('/auth/login/refresh', {
            refresh: localStorage.getItem('refresh_token')
        })
        return result.data.access
    } catch (error) {
        console.log('Ошибка обновления токена ', error);
    }
}

api.interceptors.response.use((res)=>res, async (error)=>{
    const errorResponse = error.config;
    if (error.status == 401 && !errorResponse._retry) {
        errorResponse._retry = true;
        try {
            const accessToken = await refreshToken();
            localStorage.setItem('access_token', accessToken)
            api.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken;
            return api(errorResponse)
        } catch (errorRefresh) {
            console.log('Ошибка обновления токена ', errorRefresh);
        }
    }
    // console.log(error.status);
    return Promise.reject(error);
})