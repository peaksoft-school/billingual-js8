import React, { useState } from 'react'
import { Typography, styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Input from '../../../../../components/UI/input/Input'
import Button from '../../../../../components/UI/buttons/Buttons'
import { postRecordSayingStatement } from '../../../../../api/questionService'
import { useSnackbar } from '../../../../../hooks/useSnackbar'

const RecordSayingStatement = ({ title, duration, testId }) => {
   const [statement, setStatement] = useState('')
   const navigate = useNavigate()
   const { notify } = useSnackbar()

   const goBack = () => {
      navigate('/admin/test')
   }

   const submitHandler = async () => {
      try {
         const data = {
            title,
            statement,
            // correctAnswer в фигме нету, поэтому здесь просто написал
            correctAnswer: 'Hello, how is it going?',
            duration,
            questionOrder: 5,
            testId,
            isActive: true,
         }
         await postRecordSayingStatement(data)
         goBack()
         return notify('success', 'Question', 'Successfully added')
      } catch (error) {
         return notify('error', 'Question', error.response?.data.message)
      }
   }

   const changeStatementHandler = (e) => {
      setStatement(e.target.value)
   }

   return (
      <>
         <Label>Statement</Label>
         <StyledInput value={statement} onChange={changeStatementHandler} />
         <ButtonContainer>
            <GoBackButton variant="outlined" onClick={goBack}>
               Go back
            </GoBackButton>
            <SaveButton
               variant="contained"
               onClick={submitHandler}
               disabled={!statement}
            >
               Save
            </SaveButton>
         </ButtonContainer>
      </>
   )
}

export default RecordSayingStatement

const Label = styled(Typography)(() => ({
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: '500',
   fontSize: '16px',
   lineHeight: '16px',
   color: '#4C4859',
}))

const StyledInput = styled(Input)(() => ({
   border: '1.53px solid #D4D0D0',
   borderRadius: '8px',
   width: '100%',
}))

const ButtonContainer = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'flex-end',
   gap: '16px',
   marginTop: '30px',
}))

const GoBackButton = styled(Button)(() => ({
   '&:hover': {
      background: '#3A10E5',
      color: '#fff',
   },
}))

const SaveButton = styled(Button)(() => ({
   background: '#2AB930',
   '&:hover': {
      background: '#31CF38',
   },
}))
