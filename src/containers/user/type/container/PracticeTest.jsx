import { styled, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Button from '../../../../components/UI/buttons/Buttons'
import FormContainer from '../../../../components/UI/form/FormContainer'
import ModalReusable from '../../../../components/UI/modal/Modal'
import ProgressBar from '../../../../components/UI/progressBar/ProgressBar'
import { useProgressBar } from '../../../../hooks/useTime'

const modalStyleDiv = {
   width: '407px',
   height: '86px',
   borderRadius: '10px',
   padding: '36px 32px',
   display: 'flex',
   flexDirection: 'column',
}

const PracticeTest = () => {
   const [isOpenModal, setOpenModal] = useState(false)
   const navigate = useNavigate()
   const { state } = useLocation()

   console.log(state)

   const closeHandler = () => {
      setOpenModal((prevState) => !prevState)
   }
   const openHandler = () => {
      setOpenModal((prevState) => !prevState)
   }

   const navigateGoBackTest = () => {
      navigate('/user/tests')
   }

   const duration = 10

   const handleTimeUp = () => {
      // Логика, когда время истекло
   }

   const { time, chartPercent } = useProgressBar(duration, handleTimeUp)
   const minutes = Math.trunc(time / 60)
   const seconds = Math.trunc(time % 60)

   const timeObject = {
      minute: minutes.toString().padStart(2, '0'),
      seconds: seconds.toString().padStart(2, '0'),
   }

   return (
      <BackgroundContainer>
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
            <TitleStyle>Select the real english words in this list</TitleStyle>
         </FormContainer>
      </BackgroundContainer>
   )
}

export default PracticeTest

const BackgroundContainer = styled('main')(() => ({
   backgroundColor: '#D7E1F8',
   height: '100vh',
}))

const TitleStyle = styled(Typography)(() => ({
   textAlign: 'center',
   fontFamily: 'DINNextRoundedLTW01-Regular',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '28px',
   lineHeight: '32px',
   color: '#4C4859',
   marginTop: '50px',
   letterSpacing: '1.5px',
}))

const ContainerBtn = styled('div')(() => ({
   gap: '18px',
   display: 'flex',
   justifyContent: 'center',
   marginTop: '24px',
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
