import { instanse } from '../config/axios-instanse/Instance'

export const getAllResults = () => {
   return instanse.get('/api/results/myResult')
}

export const deleteResultRequest = (id) => {
   return instanse.delete(`/api/results/${id}`)
}
