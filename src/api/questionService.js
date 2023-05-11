import { instanse } from '../config/axios-instanse/Instanse'

export const deleteQuestionRequest = (id) => {
   return instanse.delete(`api/questions/${id}`)
}
export const getAllQuestionsRequest = () => {
   return instanse.get('api/questions')
}