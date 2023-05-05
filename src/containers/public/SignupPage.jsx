import { CircularProgress, Grid, Typography, styled } from '@mui/material'
import { useFormik } from 'formik'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ReactComponent as System } from '../../assets/icons/system.svg'
import { ReactComponent as Layer } from '../../assets/icons/layer 2.svg'
import { ReactComponent as Defoult } from '../../assets/icons/defoult.svg'
import Input from '../../components/UI/input/Input'
import Button from '../../components/UI/buttons/Buttons'
import { signUp } from '../../redux/auth/auth.thunk'
import {
   signUpInputArray,
   signUpValidation,
} from '../../utils/constants/general'
import { useSnackbar } from '../../hooks/useSnackbar'

const SignupPage = () => {
   const dispatch = useDispatch()
   const { error, isLoading } = useSelector((state) => state.auth)

   const navigate = useNavigate()
   const { notify } = useSnackbar()

   const submitHandler = (values) => {
      dispatch(signUp(values))
         .unwrap()
         .then(() => navigate('/'))
         .then(() => notify('success', 'Authorization', 'Successfully sign up'))
         .catch(() => notify('error', 'Authorization', 'Failed to sign up'))
   }

   const { values, handleChange, handleSubmit, errors, touched } = useFormik({
      initialValues: {
         firstName: '',
         lastName: '',
         email: '',
         password: '',
      },
      validationSchema: signUpValidation,
      onSubmit: (values) => {
         submitHandler(values)
      },
   })

   const gotToLandingPage = () => {
      navigate('/')
   }

   const CheckEmail = errors.email && touched.email ? 'Incorrect email! ' : null
   const CheckPassword =
      errors.password && touched.password ? 'Incorrect  password! ' : null

   return (
      <Background>
         <SignUpForm onSubmit={handleSubmit}>
            <IconContainer>
               <CloseModalIcon onClick={gotToLandingPage} />
            </IconContainer>
            <Container>
               {isLoading ? (
                  <SpinnerContainer>
                     <CircularProgress />
                  </SpinnerContainer>
               ) : (
                  <>
                     <Icon2 />
                     <Title> Create an Account</Title>
                     {signUpInputArray.map((item) => {
                        return (
                           <StyledInput
                              error={!!errors[item.name]}
                              key={item.name}
                              label={item.label}
                              name={item.name}
                              value={values[item.name]}
                              onChange={handleChange}
                              type={item.type}
                           />
                        )
                     })}

                     <Error>{CheckEmail}</Error>
                     <Error> {CheckPassword}</Error>
                     <Error>{error}</Error>
                     <StyledButton variant="contained" type="submit">
                        Sign up
                     </StyledButton>
                     <DefoultIcon />
                     <StyledText>
                        ALREADY HAVE AN ACCOUNT?
                        <NavLink to="/sign-in">LOG IN</NavLink>
                     </StyledText>
                  </>
               )}
            </Container>
         </SignUpForm>
      </Background>
   )
}

export default SignupPage

const SpinnerContainer = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   height: '100%',
}))

const Error = styled('p')(() => ({
   margin: '0 0 10px 0',
   color: '#f00',
   textAlign: 'center',
}))

const Background = styled(Grid)(() => ({
   background: 'linear-gradient(90.76deg, #6B0FA9 0.74%, #520FB6 88.41%)',
   padding: '40px',
}))

const SignUpForm = styled('form')(() => ({
   width: '38.5rem',
   height: 'auto',
   background: '#FFFFFF',
   borderRadius: '10px',
   margin: '0 auto',
   padding: '30px',
}))
const IconContainer = styled('div')(() => ({
   textAlign: 'end',
}))

const CloseModalIcon = styled(System)(() => ({
   cursor: 'pointer',
}))
const Container = styled(Grid)(() => ({
   display: 'flex',
   flexDirection: 'column',
   width: '500px',
   marginLeft: '58px',
}))
const Icon2 = styled(Layer)(() => ({
   width: '100%',
}))
const Title = styled(Typography)(() => ({
   textAlign: 'center',
   marginTop: '12px',
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 500,
   fontSize: '24px',
   lineHeight: '36px',
   color: '#4C4859',
   marginBottom: '32px',
}))

const StyledInput = styled(Input)(() => ({
   height: '52px',
   marginBottom: '20px',
}))

const StyledButton = styled(Button)(() => ({
   height: '52px',
   marginTop: '10px',
}))
const DefoultIcon = styled(Defoult)(() => ({
   margin: '0 auto',
   marginTop: '34px',
}))
const StyledText = styled(Typography)(() => ({
   textAlign: 'center',
   marginTop: '24px',
}))
