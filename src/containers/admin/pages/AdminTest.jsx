import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Grid, Typography, styled } from '@mui/material'
import FormContainer from '../../../components/UI/form/FormContainer'
import Button from '../../../components/UI/buttons/Buttons'
import Switcher from '../../../components/UI/checkbox/Switcher'

import { ReactComponent as EditIcon } from '../../../assets/icons/editIcon.svg'
import { ReactComponent as DeleteIcon } from '../../../assets/icons/deletedIcon.svg'
import MyIconButton from '../../../components/UI/Icon-button/IconButton'

const data = [
   {
      id: '1',
      testNumber: '1',
   },
   {
      id: '2',
      testNumber: '2',
   },
   {
      id: '3',
      testNumber: '3',
   },
]

const AdminTest = () => {
   const navigate = useNavigate()
   const goToPage = (path) => {
      navigate(path)
   }
   return (
      <FormContainer>
         <ButtonContainer>
            <Button variant="contained" onClick={() => goToPage('createtest')}>
               + Add new Test
            </Button>
         </ButtonContainer>
         {data.map((item) => (
            <Container key={item.id}>
               <TitleContainer>
                  <TestTitle> Test number {item.testNumber} </TestTitle>
               </TitleContainer>

               <IconsContainer>
                  <Switcher />

                  <MyIconButton>
                     <StyledEditIcon />
                  </MyIconButton>

                  <MyIconButton>
                     <StyledDeleteIcon />
                  </MyIconButton>
               </IconsContainer>
            </Container>
         ))}
      </FormContainer>
   )
}

export default AdminTest

const ButtonContainer = styled(Grid)(() => ({
   display: 'flex',
   justifyContent: 'flex-end',
   marginBottom: '10px',
}))

const Container = styled(Grid)(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   boxShadow:
      '0px -4px 10px rgba(0, 0, 0, 0.06), 0px 4px 10px rgba(0, 0, 0, 0.06)',
   padding: '24px 16px',
   borderRadius: '8px',
}))

const TitleContainer = styled(Grid)(() => ({
   display: 'flex',
   alignItems: 'center',
}))

const TestTitle = styled(Typography)(({ theme }) => ({
   fontFamily: 'DINNextRoundedLTW01-Regular',
   fontStyle: 'normal',
   fontWeight: '400',
   fontSize: '16px',
   lineHeight: '18px',
   color: theme.palette.primary.fontColor,
}))

const IconsContainer = styled(Grid)(() => ({
   display: 'flex',
   alignItems: 'center',
   gap: '5px',
}))

const StyledEditIcon = styled(EditIcon)(({ theme }) => ({
   '&:hover': {
      path: {
         stroke: theme.palette.secondary.skyBlue,
      },
   },
}))
const StyledDeleteIcon = styled(DeleteIcon)(({ theme }) => ({
   '&:hover': {
      path: {
         stroke: theme.palette.secondary.main,
      },
   },
}))
