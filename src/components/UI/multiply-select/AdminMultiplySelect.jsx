import React, { useState } from 'react'
import { Tooltip, styled } from '@mui/material'
import { Howl, Howler } from 'howler'
import { ReactComponent as Volumeup } from '../../../assets/icons/volumeup.svg'
import { ReactComponent as DeleteIcon } from '../../../assets/icons/deletedIcon.svg'
import Checkboxes from '../checkbox/Checkbox'

const AdminMultiplySelect = ({ elem, index, checkedFunc, openModal }) => {
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
               <Word>{elem.title}</Word>
            </Tooltip>
            <Checkboxes
               onClick={(e) => checkedFunc(e, elem.id)}
               checked={elem.isCorrect}
               color="success"
            />
            <StyledDeleteIcon onClick={() => openModal(elem.id)} />
         </StyledGrid>
      </Container>
   )
}

export default AdminMultiplySelect

const Container = styled('div')(() => ({
   width: '192px',
   height: '42px',
   display: 'flex',
   alignItems: 'center',
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

const StyledDeleteIcon = styled(DeleteIcon)(() => ({
   cursor: 'pointer',
   '&:hover': {
      path: {
         stroke: '#f00',
      },
   },
}))
