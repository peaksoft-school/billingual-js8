import { styled, Typography } from '@mui/material'
import { AxiosError } from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { postEveluatingScore } from '../../../../../api/resultService'
import Button from '../../../../../components/UI/buttons/Buttons'
import Checkboxes from '../../../../../components/UI/checkbox/Checkbox'
import { useSnackbar } from '../../../../../hooks/useSnackbar'

const styleCheckboxes = {
   width: '6.97%',
   height: '43.48%',
   marginLeft: '9.89%',
}
const buttonStyleGoBack = {
   width: '12.8%',
   height: '42px',
   background: '#FFFFFF',
   border: '2px solid #3A10E5',
   borderRadius: '8px',
   fontFamily: 'Gilroy',
   fontSize: '0.875rem',
   lineHeight: '16px',
   '&:hover': {
      background: '#3A10E5',
      color: '#FFFFFF',
   },
}
const buttonSave = {
   width: '10%',
   height: '42px',
   background: '#2AB930',
   borderRadius: '8px',
   color: '#fff',
   ':hover': {
      background: '#00ff2a',
   },
}
const RealWordsResult = ({ question, score, answerId }) => {
   const navigate = useNavigate()
   const { notify } = useSnackbar()

   const goBack = () => {
      navigate(-1)
   }
   const saveScore = async () => {
      const data = {
         answerId,
         score,
      }
      try {
         await postEveluatingScore(data)
         goBack()
         return notify('success', 'Question', 'Successfully added')
      } catch (error) {
         if (AxiosError(error)) {
            return notify('error', 'Question', error.response?.data.message)
         }
         return notify('error', 'Question', 'Something went wrong')
      }
   }

   return (
      <>
         <TestSelectRealEnglishWordsLine>
            {question.questionResponse.options.map((elem, i) => (
               <Words key={elem.id}>
                  <NumberWords>{i + 1}</NumberWords>
                  <WordEnglishTest>{elem.title}</WordEnglishTest>
                  <Checkboxes
                     sx={styleCheckboxes}
                     color="success"
                     checked={elem.isCorrect}
                  />
               </Words>
            ))}
         </TestSelectRealEnglishWordsLine>
         <h4 style={{ margin: 0 }}>User&#39;s Answer</h4>
         <TestSelectRealEnglishWordsLine>
            {question.userAnswerResponse.map((elem, i) => (
               <UserAnswer key={elem.optionTitle}>
                  <NumberWords>{i + 1}</NumberWords>
                  <Typography>{elem.optionTitle}</Typography>
               </UserAnswer>
            ))}
         </TestSelectRealEnglishWordsLine>
         <DivButtonSaveandGoBack>
            <Button sx={buttonStyleGoBack} onClick={goBack}>
               go Back
            </Button>
            <Button sx={buttonSave} onClick={saveScore}>
               Save
            </Button>
         </DivButtonSaveandGoBack>
      </>
   )
}

export default RealWordsResult

const TestSelectRealEnglishWordsLine = styled('div')(() => ({
   width: '100%',
   height: 'auto',
   margin: 0,
   display: 'flex',
   gap: '2.2%',
   marginBottom: '18px',
}))

const Words = styled('div')(() => ({
   width: '31.83%',
   height: 'auto',
   background: '#FFFFFF',
   border: '1.53px solid #D4D0D0',
   borderRadius: '8px',
   display: 'flex',
   alignItems: 'center',
}))
const UserAnswer = styled('div')(() => ({
   width: '18.83%',
   background: '#FFFFFF',
   border: '1.53px solid #D4D0D0',
   borderRadius: '8px',
   display: 'flex',
   alignItems: 'center',
   padding: '14px 16px',
}))

const NumberWords = styled('div')(() => ({
   width: '3.47%',
   height: '39.13%',
   margin: '14px 6% 14px 6.13%',
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '16px',
   lineHeight: '18px',
   color: ' #4C4859',
}))

const WordEnglishTest = styled('div')(() => ({
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '1rem',
   lineHeight: '18px',
   color: ' #4C4859',
   width: '47.59%',
   height: '39.13%',
}))

const DivButtonSaveandGoBack = styled('div')(() => ({
   width: '100%',
   height: '42px',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'end',
   marginTop: '32px',
   gap: '1.95%',
}))
