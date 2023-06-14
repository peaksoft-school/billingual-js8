import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { styled, Typography, Radio } from '@mui/material'
import Button from '../../../components/UI/buttons/Buttons'
import { userQuestionActions } from '../../../redux/user/user.slice'

const ClientMainIdea = ({ question, handleNextClick }) => {
   const dispatch = useDispatch()
   const [selectedOption, setSelectedOption] = useState(null)

   const handleOptionChange = (option) => {
      if (selectedOption === option) {
         setSelectedOption(null)
      } else {
         setSelectedOption(option)
      }
   }

   const handleSubmit = () => {
      const answerData = {
         questionId: question.id,
         data: new Date().toLocaleDateString(),
         optionIds: [selectedOption],
      }
      dispatch(userQuestionActions.addAnswer(answerData))
      handleNextClick()
      dispatch(userQuestionActions.clearOptionsIds())
   }

   const isButtonDisabled = selectedOption === null

   return (
      <Container>
         <QuestionContainer>
            <PassageContainer>
               <StyledPassageText>passage</StyledPassageText>
            </PassageContainer>
            <StatementContainer>
               <StyledStatementText>{question.passage}</StyledStatementText>
            </StatementContainer>
         </QuestionContainer>
         <VariantContainer>
            <div>
               <Title>Select the main idea of the passage</Title>
               {question.options.map((option) => (
                  <OptionItem key={option.id}>
                     <Radio
                        checked={selectedOption === option.id}
                        onChange={() => handleOptionChange(option.id)}
                     />
                     <OptionTitle>{option.title}</OptionTitle>
                  </OptionItem>
               ))}
            </div>
            <ButtonContainer>
               <Button
                  variant="contained"
                  style={{ padding: '.625rem 3.375rem' }}
                  onClick={handleSubmit}
                  disabled={isButtonDisabled}
               >
                  NEXT
               </Button>
            </ButtonContainer>
         </VariantContainer>
      </Container>
   )
}

export default ClientMainIdea

const ButtonContainer = styled('div')(() => ({
   alignSelf: 'end',
   padding: '1.25rem 0 0 0',
}))

const Title = styled('p')(() => ({
   fontFamily: 'DINNextRoundedLTW01-Regular',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '1.625rem',
   lineHeight: '1.8125rem',
   color: '#4C4859',
   margin: '0rem 0rem 1.875rem 0rem',
}))

const Container = styled('div')(() => ({
   display: 'flex',
   marginTop: '3.125rem',
   width: '100%',
   justifyContent: 'space-between',
}))

const OptionItem = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
   marginBottom: '.875rem',
   border: '.0625rem solid #D4D0D0',
   borderRadius: '.5rem',
   padding: '.75rem 1.125rem',
   width: '411px',
   boxSizing: 'border-box',
}))

const OptionTitle = styled('p')(() => ({
   fontFamily: 'DINNextRoundedLTW01-Regular',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '1rem',
   lineHeight: '1.25rem',
   color: '#4C4859',
   paddingLeft: '.5rem',
   margin: 0,
   flexWrap: 'wrap',
}))

const VariantContainer = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   paddingLeft: '2.5rem',
   minHeight: '255px',
   justifyContent: 'space-between',
}))

const QuestionContainer = styled('div')(() => ({
   border: '.0625rem solid #D4D0D0',
   borderRadius: '.5rem',
   width: '37.6875rem',
   backgroundColor: '#F7F7F7',
   maxHeight: '28.4375rem',
   overflow: 'auto',
}))

const PassageContainer = styled('div')(() => ({
   borderBottom: '.0625rem solid #D4D0D0',
   padding: '1rem 1.125rem',
   textTransform: 'uppercase',
}))

const StyledPassageText = styled(Typography)(() => ({
   color: '#4C4859',
   fontFamily: 'Poppins',
   fontWeight: '500',
}))

const StatementContainer = styled('div')(() => ({
   padding: '1rem 1.125rem',
}))

const StyledStatementText = styled(Typography)(() => ({
   color: '#4C4859',
   fontFamily: 'Poppins',
}))
