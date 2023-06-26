import { Grid, Typography, styled } from '@mui/material'
import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { AxiosError } from 'axios'
import Button from '../../../../../components/UI/buttons/Buttons'
import { ReactComponent as PlayCircle } from '../../../../../assets/icons/blueOutlinedPlay.svg'
import { ReactComponent as StopCircle } from '../../../../../assets/icons/blueOutlinedPause.svg'
import { postEveluatingScore } from '../../../../../api/resultService'
import { useSnackbar } from '../../../../../hooks/useSnackbar'

const RecordSayingResult = ({ question, answerId, score }) => {
   const [state, setState] = useState(false)
   const navigate = useNavigate()
   const audioRef = useRef(null)
   const { notify } = useSnackbar()

   const handleToggle = (fileUrl) => {
      if (fileUrl) {
         if (state) {
            audioRef.current.pause()
            setState(false)
         } else {
            audioRef.current.play()
            setState(true)
         }
      }
   }

   const handleAudioEnded = () => {
      setState(false)
   }

   const goBack = () => {
      navigate(-1)
   }
   const saveScore = async () => {
      const data = {
         answerId,
         score,
      }
      try {
         await postEveluatingScore(data)
         goBack()
         return notify('success', 'Question', 'Successfully added')
      } catch (error) {
         if (AxiosError(error)) {
            return notify('error', 'Question', error.response?.data.message)
         }
         return notify('error', 'Question', 'Something went wrong')
      }
   }

   const file = question.questionResponse.files.find((item) => item)

   return (
      <Container>
         {question.userAnswerResponse.map((item) => (
            <FirstContainer>
               {console.log(item.fileUrl)}
               <audio
                  ref={audioRef}
                  style={{ display: 'none' }}
                  type="audio/mp3"
                  controls
                  onEnded={handleAudioEnded}
               >
                  <track
                     kind="captions"
                     srcLang="english"
                     label="Record saying statement"
                  />
                  <source src={item.fileUrl} type="audio/mp3" />
               </audio>
               <StyledButton
                  onClick={() => handleToggle(file.fileUrl)}
                  variant="contained"
               >
                  {state ? (
                     <>
                        <StyledPlay />
                        STOP RECORDED AUDIO
                     </>
                  ) : (
                     <>
                        <StyledPause /> PLAY AUDIO
                     </>
                  )}
               </StyledButton>
               <Text>
                  {' '}
                  Correct answer: {question.questionResponse.correctAnswer}
               </Text>
            </FirstContainer>
         ))}
         <SecondContainer>
            <GoBackButton onClick={goBack}>GO BACK</GoBackButton>
            <SaveButton onClick={saveScore}>SAVE</SaveButton>
         </SecondContainer>
      </Container>
   )
}
export default RecordSayingResult
const Container = styled(Grid)(() => ({
   width: '900px',
}))

const StyledButton = styled(Button)(() => ({
   display: 'flex',
   alignItems: 'center',
   gap: '8px',
}))

const Text = styled(Typography)(() => ({
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '16px',
   lineHeight: '18px',
   display: 'flex',
   alignItems: 'center',
   color: '#4C4859',
}))

const StyledPause = styled(StopCircle)(() => ({
   path: {
      stroke: '#fff',
   },
}))
const StyledPlay = styled(PlayCircle)(() => ({
   path: {
      stroke: '#fff',
   },
   rect: {
      fill: '#fff',
   },
}))

const FirstContainer = styled(Grid)(() => ({
   display: 'flex',
   gap: '18px',
   alignItems: 'center',
   marginBottom: '32px',
}))

const GoBackButton = styled(Button)(() => ({
   border: '2px solid #3A10E5',
   borderRadius: '8px',
   width: '105px',
   height: '42px',
}))

const SaveButton = styled(Button)(() => ({
   background: '#2AB930',
   borderRadius: '8px',
   width: '82px',
   height: '42px',
   color: 'white',
   marginLeft: '1rem',
}))
const SecondContainer = styled(Grid)(() => ({
   display: 'flex',
   justifyContent: 'flex-end',
}))
