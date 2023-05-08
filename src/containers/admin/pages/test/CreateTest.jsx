import React from 'react'
import { Grid, Typography, styled } from '@mui/material'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import FormContainer from '../../../../components/UI/form/FormContainer'
import Input from '../../../../components/UI/input/Input'
import Button from '../../../../components/UI/buttons/Buttons'
import { createTestValidation } from '../../../../utils/constants/general'
import { postTest, updateTest } from '../../../../redux/tests/test.thunk'

const CreateTest = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { state } = useLocation()

   const goBackHandler = () => {
      navigate('/admin/test')
   }

   const submitHandler = (values) => {
      if (state) {
         dispatch(
            updateTest({
               id: state.id,
               title: values.title,
               shortDescription: values.shortDescription,
            })
         )
            .unwrap()
            .then(() => goBackHandler())
      } else {
         dispatch(postTest(values))
            .unwrap()
            .then(() => goBackHandler())
      }
   }

   const { handleChange, handleSubmit, values, errors } = useFormik({
      initialValues: {
         title: state?.title,
         shortDescription: state?.shortDescription,
      },
      validationSchema: createTestValidation,
      onSubmit: (values) => {
         submitHandler(values)
      },
   })

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
               <Button color="success" variant="contained" type="submit">
                  Save
               </Button>
               {state ? null : (
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
      background: '',
   },
}))
