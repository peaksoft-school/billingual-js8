import { Grid, Typography, styled } from '@mui/material'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ReactComponent as System } from '../../assets/icons/system.svg'
import { ReactComponent as Layer } from '../../assets/icons/layer 2.svg'
import { ReactComponent as Defoult } from '../../assets/icons/defoult.svg'
import Input from '../../components/UI/input/Input'
import Checkboxes from '../../components/UI/checkbox/Checkbox'
import Button from '../../components/UI/buttons/Buttons'
import { signIn } from '../../redux/reducer/auth/auth.thunk'

const SigninPage = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { role, error } = useSelector((state) => state.auth)

   const signInSchema = Yup.object().shape({
      email: Yup.string().email().required('Email is required'),

      password: Yup.string()
         .required('Password is required')
         .min(8, 'Password is too short - should be 8 chars minimum'),
   })

   const submitHandler = (values) => {
      dispatch(signIn(values))
         .unwrap()
         .then(() => navigate(role === 'ADMIN' ? '/admin/test' : '/'))
   }

   const { values, handleChange, handleSubmit, errors } = useFormik({
      initialValues: {
         email: '',
         password: '',
      },
      validationSchema: signInSchema,
      onSubmit: (values) => {
         submitHandler(values)
      },
   })

   const gotToLandingPage = () => {
      navigate('/')
   }

   return (
      <Background>
         <Card onSubmit={handleSubmit}>
            <Icon1 onClick={gotToLandingPage} />
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
                  error={!!errors.password}
                  value={values.password}
                  onChange={handleChange}
                  type="password"
               />
               <CheckboxContain>
                  <StyledCheckbox />
                  <Text>To remember me</Text>
               </CheckboxContain>
               <Error>{errors.email}</Error>
               <Error>{errors.password}</Error>
               <Error>{error}</Error>
               <StyledButton variant="contained" type="submit">
                  Sign in
               </StyledButton>
               <DefoultIcon />
               <StyledText>
                  DON`T HAVE AN ACCOUNT?
                  <NavLink to="/sign-up">REGISTER</NavLink>
               </StyledText>
            </Container>
         </Card>
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
   height: '100vh',
   position: 'absolute',
   width: '100vw',
}))

const Card = styled('form')(() => ({
   width: '616px',
   height: '620px',
   background: '#FFFFFF',
   borderRadius: '10px',
   margin: '0 auto',
   marginTop: '74px',
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
const DefoultIcon = styled(Defoult)(() => ({
   margin: '0 auto',
   marginTop: '34px',
}))
const StyledText = styled(Typography)(() => ({
   textAlign: 'center',
   marginTop: '24px',
}))
