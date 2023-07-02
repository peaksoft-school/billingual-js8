/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import {
   styled,
   Grid,
   List,
   ListItem,
   Typography,
   CircularProgress,
} from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import { ReactComponent as CurrentImg } from '../../assets/icons/currentTest.svg'
import { ReactComponent as Online } from '../../assets/icons/iconOnline.svg'
import { ReactComponent as Photo } from '../../assets/icons/iconPhotoId.svg'
import { ReactComponent as Time } from '../../assets/icons/iconTime.svg'
import Button from '../../components/UI/buttons/Buttons'
import FormContainer from '../../components/UI/form/FormContainer'
import { getTestById } from '../../api/testService'
import { useSnackbar } from '../../hooks/useSnackbar'

const CurrentTest = () => {
   const navigate = useNavigate()
   const { notify } = useSnackbar()
   const [test, setTest] = useState([])
   const [isLoading, setIsLoading] = useState(true)

   const { testId } = useParams()

   const getOneTest = async () => {
      try {
         const { data } = await getTestById(testId)
         setTest([data])
         setIsLoading(false)
      } catch (error) {
         notify('error', 'Current test', `Failed to fetch test!`)
         setIsLoading(true)
      }
   }

   useEffect(() => {
      getOneTest()
   }, [])

   const tryTestHandle = (questions) => {
      return navigate(`practice`, { state: questions })
   }

   return (
      <FormContainer>
         {isLoading && (
            <SpinnerContainer>
               <CircularProgress />
            </SpinnerContainer>
         )}
         {test && test.length > 0 ? (
            test.map((item) => {
               return (
                  <StyledForm key={item.id}>
                     <TitleStyle>{item.title}</TitleStyle>
                     <ContentContainer>
                        <CurrentImg />
                        <ListStyle>
                           <ListItem>
                              <Online />
                              <span>See what the test is like *</span>
                           </ListItem>
                           <ListItem>
                              <Time />
                              <span>
                                 Practice takes just{' '}
                                 {(item.duration / 60).toFixed(0)} minutes
                              </span>
                           </ListItem>
                           <ListItem>
                              <Photo />
                              <span>Get an unofficial score estimate</span>
                           </ListItem>
                        </ListStyle>
                     </ContentContainer>

                     <InfoStyle>
                        * The practice test may include question types that may
                        not appear on the certified test.
                     </InfoStyle>

                     <ContainerBtn>
                        <CancelButton
                           variant="outlined"
                           onClick={() => navigate('/user/tests')}
                        >
                           Cancel
                        </CancelButton>
                        <Button
                           variant="contained"
                           onClick={() => tryTestHandle(item.questions)}
                        >
                           Practice Test
                        </Button>
                     </ContainerBtn>
                  </StyledForm>
               )
            })
         ) : (
            <Typography>
               Sorry, there are no tests available at the moment.
            </Typography>
         )}
      </FormContainer>
   )
}

export default CurrentTest

const SpinnerContainer = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   height: '100%',
}))
const TitleStyle = styled(Typography)(() => ({
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontSize: '28px',
   lineHeight: '32px',
   color: '#4C4859',
   fontWeight: 400,
}))
const InfoStyle = styled(Typography)(() => ({
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontSize: '14px',
   lineHeight: '124%',
   color: '#4C4859',
   fontWeight: 400,
}))
const ListStyle = styled(List)(() => ({
   ListItem: {
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontSize: '18px',
      lineHeight: '124%',
      color: '#4C4859',
      fontWeight: 400,
   },
}))

const ContentContainer = styled(Grid)(() => ({
   display: 'flex',
   justifyContent: 'center',
   margin: '3.625rem 0 5.6875rem 0',
   svg: {
      marginRight: '2rem',
   },
   span: {
      fontSize: '1rem',
      lineHeight: '1.5',
      color: '#333',
   },
}))

const StyledForm = styled('div')(() => ({
   width: '100%',
   textAlign: 'center',
   margin: '0 auto',
}))

const ContainerBtn = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   marginTop: '3.75rem',
   borderTop: '1.5296px solid #D4D0D0',
   padding: '32px 0  0 0 ',
}))

const CancelButton = styled(Button)(() => ({
   boxSizing: 'border-box',
   border: '2px solid',
   fontSize: '14px',
   lineHeight: '16px',
   padding: '13px 24px',
   fontWeight: 700,
   gap: '8px',
   fontFamily: 'Gilroy , Poppins',
   ':hover': {
      background: '#3A10E5',
      color: '#FFFFFF',
      variant: 'contained',
      border: '2px solid',
   },
}))
