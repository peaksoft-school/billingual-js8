import React from 'react'
import ListenWords from './type/ListenAndSelectWords'
import SelectRealEnglishWords from './type/SelectRealEnglishWords'

const TypeTest = ({ selectType }) => {
   switch (selectType) {
      case 'Select real English words':
         return <SelectRealEnglishWords />
      case 'Listen and select English word':
         return <ListenWords />
      default:
         return <div />
   }
}

export default TypeTest
