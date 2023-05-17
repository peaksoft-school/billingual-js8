import React, { useRef, useState, useEffect } from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { useDropzone } from 'react-dropzone'
import { InputLabel, styled } from '@mui/material'
// import { useDispatch } from 'react-redux'
import { ReactComponent as PlayAudio } from '../../../assets/icons/playIcon.svg'
import { ReactComponent as PauseAudio } from '../../../assets/icons/pauseIcon.svg'
import Button from '../../../components/UI/buttons/Buttons'

import FormContainer from '../../../components/UI/form/FormContainer'
import Input from '../../../components/UI/input/Input'
import { instanse } from '../../../config/axios-instanse/Instanse'

const TypeWhatHear = () => {
   // const dispatch = useDispatch()
   const audioRef = useRef(null)
   const [isPlaying, setIsPlaying] = useState(false)
   const [audioUrl, setAudioUrl] = useState()
   const [audioName, setAudioName] = useState('')

   const postS3file = async () => {
      const formData = new FormData()
      formData.set('multipartFile', audioUrl)
      await instanse.post('/api/s3-file', formData)
   }

   useEffect(() => {
      if (audioName) {
         postS3file()
      }
   }, [audioName])

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

   const handleAudioEnded = () => {
      setIsPlaying(false)
   }

   const onDrop = (acceptedFiles) => {
      const file = acceptedFiles[0]
      setAudioName(file.name)
      // const audioUrl = URL.createObjectURL(file)
      setAudioUrl(file)
      audioRef.current.src = audioUrl
   }

   const { getRootProps, getInputProps } = useDropzone({
      accept: 'audio/mp3',
      onDrop,
   })

   return (
      <StyledForm>
         <AudioContainer>
            <ReplaysStyled>
               <InputLabel>
                  Number off
                  <br /> Replays
               </InputLabel>
               <InputStyled />
            </ReplaysStyled>

            <audio
               style={{ display: 'none' }}
               ref={audioRef}
               type="audio/mp3"
               onEnded={handleAudioEnded}
               controls
            >
               <track kind="captions" srcLang="en" label="English captions" />
               <source src={audioUrl} type="audio/mp3" />
            </audio>

            <div {...getRootProps()} style={{ cursor: 'pointer' }}>
               <input {...getInputProps()} />
               <Button variant="contained">Upload</Button>
            </div>

            <div>
               {isPlaying ? (
                  <PlayAudio onClick={handleToggle} />
               ) : (
                  <PauseAudio onClick={handleToggle} />
               )}
            </div>
            <p>{audioName}</p>
         </AudioContainer>

         <InputLabel>Correct answer</InputLabel>
         <Input />

         <ContainerBtn>
            <GoBackButton variant="outlined">Go back</GoBackButton>
            <SaveButton variant="contained">Save</SaveButton>
         </ContainerBtn>
      </StyledForm>
   )
}

export default TypeWhatHear

const InputStyled = styled(Input)(() => ({ width: '50px' }))

const ReplaysStyled = styled('div')(() => ({ display: 'table-column' }))

const AudioContainer = styled('div')(() => ({
   display: 'flex',
   marginTop: '60px',
   alignContent: 'flex-end',
   width: '58%',
   gap: '30px',
   alignItems: 'center',
}))

const ContainerBtn = styled('div')(() => ({
   gap: '.9375rem',
   display: 'flex',
   justifyContent: 'flex-end',
   marginTop: '60px',
   padding: '2rem 0  0 0 ',
}))

const StyledForm = styled(FormContainer)(() => ({
   width: '865.008px',
   display: 'grid',
   gridTemplateColumns: '1fr',
   gap: '1rem',
   justifyItems: 'center',
}))

const SaveButton = styled(Button)(() => ({
   background: '#2AB930',
   boxSizing: 'border-box',
   border: 'none',
   fontSize: '.875rem',
   lineHeight: '1rem',
   padding: '.8125rem 1.5rem',
   fontWeight: 700,
   gap: '.5rem',
   fontFamily: 'Gilroy , Poppins',
   ':hover': {
      background: '#26a32d',
      color: '#FFFFFF',
      variant: 'contained',
   },
}))

const GoBackButton = styled(Button)(() => ({
   boxSizing: 'border-box',
   border: '.125rem solid',
   fontSize: '.875rem',
   lineHeight: '1rem',
   padding: '.8125rem 1.5rem',
   fontWeight: 700,
   gap: '.5rem',
   fontFamily: 'Gilroy , Poppins',
   ':hover': {
      background: '#3A10E5',
      color: '#FFFFFF',
      variant: 'contained',
      border: '.125rem solid',
   },
}))
