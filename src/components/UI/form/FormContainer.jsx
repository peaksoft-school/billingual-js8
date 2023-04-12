import { styled } from '@mui/material'
import React from 'react'

const FormContainer = ({ children }) => {
   return (
      <MainContainer>
         <InsideContainer>{children}</InsideContainer>
      </MainContainer>
   )
}

export default FormContainer

const MainContainer = styled('div')(() => ({
   padding: '70px 190px',
}))

const InsideContainer = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   backgroundColor: '#fff',
   padding: '50px 80px',
   borderRadius: '20px',
   alignItems: 'flex-end',
   boxShadow: '0px 4px 39px rgba(196, 196, 196, 0.6)',
}))
