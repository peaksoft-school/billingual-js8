import { Grid, InputAdornment, Typography, styled } from '@mui/material'
import { useFormik } from 'formik'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { ReactComponent as System } from '../../assets/icons/system.svg'
import { ReactComponent as Layer } from '../../assets/icons/layer 2.svg'
import Input from '../../components/UI/input/Input'
import Button from '../../components/UI/buttons/Buttons'
import { signUp } from '../../redux/auth/auth.thunk'
import {
   signUpInputArray,
   signUpValidation,
} from '../../utils/constants/general'
import { useSnackbar } from '../../hooks/useSnackbar'
import Spinner from '../../components/UI/spinner/Spinner'
import MyIconButton from '../../components/UI/Icon-button/IconButton'
import { ReactComponent as EyeIcon } from '../../assets/icons/eyeDefaultIcon.svg'
import { ReactComponent as EyeIconOff } from '../../assets/icons/eyeOffIcon.svg'
// import { ReactComponent as Google } from '../../assets/icons/google.svg'
import { STORAGE_KEYS } from '../../utils/constants/common'
import { authActions } from '../../redux/auth/auth.slice'

const SignupPage = () => {
   const dispatch = useDispatch()
   const { error, isLoading } = useSelector((state) => state.auth)
   const [showPassword, setShowPassword] = useState(false)

   const navigate = useNavigate()
   const { notify } = useSnackbar()

   const handleClickShowPassword = (fieldName) => {
      setShowPassword((prevState) => ({
         ...prevState,
         [fieldName]: !prevState[fieldName],
      }))
   }

   // const googleSignInHandler = () => {
   //    signInWithPopup(auth, provider).then((data) => {
   //       const userData = {
   //          token: data.user.accessToken,
   //          email: data.user.email,
   //          role: 'USER',
   //       }

   //       localStorage.setItem(
   //          STORAGE_KEYS.BILINGUAL_USER_KEY,
   //          JSON.stringify(userData)
   //       )
   //       navigate('/user/tests')
   //    })
   // }

   useEffect(() => {
      const userInfo = JSON.parse(
         localStorage.getItem(STORAGE_KEYS.BILINGUAL_USER_KEY)
      )
      if (userInfo) {
         const authorizedUserCredentials = {
            token: userInfo.token,
            email: userInfo.email,
            role: userInfo.role,
         }
         dispatch(authActions.login(authorizedUserCredentials))
      }
   }, [])

   const submitHandler = (values) => {
      dispatch(signUp(values))
         .unwrap()
         .then(() => navigate('/user/tests'))
         .then(() => notify('success', 'Authorization', 'Successfully sign up'))
         .catch(() => notify('error', 'Authorization', 'Failed to sign up'))
   }

   const { values, handleChange, handleSubmit, errors, touched } = useFormik({
      initialValues: {
         firstName: '',
         lastName: '',
         email: '',
         password: '',
         confirmPassword: '',
      },
      validationSchema: signUpValidation,
      onSubmit: (values) => {
         submitHandler(values)
      },
   })

   const gotToLandingPage = () => {
      navigate('/')
   }

   // const CheckEmail = errors.email && touched.email ? 'Incorrect email! ' : null
   // const CheckPassword =
   //    errors.password && touched.password ? 'Incorrect  password! ' : null
   const CheckConfirmPassword =
      touched.confirmPassword && errors.confirmPassword

   return (
      <Background>
         <SignUpForm onSubmit={handleSubmit}>
            <IconContainer>
               <CloseModalIcon onClick={gotToLandingPage} />
            </IconContainer>
            <Container>
               <Icon2 />
               <Title> Create an Account</Title>
               {signUpInputArray.map((item) => {
                  return (
                     <StyledInput
                        error={touched[item.name] && errors[item.name]}
                        key={item.name}
                        label={item.label}
                        name={item.name}
                        value={values[item.name]}
                        onChange={handleChange}
                        type={showPassword[item.name] ? 'text' : item.type}
                        InputProps={
                           item.type === 'password'
                              ? {
                                   endAdornment: (
                                      <InputAdornment position="end">
                                         <MyIconButton
                                            onClick={() =>
                                               handleClickShowPassword(
                                                  item.name
                                               )
                                            }
                                            edge="end"
                                         >
                                            {showPassword[item.name] ? (
                                               <EyeIconOff />
                                            ) : (
                                               <EyeIcon />
                                            )}
                                         </MyIconButton>
                                      </InputAdornment>
                                   ),
                                }
                              : null
                        }
                     />
                  )
               })}

               {/* <Error>{CheckEmail}</Error>
               <Error> {CheckPassword}</Error> */}
               <Error>{touched.firstName && errors.firstName}</Error>
               <Error>{touched.lastName && errors.lastName}</Error>
               <Error>{touched.password && errors.password}</Error>
               <Error>{error}</Error>
               <Error>{CheckConfirmPassword}</Error>
               {isLoading ? (
                  <Spinner />
               ) : (
                  <StyledButton variant="contained" type="submit">
                     sign up
                  </StyledButton>
               )}
               {/* <ButtonContainer
                  disabled={isLoading}
                  onClick={googleSignInHandler}
               >
                  <GoogleIcon />
                  sign up with google
               </ButtonContainer> */}
               <StyledText>
                  ALREADY HAVE AN ACCOUNT?
                  <StyledNavLink
                     disabled={isLoading}
                     to={isLoading ? '' : '/sign-in'}
                  >
                     LOG IN
                  </StyledNavLink>
               </StyledText>
            </Container>
         </SignUpForm>
      </Background>
   )
}

export default SignupPage

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
// const ButtonContainer = styled(Button)(() => ({
//    margin: '34px auto 0',
//    border: ' 1px solid #BDBDBD',
//    boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.2)',
//    borderRadius: '8px',
//    padding: '10px 10px',
//    color: '#757575',
// }))
// const GoogleIcon = styled(Google)(() => ({
//    margin: '0 8px 0 0',
// }))
const StyledText = styled(Typography)(() => ({
   textAlign: 'center',
   marginTop: '24px',
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: '500',
   fontSize: '14px',
   lineHeight: '21px',
   letterSpacing: '0.02em',
   color: '#757575',
}))

const StyledNavLink = styled(NavLink)(() => ({
   color: '#3A10E5',
   textDecoration: 'none',
}))
