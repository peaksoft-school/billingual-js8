import React, { useEffect } from 'react'
import { Grid, styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FormContainer from '../../../../components/UI/form/FormContainer'
import Button from '../../../../components/UI/buttons/Buttons'
import Switcher from '../../../../components/UI/checkbox/Switcher'

import { ReactComponent as EditIcon } from '../../../../assets/icons/editicon.svg'
import { ReactComponent as DeleteIcon } from '../../../../assets/icons/deletedIcon.svg'
import MyIconButton from '../../../../components/UI/Icon-button/IconButton'
import { deleteTest, getTests } from '../../../../redux/tests/test.thunk'
import Spinner from '../../../../components/UI/spinner/Spinner'

const AdminTest = () => {
   const dispatch = useDispatch()
   const { tests, isLoading } = useSelector((state) => state.tests)
   const navigate = useNavigate()

   useEffect(() => {
      dispatch(getTests())
   }, [])

   const createTestHandler = () => {
      navigate('add-new-test')
   }
   const goToUpdateTest = (item) => {
      navigate('update-test', { state: item })
   }

   const deleteHandler = (id) => {
      dispatch(deleteTest(id))
   }

   return (
      <FormContainer>
         <ButtonContainer>
            <Button variant="contained" onClick={createTestHandler}>
               + Add new Test
            </Button>
         </ButtonContainer>
         {isLoading && <Spinner />}
         {tests.map((item) => (
            <Container key={item.id}>
               <TitleContainer onClick={() => navigate(`${item.id}`)}>
                  <TestTitle>{item.title}</TestTitle>
               </TitleContainer>

               <IconsContainer>
                  <Switcher />

                  <MyIconButton onClick={() => goToUpdateTest(item)}>
                     <StyledEditIcon />
                  </MyIconButton>

                  <MyIconButton onClick={() => deleteHandler(item.id)}>
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
   cursor: 'pointer',
}))

const TestTitle = styled('p')(({ theme }) => ({
   fontFamily: 'Poppins, Gilroy',
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
