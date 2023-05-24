import { instanse } from '../config/axios-instanse/Instanse'
import { fileAxiosInstanse } from '../config/axios-instanse/fileAxiosInstance'

export const getAllTests = () => {
   return instanse.get('/api/tests')
}

export const getTestById = (id) => {
   return instanse.get(`/api/tests/${id}`)
}

export const postFilesReq = (files) => {
   return fileAxiosInstanse.post('/api/s3-file', files)
}
export const describeImageReq = (payload) => {
   return instanse.post('/api/questions/describe-image', payload)
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
