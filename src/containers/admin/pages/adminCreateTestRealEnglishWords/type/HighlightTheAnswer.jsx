import { React, useState, useRef } from 'react'
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
   const [warningInputPassage, setWarningInputPassage] = useState({})
   const divRef = useRef(null)
   const navigate = useNavigate()
   const { notify } = useSnackbar()

   const guestionsThePassage = (e) => {
      setStatement(e.target.value)
      setWarningInputPassage((prevState) => ({
         ...prevState,
         questionsToThePassage: '',
      }))
   }
   const changePassageFunction = (e) => {
      setPassage(e.target.value)
      setWarningInputPassage((prevState) => ({
         ...prevState,
         passage: '',
      }))
   }

   const goBackFunction = () => {
      navigate('/admin/test')
   }
   const saveHandler = async () => {
      if (statement === '' && passage === '') {
         setWarningInputPassage((prevState) => ({
            ...prevState,
            questionsToThePassage: 'Please write a question!',
            passage: 'Please write an answer to your question!',
         }))
      } else if (passage === '') {
         setWarningInputPassage((prevState) => ({
            ...prevState,
            passage: 'passage write',
         }))
      } else if (window.getSelection().toString() === '') {
         setWarningInputPassage((prevState) => ({
            ...prevState,
            correctAnswer: 'Highlight correct answer!',
         }))
      } else {
         try {
            const data = {
               title,
               statement,
               passage,
               correctAnswer: window.getSelection().toString(),
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
      return null
   }

   return (
      <>
         <QuestionsToThePassageDiv>
            <LabelQuestion htmlFor="questionsToThePassage">
               Questions to the Passage
            </LabelQuestion>
            <InputQuestion
               type="text"
               id="questionsToThePassage"
               onChange={guestionsThePassage}
            />
         </QuestionsToThePassageDiv>
         {warningInputPassage.questionsToThePassage && (
            <Warning>{warningInputPassage.questionsToThePassage}</Warning>
         )}
         <PassageDiv>
            <LabelPassage htmlFor="passageLabel">Passage</LabelPassage>
            <TextAreaPassage
               id="passageLabel"
               handleChange={changePassageFunction}
            />
         </PassageDiv>
         {warningInputPassage.passage && (
            <Warning>{warningInputPassage.passage}</Warning>
         )}
         <HighlightCorrectAnswerDiv>
            {passage && (
               <>
                  <HighlightCorrectAnswerLabel>
                     Highlight correct answer :
                  </HighlightCorrectAnswerLabel>
                  <DivCorrectAnswer ref={divRef}>{passage}</DivCorrectAnswer>
               </>
            )}
            {warningInputPassage.correctAnswer && (
               <Warning>{warningInputPassage.correctAnswer}</Warning>
            )}
         </HighlightCorrectAnswerDiv>
         <ButtonContainer>
            <GoBackButton onClick={goBackFunction}>Go back</GoBackButton>
            <SaveButton onClick={saveHandler}>Save</SaveButton>
         </ButtonContainer>
      </>
   )
}

export default HighlightTheAnswer

const QuestionsToThePassageDiv = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   gap: '0.75rem',
}))
const LabelQuestion = styled('label')(() => ({
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 500,
   fontSize: '1rem',
   lineHeight: '1rem',
   display: 'flex',
   alignItems: 'center',
   color: '#4C4859',
}))
const LabelPassage = styled('label')(() => ({
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: '500',
   fontSize: '1rem',
   lineHeight: '1rem',
   display: 'flex',
   alignItems: 'center',
   color: ' #4C4859',
   marginBottom: '0.75rem',
}))

const InputQuestion = styled(Input)(() => ({
   boxSizing: 'border-box',
   input: {
      height: '1.125rem',
      border: '0.875rem 1rem 0.875rem 1rem',
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
      padding: '0.875rem 1rem 0.875rem 1rem',
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

const GoBackButton = styled(Button)(() => ({
   width: '6.5625rem',
   height: '2.625rem',
   border: '0.125rem solid #3A10E5',
   borderRadius: '8px',
   '&:hover': {
      background: '#3A10E5',
      color: '#fff',
   },
}))

const SaveButton = styled(Button)(({ disabled }) => ({
   width: '6.5625rem',
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
const Warning = styled('p')(() => ({
   color: '#ff0000',
   textTransform: 'uppercase',
   marginTop: '0px',
}))
const DivCorrectAnswer = styled('div')(() => ({
   '::selection': {
      color: '#0015ff',
      textDecoration: 'underline',
   },
}))

const HighlightCorrectAnswerLabel = styled('h1')(() => ({
   fontFamily: 'DINNextRoundedLTW04-Medium',
   fontStyle: 'normal',
   fontWeight: 500,
   fontSize: '1rem',
   lineHeight: '1.125rem',
   color: '#4C4859',
}))
