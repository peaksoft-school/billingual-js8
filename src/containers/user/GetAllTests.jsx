/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Grid, styled, Typography } from '@mui/material'
import FormContainer from '../../components/UI/form/FormContainer'
import { ReactComponent as TestList } from '../../assets/icons/allTestList.svg'
import Button from '../../components/UI/buttons/Buttons'
import { getTests, getCurrentTest } from '../../redux/tests/test.thunk'

const GetAllTests = () => {
   const allTest = useSelector((state) => state.tests.tests)
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getTests())
   }, [])

   const navigate = useNavigate()

   const toCurrentTest = (id) => {
      dispatch(getCurrentTest(id))
         .unwrap()
         .then(() => navigate(`${id}current-tests`))
   }

   return (
      <StyledForm>
         {allTest.map((el) => {
            return (
               <TestsContainer key={el.id}>
                  <InfoContainer>
                     <TestIconWrapper>
                        <TestList />
                     </TestIconWrapper>
                     <span>{el.duration / 60} minutes</span>
                     <StyledTitle>{el.title}</StyledTitle>
                     <StyledDescription>
                        {el.shortDescription}
                     </StyledDescription>
                  </InfoContainer>

                  <StyledButton
                     onClick={() => toCurrentTest(el.id)}
                     variant="outlined"
                  >
                     try test
                  </StyledButton>
               </TestsContainer>
            )
         })}
      </StyledForm>
   )
}

export default GetAllTests

const TestIconWrapper = styled('div')(() => ({
   position: 'absolute',
   left: '0%',
   top: '50%',
   transform: 'translateY(-50%)',
}))

const TestsContainer = styled(Grid)(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'flex-end',
   marginBottom: '5rem',
   height: '6.563rem',
}))

const StyledForm = styled(FormContainer)(() => ({
   width: '54.063rem',
   display: 'column',
   justifyItems: 'center',
   padding: '73px 38px !important',
}))
const InfoContainer = styled(Grid)(() => ({
   display: 'column',
   justifyContent: 'space-between',
   span: {
      fontFamily: 'Gilroy , Poppins',
      fontSize: '15px',
      lineHeight: '18px',
      textTransform: 'uppercase',
      color: '#3A10E5',
   },
   position: 'relative',
   paddingLeft: '7.5rem',
}))
const StyledTitle = styled(Typography)(() => ({
   margin: '15px 0px 20px 0px',
   alingSelf: 'self-start',
   fontFamily: 'DINNextRoundedLTW01-Regular',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '26px',
   lineHeight: '29px',
   color: '#4C4859',
}))

const StyledDescription = styled(Typography)(() => ({
   fontFamily: 'DINNextRoundedLTW01-Regular',
   fontStyle: 'normal',
   fontSize: '16px',
   lineHeight: '18px',
   color: '#4C4859',
   fontWeight: 400,
}))

const StyledButton = styled(Button)(() => ({
   boxSizing: 'border-box',
   border: '2px solid',
   fontSize: '14px',
   lineHeight: '16px',
   padding: '13px 24px',
   fontWeight: 700,
   gap: '8px',
   marginLeft: '60px',
   fontFamily: 'Gilroy , Poppins',
   ':hover': {
      background: '#3A10E5',
      color: '#FFFFFF',
      variant: 'contained',
      border: '2px solid',
   },
}))
