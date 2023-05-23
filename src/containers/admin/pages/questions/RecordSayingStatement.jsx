import React, { useState } from 'react'
import { Typography, styled } from '@mui/material'
import FormContainer from '../../../../components/UI/form/FormContainer'
import Input from '../../../../components/UI/input/Input'
import Button from '../../../../components/UI/buttons/Buttons'
import { postRecordSayingStatement } from '../../../../api/questionService'

const RecordSayingStatement = () => {
   const [statement, setStatement] = useState('')

   const submitHandler = async () => {
      try {
         const data = {
            title: 'title1',
            statement,
            correctAnswer: 'null',
            duration: 90,
            questionOrder: 1,
            testId: 2,
            isActive: true,
         }
         await postRecordSayingStatement(data)
         return 'a'
      } catch (error) {
         return error
      }
   }

   const changeStatementHandler = (e) => {
      setStatement(e.target.value)
   }

   return (
      <FormContainer>
         <Label>Statement</Label>
         <StyledInput value={statement} onChange={changeStatementHandler} />
         <ButtonContainer>
            <GoBackButton variant="outlined">Go back</GoBackButton>
            <SaveButton
               variant="contained"
               onClick={submitHandler}
               disabled={!statement}
            >
               Save
            </SaveButton>
         </ButtonContainer>
      </FormContainer>
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
}))

const ButtonContainer = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'flex-end',
   gap: '16px',
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
