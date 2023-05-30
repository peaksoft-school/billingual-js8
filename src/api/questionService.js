import { instanse } from '../config/axios-instanse/Instanse'

export const deleteQuestionRequest = (id) => {
   return instanse.delete(`api/questions/${id}`)
}
export const getAllQuestionsRequest = () => {
   return instanse.get('api/questions')
}

export const postRecordSayingStatement = (recordData) => {
   return instanse.post('api/questions/record-saying-statement', recordData)
}

export const postHighlightTheAnswer = (data) => {
   return instanse.post('/api/questions/highlight-the-answer', data)
}
