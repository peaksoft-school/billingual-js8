import React from 'react'
import { Grid, Typography, styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import FormContainer from '../../../../../components/UI/form/FormContainer'
import RadioButtons from '../../../../../components/UI/checkbox/RadioButton'
import Button from '../../../../../components/UI/buttons/Buttons'

const CheckBestTitle = () => {
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
         <OptionsContainer>
            <Options>
               <TitleContainer>
                  <Index>1</Index>
                  <Title>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Corrupti explicabo libero eligendi possimus, nisi enim, vel
                     eos autem a quis itaque eum, repellendus voluptate
                     obcaecati at dolore repudiandae distinctio temporibus.
                  </Title>
               </TitleContainer>
               <Actions>
                  <RadioButtons checked={!false} />
               </Actions>
            </Options>
         </OptionsContainer>
         <StyledText style={{ marginTop: '40px' }}>
            User&#39;s answer
         </StyledText>
         <OptionsContainer>
            <Options>
               <TitleContainer>
                  <Index>1</Index>
                  <Title>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Corrupti explicabo libero eligendi possimus, nisi enim, vel
                     eos autem a quis itaque eum, repellendus voluptate
                     obcaecati at dolore repudiandae distinctio temporibus.
                  </Title>
               </TitleContainer>
            </Options>
         </OptionsContainer>
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
