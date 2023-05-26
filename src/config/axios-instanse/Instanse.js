import axios from 'axios'
import { store } from '../../redux'
import { signOut } from '../../redux/auth/auth.thunk'

<<<<<<< HEAD
export const BASE_URL = 'http://bilingualb8.peaksoftprojects.com/'
=======
const BASE_URL = 'http://bilingualb8.peaksoftprojects.com/'
>>>>>>> c5f263d6e9a5ddf818c8991428064d7dbfb0806c

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
      if (error.response?.status === 401) {
         store.dispatch(signOut())
         throw new Error('401 unauthotized')
      }
      return Promise.reject(error)
   }
)
