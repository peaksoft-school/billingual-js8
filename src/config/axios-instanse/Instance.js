import axios from 'axios'
import { store } from '../../redux'
import { signOut } from '../../redux/auth/auth.thunk'

export const BASE_URL = 'http://bilingualb8.peaksoftprojects.com/'

export const instanse = axios.create({
   baseURL: BASE_URL,
})

instanse.interceptors.request.use(
   (config) => {
      const configUpdate = { ...config }
      const { token } = store.getState().auth
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
      if (error?.code === 403) {
         store.dispatch(signOut())
         throw new Error('Unauthotized')
      }
      return Promise.reject(error)
   }
)
