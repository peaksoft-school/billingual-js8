import { questionTypes } from '../constants/common'

export const questionName = (name) => {
   switch (name) {
      case 'SELECT_THE_MAIN_IDEA':
         return questionTypes.SelectTheMainIdea
      case 'SELECT_ENGLISH_WORD':
         return questionTypes.SelectRealEnglishWords
      case 'TYPE_WHAT_YOU_HEAR':
         return questionTypes.TypeWhatYourHear
      case 'DESCRIBE_IMAGE':
         return questionTypes.DescribeImage
      case 'LISTEN_AND_SELECT_ENGLISH_WORD':
         return questionTypes.ListenAndSelect
      case 'RECORD_SAYING_STATEMENT':
         return questionTypes.RecordSayingStatement
      case 'RESPOND_N_WORDS':
         return questionTypes.RespondInAtLeastNWords
      case 'SELECT_BEST_TITLE':
         return questionTypes.SelectBestTitle
      case 'HIGHLIGHT_THE_ANSWER':
         return questionTypes.HighlightTheAnswer

      default:
         return name
   }
}
