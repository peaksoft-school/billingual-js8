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
