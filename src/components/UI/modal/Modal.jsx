import React from 'react'
import Box from '@mui/material/Box'
import { Modal as MuiModal } from '@mui/material/Modal'
import { styled } from '@mui/material'

const ModalReusable = ({ modalStyle, handleClose, isOpen, children }) => {
   return (
      <MuiModal open={isOpen} onClose={handleClose}>
         <BoxStyle>{children}</BoxStyle>
      </MuiModal>
   )
}

export default ModalReusable
const BoxStyle = styled(Box)(({ theme }) => ({
   position: 'absolute',
   top: '45%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   backgroundColor: theme.palette.primary.white,
   borderRadius: '10px',
   boxShadow: '0px 4px 39px -5px rgba(196, 196, 196, 0.6)',
}))
