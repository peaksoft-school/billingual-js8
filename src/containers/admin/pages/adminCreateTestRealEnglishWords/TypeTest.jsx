import React from 'react'
import ListenWords from './type/ListenAndSelectWords'
import SelectRealEnglishWords from './type/SelectRealEnglishWords'
import RecordSayingStatement from './type/RecordSayingStatement'

const TypeTest = ({ selectType, title, duration, testId }) => {
   switch (selectType) {
      case 'Select real English words':
         return <SelectRealEnglishWords />
      case 'Listen and select English word':
         return <ListenWords />
      case 'Record saying statement':
         return (
            <RecordSayingStatement
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
