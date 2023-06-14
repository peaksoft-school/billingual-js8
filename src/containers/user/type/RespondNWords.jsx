import React, { useState } from 'react'
import { Typography, styled } from '@mui/material'
import { useDispatch } from 'react-redux'
import TextArea from '../../../components/UI/textArea/TextArea'
import Button from '../../../components/UI/buttons/Buttons'
import { userQuestionActions } from '../../../redux/user/user.slice'

const RespondNWords = ({ question, handleNextClick }) => {
   const dispatch = useDispatch()
   const [responseText, setResponseText] = useState('')

   const changeResponseTextHandler = (e) => {
      setResponseText(e.target.value)
   }

   const nextHandler = () => {
      const answerData = {
         questionId: question.id,
         data: responseText,
      }
      dispatch(userQuestionActions.addAnswer(answerData))
      handleNextClick()
      setResponseText('')
   }

   const word = responseText.split(' ')

   return (
      <>
         <TitleCont>
            <Title>{question.title}</Title>
         </TitleCont>
         <Container>
            <QuestionContainer>
               <QuestionStatement>{question.statement}</QuestionStatement>
            </QuestionContainer>
            <ResponseContainer>
               <TextArea
                  value={responseText}
                  handleChange={changeResponseTextHandler}
                  fullWidth
                  rows={6}
                  maxRows={6}
                  placeholder={`Your response (min words: ${question.minWords})`}
               />
               <Word>Word: {word.length - 1}</Word>
            </ResponseContainer>
         </Container>
         <BtnContainer>
            <NextBtn
               variant="contained"
               disabled={word.length <= question.minWords}
               onClick={nextHandler}
            >
               Next
            </NextBtn>
         </BtnContainer>
      </>
   )
}

export default RespondNWords

const TitleCont = styled('div')(() => ({
   textAlign: 'center',
}))

const Title = styled('p')(() => ({
   fontFamily: 'poppins',
   fontStyle: 'normal',
   fontWeight: '400',
   fontSize: '28px',
   lineHeight: '32px',
   color: '#4C4859',
}))

const Container = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   gap: '20px',
   minHeight: '190px',
   padding: '0 0 32px',
   borderBottom: '1.53px solid #D4D0D0',
}))

const QuestionContainer = styled('div')(() => ({
   width: '55%',
   maxHeight: '280px',
   overflow: 'hidden',
   overflowY: 'auto',

   '& ::-webkit-scrollbar': {
      width: '10px',
      cursor: 'default',
      margin: '0',
   },
   '& ::-webkit-scrollbar-track': {
      background: '#fff',
   },
   '& ::-webkit-scrollbar-thumb': {
      background: '#9A9A9A',
      borderRadius: '100px',
      '&:hover': {
         background: '#838383',
      },
   },
}))

const QuestionStatement = styled(Typography)(() => ({
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '18px',
   lineHeight: '130%',
   color: '#4C4859',
}))

const ResponseContainer = styled('div')(() => ({
   width: '45%',
   height: '100%',

   '& ::-webkit-scrollbar': {
      width: '10px',
      cursor: 'default',
      margin: '0',
   },
   '& ::-webkit-scrollbar-track': {
      background: '#fff',
   },
   '& ::-webkit-scrollbar-thumb': {
      background: '#9A9A9A',
      borderRadius: '100px',
      '&:hover': {
         background: '#838383',
      },
   },
}))

const Word = styled('p')(() => ({
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: '400',
   fontSize: '16px',
   lineHeight: '124%',
   color: '#AFAFAF',
}))

const BtnContainer = styled('div')(() => ({
   padding: '32px 0 0',
   textAlign: 'end',
}))

const NextBtn = styled(Button)(() => ({
   padding: '12px 54px',
}))
