import { CircularProgress, styled } from '@mui/material'
import React from 'react'

const Spinner = () => {
   return (
      <SpinnerContainer>
         <CircularProgress />
      </SpinnerContainer>
   )
}

export default Spinner

const SpinnerContainer = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   height: '100%',
}))
