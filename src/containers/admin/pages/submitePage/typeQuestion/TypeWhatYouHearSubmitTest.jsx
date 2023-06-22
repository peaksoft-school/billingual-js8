import React from 'react'
import { styled } from '@mui/material'
import FormContainer from '../../../../../components/UI/form/FormContainer'
import { ReacComponent as PlayAudioIcon } from '../../../../../assets/icons/playButton.svg'

import Button from '../../../../../components/UI/buttons/Buttons'

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
      background: '#00ff2a',
   },
}
const TypeWhatYouHearSubmitTest = () => {
   return (
      <FormContainer>
         <div style={{ width: '100%', height: '241px' }}>
            <DivPlayAudioButtonAndCorrectAnswer>
               <PlayAudioIcon />
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
               <div
                  style={{
                     width: '100%',
                     height: 'auto',
                     marginTop: '10px',
                     color: '#4C4859',
                     fontSize: '1rem',
                     fontFamily: 'Poppins',
                     fontWeight: 500,
                  }}
               >
                  Entered Statement: “Hello, how is it going?”
               </div>
               <div
                  style={{
                     marginTop: '1px',
                     color: '#4C4859',
                     fontSize: '1rem',
                     fontFamily: 'Poppins',
                     fontWeight: 500,
                  }}
               >
                  Number of plays: 1
               </div>
            </InfoDiv>
            <DivButtonSaveandGoBack>
               <Button sx={buttonStyleGoBack}>go Back</Button>
               <Button sx={buttonSave}>Save</Button>
            </DivButtonSaveandGoBack>
         </div>
      </FormContainer>
   )
}

export default TypeWhatYouHearSubmitTest
const DivPlayAudioButtonAndCorrectAnswer = styled('div')(() => ({
   width: '55.33%',
   height: '42px',
   display: 'flex',
   alignItems: 'center',
   gap: '18px',
}))
const CorrectAnswer = styled('div')(() => ({
   color: '#4C4859',
   fontSize: '16px',
   fontFamily: 'Poppins',
}))
const InfoDiv = styled('div')(() => ({
   width: '50%',
   height: '79px',
   marginTop: '46px',
}))
// const DivButton = styled('div')(() => ({
//    width: '203px',
//    height: '42px',
//    marginTop: '32px',
//    background: 'green',
// }))

const DivButtonSaveandGoBack = styled('div')(() => ({
   width: '100%',
   height: '42px',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'end',
   marginTop: '32px',
   gap: '1.95%',
}))
