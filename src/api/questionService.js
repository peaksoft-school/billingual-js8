import { fileAxiosInstanse } from '../config/axios-instanse/fileAxiosInstanse'
import { instanse } from '../config/axios-instanse/Instanse'
import { questionsApi } from '../utils/constants/common'

export const typeWhatYourHearRequest = (formValues) => {
   return instanse.post(questionsApi.typeWhatYourHear, formValues)
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
export const postRespondWords = (requestData) => {
   return instanse.post(questionsApi.respondInAtLeastNWords, requestData)
}

export const postRecordSayingStatement = (recordData) => {
   return instanse.post(questionsApi.recordSayingStatement, recordData)
}

export const postHighlightTheAnswer = (data) => {
   return instanse.post(questionsApi.highlightTheAnswer, data)
}
export const postSelectMainIdea = (data) => {
   return instanse.post(questionsApi.selectTheMainIdea, data)
}
export const postSelectBestTitle = (data) => {
   return instanse.post(questionsApi.selectBestTitle, data)
}

export const describeImageReq = (payload) => {
   return instanse.post(questionsApi.describeImage, payload)
}

export const updateQuestionRequest = (data) => {
   switch (data.questionType) {
      case 'SELECT_THE_MAIN_IDEA':
         return instanse.put(
            `${questionsApi.selectTheMainIdea}/${data.id}`,
            data
         )

      case 'SELECT_ENGLISH_WORD':
         return instanse.put(
            `${questionsApi.selectRealEnglishWords}/${data.id}`,
            data
         )

      case 'TYPE_WHAT_YOU_HEAR':
         return instanse.put(
            `${questionsApi.typeWhatYourHear}/${data.id}`,
            data
         )

      case 'DESCRIBE_IMAGE':
         return instanse.put(`${questionsApi.describeImage}/${data.id}`, data)

      case 'LISTEN_AND_SELECT_ENGLISH_WORD':
         return instanse.put(`${questionsApi.listenAndSelect}/${data.id}`, data)

      case 'RECORD_SAYING_STATEMENT':
         return instanse.put(
            `${questionsApi.recordSayingStatement}/${data.id}`,
            data
         )

      case 'RESPOND_N_WORDS':
         return instanse.put(
            `${questionsApi.respondInAtLeastNWords}/${data.id}`,
            data
         )

      case 'SELECT_BEST_TITLE':
         return instanse.put(`${questionsApi.selectBestTitle}/${data.id}`, data)

      case 'HIGHLIGHT_THE_ANSWER':
         return instanse.put(
            `${questionsApi.highlightTheAnswer}/${data.id}`,
            data
         )

      default:
         return ''
   }
}
