import React, { useRef, useState } from 'react'
import { Typography, styled } from '@mui/material'
import Button from '../../../components/UI/buttons/Buttons'
import TextArea from '../../../components/UI/textArea/TextArea'

const HighlightTheAnswer = ({ question }) => {
   const textRef = useRef(null)
   const [selectedText, setSelectedText] = useState('')

   const handleTextSelection = () => {
      setSelectedText(window.getSelection().toString())
   }

   return (
      <Container>
         <QuestionContainer>
            <PassageContainer>
               <StyledPassageText>passage</StyledPassageText>
            </PassageContainer>
            <StatementContainer>
               <StyledStatementText
                  ref={textRef}
                  onMouseUp={handleTextSelection}
               >
                  {question.passage}
               </StyledStatementText>
            </StatementContainer>
         </QuestionContainer>
         <AnswerContainer>
            <Title>{question.title}</Title>
            <Question>{question.statement}</Question>
            <StyledInput
               multiline
               maxRows={6}
               minRows={1}
               fullWidth
               inputProps={{
                  readOnly: true,
               }}
               value={selectedText}
               placeholder="Highlighted answer will appear here"
            />
            <BtnContainer>
               <Button
                  variant="contained"
                  sx={{
                     padding: '12px 54px',
                  }}
                  disabled={!selectedText}
               >
                  Next
               </Button>
            </BtnContainer>
         </AnswerContainer>
      </Container>
   )
}

export default HighlightTheAnswer

const Container = styled('div')(() => ({
   margin: '50px 0',
   display: 'flex',
   gap: '40px',
}))

const QuestionContainer = styled('div')(() => ({
   border: '1px solid #D4D0D0',
   borderRadius: '8px',
   width: '70%',
}))

const PassageContainer = styled('div')(() => ({
   borderBottom: '1px solid #D4D0D0',
   padding: '16px 18px',
   textTransform: 'uppercase',
}))

const StyledPassageText = styled(Typography)(() => ({
   color: '#4C4859',
   fontFamily: 'Poppins',
   fontWeight: '500',
}))

const StatementContainer = styled('div')(() => ({
   padding: '16px 18px',
}))

const StyledStatementText = styled(Typography)(() => ({
   color: '#4C4859',
   fontFamily: 'Poppins',
   '::selection': {
      background: '#3A10E52E',
   },
}))

const AnswerContainer = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   width: '50%',
}))

const Title = styled(Typography)(() => ({
   fontStyle: 'normal',
   fontWeight: '400',
   fontSize: '25px',
   lineHeight: '29px',
   color: '#4C4859',
}))

const Question = styled('p')(() => ({
   fontStyle: 'normal',
   fontWeight: '400',
   fontSize: '18px',
   lineHeight: '124%',
   color: '#4C4859',
}))

const StyledInput = styled(TextArea)(() => ({
   background: '#F7F7F7',

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

const BtnContainer = styled('div')(() => ({
   padding: '32px 0 0',
   textAlign: 'end',
}))
