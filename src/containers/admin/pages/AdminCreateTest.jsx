import React, { useState } from 'react'
import { InputLabel, MenuItem, Select, styled } from '@mui/material'
import Button from '../../../components/UI/buttons/Buttons'
import Vector from '../../../assets/icons/Vector.png'
import Checkboxes from '../../../components/UI/checkbox/Checkbox'
import DeleteIcon from '../../../assets/icons/DeletedIcon.svg'

const typeTestArray = [
   {
      type: 'Select real English words',
      id: Math.random(),
   },
   {
      type: 'Listen and select English word',
      id: Math.random(),
   },
   {
      type: 'Type what you hear',
      id: Math.random(),
   },
   {
      type: 'Describe image',
      id: Math.random(),
   },
   {
      type: 'Record saying statement',
      id: Math.random(),
   },
   {
      type: 'Respond in at least N words',
      id: Math.random(),
   },
   {
      type: 'Highlight the answer',
      id: Math.random(),
   },
   {
      type: 'Select the main idea',
      id: Math.random(),
   },
   {
      type: 'Select best title',
      id: Math.random(),
   },
]

const realEnglishWords = [
   {
      word: 'advantage',
      id: 1,
   },
   {
      word: 'advantage',
      id: 2,
   },
   {
      word: 'advantage',
      id: 3,
   },
   {
      word: 'advantage',
      id: 4,
   },
   {
      word: 'advantage',
      id: 5,
   },
   {
      word: 'advantage',
      id: 6,
   },
]

const buttonStyle = {
   '&:hover': {
      background: '#0015cf',
   },
   width: '155px',
   height: '42px',
   background: '#3A10E5',
   borderRadius: '8px',
   marginTop: '32px',
   marginLeft: '665px',
   display: 'flex',
   alignItems: 'center',
}
const buttonStyleGoBack = {
   width: '105px',
   height: '42px',
   background: '#FFFFFF',
   border: '2px solid #3A10E5',
   borderRadius: '8px',
   fontFamily: 'Gilroy',
   fontSize: '14px',
   lineHeight: '16px',
}
const buttonSave = {
   width: '82px',
   height: '42px',
   background: '#2AB930',
   borderRadius: '8px',
   color: '#fff',
   ':hover': {
      background: 'red',
   },
}
const AdminCreateTest = () => {
   const [age, setAge] = useState('')

   const handleChange = (event) => {
      setAge(event.target.value)
   }

   const sliceWordOne = realEnglishWords.slice(0, 3)
   const sliceWordTwo = realEnglishWords.slice(3, 6)

   return (
      <DivCreateTest>
         <DivInput>
            <DivInputOne>
               <div>
                  <TextTitle>Title</TextTitle>
                  <InputOne />
               </div>
               <DivTimerInput>
                  <TimeText>
                     Duration <br /> (in minutes)
                  </TimeText>
                  <InputNewTime type="time" />
               </DivTimerInput>
            </DivInputOne>
            <DivInputSecond>
               <InputLabelTextType id="demo-simple-select-helper-label">
                  Type
               </InputLabelTextType>
               <SelectType value={age} onChange={handleChange}>
                  {typeTestArray.map((type) => (
                     <MenuItem sx={{ marginLeft: '40px' }} value={type.id}>
                        {type.type}
                     </MenuItem>
                  ))}
               </SelectType>
            </DivInputSecond>
            <Button sx={buttonStyle}>
               <ImageVector src={Vector} alt="ergre" />
               <DivAddOptions>Add Options</DivAddOptions>
            </Button>
         </DivInput>
         <TestSelectRealEnglishWords>
            <TestSelectRealEnglishWordsLine>
               {sliceWordOne.map((elem) => (
                  <WordEnglish>
                     <NumberWords>{elem.id}</NumberWords>
                     <WordEnglishTest>{elem.word}</WordEnglishTest>
                     <DivCheckboxAndDeleteButton>
                        <Checkboxes color="success" />
                        <Delete src={DeleteIcon} alt="sdgsdfsd" />
                     </DivCheckboxAndDeleteButton>
                  </WordEnglish>
               ))}
            </TestSelectRealEnglishWordsLine>
            <TestSelectRealEnglishWordsLine>
               {sliceWordTwo.map((elem) => (
                  <WordEnglish>
                     <NumberWords>{elem.id}</NumberWords>
                     <WordEnglishTest>{elem.word}</WordEnglishTest>
                     <DivCheckboxAndDeleteButton>
                        <Checkboxes color="success" />
                        <Delete src={DeleteIcon} alt="sdgsdfsd" />
                     </DivCheckboxAndDeleteButton>
                  </WordEnglish>
               ))}
            </TestSelectRealEnglishWordsLine>
            <TestSelectRealEnglishWordssss>
               <Button sx={buttonStyleGoBack}>go Back</Button>
               <Button sx={buttonSave}>Save</Button>
            </TestSelectRealEnglishWordssss>
         </TestSelectRealEnglishWords>
      </DivCreateTest>
   )
}

export default AdminCreateTest

const DivCreateTest = styled('div')(() => ({
   margin: '0 auto',
   width: '980px',
   height: 'auto',
   background: '#ffffff',
   marginTop: '48px',
   borderRadius: '20px',
   boxShadow:
      ' rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
   paddingTop: '50px',
   paddingBottom: '50px',
}))
const DivInput = styled('div')(() => ({
   margin: '18px 80px 50px 80px',
}))

const DivInputOne = styled('div')(() => ({
   width: '697px',
   height: '99px',
   display: 'flex',
}))

const InputOne = styled('input')(() => ({
   width: '690px',
   height: '46px',
   borderRadius: '8px',
   border: 'solid 1.53px #D4D0D0',
}))
const TextTitle = styled('h1')(() => ({
   fontFamily: 'NextRoundedLTW04-Medium',
   fontStyle: 'normal',
   fontWeight: 500,
   fontSize: '16px',
   lineHeight: '18px',
   color: '#4B4759',
   marginTop: '18px',
   marginBottom: '17px',
}))
const InputNewTime = styled('input')(() => ({
   width: '99px',
   height: '46px',
   borderRadius: '8px',
   borderColor: ' #D4D0D0',
   border: 'solid 1.53px #D4D0D0',
}))

const TimeText = styled('h1')(() => ({
   fontFamily: 'DINNextRoundedLTW04-Medium',
   fontStyle: 'normal',
   fontWeight: 500,
   fontSize: '16px',
   lineHeight: '18px',
   color: '#4B4759',
   marginTop: '0px',
}))

const DivTimerInput = styled('div')(() => ({
   width: '99px',
   height: '94px',
   marginLeft: '20px',
   marginTop: '5.7px',
}))

const DivInputSecond = styled('div')(() => ({
   width: '820px',
   height: '74px',
   marginTop: '24px',
}))

const InputLabelTextType = styled(InputLabel)(() => ({
   fontFamily: 'DINNextRoundedLTW04-Medium',
   fontStyle: 'normal',
   fontWeight: 500,
   fontSize: '16px',
   lineHeight: '16px',
   color: '#4B4759',
}))

const SelectType = styled(Select)(() => ({
   width: '820px',
   height: '46px',
   background: '#FFFFFF',
   borderRadius: '8px',
   marginTop: '12px',
}))

const ImageVector = styled('img')(() => ({
   width: '10.5px',
   height: '10.5px',
}))

const DivAddOptions = styled('div')(() => ({
   width: '97px',
   height: '17px',
   fontFamily: 'DINNextRoundedLTPro-Bold',
   fontSize: '14px',
   lineHeight: '16px',
   alignItems: 'center',
   textAlign: 'center',
   color: ' #FFFFFF',
   marginLeft: '15.5px',
}))
const TestSelectRealEnglishWords = styled('div')(() => ({
   height: '184px',
   width: '820px',
   margin: '0 auto',
   background: '#ffffff',
}))
const TestSelectRealEnglishWordssss = styled('div')(() => ({
   width: '203px',
   display: 'flex',
   gap: '16px',
   marginLeft: '617px',
   marginTop: '32px',
}))

const TestSelectRealEnglishWordsLine = styled('div')(() => ({
   width: '821px',
   height: '46px',
   margin: '0 auto',
   display: 'flex',
   gap: '19px',
   marginBottom: '18px',
}))

const WordEnglish = styled('div')(() => ({
   width: '261px',
   height: '46px',
   background: '#FFFFFF',
   border: '1.53px solid #D4D0D0',
   borderRadius: '8px',
   display: 'flex',
   alignItems: 'center',
}))

const NumberWords = styled('div')(() => ({
   width: '9px',
   height: '18px',
   marginLeft: '16px',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '16px',
   lineHeight: '18px',
   color: ' #4C4859',
}))

const WordEnglishTest = styled('div')(() => ({
   width: '72px',
   height: '18px',
   fontStyle: 'normal',
   fontweight: 400,
   fontSize: '16px',
   lineHeight: '18px',
   color: '#4C4859',
   marginLeft: '15.94px',
}))

const DivCheckboxAndDeleteButton = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
   marginLeft: '78px',
   width: '54px',
}))
const Delete = styled('img')(() => ({
   width: '20px',
   height: '20px',
   cursor: 'pointer',
}))
