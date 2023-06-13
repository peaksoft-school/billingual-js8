import { instanse } from '../config/axios-instanse/Instance'

export const getAllTests = () => {
   return instanse.get('/api/tests')
}

export const getTestById = (id) => {
   return instanse.get(`/api/tests/${id}`)
}

export const postTestRequest = (test) => {
   return instanse.post(`/api/tests`, test)
}

export const deleteTestRequest = (id) => {
   return instanse.delete(`api/tests/${id}`)
}

export const updateTestRequest = ({
   id,
   title,
   shortDescription,
   isActive,
}) => {
   return instanse.put(`api/tests/${id}`, { title, shortDescription, isActive })
}
