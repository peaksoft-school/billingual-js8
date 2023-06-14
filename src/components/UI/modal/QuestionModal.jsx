import React, { useState } from 'react'
import { Box, Modal, styled } from '@mui/material'
import { useDispatch } from 'react-redux'
import closeCross from '../../../assets/icons/closeCross.svg'
import Checkboxes from '../checkbox/Checkbox'
import Button from '../buttons/Buttons'
import Input from '../input/Input'
import { questionActions } from '../../../redux/question/question.slice'

const QuestionModal = ({ isOpen, onClose }) => {
   const dispatch = useDispatch()
   const [title, setTitle] = useState('')
   const [checkOption, setChekOption] = useState(false)
   const [optionOrder, setOptionOrder] = useState(1)

   const changeInput = (e) => {
      setTitle(e.target.value)
   }
   const goBackFunc = () => {
      setTitle('')
      onClose()
   }

   const changeCheckbox = (e) => {
      setChekOption(e.target.checked)
   }

   const addHandler = () => {
      const data = {
         title,
         isCorrect: checkOption,
         optionOrder,
         id: optionOrder,
      }
      setOptionOrder((prevOrder) => prevOrder + 1)
      dispatch(questionActions.addOption(data))
      onClose()
      setTitle('')
      setChekOption(false)
   }

   return (
      <Modal open={isOpen} onClose={goBackFunc}>
         <StyledBox>
            <StyledIcon src={closeCross} onClick={goBackFunc} />
            <DivTitle>
               <TitleText>Title</TitleText>
               <Input fullWidth value={title} onChange={changeInput} />
               <DivTrueOption>
                  <IsTrueOption>Is true option?</IsTrueOption>
                  <Checkboxes
                     checked={checkOption}
                     onChange={changeCheckbox}
                     sx={{ marginTop: '5.83px' }}
                     color="success"
                  />
               </DivTrueOption>
            </DivTitle>
            <DivButtonGoBackAndSave>
               <DivButton>
                  <GoBackButton onClick={goBackFunc} variant="outlined">
                     Go back
                  </GoBackButton>
                  <SaveButton
                     onClick={addHandler}
                     disabled={!title}
                     variant="contained"
                  >
                     Save
                  </SaveButton>
               </DivButton>
            </DivButtonGoBackAndSave>
         </StyledBox>
      </Modal>
   )
}

export default QuestionModal

const StyledBox = styled(Box)(() => ({
   position: 'absolute',
   top: '45%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   backgroundColor: '#fff',
   borderRadius: '15px',
   boxShadow: '0px 4px 39px -5px rgba(196, 196, 196, 0.6)',
}))

const DivButtonGoBackAndSave = styled('div')(() => ({
   width: '637px',
   height: '94px',
   background: ' #F0F1F1',
   borderRadius: '0px 0px 20px 20px',
   marginTop: '80px',
   display: 'flex',
   alignItems: 'center',
}))

const DivTitle = styled('div')(() => ({
   width: '517px',
   height: '120px',
   margin: '0 auto',
   marginTop: '40px',
}))
const TitleText = styled('div')(() => ({
   width: '37.28px',
   height: '18px',
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 500,
   fontSize: '16px',
   lineHeight: '18px',
   display: 'flex',
   alignItems: 'center',
   color: '#4B4759',
   paddingBottom: '16px',
}))

const IsTrueOption = styled('div')(() => ({
   width: '99px',
   textAlign: 'center',
   height: '18px',
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '14px',
   lineHeight: '18px',
   color: ' #4C4859',
   marginTop: '20px',
}))

const DivButton = styled('div')(() => ({
   width: '203px',
   height: '42px',
   marginLeft: '374px',
   display: 'flex',
   gap: '16px',
}))
const StyledIcon = styled('img')(() => ({
   marginLeft: '583px',
   marginTop: '20px',
   marginRight: '32px',
   cursor: 'pointer',
   ':hover': {
      backgroundColor: '#b6ea7f',
      borderRadius: '300px',
      textColor: '#fff',
   },
}))
const DivTrueOption = styled('div')(() => ({ display: 'flex', gap: '5px' }))

const GoBackButton = styled(Button)(() => ({
   '&:hover': {
      background: '#3A10E5',
      color: '#fff',
   },
}))

const SaveButton = styled(Button)(() => ({
   background: '#2AB930',
   color: '#fff',
   '&.Mui-disabled': {
      background: 'none',
      border: '2px solid',
   },
   '&:hover': {
      background: '#31CF38',
   },
}))
