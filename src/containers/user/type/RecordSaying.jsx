/* eslint-disable no-unused-vars */
import { Grid, Typography, styled } from '@mui/material'
import { WaveformAudioRecorder } from 'waveform-audio-recorder'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import FormContainer from '../../../components/UI/form/FormContainer'
import { ReactComponent as Img } from '../../../assets/icons/img-speak.svg'
import Button from '../../../components/UI/buttons/Buttons'
import { ReactComponent as Recording } from '../../../assets/icons/recording.svg'
import { postFiles } from '../../../redux/question/question.thunk'

const RecordSaying = ({ question }) => {
   const [recorderState, setRecorderState] = useState(null)
   const dispatch = useDispatch()
   const onClickButton = recorderState?.initRecording
      ? recorderState?.saveRecording
      : recorderState?.startRecording
   console.log(recorderState)

   const nextButtonHandler = () => {
      const audioBlob = recorderState.audio
      const audioFile = new File([audioBlob], 'audio.mp3', {
         type: 'audio/mp3',
      })
      dispatch(postFiles({ file: audioFile }))
   }

   return (
      <FormContainer>
         {question.map((item) => (
            <>
               <Title>{item.title}</Title>
               <Container>
                  <Img />
                  <Text> &quot; {item.statement} &quot;.</Text>
               </Container>
            </>
         ))}
         <SecondContainer>
            {recorderState?.initRecording ? <Recording /> : null}
            <WaveformAudioRecorder
               svg={{ color: '#0f1010' }}
               setRecorderState={setRecorderState}
            />
            <div>
               <StyledButton variant="contained" onClick={onClickButton}>
                  {recorderState?.initRecording
                     ? 'STOP RECORDING'
                     : 'RECORD NOW'}
               </StyledButton>
               <Button
                  disabled={recorderState?.audio === null}
                  variant="contained"
                  onClick={nextButtonHandler}
               >
                  NEXT
               </Button>
            </div>
         </SecondContainer>
      </FormContainer>
   )
}
export default RecordSaying

const Title = styled(Typography)(() => ({
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '28px',
   lineHeight: '32px',
   textTransform: 'uppercase',
   color: '#4C4859',
   display: 'flex',
   justifyContent: 'center',
}))

const Container = styled(Grid)(() => ({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   gap: '1.1725rem',
   marginTop: '3.125rem',
   borderBottom: '1.53px solid #D4D0D0',
   paddingBottom: '7.5rem',
   marginBottom: '2rem',
}))

const Text = styled('p')(() => ({
   fontStyle: 'normal',
   fontWeight: 500,
   fontSize: '18px',
   lineHeight: '124 %',
   textRransform: 'lowercase',
   color: '#4C4859',
}))
const SecondContainer = styled(Grid)(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
}))
const StyledButton = styled(Button)(() => ({
   marginRight: '20px',
}))
