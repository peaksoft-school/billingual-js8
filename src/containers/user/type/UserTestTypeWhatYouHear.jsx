import { React, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { styled } from '@mui/material'
import TextArea from '../../../components/UI/textArea/TextArea'
import Button from '../../../components/UI/buttons/Buttons'
import { ReactComponent as VolumeIcon } from '../../../assets/icons/volumeIcon.svg'
import { userQuestionActions } from '../../../redux/user/user.slice'

const UserTypeWhatYouHear = ({ question, handleNextClick }) => {
   const numberReplays = question.numberOfReplays
   const dispatch = useDispatch()
   const audioRef = useRef('')
   const [isPlaying, setIsPlaying] = useState(false)
   const [replaysLeft, setReplaysLeft] = useState(numberReplays)
   const [testResponse, setTestResponse] = useState('')
   const [volumeIconDisabled, setVolumeIconDisabled] = useState(false)
   const { files } = question

   const listenToTheSound = (files) => {
      if (files) {
         if (isPlaying) {
            audioRef.current.pause()
            setIsPlaying((prevState) => !prevState)
         } else {
            audioRef.current.play()
            setIsPlaying((prevState) => !prevState)
            if (replaysLeft >= 1) {
               setReplaysLeft((replays) => replays - 1)
            }
            if (replaysLeft === 0) {
               audioRef.current.pause()
               setVolumeIconDisabled(true)
            }
         }
      }
   }
   const testResponseWord = (e) => {
      const wordResponse = e.target.value
      setTestResponse(wordResponse)
   }

   const nextTestHandler = () => {
      const dataAnswer = {
         data: testResponse,
      }
      dispatch(userQuestionActions.addAnswer(dataAnswer))
      handleNextClick()
      setTestResponse('')
   }

   return (
      <TypeWhatYouHearDivv>
         <SecondDivTypeWhatYouHear>
            <Title>Type the statement you hear</Title>
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
               <source
                  src={files.map((elem) => {
                     return elem.fileUrl
                  })}
                  type="audio/mp3"
               />
            </audio>
            <VolumeDiv>
               <ImageVolume
                  onClick={() => listenToTheSound(files)}
                  disabled={volumeIconDisabled}
               />
               <DivTextAreaandReplays>
                  <TextArea
                     value={testResponse}
                     handleChange={testResponseWord}
                     placeholder="Your response"
                     maxRows={6}
                     sx={{
                        width: '100%',
                        fontFamily: 'Poppins',
                        '& .MuiInputBase-root': {
                           fontFamily: 'Poppins',
                           borderRadius: '8px',
                           height: '185px',
                        },
                        ' & .MuiInputBase-input': {
                           fontFamily: 'Poppins',
                        },
                     }}
                  />
                  <NumberOfReplaysLeft textColor={replaysLeft}>
                     Number of replays left: {replaysLeft}
                  </NumberOfReplaysLeft>
               </DivTextAreaandReplays>
            </VolumeDiv>
         </SecondDivTypeWhatYouHear>
         <ContainerBtn>
            <Button
               onClick={nextTestHandler}
               variant="contained"
               style={{ padding: '12px 54px' }}
               disabled={testResponse.length === 0}
            >
               NEXT
            </Button>
         </ContainerBtn>
      </TypeWhatYouHearDivv>
   )
}

export default UserTypeWhatYouHear

const TypeWhatYouHearDivv = styled('div')(() => ({
   width: '100%',
   height: 'auto',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   marginTop: '50px',
}))
const Title = styled('h1')(() => ({
   fontFamily: 'Poppins',
   fontStyle: 'inherit',
   fontWeight: 400,
   fontSize: '1.75rem',
   color: '#4C4859',
   margin: '0 auto',
}))
const ImageVolume = styled(VolumeIcon)(({ theme, disabled }) => ({
   width: '13.71%',
   height: '20%',
   cursor: 'pointer',
   pointerEvents: disabled ? 'none' : '',
   color: 'primary',
   '&:hover': {
      width: '13.71%',
      height: '23%',
      path: {
         stroke: theme.palette.background.paper,
      },
   },
   '&:active': {
      path: {
         stroke: theme.palette.grey[600],
      },
   },
}))
const ContainerBtn = styled('div')(() => ({
   width: '100%',
   display: 'flex',
   justifyContent: 'end',
   marginTop: '3.75rem',
   borderTop: '1.5296px solid #D4D0D0',
   padding: '32px 0  0 0 ',
}))
const SecondDivTypeWhatYouHear = styled('div')(() => ({
   width: '74.32%',
   display: 'flex',
   flexDirection: 'column',
}))
const NumberOfReplaysLeft = styled('p')(({ textColor }) => ({
   width: '49%',
   height: '20px',
   marginTop: '8px',
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '1rem',
   color: textColor === 0 ? '#ff0000' : '#AFAFAF',
}))
const VolumeDiv = styled('div')(() => ({
   width: '100%',
   height: 'auto',
   display: 'flex',
   alignItems: 'center',
}))
const DivTextAreaandReplays = styled('div')(() => ({
   width: '81.98%',
   marginTop: '40px',
   marginLeft: '115px',
}))
