import { Grid, Typography, styled } from '@mui/material'
import { useState } from 'react'
import { ReactComponent as Volumeup } from '../../../assets/icons/volumeup.svg'
import { ReactComponent as Check } from '../../../assets/icons/check (1).svg'

const MultiplySelect = ({ id, onClick }) => {
   const [color, setColor] = useState(false)
   const colorChangeHAndler = () => {
      setColor((prev) => !prev)
   }
   console.log(color)
   return (
      <Main color={color} key={id}>
         <Content>
            <StyledVolumeup onClick={onClick} />
            <Word>WORD {id}</Word>
         </Content>
         <Actions>
            <Check onClick={colorChangeHAndler} />
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
}))

const Content = styled(Grid)(() => ({
   borderTopLeftRadius: '8px',
   borderBottomLeftRadius: '8px',
   display: 'flex',
   alignItems: 'center',
   background: 'white',
   width: '145px',
   height: '39px',
}))

const StyledVolumeup = styled(Volumeup)(() => ({
   margin: '16px 13px 16.23px 13px',
   alignItems: 'center',
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
