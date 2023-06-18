import { Grid, Typography, styled } from '@mui/material'
import { WaveformAudioRecorder } from 'waveform-audio-recorder'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ReactComponent as Img } from '../../../assets/icons/img-speak.svg'
import Button from '../../../components/UI/buttons/Buttons'
import { ReactComponent as Recording } from '../../../assets/icons/recording.svg'
import { userQuestionActions } from '../../../redux/user/user.slice'
import { postFileRequest } from '../../../api/questionService'
import { useSnackbar } from '../../../hooks/useSnackbar'

const RecordSaying = ({ question, handleNextClick }) => {
   const [recorderState, setRecorderState] = useState(null)
   const { notify } = useSnackbar()
   const dispatch = useDispatch()
   const onClickButton = recorderState?.initRecording
      ? recorderState?.saveRecording
      : recorderState?.startRecording

   const nextButtonHandler = async () => {
      const audioBlob = recorderState?.audio
      const audioFile = new File([audioBlob], 'audio.mp3', {
         type: 'audio/mp3',
         setRecorderState,
      })

      try {
         const formData = new FormData()
         formData.append('multipartFile', audioFile)
         const { data } = await postFileRequest(formData)
         const newAnswer = {
            questionId: question.id,
            fileUrl: data.link,
         }
         dispatch(userQuestionActions.addAnswer(newAnswer))
         handleNextClick()
         setRecorderState((prevState) => ({
            ...prevState,
            audio: null,
         }))
      } catch (error) {
         notify('error', 'File', 'Something went wrong')
      }
   }

   return (
      <>
         <Title>{question.title}</Title>
         <Container>
            <Img />
            <Text> &quot; {question.statement} &quot;.</Text>
         </Container>
         <SecondContainer>
            {recorderState?.initRecording ? <Recording /> : null}
            <MemoizedWaveformAudioRecorder
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
      </>
   )
}
export default RecordSaying

const MemoizedWaveformAudioRecorder = React.memo(WaveformAudioRecorder)

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
