import React from 'react'
import { Grid, Typography, styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { AxiosError } from 'axios'
import RadioButtons from '../../../../../components/UI/checkbox/RadioButton'
import Button from '../../../../../components/UI/buttons/Buttons'
import { postEveluatingScore } from '../../../../../api/resultService'
import { useSnackbar } from '../../../../../hooks/useSnackbar'

const CheckBestTitle = ({ question, answerId, score }) => {
   const navigate = useNavigate()
   const { notify } = useSnackbar()

   const goBackHandler = () => {
      navigate(-1)
   }

   const saveScore = async () => {
      const data = {
         answerId,
         score,
      }
      try {
         await postEveluatingScore(data)
         goBackHandler()
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
         <TextContainer>
            <StyledText>Passage:</StyledText>
            <StyledSpan>{question.questionResponse.passage}</StyledSpan>
         </TextContainer>
         <OptionsContainer>
            {question.questionResponse.options.map((item) => (
               <Options key={item.id}>
                  <TitleContainer>
                     <Index>1</Index>
                     <Title>{item.title}</Title>
                  </TitleContainer>
                  <Actions>
                     <RadioButtons checked={item.isCorrect} />
                  </Actions>
               </Options>
            ))}
         </OptionsContainer>
         <StyledText style={{ marginTop: '40px' }}>
            User&#39;s answer
         </StyledText>
         <OptionsContainer>
            {question.userAnswerResponse.map((item) => (
               <Options>
                  <TitleContainer>
                     <Index>1</Index>
                     <Title>{item.optionTitle}</Title>
                  </TitleContainer>
               </Options>
            ))}
         </OptionsContainer>
         <ButtonContainer>
            <GoBackButton variant="outlined" onClick={goBackHandler}>
               Go back
            </GoBackButton>
            <SaveButton color="success" variant="contained" onClick={saveScore}>
               Save
            </SaveButton>
         </ButtonContainer>
      </>
   )
}

export default CheckBestTitle

const TextContainer = styled('div')(() => ({
   display: 'flex',
   alignItems: 'flex-start',
   marginBottom: '20px',
   gap: '10px',
}))

const StyledText = styled(Typography)(() => ({
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 500,
   fontSize: '16px',
   lineHeight: '20px',
   color: '#4C4859',
}))

const StyledSpan = styled('span')(() => ({
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '16px',
   lineHeight: '144%',
   letterSpacing: '0.03em',
   color: '#4C4859',
}))

const OptionsContainer = styled('div')(() => ({
   display: 'grid',
   gap: '16px',
}))

const Options = styled('div')(() => ({
   background: '#FFFFFF',
   border: '1.53px solid #D4D0D0',
   borderRadius: '8px',
   display: 'flex',
   alignItems: 'center',
   gap: '25px',
   padding: '16px 14px',
   justifyContent: 'space-between',
}))

const Index = styled('span')(() => ({
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: '400',
   fontSize: '16px',
   lineHeight: '16px',
   color: '#4C4859',
}))

const TitleContainer = styled('div')(() => ({
   display: 'flex',
   gap: '25px',
}))

const Title = styled('span')(() => ({
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: '400',
   fontSize: '16px',
   lineHeight: '18px',
   color: '#4C4859',
}))

const Actions = styled('div')(() => ({
   display: 'flex',
}))

const ButtonContainer = styled(Grid)(() => ({
   display: 'flex',
   justifyContent: 'flex-end',
   gap: '16px',
}))

const GoBackButton = styled(Button)(() => ({
   '&:hover': {
      background: '#3A10E5',
      color: '#fff',
   },
}))

const SaveButton = styled(Button)(() => ({
   background: '#2AB930',
   '&:hover': {
      background: '#31CF38',
   },
}))
