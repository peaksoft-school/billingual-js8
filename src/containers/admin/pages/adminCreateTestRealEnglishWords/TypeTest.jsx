import React from 'react'
import ListenWords from './type/ListenAndSelectWords'
import SelectRealEnglishWords from './type/SelectRealEnglishWords'
import RecordSayingStatement from './type/RecordSayingStatement'
import SelectBestTitle from './type/SelectBestTitle'
import SelectMainIdea from './type/SelectMainIdea'
import { questionTypes } from '../../../../utils/constants/common'

const TypeTest = ({ selectType, title, duration, testId }) => {
   switch (selectType) {
      case questionTypes.SelectRealEnglishWords:
         return <SelectRealEnglishWords />
      case questionTypes.ListenAndSelect:
         return <ListenWords />
      case questionTypes.RecordSayingStatement:
         return (
            <RecordSayingStatement
               title={title}
               duration={duration}
               testId={testId}
            />
         )
      case questionTypes.SelectTheMainIdea:
         return (
            <SelectMainIdea title={title} duration={duration} testId={testId} />
         )
      case questionTypes.SelectBestTitle:
         return (
            <SelectBestTitle
               title={title}
               duration={duration}
               testId={testId}
            />
         )
      default:
         return <div />
   }
}

export default TypeTest
