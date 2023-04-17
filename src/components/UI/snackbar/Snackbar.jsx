import React from 'react'
import { styled } from '@mui/material'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Snackbar = () => {
   return <Toastify />
}

export default Snackbar
const Toastify = styled(ToastContainer)(() => ({
   textAlign: 'start',
   '& .Toastify__toast--success': {
      background: '#eafbe7',
      border: '1px solid #8CDB95',
   },
   '& .Toastify__toast--error': {
      background: '#fff1f0',
      border: '1px solid #fb9998',
      padding: '8px 16px',

      '& .Toastify__close-button': {
         path: {
            fill: '#828282',
         },
      },

      '& .Toastify__toast-icon': {
         marginTop: '10px',
         height: '10vh',
         borderLeft: '3px solid #F61414',
         svg: {
            display: 'none',
         },
      },
   },

   '& .Toastify__toast-body': {
      alignItems: 'flex-start',
   },

   '& .Toastify__toast-icon': {
      marginTop: '10px',
      alighItems: 'flex-start',
      svg: {
         fill: '#00AB1B',
      },
   },
   '& .Toastify__toast': {
      marginTop: '10px',
      alighItems: 'flex-start',
      path: {
         fill: '#00AB1B',
      },
   },

   '& .Toastify__close-button': {
      path: {
         fill: '#D7E1F8',
      },
   },
}))
