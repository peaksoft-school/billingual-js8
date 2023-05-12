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
   width: '15.82%',
   height: '42px',
   background: '#3A10E5',
   borderRadius: '8px',
   marginLeft: '76.02%',
}
const menuItemStyle = {
   margin: '0 auto',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'start',
   width: '100%',
   height: '42px',
}

const AdminCreateTest = () => {
   const { inputOnChange } = useTimer()
   const [selectType, setSelectType] = useState('')

   const handleChange = (event) => {
      setSelectType(event.target.value)
   }

   return (
      <DivCreateTest>
         <DivInputOne>
            <div style={{ width: '85.1%' }}>
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
                  <MenuItem sx={menuItemStyle} value={type.type}>
                     {type.type}
                  </MenuItem>
               ))}
            </SelectType>
         </DivInputSecond>
         <Button sx={buttonStyle}>
            <div
               style={{
                  display: 'flex',
                  alignItems: 'center',
                  textAlign: 'center',
               }}
            >
               <ImageVector src={Vector} />
               <DivAddOptions>Add Options</DivAddOptions>
            </div>
         </Button>
         <TestSelectRealEnglishWords>
            <TypeTest selectType={selectType} />
         </TestSelectRealEnglishWords>
      </DivCreateTest>
   )
}
export default AdminCreateTest

const DivCreateTest = styled('div')(() => ({
   margin: '0 auto',
   width: '68%',
   height: 'auto',
   background: '#ffffff',
   marginTop: '48px',
   borderRadius: '20px',
   paddingBottom: '50px',
   boxShadow:
      ' rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
}))
const DivInputOne = styled('div')(() => ({
   width: '83.57%',
   height: '99px',
   display: 'flex',
   margin: '0 auto',
   gap: '24px',
   paddingTop: '50px',
}))
const InputOne = styled('input')(() => ({
   width: '100%',
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
   width: '96%',
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
   fontSize: '1rem',
   lineHeight: '18px',
   color: '#4B4759',
   height: '36px',
   width: '88.3%',
}))

const DivTimerInput = styled('div')(() => ({
   width: '12.09%',
   height: '99px',
   marginLeft: '20px',
   marginTop: '-5px',
}))

const DivInputSecond = styled('div')(() => ({
   width: '83.67%',
   height: '74px',
   margin: '24px 8.16% 32px 8.16%',
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
   width: '100%',
   height: '46px',
   background: '#FFFFFF',
   borderRadius: '8px',
   marginTop: '12px',
   display: 'flex',
   textAlign: 'center',
}))

const ImageVector = styled('img')(() => ({
   width: '8%',
   height: '35%',
   marginLeft: '10.32%',
}))

const DivAddOptions = styled('div')(() => ({
   width: '70%',
   height: '40.48%',
   fontFamily: 'Gilroy',
   fontSize: '0.875rem',
   lineHeight: '1rem',
   color: ' #FFFFFF',
   marginLeft: '10%',
   letterSpacing: '0.02em',
}))

const TestSelectRealEnglishWords = styled('div')(() => ({
   height: 'auto',
   width: '83.67%',
   margin: '0 auto',
   marginTop: '22px',
}))
