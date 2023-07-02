import React, { useRef, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { InputLabel, styled } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
// eslint-disable-next-line import/no-extraneous-dependencies
import { useDropzone } from 'react-dropzone'
import { ReactComponent as PlayAudio } from '../../../../../assets/icons/playIcon.svg'
import { ReactComponent as PauseAudio } from '../../../../../assets/icons/pauseIcon.svg'
import Button from '../../../../../components/UI/buttons/Buttons'
import {
   postFiles,
   typeWhatHearThunk,
} from '../../../../../redux/question/question.thunk'
import { useSnackbar } from '../../../../../hooks/useSnackbar'
import Input from '../../../../../components/UI/input/Input'
import { updateQuestionRequest } from '../../../../../api/questionService'

const TypeWhatHear = ({ title, duration, testId, setError }) => {
   const dispatch = useDispatch()
   const { state } = useLocation()
   const audioRef = useRef(null)
   const [isPlaying, setIsPlaying] = useState(false)
   const [audioUrl, setAudioUrl] = useState()
   const [audioName, setAudioName] = useState('')
   const [formValues, setFormValues] = useState({
      numberOfReplays: state?.question.numberOfReplays || 0,
      correctAnswer: state?.question.correctAnswer || '',
   })
   const navigate = useNavigate()

   const { notify } = useSnackbar()
   const [validationErrors, setValidationErrors] = useState({})

   const oldLink = state?.question.files.find((item) => item)

   const handleInputChange = (event) => {
      const { name, value } = event.target

      if (name === 'numberOfReplays') {
         if (/^\d{0,2}$/.test(value) && value >= 1 && value <= 10) {
            setValidationErrors((prevErrors) => ({
               ...prevErrors,
               [name]: '',
            }))
         } else {
            setValidationErrors((prevErrors) => ({
               ...prevErrors,
               [name]: 'Please enter a number between 1 and 10 for replays.',
            }))
         }
      }

      if (name === 'correctAnswer') {
         if (value < 0) {
            setValidationErrors((prevErrors) => ({
               ...prevErrors,
               [name]: 'Correct answer cannot be negative.',
            }))
         } else {
            setValidationErrors((prevErrors) => ({
               ...prevErrors,
               [name]: '',
            }))
         }
      }

      setFormValues((prevValues) => ({
         ...prevValues,
         [name]: value,
      }))
   }

   const handleToggle = () => {
      if (audioUrl) {
         if (isPlaying) {
            audioRef.current.pause()
            setIsPlaying(false)
         } else {
            audioRef.current.play()
            setIsPlaying(true)
         }
      }
   }

   const navigateGoBackTest = () => {
      navigate(`/admin/test/${testId}`)
   }

   const handleAudioEnded = () => {
      setIsPlaying(false)
   }
   const handleSubmit = async () => {
      if (!title) {
         setError((prevState) => ({
            ...prevState,
            title: 'Please title enter!',
         }))
      }
      if (!duration) {
         setError((prevState) => ({
            ...prevState,
            duration: 'Enter time!',
         }))
      }
      if (formValues.numberOfReplays === 0) {
         notify('error', 'Attention!', 'Please select an number of replays.')
      }
      if (!audioUrl) {
         notify('error', 'Attention!', 'Please select an audio file.')

         if (Object.values(validationErrors).some((error) => error !== '')) {
            notify(
               'error',
               'Attention!',
               'Please fix the validation errors before saving.'
            )
         }
      } else {
         const requestData = {
            title,
            duration: Number(duration),
            questionOrder: 2,
            numberOfReplays: Number(formValues.numberOfReplays),
            correctAnswer: formValues.correctAnswer,
            testId: Number(testId),
            isActive: true,
            questionType: state?.question.questionType,
            id: state?.question.id,
         }

         if (state !== null) {
            dispatch(postFiles({ file: audioUrl }))
               .unwrap()
               .then(async ({ link }) => {
                  await updateQuestionRequest({
                     ...requestData,
                     file: link,
                  })
                  navigateGoBackTest()
               })
         } else {
            dispatch(
               typeWhatHearThunk({
                  requestData,
                  notify,
                  audioFile: audioUrl,
                  navigateGoBackTest,
               })
            )
         }
      }
   }

   const onDrop = (acceptedFiles) => {
      const file = acceptedFiles[0]
      setAudioName(file.name)
      const audioUrl = URL.createObjectURL(file)
      setAudioUrl(file)
      audioRef.current.src = audioUrl
   }

   const { getRootProps, getInputProps } = useDropzone({
      accept: 'audio/mp3',
      onDrop,
   })

   useEffect(() => {
      setAudioUrl(oldLink?.fileUrl || null)
   }, [])

   return (
      <>
         <AudioContainer>
            <ReplaysStyled>
               <LabelStyled>
                  Number off
                  <br /> Replays
               </LabelStyled>
               <InputStyled
                  type="number"
                  name="numberOfReplays"
                  value={formValues.numberOfReplays}
                  onChange={handleInputChange}
                  InputProps={{ inputProps: { min: 0, max: 10 } }}
               />
            </ReplaysStyled>

            <audio
               style={{ display: 'none' }}
               ref={audioRef}
               type="audio/mp3"
               onEnded={handleAudioEnded}
               controls
            >
               <track kind="captions" srcLang="en" label="English captions" />
               <source src={oldLink?.fileUrl || audioUrl} type="audio/mp3" />
            </audio>

            <div {...getRootProps()} style={{ cursor: 'pointer' }}>
               <input {...getInputProps()} />
               <UpploadButton url={audioUrl} variant="contained">
                  {!audioUrl ? 'Uppload ' : 'Replays'}
               </UpploadButton>
            </div>

            <PlayingContainer>
               {isPlaying ? (
                  <PlayAudio onClick={handleToggle} />
               ) : (
                  <PauseAudio onClick={handleToggle} />
               )}
            </PlayingContainer>
            <p>{audioUrl ? audioName : 'file_name_not_found!'}</p>
         </AudioContainer>

         <LabelStyled>Correct answer</LabelStyled>
         <InputForAnswer
            name="correctAnswer"
            value={formValues.correctAnswer}
            onChange={handleInputChange}
         />

         <ContainerBtn>
            <GoBackButton variant="outlined" onClick={navigateGoBackTest}>
               Go back
            </GoBackButton>
            <SaveButton variant="contained" onClick={() => handleSubmit()}>
               Save
            </SaveButton>
         </ContainerBtn>
      </>
   )
}

export default TypeWhatHear

const InputStyled = styled(Input)(() => ({
   input: { padding: '.75rem  0.8rem .75rem 0.7rem ' },
   width: '60%',
   borderRadius: '.5rem',
   border: 'solid .0956rem #D4D0D0',
}))
const PlayingContainer = styled('div')(() => ({
   textAlign: 'center',
   display: 'flex',
   alignItems: 'center',
   marginBottom: '3px',
}))
const InputForAnswer = styled(Input)(() => ({
   input: { padding: '.75rem 1.5625rem' },
   width: '100%',
   borderRadius: '.5rem',
   border: 'solid .0956rem #D4D0D0',
}))
const ReplaysStyled = styled('div')(() => ({
   display: 'table-column',
}))

const LabelStyled = styled(InputLabel)(() => ({
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 500,
   fontSize: '16px',
   lineHeight: '16px',
   color: '#4B4759',
   marginBottom: '15px',
}))

const AudioContainer = styled('div')(() => ({
   display: 'flex',
   marginTop: '3.75rem',
   width: '50%',
   gap: '1.875rem',
   marginBottom: '20px',
   alignItems: 'flex-end',
}))

const ContainerBtn = styled('div')(() => ({
   gap: '15px',
   display: 'flex',
   justifyContent: 'flex-end',
   padding: '32px 0  0 0 ',
}))

const SaveButton = styled(Button)(() => ({
   background: '#2AB930',
   boxSizing: 'border-box',
   border: 'none',
   fontSize: '14px',
   lineHeight: '16px',
   padding: '13px 24px',
   fontWeight: 700,
   gap: '8px',
   fontFamily: 'Gilroy , Poppins',
   ':hover': {
      background: '#26a32d',
      color: '#FFFFFF',
      variant: 'contained',
   },
}))

const GoBackButton = styled(Button)(() => ({
   boxSizing: 'border-box',
   border: '2px solid',
   fontSize: '14px',
   lineHeight: '16px',
   padding: '13px 24px',
   fontWeight: 700,
   gap: '8px',
   fontFamily: 'Gilroy , Poppins',
   ':hover': {
      background: '#3A10E5',
      color: '#FFFFFF',
      variant: 'contained',
      border: '2px solid',
   },
}))
const UpploadButton = styled(Button)(({ url }) => ({
   boxSizing: 'border-box',
   fontSize: '14px',
   lineHeight: '16px',
   padding: url ? '14px  24px' : '14px  28px',
   fontWeight: 700,
   gap: '8px',
   fontFamily: 'Gilroy , Poppins',
   marginBottom: '3px',
   ':hover': {
      background: '#3A10E5',
      color: '#FFFFFF',
      variant: 'contained',
   },
}))
