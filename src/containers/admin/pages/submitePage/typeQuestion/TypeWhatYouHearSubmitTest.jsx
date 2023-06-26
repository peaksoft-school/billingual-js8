import { React, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { AxiosError } from 'axios'
import { styled } from '@mui/material'
import { ReactComponent as PlayAudioIcon } from '../../../../../assets/icons/blueOutlinedPause.svg'
import Button from '../../../../../components/UI/buttons/Buttons'
import { useSnackbar } from '../../../../../hooks/useSnackbar'
import { postEveluatingScore } from '../../../../../api/resultService'
import { ReactComponent as StopRecordedAudio } from '../../../../../assets/icons/blueOutlinedPlay.svg'

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
      background: '#00FF2A',
   },
}
const TypeWhatYouHearSubmitTest = ({ question, answerId, score }) => {
   const navigate = useNavigate()
   const [playAudio, setTogglePlayAudio] = useState(false)
   const audioRef = useRef('')
   const { notify } = useSnackbar()
   const goBack = () => {
      navigate(-1)
   }

   const files = question.questionResponse.files.find((elem) => {
      return elem.fileUrl
   })

   console.log(files)

   const saveScore = async () => {
      const data = {
         answerId,
         score,
      }
      console.log('click')
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
   const soundPlaybackAndStop = (files) => {
      if (files) {
         if (playAudio) {
            audioRef.current.pause()
            setTogglePlayAudio((prevState) => !prevState)
         } else {
            audioRef.current.play()
            setTogglePlayAudio((prevState) => !prevState)
         }
      }
   }
   return question.userAnswerResponse.map((item) => (
      <div style={{ width: '100%', height: '241px' }}>
         <audio
            ref={audioRef}
            style={{ display: 'none' }}
            type="audio/mp3"
            controls
         >
            <track
               kind="captions"
               srcLang="english"
               label="Type What you hear"
            />
            <source src={files.fileUrl} type="audio/mp3" />
         </audio>
         <DivPlayAudioButtonAndCorrectAnswer>
            <StyledButton onClick={soundPlaybackAndStop} variant="contained">
               {playAudio ? (
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
            <CorrectAnswer>
               Correct answer: {question.questionResponse.correctAnswer}
            </CorrectAnswer>
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
               Entered Statement: {item.data}
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
               Number of plays: {item.numberOfReplace}
            </div>
         </InfoDiv>
         <DivButtonSaveandGoBack>
            <Button sx={buttonStyleGoBack} onClick={goBack}>
               go Back
            </Button>
            <Button sx={buttonSave} onClick={saveScore}>
               Save
            </Button>
         </DivButtonSaveandGoBack>
      </div>
   ))
}
export default TypeWhatYouHearSubmitTest
const DivPlayAudioButtonAndCorrectAnswer = styled('div')(() => ({
   width: '55.33%',
   height: '42px',
   display: 'flex',
   alignItems: 'center',
   gap: '18px',
}))
const StyledButton = styled(Button)(() => ({
   display: 'flex',
   alignItems: 'center',
   gap: '8px',
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
const DivButtonSaveandGoBack = styled('div')(() => ({
   width: '100%',
   height: '42px',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'end',
   marginTop: '32px',
   gap: '1.95%',
}))
// const PlayAudioIconButton = styled(PlayAudioIcon)(() => ({
//    cursor: 'pointer',
// }))
// const StopRecordedAudioButton = styled(StopRecordedAudio)(() => ({
//    cursor: 'pointer',
// }))
const StyledPause = styled(PlayAudioIcon)(() => ({
   path: {
      stroke: '#fff',
   },
}))
const StyledPlay = styled(StopRecordedAudio)(() => ({
   path: {
      stroke: '#fff',
   },
   rect: {
      fill: '#fff',
   },
}))
