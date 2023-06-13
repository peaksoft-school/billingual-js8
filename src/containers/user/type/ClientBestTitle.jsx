import React, { useState } from 'react'
import { styled, Typography, Radio } from '@mui/material'
import Button from '../../../components/UI/buttons/Buttons'

const ClientBestTitle = ({ question, handleNextClick }) => {
   const [selectedOption, setSelectedOption] = useState(null)

   const handleOptionChange = (option) => {
      if (selectedOption === option) {
         setSelectedOption(null)
      } else {
         setSelectedOption(option)
      }
   }

   const handleSubmit = () => {
      handleNextClick()
      console.log(question)
      console.log('Выбранный вариант ответа:', selectedOption)
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
               <Title>Select the best title for the passage</Title>
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
                  style={{ padding: '10px 54px' }}
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

export default ClientBestTitle

const ButtonContainer = styled('div')(() => ({
   alignSelf: 'end',
   padding: '20px 0 0 0',
}))

const Title = styled('p')(() => ({
   fontFamily: 'DINNextRoundedLTW01-Regular',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '26px',
   lineHeight: '29px',
   color: '#4C4859',
   margin: '0px 0px 30px 0px',
}))

const Container = styled('div')(() => ({
   display: 'flex',
   marginTop: '50px',
}))

const OptionItem = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
   marginBottom: '14px',
   border: '1px solid #D4D0D0',
   borderRadius: '8px',
   padding: '12px 18px',
   width: '27.5625rem',
   boxSizing: 'border-box',
}))

const OptionTitle = styled('p')(() => ({
   fontFamily: 'DINNextRoundedLTW01-Regular',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '16px',
   lineHeight: '20px',
   color: '#4C4859',
   paddingLeft: '8px',
   margin: 0,
   flexWrap: 'wrap',
}))

const VariantContainer = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   paddingLeft: '40px',
   minHeight: '15.9375rem',
   justifyContent: 'space-between',
}))

const QuestionContainer = styled('div')(() => ({
   border: '1px solid #D4D0D0',
   borderRadius: '8px',
   width: '34.6875rem',
   backgroundColor: '#F7F7F7',
   maxHeight: '455px',
   overflow: 'auto',
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
}))
