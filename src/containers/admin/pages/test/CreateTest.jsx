import React from 'react'
import { Grid, Typography, styled } from '@mui/material'
import { useFormik } from 'formik'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import FormContainer from '../../../../components/UI/form/FormContainer'
import Input from '../../../../components/UI/input/Input'
import Button from '../../../../components/UI/buttons/Buttons'
import { createTestValidation } from '../../../../utils/constants/general'
import { postTestRequest } from '../../../../api/testService'
import { useSnackbar } from '../../../../hooks/useSnackbar'
import { updateTest } from '../../../../redux/tests/test.thunk'

const CreateTest = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { state } = useLocation()
   const { notify } = useSnackbar()

   const goBackHandler = () => {
      navigate('/admin/test')
   }

   const submitHandler = async (values) => {
      if (state !== null) {
         dispatch(
            updateTest({
               id: state.id,
               title: values.title,
               shortDescription: values.shortDescription,
               isActive: values.isActive,
            })
         )
      } else {
         try {
            await postTestRequest(values)
            notify('success', 'Created test', 'Successfully created')
         } catch (error) {
            return notify('error', 'Test', error.response?.data.message)
         }
      }
      return goBackHandler()
   }

   const { handleChange, handleSubmit, values, errors } = useFormik({
      initialValues: {
         title: state?.title || '',
         shortDescription: state?.shortDescription || '',
         isActive: true,
      },
      validationSchema: createTestValidation,
      onSubmit: (values) => {
         submitHandler(values)
      },
   })

   // const createAndAddTest = async () => {
   //    await submitHandler(values)
   //    // navigate(`/admin/test/${state.id}`)
   // }

   return (
      <FormContainer>
         <CreateTestForm onSubmit={handleSubmit}>
            <Content>
               <Label>Title</Label>
               <Input
                  fullWidth
                  onChange={handleChange}
                  value={values.title}
                  name="title"
               />
               <Error>{errors.title}</Error>
            </Content>
            <Content>
               <Label>Short Description</Label>
               <Input
                  fullWidth
                  onChange={handleChange}
                  value={values.shortDescription}
                  name="shortDescription"
               />
               <Error>{errors.shortDescription}</Error>
            </Content>
            <ButtonContainer>
               <GoBackButton variant="outlined" onClick={goBackHandler}>
                  Go back
               </GoBackButton>
               <SaveButton color="success" variant="contained" type="submit">
                  Save
               </SaveButton>
               {state !== null ? null : (
                  <Button variant="contained">+ Add question</Button>
               )}
            </ButtonContainer>
         </CreateTestForm>
      </FormContainer>
   )
}

export default CreateTest

const Error = styled(Typography)(() => ({
   color: '#f00',
}))

const CreateTestForm = styled('form')(() => ({}))

const Label = styled(Typography)(() => ({
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: '500',
   fontSize: '16px',
   lineHeight: '18px',
   color: '#4B4759',
   marginBottom: 12,
}))

const Content = styled(Grid)(() => ({
   marginBottom: 28,
}))

const ButtonContainer = styled(Grid)(() => ({
   display: 'flex',
   justifyContent: 'flex-end',
   gap: '16px',
}))

const GoBackButton = styled(Button)(() => ({
   '&:hover': {
      background: '#3A10E5',
      color: '#fff',
   },
}))

const SaveButton = styled(Button)(() => ({
   background: '#2AB930',
   '&:hover': {
      background: '#31CF38',
   },
}))
