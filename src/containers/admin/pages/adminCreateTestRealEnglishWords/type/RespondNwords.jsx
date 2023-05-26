import { InputLabel, styled } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { postRespondWords } from '../../../../../api/questionService'
import Button from '../../../../../components/UI/buttons/Buttons'
import Input from '../../../../../components/UI/input/Input'
import { useSnackbar } from '../../../../../hooks/useSnackbar'

const RespondNwords = ({ title, duration, testId }) => {
   const { notify } = useSnackbar()
   const navigate = useNavigate()
   const [validationErrors, setValidationErrors] = useState({})
   const [formValues, setFormValues] = useState({
      statement: '',
      minWords: 0,
   })

   const navigateGoBackTest = () => {
      navigate('/admin/test')
   }

   const handleInputChange = (event) => {
      const { name, value } = event.target

      if (name === 'minWords') {
         if (/^\d{0,2}$/.test(value) && value >= 0 && value <= 10) {
            setFormValues((prevValues) => ({
               ...prevValues,
               [name]: value,
            }))
            return setValidationErrors((prevErrors) => ({
               ...prevErrors,
               [name]: '',
            }))
         }
         return setValidationErrors((prevErrors) => ({
            ...prevErrors,
            [name]: 'Please enter a number between 1 and 10 for replays.',
         }))
      }

      if (name === 'statement') {
         if (value.trim().length === 0) {
            return setValidationErrors((prevErrors) => ({
               ...prevErrors,
               [name]: 'Correct answer cannot be negative.',
            }))
         }
         setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
         }))
         return setValidationErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '',
         }))
      }
      return undefined
   }

   const submitHandler = async () => {
      if (Object.values(validationErrors).some((error) => error !== '')) {
         notify(
            'error',
            'Attention!',
            'Please fix the validation errors before saving.'
         )
      }

      try {
         const data = {
            statement: formValues.statement,
            minWords: formValues.minWords,
            title,
            duration: Number(duration),
            questionOrder: 5,
            testId: Number(testId),
            isActive: true,
         }
         await postRespondWords(data)
         navigateGoBackTest()
         return notify('success', 'New question', 'Posted successfully!')
      } catch (error) {
         return notify('error', 'Question', error.response?.data.message)
      }
   }

   return (
      <div>
         <LabelStyled>Question statement</LabelStyled>
         <InputForAnswer
            name="statement"
            value={formValues.statement}
            onChange={handleInputChange}
         />
         <ReplaysStyled>
            <LabelStyled>
               Number off
               <br /> Words
            </LabelStyled>
            <InputStyled
               type="number"
               name="minWords"
               value={formValues.minWords}
               onChange={handleInputChange}
            />
         </ReplaysStyled>
         <ContainerBtn>
            <GoBackButton variant="outlined" onClick={navigateGoBackTest}>
               Go back
            </GoBackButton>
            <SaveButton variant="contained" onClick={submitHandler}>
               Save
            </SaveButton>
         </ContainerBtn>
      </div>
   )
}

export default RespondNwords
const InputStyled = styled(Input)(() => ({
   input: { padding: '.75rem  0.8rem .75rem 0.7rem ' },
   width: '7%',
   borderRadius: '.5rem',
   border: 'solid .0956rem #D4D0D0',
}))

const InputForAnswer = styled(Input)(() => ({
   input: { padding: '.75rem 1.5625rem' },
   width: '100%',
   borderRadius: '.5rem',
   border: 'solid .0956rem #D4D0D0',
}))
const ReplaysStyled = styled('div')(() => ({
   marginTop: '25px',
}))

const LabelStyled = styled(InputLabel)(() => ({
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 500,
   fontSize: '16px',
   lineHeight: '16px',
   color: '#4B4759',
   marginBottom: '15px',
}))

const ContainerBtn = styled('div')(() => ({
   gap: '15px',
   display: 'flex',
   justifyContent: 'flex-end',
   padding: '35px 0  0 0 ',
}))

const SaveButton = styled(Button)(() => ({
   background: '#2AB930',
   boxSizing: 'border-box',
   border: 'none',
   fontSize: '14px',
   lineHeight: '16px',
   padding: '13px 24px',
   fontWeight: 700,
   gap: '8px',
   fontFamily: 'Gilroy , Poppins',
   ':hover': {
      background: '#26a32d',
      color: '#FFFFFF',
      variant: 'contained',
   },
}))

const GoBackButton = styled(Button)(() => ({
   boxSizing: 'border-box',
   border: '2px solid',
   fontSize: '14px',
   lineHeight: '16px',
   padding: '13px 24px',
   fontWeight: 700,
   gap: '8px',
   fontFamily: 'Gilroy , Poppins',
   ':hover': {
      background: '#3A10E5',
      color: '#FFFFFF',
      variant: 'contained',
      border: '2px solid',
   },
}))