import { Button, styled } from '@mui/material'
import React from 'react'
import ButtonBackground from '../../../assets/icons/landingBtn.png'

const ButtonLanding = ({ children, ...rest }) => {
   return <StyleButton {...rest}>{children}</StyleButton>
}

export default ButtonLanding

const StyleButton = styled(Button)(() => ({
   backgroundImage: `url(${ButtonBackground})`,
   backgroundSize: 'cover',
   backgroundRepeat: 'no-repeat',
   backgroundPosition: 'center',
   padding: '8px 5px 13px 5px',
   width: '200px',
   height: '60px',
   border: 'none',
   outline: 'none',
   cursor: 'pointer',
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 700,
   fontSize: '14px',
   lineHeight: '21px',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   letterSpacing: '0.05em',
   textTransform: 'uppercase',
   color: '#FFFFFF',
   '&:hover': {
      backgroundColor: 'transparent',
   },
}))
