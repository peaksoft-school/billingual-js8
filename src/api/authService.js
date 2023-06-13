// eslint-disable-next-line import/no-cycle
import { instanse } from '../config/axios-instanse/Instanse'

const signUp = (userData) => {
   return instanse.post('/api/auth/sign-up', userData)
}

const signIn = (userData) => {
   return instanse.post('/api/auth/sign-in', userData)
}

const authWithGoogle = (tokenId) => {
   return instanse.post(`api/auth/auth-google?tokenId=${tokenId}`)
}

export default { signUp, signIn, authWithGoogle }
