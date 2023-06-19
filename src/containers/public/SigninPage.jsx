import { Grid, InputAdornment, Typography, styled } from '@mui/material'
import { useFormik } from 'formik'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { signInWithPopup } from 'firebase/auth'
import { ReactComponent as System } from '../../assets/icons/system.svg'
import { ReactComponent as Layer } from '../../assets/icons/layer 2.svg'
import { ReactComponent as Google } from '../../assets/icons/google.svg'
import Input from '../../components/UI/input/Input'
import Checkboxes from '../../components/UI/checkbox/Checkbox'
import Button from '../../components/UI/buttons/Buttons'
import { signIn } from '../../redux/auth/auth.thunk'
import { useSnackbar } from '../../hooks/useSnackbar'
import { signInValidation } from '../../utils/constants/general'
import Spinner from '../../components/UI/spinner/Spinner'
import MyIconButton from '../../components/UI/Icon-button/IconButton'
import { ReactComponent as EyeIcon } from '../../assets/icons/eyeDefaultIcon.svg'
import { ReactComponent as EyeIconOff } from '../../assets/icons/eyeOffIcon.svg'
import { auth, provider } from '../../config/axios-instanse/firebaseConfig'
import authService from '../../api/authService'

const SigninPage = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { error, isLoading } = useSelector((state) => state.auth)
   const [showPassword, setShowPassword] = useState(false)

   const googleSignInHandler = () => {
      signInWithPopup(auth, provider).then(async (data) => {
         console.log(data)
         try {
            const res = await authService.authWithGoogle(
               // eslint-disable-next-line no-underscore-dangle
               data.user.accessToken
            )
            console.log(res.data)
         } catch (error) {
            console.log(error)
         }

         // const userData = {
         //    token: data.user.accessToken,
         //    email: data.user.email,
         //    role: 'USER',
         // }

         // localStorage.setItem(
         //    STORAGE_KEYS.BILINGUAL_USER_KEY,
         //    JSON.stringify(userData)
         // )
         navigate('/user/tests')
      })
   }

   // useEffect(() => {
   //    const userInfo = JSON.parse(
   //       localStorage.getItem(STORAGE_KEYS.BILINGUAL_USER_KEY)
   //    )
   //    if (userInfo) {
   //       const authorizedUserCredentials = {
   //          token: userInfo.token,
   //          email: userInfo.email,
   //          role: userInfo.role,
   //       }
   //       dispatch(authActions.login(authorizedUserCredentials))
   //    }
   // }, [isAuthorized])

   const handleClickShowPassword = () => setShowPassword((show) => !show)

   const handleMouseDownPassword = (event) => {
      event.preventDefault()
   }

   const { notify } = useSnackbar()

   const submitHandler = (values) => {
      dispatch(signIn(values))
         .unwrap()
         .then(() =>
            notify('success', 'Authentication', 'Successfully sign in')
         )
         .then(() => navigate('/user/tests'))
         .catch(() => notify('error', 'Authentication', 'Failed to sign in'))
   }

   const { values, handleChange, handleSubmit, errors, touched } = useFormik({
      initialValues: {
         email: '',
         password: '',
      },
      validationSchema: signInValidation,
      onSubmit: (values) => {
         submitHandler(values)
      },
   })

   const gotToLandingPage = () => {
      navigate('/')
   }

   return (
      <Background>
         <SignInForm onSubmit={handleSubmit}>
            <IconContainer>
               <CloseModalIcon onClick={gotToLandingPage} />
            </IconContainer>
            <Container>
               <Icon2 />
               <Title> Sign in</Title>
               <StyledInput
                  label="Email"
                  name="email"
                  error={!!errors.email}
                  value={values.email}
                  onChange={handleChange}
                  type="email"
               />

               <StyledInput
                  label="Password"
                  name="password"
                  error={touched.password && !!errors.password}
                  value={values.password}
                  onChange={handleChange}
                  type={showPassword ? 'text' : 'password'}
                  InputProps={{
                     endAdornment: (
                        <InputAdornment position="end">
                           <MyIconButton
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                           >
                              {showPassword ? <EyeIconOff /> : <EyeIcon />}
                           </MyIconButton>
                        </InputAdornment>
                     ),
                  }}
               />
               <CheckboxContain>
                  <StyledCheckbox />
                  <Text>To remember me</Text>
               </CheckboxContain>
               <Error>{touched.email && errors.email}</Error>
               <Error>{touched.password && errors.password}</Error>
               <Error>{error}</Error>
               {isLoading ? (
                  <Spinner />
               ) : (
                  <StyledButton variant="contained" type="submit">
                     sign in
                  </StyledButton>
               )}
               <ButtonContainer
                  disabled={isLoading}
                  onClick={googleSignInHandler}
               >
                  <GoogleIcon />
                  sign in with google
               </ButtonContainer>
               <StyledText>
                  DON`T HAVE AN ACCOUNT?
                  <StyledNavLink
                     disabled={isLoading}
                     to={isLoading ? '' : '/sign-up'}
                  >
                     REGISTER
                  </StyledNavLink>
               </StyledText>
            </Container>
         </SignInForm>
      </Background>
   )
}
export default SigninPage

const Error = styled('p')(() => ({
   margin: '0 0 10px 0',
   color: '#f00',
   textAlign: 'center',
}))

const Background = styled(Grid)(() => ({
   background: 'linear-gradient(90.76deg, #6B0FA9 0.74%, #520FB6 88.41%)',
   padding: '40px 0',
   height: '100vh',
}))

const SignInForm = styled('form')(() => ({
   width: '38.5rem',
   height: 'auto',
   background: '#FFFFFF',
   borderRadius: '10px',
   margin: '0 auto',
   padding: '20px',
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
const CheckboxContain = styled(Grid)(() => ({
   display: 'flex',
   gap: '8px',
}))
const StyledCheckbox = styled(Checkboxes)(() => ({
   justifyContent: 'flex-start',
   padding: '0',
   marginBottom: '30px',
}))
const Text = styled(Typography)(() => ({
   fontFamily: 'Poppins',
   fontStyle: ' normal',
   fontWeight: 400,
   fontSize: '14px',
   lineHeight: '0px',
   color: '#757575',
   marginTop: '13px',
}))
const StyledButton = styled(Button)(() => ({
   height: '52px',
}))
const ButtonContainer = styled(Button)(() => ({
   margin: '34px auto 0',
   border: ' 1px solid #BDBDBD',
   boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.2)',
   borderRadius: '8px',
   padding: '10px 10px',
   color: '#757575',
}))
const GoogleIcon = styled(Google)(() => ({
   margin: '0 8px 0 0',
}))
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

const StyledNavLink = styled(NavLink)(({ disabled }) => ({
   color: disabled ? '#bdbdbd' : '#3A10E5',
   textDecoration: 'none',
   cursor: disabled ? 'default' : 'pointer',
}))
