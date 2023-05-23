import React, { useState } from 'react'
import { InputLabel, MenuItem, Select, styled } from '@mui/material'
// import { useFormik } from 'formik'
// import * as Yup from 'yup'
import Button from '../../../../components/UI/buttons/Buttons'
import Vector from '../../../../assets/icons/Vector.png'
import TypeTest from './TypeTest'

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
   color: '#ffff',
   gap: '10%',
   whiteSpace: 'nowrap',
   fontFamily: 'Poppins',
   fontSize: '0.875rem',
   lineHeight: '1rem',
}
const menuItemStyle = {
   margin: '0 auto',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'start',
   width: '100%',
   height: '42px',
}

const TestQuestions = () => {
   const [selectType, setSelectType] = useState('')
   const [title, setTitle] = useState('')
   const [duration, setDuration] = useState('')
   const [errorObject, setError] = useState({})
   const titleOnChangeFunction = (e) => {
      setTitle(e.target.value)
      setError((prevState) => ({
         ...prevState,
         title: '',
      }))
   }

   const durationOnChange = (e) => {
      setDuration(e.target.value)
      setError((prevState) => ({
         ...prevState,
         duration: '',
      }))
   }
   const selectFunction = (e) => {
      setSelectType(e.target.value)
      setError((prevState) => ({
         ...prevState,
         select: '',
      }))
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      if (title === '' && duration === '' && selectType === '') {
         setError((prevState) => ({
            ...prevState,
            title: 'Please title enter!',
            duration: 'Enter time!',
            select: 'Please select the type of test!',
         }))
      } else {
         setError((prevState) => ({
            ...prevState,
            title: '',
            duration: '',
            select: '',
         }))
      }
   }
   return (
      <DivCreateTest>
         <FormSubmit onSubmit={handleSubmit}>
            <DivInputOne>
               <div
                  style={{
                     width: '85%',
                     height: '76px',
                     marginTop: '18px',
                  }}
               >
                  <TextTitle>Title</TextTitle>
                  <InputOne
                     style={
                        errorObject.title
                           ? { border: '1px solid #d60b0b' }
                           : { border: '1px solid #6a6666c1' }
                     }
                     placeholder="Name of the test"
                     name="title"
                     onChange={titleOnChangeFunction}
                     value={title}
                  />
                  {errorObject.title && <Warning>{errorObject.title}</Warning>}
               </div>
               <DivTimerInput>
                  <TimeText htmlFor="timeInput">
                     Duration <br /> (in minutes)
                  </TimeText>
                  <InputNewTime
                     style={
                        errorObject.duration
                           ? {
                                border: '1px solid #d60b0b',
                             }
                           : { border: '1px solid #6a6666c1' }
                     }
                     placeholder={
                        errorObject.duration ? errorObject.duration : '15:00'
                     }
                     id="timeInput"
                     name="duration"
                     onChange={durationOnChange}
                     type="number"
                     value={duration}
                  />
               </DivTimerInput>
            </DivInputOne>
            <DivInputSecond>
               <InputLabelTextType id="demo-simple-select-helper-label">
                  Type
               </InputLabelTextType>
               <SelectType
                  name="select"
                  value={selectType}
                  onChange={selectFunction}
                  error={errorObject.select}
                  displayEmpty
               >
                  <MenuItem value="" disabled>
                     Select type test
                  </MenuItem>
                  {typeTestArray.map((type) => (
                     <MenuItem
                        key={type.id}
                        sx={menuItemStyle}
                        value={type.type}
                     >
                        {type.type}
                     </MenuItem>
                  ))}
               </SelectType>
               {errorObject.select && <Warning>{errorObject.select}</Warning>}
            </DivInputSecond>
            <Button sx={buttonStyle} type="submit">
               <ImageVector src={Vector} />
               Add Options
            </Button>
         </FormSubmit>
         <TestSelectRealEnglishWords>
            <TypeTest selectType={selectType} />
         </TestSelectRealEnglishWords>
      </DivCreateTest>
   )
}
export default TestQuestions

const DivCreateTest = styled('div')(() => ({
   margin: '0 auto',
   width: '68%',
   height: 'auto',
   background: '#ffffff',
   marginTop: '48px',
   borderRadius: '20px',
   paddingTop: '50px',
   paddingBottom: '50px',
   boxShadow:
      ' rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
}))
const FormSubmit = styled('form')(() => ({}))
const DivInputOne = styled('div')(() => ({
   width: '83.57%',
   height: '94px',
   display: 'flex',
   margin: '0 auto',
   gap: '24px',
}))
const InputOne = styled('input')(() => ({
   width: '98.9%',
   height: '60.53%',
   borderRadius: '8px',
   border: 'solid 1.53px #D4D0D0',
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '16px',
   lineHeight: '18px',
   color: '#4C4859',
   paddingLeft: '16px',
}))
const TextTitle = styled('h1')(() => ({
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 500,
   fontSize: '16px',
   lineHeight: '18px',
   color: '#4B4759',
   marginTop: '-2px',
   // marginBottom: '17px',
}))
const InputNewTime = styled('input')(() => ({
   width: '95%',
   height: '46px',
   background: '#FFFFFF',
   border: '1.53px solid #D4D0D0',
   borderRadius: '8px',
   textAlign: 'center',
   marginTop: '10px',
}))

const TimeText = styled('label')(() => ({
   width: '83.84%',
   height: '38.3%',
   fontFamily: 'DINNextRoundedLTW04-Medium',
   fontStyle: 'normal',
   fontWeight: 500,
   fontSize: '1rem',
   lineHeight: '1.125rem',
   display: 'flex',
   alignItems: 'center',
   color: '#4B4759',
}))

const DivTimerInput = styled('div')(() => ({
   width: '12.07%',
   height: '100%',
   // gap: '10px',
   display: 'flex',
   flexDirection: 'column',
   // marginLeft: '24px',
}))

const DivInputSecond = styled('div')(() => ({
   width: '83.67%',
   height: '74px',
   margin: '24px 8.16% 32px 8.16%',
}))

const InputLabelTextType = styled(InputLabel)(() => ({
   fontFamily: 'Poppins',
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
   width: '6.77%',
   height: '35%',
}))

// const DivAddOptions = styled('div')(() => ({
//    width: '70%',
//    height: '40.48%',
//    fontFamily: 'Gilroy',
//    fontSize: '0.875rem',
//    lineHeight: '1rem',
//    color: ' #FFFFFF',
//    marginLeft: '10%',
//    letterSpacing: '0.02em',
// }))

const TestSelectRealEnglishWords = styled('div')(() => ({
   height: 'auto',
   width: '83.67%',
   margin: '0 auto',
   marginTop: '22px',
}))
const Warning = styled('div')(() => ({
   color: '#ff0000',
}))
