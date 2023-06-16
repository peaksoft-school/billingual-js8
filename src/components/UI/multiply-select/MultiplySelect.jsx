import { Grid, Typography, styled } from '@mui/material'
import { useState } from 'react'
import { Howl, Howler } from 'howler'
import { ReactComponent as Volumeup } from '../../../assets/icons/volumeup.svg'
import { ReactComponent as Check } from '../../../assets/icons/check (1).svg'

const MultiplySelect = ({ id, word, audio, setAudio, audioIds }) => {
   const [color, setColor] = useState(false)
   const [isPlaying, setIsPlaying] = useState(false)

   const selectHandler = (id) => {
      if (audioIds.find((item) => item === id)) {
         setColor(false)
         return setAudio((prev) => prev.filter((item) => item !== id))
      }
      setColor(true)
      return setAudio((prev) => [...prev, id])
   }

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
      <Main color={color} key={id}>
         <Content>
            <StyledVolumeup
               isActive={isPlaying}
               onClick={() => soundPlay(audio)}
            />

            <Word onClick={() => selectHandler(id)}>
               {word} {id}
            </Word>
         </Content>
         <Actions>
            <Check onClick={() => selectHandler(id)} />
         </Actions>
      </Main>
   )
}

export default MultiplySelect

const Main = styled(Grid)(({ color }) => ({
   width: '192px',
   height: '42px',
   display: 'flex',
   alignItems: 'center',
   borderRadius: '8px',
   background: color ? '#3A10E5' : '#a4a3a3',
   border: color ? '1.53px solid #3A10E5' : '1.53px solid #a4a3a3',
   cursor: 'pointer',
}))

const Content = styled(Grid)(() => ({
   borderRadius: '8px 0 0 8px',
   display: 'flex',
   alignItems: 'center',
   background: 'white',
   width: '145px',
   height: '39px',
}))

const StyledVolumeup = styled(Volumeup)(({ isActive }) => ({
   margin: '16px 13px 16.23px 13px',
   alignItems: 'center',
   cursor: 'pointer',
   path: {
      fill: isActive ? '#3A10E5' : '#655F5F',
   },
}))

const Word = styled(Typography)(() => ({
   fontStyle: 'normal',
   fontWeight: 500,
   fontSize: '14px',
   lineHeight: '16px',
   color: '#4C4859',
}))

const Actions = styled(Grid)(() => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   margin: '0  auto',
}))
