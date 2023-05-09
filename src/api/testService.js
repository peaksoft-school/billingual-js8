import { instanse } from '../config/axios-instanse/Instanse'

export const getAllTests = () => {
   return instanse.get('/api/tests')
}

export const getTestById = (id) => {
   return instanse.get(`/api/tests/${id}`)
}
