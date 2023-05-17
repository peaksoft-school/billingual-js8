import { instanse } from '../config/axios-instanse/Instanse'

export const typeWhatYourHearRequest = () => {
   return instanse.post('api/questions/type-what-you-hear')
}
export const postAudioFileRequest = (formData) => {
   return instanse.post('/api/s3-file', formData)
}
export const deleteQuestionRequest = (id) => {
   return instanse.delete(`api/questions/${id}`)
}

export const getAllQuestionsRequest = () => {
   return instanse.get('api/questions')
}
