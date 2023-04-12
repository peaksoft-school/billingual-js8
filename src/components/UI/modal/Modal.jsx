import React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { styled } from '@mui/material'

const ModalContainer = ({ isClose, isOpen, children }) => {
   return (
      <Modal open={isOpen} onClose={isClose}>
         <BoxStyle>{children}</BoxStyle>
      </Modal>
   )
}

export default ModalContainer
const BoxStyle = styled(Box)(({ theme }) => ({
   padding: '36px 89px 36px 89px',
   position: 'absolute',
   top: '45%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   backgroundColor: theme.palette.primary.white,
   borderRadius: '10px',
   boxShadow: '0px 4px 39px -5px rgba(196, 196, 196, 0.6)',
}))
