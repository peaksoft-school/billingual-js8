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

export const postSelectMainIdea = (data) => {
   return instanse.post('api/questions/select-the-main-idea', data)
}
export const postSelectBestTitle = (data) => {
   return instanse.post('api/questions/select-best-title', data)
}

export const updateQuestionRequest = (data) => {
   switch (data.questionType) {
      case 'SELECT_THE_MAIN_IDEA':
         return instanse.put(
            `api/questions/select-the-main-idea/${data.id}`,
            data
         )

      case 'SELECT_ENGLISH_WORD':
         return instanse.put(
            `api/questions/select-real-english-word/${data.id}`,
            data
         )

      case 'TYPE_WHAT_YOU_HEAR':
         return instanse.put(
            `api/questions/type-what-your-hear/${data.id}`,
            data
         )

      case 'DESCRIBE_IMAGE':
         return instanse.put(`api/questions/describe-image/${data.id}`, data)

      case 'LISTEN_AND_SELECT_ENGLISH_WORD':
         return instanse.put(
            `api/questions/listen-and-selectenglish-word/${data.id}`,
            data
         )

      case 'RECORD_SAYING_STATEMENT':
         return instanse.put(
            `api/questions/record-saying-statement/${data.id}`,
            data
         )

      case 'RESPOND_N_WORDS':
         return instanse.put(`api/questions/respond-n-words/${data.id}`, data)

      case 'SELECT_BEST_TITLE':
         return instanse.put(`api/questions/select-best-title/${data.id}`, data)

      case 'HIGHLIGHT_THE_ANSWER':
         return instanse.put(
            `api/questions/highlight-the-answer/${data.id}`,
            data
         )

      default:
         return ''
   }
}
