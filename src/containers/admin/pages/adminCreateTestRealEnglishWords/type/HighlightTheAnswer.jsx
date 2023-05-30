import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { styled } from '@mui/material'
import Input from '../../../../../components/UI/input/Input'
import TextArea from '../../../../../components/UI/textArea/TextArea'
import Button from '../../../../../components/UI/buttons/Buttons'
import { useSnackbar } from '../../../../../hooks/useSnackbar'
import { postHighlightTheAnswer } from '../../../../../api/questionService'

const HighlightTheAnswer = ({ title, duration, testId }) => {
   const [statement, setStatement] = useState('')
   const [passage, setPassage] = useState('')
   const navigate = useNavigate()
   const { notify } = useSnackbar()

   const guestionsThePassage = (e) => {
      setStatement(e.target.value)
   }
   const changePassageFunction = (e) => {
      setPassage(e.target.value)
   }

   const correctAnswer = 'aergrae'
   const goBackFunction = () => {
      navigate(-1)
   }
   const saveHandler = async () => {
      try {
         const data = {
            title,
            statement,
            passage,
            correctAnswer,
            duration,
            questionOrder: 7,
            testId,
            isActive: true,
         }
         await postHighlightTheAnswer(data)
         goBackFunction()
         return notify('success', 'Question', 'Succesfull')
      } catch (error) {
         return notify('error', 'Question', error.response?.data.message)
      }
   }
   return (
      <>
         <QuestionsToThePassageDiv>
            <LabelQuestion htmlFor="questionsToThePassage">
               Guestions to the Passage
            </LabelQuestion>
            <InputQuestion
               type="text"
               id="questionsToThePassage"
               onChange={guestionsThePassage}
            />
         </QuestionsToThePassageDiv>
         <PassageDiv>
            <LabelPassage htmlFor="passageLabel">Passage</LabelPassage>
            <TextAreaPassage
               sx={{ borderRadius: '8px' }}
               id="passageLabel"
               handleChange={changePassageFunction}
            />
         </PassageDiv>
         <HighlightCorrectAnswerDiv>
            {passage && (
               <>
                  <p>Highlight correct answer :</p>
                  <HighlightCorrectAnswer value={passage} />
               </>
            )}
         </HighlightCorrectAnswerDiv>
         <ButtonContainer>
            <GoBackButton onClick={goBackFunction}>Go back</GoBackButton>
            <SaveButton disabled={!statement} onClick={saveHandler}>
               Save
            </SaveButton>
         </ButtonContainer>
      </>
   )
}

export default HighlightTheAnswer

const QuestionsToThePassageDiv = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   gap: '12px',
}))
const LabelQuestion = styled('label')(() => ({
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 500,
   fontSize: '16px',
   lineHeight: '16px',
   display: 'flex',
   alignItems: 'center',
   color: '#4C4859',
}))
const LabelPassage = styled('label')(() => ({
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: '500',
   fontSize: '16px',
   lineHeight: '16px',
   display: 'flex',
   alignItems: 'center',
   color: ' #4C4859',
   marginBottom: '12px',
}))

const InputQuestion = styled(Input)(() => ({
   boxSizing: 'border-box',
   input: {
      height: '46px',
      padding: '0px',
   },
   background: '#FFFFFF',
}))
const PassageDiv = styled('div')(() => ({
   marginTop: '24px',
   gap: '12px',
}))
const TextAreaPassage = styled(TextArea)(() => ({
   ' & .MuiInputBase-root': {
      background: ' #FFFFFF',
      border: '0.1px solid #ffffff',
      '&:onChange': {
         padding: '14px 16px 40px 16px',
      },
   },
   ' & .MuiInputBase-input': {
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: '144%',
      letterSpacing: '0.03em',
      color: ' #4C4859',
   },
   width: '100%',
}))
const HighlightCorrectAnswerDiv = styled('div')(() => ({
   width: '100%',
}))

const HighlightCorrectAnswer = styled(TextArea)(() => ({
   input: {},
   '& .MuiInputBase-input': {
      width: '100%',
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: ' 144%',
      letterSpacing: '0.03em',
      color: '#4C4859',
   },
   ' & .MuiInputBase-root': {
      border: '0.1px solid #ffffff',
      padding: '0px',
   },
   '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
         border: 'none',
      },
      '&:hover fieldset': {
         border: 'none',
      },
      '& fieldset': {
         border: 'none',
      },
   },
   maxWidth: '100%',
}))

const GoBackButton = styled(Button)(() => ({
   width: '105px',
   height: '42px',
   border: '2px solid #3A10E5',
   borderRadius: '8px',
   '&:hover': {
      background: '#3A10E5',
      color: '#fff',
   },
}))

const SaveButton = styled(Button)(({ disabled }) => ({
   width: '105px',
   height: '42px',
   border: `${disabled ? '1px solid #2AB930' : 'none'}`,
   background: `${disabled ? '#fff' : '#2AB930'}`,
   color: '#fff',
   '&:hover': {
      background: '#31CF38',
   },
}))

const ButtonContainer = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'flex-end',
   marginTop: '32px',
   gap: '16px',
}))
