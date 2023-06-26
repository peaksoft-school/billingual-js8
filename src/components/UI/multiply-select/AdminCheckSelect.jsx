import React, { useState } from 'react'
import { Tooltip, styled } from '@mui/material'
import { Howl, Howler } from 'howler'
import { ReactComponent as Volumeup } from '../../../assets/icons/volumeup.svg'
import Checkboxes from '../checkbox/Checkbox'

const AdminCheckSelect = ({ elem, index }) => {
   const [isPlaying, setIsPlaying] = useState(false)

   const stopSound = () => {
      Howler.stop()
      setIsPlaying(false)
   }

   const soundPlay = (src) => {
      if (isPlaying) {
         stopSound()
      } else {
         const sound = new Howl({
            src,
            html5: true,
            onend: () => setIsPlaying(false),
         })
         sound.play()
         setIsPlaying(true)
      }
   }

   return (
      <Container>
         <StyledGrid>
            <Number>{index + 1}</Number>
            <StyledVolumeup
               active={isPlaying}
               onClick={() => soundPlay(elem.fileUrl)}
            />
            <Tooltip title={elem.title}>
               <Word>Word</Word>
            </Tooltip>
            <Checkboxes checked={elem.isCorrect} color="success" />
         </StyledGrid>
      </Container>
   )
}

export default AdminCheckSelect

const Container = styled('div')(() => ({
   width: '192px',
   display: 'flex',
   height: '42px',
   alignItems: 'center',
   flexWrap: 'wrap',
   gap: '15px 10px',
   marginBottom: '10px',
}))

const StyledGrid = styled('div')(() => ({
   border: '1px solid #D4D0D0',
   borderRadius: '8px',
   display: 'flex',
   padding: '0 16px',
   gap: '15px',
   alignItems: 'center',
}))

const Number = styled('span')(() => ({
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '16px',
   lineHeight: '18px',
   color: ' #4C4859',
}))

const Word = styled('span')(() => ({
   width: '50px',
   fontFamily: 'Poppins',
   fontWeight: 500,
   textTransform: 'uppercase',
   lineHeight: '16px',
   color: ' #4C4859',
   overflow: 'hidden',
   textOverflow: 'ellipsis',
}))

const StyledVolumeup = styled(Volumeup)(({ active }) => ({
   cursor: 'pointer',
   path: {
      fill: active ? '#3A10E5' : '#655F5F',
   },
}))
