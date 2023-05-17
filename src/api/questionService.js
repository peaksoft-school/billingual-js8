import { instanse } from '../config/axios-instanse/Instanse'

export const typeWhatYourHearRequest = () => {
   return instanse.post('api/questions/type-what-you-hear')
}
