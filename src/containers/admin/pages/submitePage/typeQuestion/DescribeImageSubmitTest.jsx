import React from 'react'
import { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'
import { styled } from '@mui/material'
import Button from '../../../../../components/UI/buttons/Buttons'
import { useSnackbar } from '../../../../../hooks/useSnackbar'
import { postEveluatingScore } from '../../../../../api/resultService'

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
      background: '#00FF2A',
   },
}
const DescribeImageSubmitTest = ({ question, answerId, score }) => {
   const navigate = useNavigate()
   const { notify } = useSnackbar()
   const goBack = () => {
      navigate(-1)
   }

   const files = question.questionResponse.files.find((elem) => {
      return elem.fileUrl
   })

   console.log(files)

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
   return question.userAnswerResponse.map((item) => (
      <div style={{ width: '100%', height: '330px', marginTop: '40px' }}>
         <DivPlayAudioButtonAndCorrectAnswer>
            <TestImage url={files.fileUrl} />
            <CorrectAnswer>Correct answer:Hello world!!!!</CorrectAnswer>
         </DivPlayAudioButtonAndCorrectAnswer>
         <InfoDiv>
            <div
               style={{
                  width: '35%',
                  height: 'auto',
                  color: '#4C4859',
                  fontSize: '1.125rem',
                  fontFamily: 'Poppins',
                  fontWeight: 500,
               }}
            >
               User’s Answer
            </div>
            <EnteredStatement>Entered Statement: {item.data}</EnteredStatement>
         </InfoDiv>
         <DivButtonSaveandGoBack>
            <Button sx={buttonStyleGoBack} onClick={goBack}>
               go Back
            </Button>
            <Button sx={buttonSave} onClick={saveScore}>
               Save
            </Button>
         </DivButtonSaveandGoBack>
      </div>
   ))
}
export default DescribeImageSubmitTest
const DivPlayAudioButtonAndCorrectAnswer = styled('div')(() => ({
   width: '100%',
   height: '42px',
   display: 'flex',
   alignItems: 'center',
   gap: '32px',
}))
const CorrectAnswer = styled('div')(() => ({
   color: '#4C4859',
   fontSize: '16px',
   fontFamily: 'Poppins',
}))
const InfoDiv = styled('div')(() => ({
   width: '100%',
   height: '53px',
   marginTop: '166px',
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
const TestImage = styled('div')(({ url }) => ({
   width: '180px',
   height: '178px',
   backgroundImage: `url(${url})`,
   backgroundSize: 'cover',
   backgroundPosition: 'center',
   borderRadius: '2px',
   cursor: 'pointer',
}))
const EnteredStatement = styled('div')(() => ({
   width: '100%',
   color: '#4C4859',
   fontSize: '16px',
   fontFamily: 'Poppins',
   fontWeight: 500,
}))
