import React from 'react'
import ListenWords from './type/ListenAndSelectWords'
import SelectRealEnglishWords from './type/SelectRealEnglishWords'
<<<<<<< HEAD
import TypeWhatHear from './type/TypeWhatHear'
=======
import RecordSayingStatement from './type/RecordSayingStatement'
>>>>>>> c5f263d6e9a5ddf818c8991428064d7dbfb0806c

const TypeTest = ({ selectType, title, duration, testId }) => {
   switch (selectType) {
      case 'Select real English words':
         return <SelectRealEnglishWords />
      case 'Listen and select English word':
         return <ListenWords />
<<<<<<< HEAD
      case 'Type what you hear':
         return (
            <TypeWhatHear title={title} duration={duration} testId={testId} />
=======
      case 'Record saying statement':
         return (
            <RecordSayingStatement
               title={title}
               duration={duration}
               testId={testId}
            />
>>>>>>> c5f263d6e9a5ddf818c8991428064d7dbfb0806c
         )
      default:
         return <div />
   }
}

export default TypeTest
