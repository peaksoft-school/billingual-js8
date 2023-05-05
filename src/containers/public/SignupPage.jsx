import { Grid, Typography, styled } from '@mui/material'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ReactComponent as System } from '../../assets/icons/system.svg'
import { ReactComponent as Layer } from '../../assets/icons/layer 2.svg'
import { ReactComponent as Defoult } from '../../assets/icons/defoult.svg'
import Input from '../../components/UI/input/Input'
import Button from '../../components/UI/buttons/Buttons'
import { signUp } from '../../redux/auth/auth.thunk'

const inputArray = [
   {
      name: 'firstName',
      label: 'Frist name',
      type: 'text',
   },
   {
      name: 'lastName',
      label: 'Last name',
      type: 'text',
   },
   {
      name: 'email',
      label: 'email',
      type: 'email',
   },
   {
      name: 'password',
      label: 'Password',
      type: 'password',
   },
]

const SignupPage = () => {
   const dispatch = useDispatch()
   const { error } = useSelector((state) => state.auth)

   const navigate = useNavigate()

   const signUpSchema = Yup.object().shape({
      firstName: Yup.string()
         .min(2, 'Too Short!')
         .max(50, 'Too Long!')
         .required('Firstname is required'),

      lastName: Yup.string()
         .min(2, 'Too Short!')
         .max(50, 'Too Long!')
         .required('Lastname is required'),

      email: Yup.string().email().required('Email is required'),

      password: Yup.string()
         .required('Password is required')
         .min(8, 'Password is too short - should be 8 chars minimum'),
   })

   const submitHandler = (values) => {
      dispatch(signUp(values))
   }

   const { values, handleChange, handleSubmit, errors, touched } = useFormik({
      initialValues: {
         firstName: '',
         lastName: '',
         email: '',
         password: '',
      },
      validationSchema: signUpSchema,
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
         <Card onSubmit={handleSubmit}>
            <Icon1 onClick={gotToLandingPage} />
            <Container>
               <Icon2 />
               <Title> Create an Account</Title>
               {inputArray.map((item) => {
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

               <Error>
                  {CheckEmail} {CheckPassword} {error}
               </Error>
               <StyledButton variant="contained" type="submit">
                  Sign up
               </StyledButton>
               <DefoultIcon />
               <StyledText>
                  ALREADY HAVE AN ACCOUNT?
                  <NavLink to="/sign-in">LOG IN</NavLink>
               </StyledText>
            </Container>
         </Card>
      </Background>
   )
}

export default SignupPage

const Error = styled('p')(() => ({
   color: '#f00',
}))

const Background = styled(Grid)(() => ({
   background: 'linear-gradient(90.76deg, #6B0FA9 0.74%, #520FB6 88.41%)',
   width: '100%',
   padding: '74px 0',
}))

const Card = styled('form')(() => ({
   width: '616px',
   height: '726px',
   background: '#FFFFFF',
   borderRadius: '10px',
   margin: '0 auto',
}))
const Icon1 = styled(System)(() => ({
   marginLeft: '562px',
   marginTop: '20px',
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
