import { Grid, Typography, styled } from '@mui/material'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { NavLink } from 'react-router-dom'
import { ReactComponent as System } from '../../assets/icons/system.svg'
import { ReactComponent as Layer } from '../../assets/icons/layer 2.svg'
import { ReactComponent as Defoult } from '../../assets/icons/defoult.svg'
import Input from '../../components/UI/input/Input'
import Checkboxes from '../../components/UI/checkbox/Checkbox'
import Button from '../../components/UI/buttons/Buttons'

const SigninPage = () => {
   // eslint-disable-next-line no-unused-vars
   const signInSchema = Yup.object().shape({
      email: Yup.string().email().required('Email is required'),

      password: Yup.string()
         .required('Password is required')
         .min(6, 'Password is too short - should be 6 chars minimum'),
   })

   const { values, handleChange, handleSubmit, errors } = useFormik({
      initialValues: {
         email: '',
         password: '',
      },
      validationSchema: signInSchema,
      onSubmit: (values) => {
         console.log(values, 'VALUES')
      },
   })
   return (
      <Background>
         <Card onSubmit={handleSubmit}>
            <Icon1 />
            <Container>
               <Icon2 />
               <Title> Sign in</Title>
               <StyledInput
                  label="Email"
                  name="email"
                  error={errors.email}
                  value={values.email}
                  onChange={handleChange}
               />
               <StyledInput
                  label="Password"
                  name="password"
                  error={errors.password}
                  value={values.password}
                  onChange={handleChange}
               />
               <CheckboxContain>
                  <StyledCheckbox />
                  <Text>To remember me</Text>
               </CheckboxContain>
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
