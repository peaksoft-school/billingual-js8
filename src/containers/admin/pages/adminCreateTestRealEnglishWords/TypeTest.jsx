import React from 'react'
import ListenWords from './type/ListenAndSelectWords'
import RespondNwords from './type/RespondNwords'
import SelectRealEnglishWords from './type/SelectRealEnglishWords'
import TypeWhatHear from './type/TypeWhatHear'
import RecordSayingStatement from './type/RecordSayingStatement'
import HighlightTheAnswer from './type/HighlightTheAnswer'
import SelectBestTitle from './type/SelectBestTitle'
import SelectMainIdea from './type/SelectMainIdea'
import { questionTypes } from '../../../../utils/constants/common'
import DescribeImage from './type/DescribeImage'

const TypeTest = ({ selectType, title, duration, testId, setError }) => {
   switch (selectType) {
      case questionTypes.SelectRealEnglishWords:
         return (
            <SelectRealEnglishWords
               title={title}
               duration={duration}
               testId={testId}
               setError={setError}
            />
         )
      case questionTypes.ListenAndSelect:
         return (
            <ListenWords
               title={title}
               duration={duration}
               testId={testId}
               setError={setError}
            />
         )
      case questionTypes.RecordSayingStatement:
         return (
            <RecordSayingStatement
               title={title}
               duration={duration}
               testId={testId}
               setError={setError}
            />
         )
      case questionTypes.HighlightTheAnswer:
         return (
            <HighlightTheAnswer
               title={title}
               duration={duration}
               testId={testId}
               setError={setError}
            />
         )
      case questionTypes.TypeWhatYourHear:
         return (
            <TypeWhatHear
               title={title}
               duration={duration}
               testId={testId}
               setError={setError}
            />
         )
      case questionTypes.RespondInAtLeastNWords:
         return (
            <RespondNwords
               title={title}
               duration={duration}
               testId={testId}
               setError={setError}
            />
         )
      case questionTypes.SelectTheMainIdea:
         return (
            <SelectMainIdea
               title={title}
               duration={duration}
               testId={testId}
               setError={setError}
            />
         )
      case questionTypes.SelectBestTitle:
         return (
            <SelectBestTitle
               title={title}
               duration={duration}
               testId={testId}
               setError={setError}
            />
         )
      case questionTypes.DescribeImage:
         return (
            <DescribeImage
               title={title}
               duration={duration}
               testId={testId}
               setError={setError}
            />
         )
      default:
         return <div />
   }
}

export default TypeTest
