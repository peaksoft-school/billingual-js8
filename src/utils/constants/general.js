import * as Yup from 'yup'

export const signUpInputArray = [
   {
      name: 'firstName',
      label: 'First name',
      type: 'text',
   },
   {
      name: 'lastName',
      label: 'Last name',
      type: 'text',
   },
   {
      name: 'email',
      label: 'Email',
      type: 'email',
   },
   {
      name: 'password',
      label: 'Password',
      type: 'password',
   },
   {
      name: 'confirmPassword',
      label: 'Confirm Password',
      type: 'password',
   },
]

export const signUpValidation = Yup.object().shape({
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
   confirmPassword: Yup.string()
      .required('Password is required')
      .oneOf([Yup.ref('password')], 'Your password do not match'),
   // .test('password match', 'Password must match', (value) => {
   //    return this.password === value
   // }),
})

export const signInValidation = Yup.object().shape({
   email: Yup.string().email().required('Email is required'),

   password: Yup.string()
      .required('Password is required')
      .min(8, 'Password is too short - should be 8 chars minimum'),
})

export const createTestValidation = Yup.object().shape({
   title: Yup.string()
      .min(5, 'the length should be from 5 to 70')
      .max(70, 'the length should be from 5 to 70')
      .required('Required field')
      .trim(),
   shortDescription: Yup.string()
      .min(5, 'the length should be from 5 to 70')
      .max(70, 'the length should be from 5 to 70')
      .required('Required field')
      .trim(),
   isActive: Yup.boolean(),
})
