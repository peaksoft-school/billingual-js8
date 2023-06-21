import { instanse } from '../config/axios-instanse/Instance'

export const getAllResults = () => {
   return instanse.get('/api/results/myResult')
}

export const deleteResultRequest = (id) => {
   return instanse.delete(`/api/results/${id}`)
}

export const getAllSubmittedResults = () => {
   return instanse.get('/api/results')
}

export const getCurrentlResults = (resultId) => {
   return instanse.get(`/api/results/${resultId}`)
}

export const getAnswerResult = (ids) => {
   return instanse.get(`api/questions/${ids.answerId}/${ids.questionId}`)
}

export const postEveluatingScore = (data) => {
   return instanse.post(`/api/evaluating/${data.answerId}`, data.score)
}
