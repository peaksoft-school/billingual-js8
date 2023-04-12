import { Button, styled } from '@mui/material'
import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Snackbar = () => {
   const notify = () =>
      toast.success(
         <>
            <PrimaryTitle>File saved</PrimaryTitle>
            <SecondaryTitle>Successfully saved</SecondaryTitle>
         </>,
         {
            position: 'top-right',
            autoClose: true,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
         }
      )
   return (
      <div>
         <Toastify />
         <Button onClick={notify}>Success!</Button>
      </div>
   )
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
      // borderLeft: '5px solid red',
      // BorderHeight: '10px',

      '& .Toastify__toast-icon': {
         marginTop: '10px',
         height: '18vh',
         borderLeft: '2px solid red',
         alighItems: 'flex-start',
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

const PrimaryTitle = styled('h4')(() => ({
   fontFamily: 'DINNextRoundedLTPro-Bold',
   margin: '10px 0 0 0',
   fontSize: '16px',
   lineHeight: '18.75px',
   color: '#4C4859',
}))

const SecondaryTitle = styled('p')(() => ({
   margin: '8px 0 10px 0',
   fontFamily: 'DINNextRoundedLTW01-Regular',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '16px',
   lineHeight: '18px',
   color: '#646464',
}))
