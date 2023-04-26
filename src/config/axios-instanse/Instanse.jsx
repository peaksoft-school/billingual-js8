import axios from 'axios'

const BASE_URL = 'http://ec2-3-120-192-66.eu-central-1.compute.amazonaws.com'

export const instanse = axios.create({
   baseURL: BASE_URL,
})

instanse.interceptors.request.use(
   (config) => {
      const configUpdate = { ...config }
      const token = store.getState().auth.token
      if (token) {
         configUpdate.headers.Authorization = `Bearer ${token}`
      }

      return configUpdate
   },
   (error) => {
      return Promise.reject(error)
   }
)

instanse.interceptors.response.use(
   (response) => {
      return Promise.resolve(response)
   },
   (error) => {
      if (error.response?.status === 401) {
         // this place for logout
         throw new Error('401 unauthotized')
      }
      return Promise.reject(error)
   }
)