import { styled, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DragAndDrop from '../../../components/DragAndDrop'
import Button from '../../../components/UI/buttons/Buttons'
import FormContainer from '../../../components/UI/form/FormContainer'
import ModalReusable from '../../../components/UI/modal/Modal'
import ProgressBar from '../../../components/UI/progressBar/ProgressBar'
import { useProgressBar } from '../../../hooks/useTime'

const modalStyleDiv = {
   width: '407px',
   height: '86px',
   borderRadius: '10px',
   padding: '36px 32px',
   display: 'flex',
   flexDirection: 'column',
}

const ContainerBtn = styled('div')(() => ({
   gap: '18px',
   display: 'flex',
   justifyContent: 'center',
   marginTop: '24px',
}))
const NextBtn = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'flex-end',
   marginTop: '3.75rem',
   borderTop: '2px solid #D4D0D0',
   padding: '32px 0  0 0 ',
}))
const QuitButton = styled(Button)(() => ({
   fontSize: '14px',
   padding: '12px 24px',
   textAlign: 'end',
   margin: '30px',
   border: ' solid 2px #4C4859',
   background: '#FFFFFF',
   color: '#4C4859',
   fontWeight: 'bolder',
}))

const SelectEnglishWords = () => {
   const [isOpenModal, setOpenModal] = useState(false)
   const navigate = useNavigate()
   const closeHandler = () => {
      setOpenModal((prevState) => !prevState)
   }
   const openHandler = () => {
      setOpenModal((prevState) => !prevState)
   }

   const navigateGoBackTest = () => {
      navigate('/test')
   }

   const duration = 120

   const handleTimeUp = () => {
      // Логика, когда время истекло
   }

   const { time, chartPercent } = useProgressBar(duration, handleTimeUp)
   const minutes = Math.floor(time / 60)
   const seconds = Math.floor(time % 60)
   const timeObject = {
      minute: minutes.toString().padStart(2, '0'),
      seconds: seconds.toString().padStart(2, '0'),
   }

   return (
      <main>
         <QuitButton onClick={openHandler}>Quit test</QuitButton>
         <ModalReusable
            modalStyle={modalStyleDiv}
            isOpen={isOpenModal}
            handleClose={closeHandler}
         >
            <Typography>
               Are you sure you want to leave your practice test?
            </Typography>
            <ContainerBtn>
               <Button variant="outlined" onClick={navigateGoBackTest}>
                  quit test
               </Button>
               <Button variant="contained" onClick={closeHandler}>
                  continue test
               </Button>
            </ContainerBtn>
         </ModalReusable>
         <FormContainer>
            <ProgressBar timeObject={timeObject} timeProgress={chartPercent} />
            <DragAndDrop />
            <NextBtn>
               <Button style={{ padding: '12.5px 54px' }} variant="contained">
                  Next
               </Button>
            </NextBtn>
         </FormContainer>
      </main>
   )
}

export default SelectEnglishWords
