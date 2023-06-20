import { Grid, Typography, styled } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ReactComponent as Icon } from '../../assets/icons/group32.svg'
import { ReactComponent as Logo } from '../../assets/icons/layeruser 2.svg'
import Button from '../../components/UI/buttons/Buttons'
import FormContainer from '../../components/UI/form/FormContainer'
import { submitTestRequest } from '../../api/testService'
import { useSnackbar } from '../../hooks/useSnackbar'
import { userQuestionActions } from '../../redux/user/user.slice'

const CompleteTest = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { state } = useLocation()
   const { testId, answers } = useSelector((state) => state.user)
   const { notify } = useSnackbar()

   const postSubmitTest = async () => {
      try {
         await submitTestRequest({ testId, answers })
         navigate('/user/tests')
         notify('success', 'Test', 'Complete test')
         dispatch(userQuestionActions.clearTest())
      } catch (error) {
         notify('error', 'Test', error.response.data.message)
      }
   }

   const tryAgainTest = () => {
      dispatch(userQuestionActions.clearTest())
      navigate(`/user/tests/${state}`)
   }

   return (
      <FormContainer>
         <Container>
            <Title>Test is complete!</Title>
            <Icon />
         </Container>
         <StyledIcon />
         <Text>
            Your results were sent for evaluation proccess. <br />
            After evaluation your results will be sent to your email.
         </Text>
         <Buttons>
            <ButtonTryAgain onClick={tryAgainTest}>TRY AGAIN</ButtonTryAgain>
            <ButtonDone variant="contained" onClick={postSubmitTest}>
               done
            </ButtonDone>
         </Buttons>
      </FormContainer>
   )
}
export default CompleteTest

const Container = styled(Grid)(() => ({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   gap: '19px',
}))

const Title = styled(Typography)(() => ({
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '28px',
   lineHeight: '32px',
   textTransform: 'capitalize',
   color: '#4C4859',
}))
const StyledIcon = styled(Logo)(() => ({
   marginTop: '52px',
   marginBottom: '26px',
   marginLeft: '46.11%',
   maarginRight: '46%',
}))
const Text = styled(Typography)(() => ({
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '18px',
   lineHeight: '130%',
   textAlign: 'center',
   color: '#4C4859',
   paddingBottom: '60px',
   borderBottom: '1.53px solid #D4D0D0',
}))
const Buttons = styled(Grid)(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   marginTop: '32px',
}))
const ButtonDone = styled(Button)(() => ({
   width: '148px',
   height: '42px',
   borderRadius: '8px',
}))

const ButtonTryAgain = styled(Button)(() => ({
   width: '118px',
   height: '42px',
   border: '2px solid #3A10E5',
   borderRadius: '8px',
}))
