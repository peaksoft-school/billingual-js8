import axios from 'axios'

const BASE_URL = 'http://ec2-3-120-192-66.eu-central-1.compute.amazonaws.com'


export const instanse = axios.create({
   baseURL: BASE_URL,
})

instanse.interceptors.request.use((config) => {
   const token = store.getState().auth.token 
   if (token) {
      config.headers.Authorization = `Bearer ${token}`
   }

   return config
})

instanse.interceptors.response.use(
   (response) => {
      return Promise.resolve(response)
   },
   (error) => {
      if (error.response?.status === 401) {
         // this place for logout
      }
      return Promise.reject(error)
   }
)
