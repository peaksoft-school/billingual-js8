// eslint-disable-next-line import/no-cycle
import { instanse } from '../config/axios-instanse/Instance'

const signUp = (userData) => {
   return instanse.post('/api/auth/sign-up', userData)
}

const signIn = (userData) => {
   return instanse.post('/api/auth/sign-in', userData)
}

export default { signUp, signIn }
