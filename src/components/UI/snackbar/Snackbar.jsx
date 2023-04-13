import React, { useEffect } from 'react'
import { styled } from '@mui/material'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Snackbar = ({ type, title, message }) => {
   const notify = () =>
      toast[type](
         <>
            <Title>{title}</Title>
            <Message>{message}</Message>
         </>,
         {
            position: 'top-right',
            autoClose: true,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: 'colored',
         }
      )
   useEffect(() => {
      notify()
   }, [])

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

const Title = styled('h4')(() => ({
   fontFamily: 'DINNextRoundedLTPro-Bold',
   margin: '10px 0 0 0',
   fontSize: '16px',
   lineHeight: '18.75px',
   color: '#4C4859',
}))

const Message = styled('p')(() => ({
   margin: '8px 0 10px 0',
   fontFamily: 'DINNextRoundedLTW01-Regular',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '16px',
   lineHeight: '18px',
   color: '#646464',
}))
