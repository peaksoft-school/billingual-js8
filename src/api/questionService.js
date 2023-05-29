import { fileAxiosInstanse } from '../config/axios-instanse/fileAxiosInstanse'
import { instanse } from '../config/axios-instanse/Instanse'

export const typeWhatYourHearRequest = (formValues) => {
   return instanse.post('api/questions/type-what-you-hear', formValues)
}
export const postFileRequest = (formData) => {
   return fileAxiosInstanse.post('/api/s3-file', formData)
}
export const deleteQuestionRequest = (id) => {
   return instanse.delete(`api/questions/${id}`)
}

export const getAllQuestionsRequest = () => {
   return instanse.get('api/questions')
}

export const postRecordSayingStatement = (recordData) => {
   return instanse.post('api/questions/record-saying-statement', recordData)
}
export const describeImageReq = (payload) => {
   return instanse.post('/api/questions/describe-image', payload)
}
