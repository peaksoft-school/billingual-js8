import { Grid, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ReactMic } from 'react-mic'
import { ReactComponent as Img } from '../../../assets/icons/img-speak.svg'
import Button from '../../../components/UI/buttons/Buttons'
import { ReactComponent as Recording } from '../../../assets/icons/recording.svg'
import { userQuestionActions } from '../../../redux/user/user.slice'
import { postFileRequest } from '../../../api/questionService'
import { useSnackbar } from '../../../hooks/useSnackbar'

const RecordSaying = ({ question, handleNextClick }) => {
   const [isRecording, setRecording] = useState(false)
   const [audioBlob, setAudioBlob] = useState(null)
   const { notify } = useSnackbar()
   const dispatch = useDispatch()

   const startRecording = () => {
      setRecording(true)
   }

   const stopRecording = () => {
      setRecording(false)
   }

   const onData = (recordedBlob) => {
      setAudioBlob(recordedBlob.blob)
   }

   const onStop = (recordedBlob) => {
      setAudioBlob(recordedBlob.blob)
   }

   // const downloadRecording = () => {
   //    if (!audioBlob) {
   //       notify('error', 'Recording', 'No recording available')
   //       return
   //    }

   //    const url = URL.createObjectURL(audioBlob)
   //    const a = document.createElement('a')
   //    document.body.appendChild(a)
   //    a.style = 'display: none'
   //    a.href = url
   //    a.download = 'recording.mp3'
   //    a.click()
   //    window.URL.revokeObjectURL(url)
   // }

   const nextButtonHandler = async () => {
      if (!audioBlob) {
         notify('error', 'Recording', 'Please record your saying')
         return
      }

      try {
         const formData = new FormData()
         formData.append('multipartFile', audioBlob, 'recording.mp3')
         const { data } = await postFileRequest(formData)
         const newAnswer = {
            questionId: question.id,
            numberOfPlays: 1,
            fileUrl: data.link,
         }
         dispatch(userQuestionActions.addAnswer(newAnswer))
         handleNextClick()
         setAudioBlob(null)
      } catch (error) {
         notify('error', 'File', 'Something went wrong')
      }
   }

   return (
      <>
         <Title>{question.title}</Title>
         <Container>
            <Img />
            <Text>&quot; {question.statement} &quot;.</Text>
         </Container>
         <SecondContainer>
            {isRecording ? <Recording /> : null}
            <Wave
               record={isRecording}
               onData={onData}
               onStop={onStop}
               strokeColor="#3A10E5"
               backgroundColor="#ffffff"
            />
            <div>
               <StyledButton
                  variant="contained"
                  onClick={isRecording ? stopRecording : startRecording}
               >
                  {isRecording ? 'STOP RECORDING' : 'RECORD NOW'}
               </StyledButton>
               <Button
                  disabled={!audioBlob}
                  variant="contained"
                  onClick={nextButtonHandler}
               >
                  NEXT
               </Button>
               {/* <Button variant="contained" onClick={downloadRecording}>
                  DOWNLOAD
               </Button> */}
            </div>
         </SecondContainer>
      </>
   )
}

export default RecordSaying

const Wave = styled(ReactMic)(() => ({
   display: 'flex',
}))

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
   textTransform: 'lowercase',
   color: '#4C4859',
}))

const SecondContainer = styled(Grid)(() => ({
   display: 'flex',
   justifyContent: 'flex-end',
   alignItems: 'center',
}))

const StyledButton = styled(Button)(() => ({
   marginRight: '20px',
   textAlign: 'end',
}))
