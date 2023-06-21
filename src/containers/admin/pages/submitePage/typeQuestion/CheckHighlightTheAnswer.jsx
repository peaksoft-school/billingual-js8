import React from 'react'
import { Grid, Typography, styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import FormContainer from '../../../../../components/UI/form/FormContainer'
import Button from '../../../../../components/UI/buttons/Buttons'

const CheckHighLightTheAnswer = () => {
   const navigate = useNavigate()

   const goBackHandler = () => {
      navigate(-1)
   }

   return (
      <FormContainer>
         <TextContainer>
            <StyledText>Passage:</StyledText>
            <StyledSpan>
               Sed ut perspiciatis unde omnis iste natus error sit voluptatem
               accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
               quae ab illo inventore veritatis et quasi architecto beatae vitae
               dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
               sit aspernatur aut odit aut fugit, sed quia consequuntur magni
               dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
               quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
               adipisci velit, sed quia non numquam eius modi tempora incidunt
               ut labore et dolore magnam aliquam quaerat voluptatem.
            </StyledSpan>
         </TextContainer>
         <TextContainer>
            <StyledText>Question Statement:</StyledText>
            <StyledSpan>
               Describe a time you were surprised? what happened?
            </StyledSpan>
         </TextContainer>
         <TextContainer>
            <StyledText>Correct answer:</StyledText>
            <CorrectAnswerText>
               consequences that are extremely painfulconsequences that are
               extremely painfulconsequences that are extremely painful
               consequences that are extremely painfulconsequences that are
               extremely painfulconsequences that are extremely
               painfulconsequences that are extremely painful.
            </CorrectAnswerText>
         </TextContainer>

         <StyledText>User&#39;s answer</StyledText>
         <TextContainer>
            <StyledText>Respond:</StyledText>
            <StyledSpan>
               But I must explain to you how all this mistaken idea of
               denouncing pleasure and praising pain was born and I will give
               you a complete account of the system. Sed ut perspiciatis unde
               omnis iste natus error sit voluptatem accusantium doloremque
               laudantium, totam rem aperiam
            </StyledSpan>
         </TextContainer>
         <ButtonContainer>
            <GoBackButton variant="outlined" onClick={goBackHandler}>
               Go back
            </GoBackButton>
            <SaveButton color="success" variant="contained">
               Save
            </SaveButton>
         </ButtonContainer>
      </FormContainer>
   )
}

export default CheckHighLightTheAnswer

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

const CorrectAnswerText = styled('span')(() => ({
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '16px',
   lineHeight: '144%',
   letterSpacing: '0.03em',
   color: '#3A10E5',
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
