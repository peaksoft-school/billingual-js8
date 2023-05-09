import React, { useState } from 'react'
import { InputLabel, MenuItem, Select, styled } from '@mui/material'
import Button from '../../../../components/UI/buttons/Buttons'
import Vector from '../../../../assets/icons/Vector.png'
import TypeTest from './TypeTest'
import { useTimer } from '../../../../hooks/useTimer'

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

const AdminCreateTest = () => {
   const { inputOnChange } = useTimer()
   const [selectType, setSelectType] = useState('')

   const handleChange = (event) => {
      setSelectType(event.target.value)
   }

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
                  <InputNewTime onChange={inputOnChange} type="number" />
               </DivTimerInput>
            </DivInputOne>
            <DivInputSecond>
               <InputLabelTextType id="demo-simple-select-helper-label">
                  Type
               </InputLabelTextType>
               <SelectType value={selectType} onChange={handleChange}>
                  {typeTestArray.map((type) => (
                     <MenuItem
                        sx={{
                           margin: '0 auto',
                           display: 'flex',
                           flexDirection: 'column',
                           alignItems: 'start',
                           width: '804px',
                           height: '42px',
                        }}
                        value={type.type}
                     >
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
            <TypeTest selectType={selectType} />
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
}))
const DivInput = styled('div')(() => ({
   padding: '50px 80px 22px 80px',
}))
const DivInputOne = styled('div')(() => ({
   width: '697px',
   height: '99px',
   display: 'flex',
}))
const InputOne = styled('input')(() => ({
   width: '674px',
   height: '46px',
   borderRadius: '8px',
   border: 'solid 1.53px #D4D0D0',
   fontFamily: 'DINNextRoundedLTW01-Regular',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '16px',
   lineHeight: '18px',
   color: '#4C4859',
   paddingLeft: '16px',
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
   textAlign: 'center',
   fontFamily: 'DINNextRoundedLTW01-Regular',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '16px',
   lineHeight: '18px',
   color: '#4C4859',
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
   display: 'flex',
   textAlign: 'center',
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
   height: 'auto',
   width: '820px',
   margin: '0 auto',
}))
