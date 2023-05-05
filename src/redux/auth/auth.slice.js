import { createSlice } from '@reduxjs/toolkit'
import { signIn, signUp } from './auth.thunk'
import { STORAGE_KEYS } from '../../utils/constants/common'

const getInitialState = () => {
   const json = localStorage.getItem(STORAGE_KEYS.AUTH)
   if (json) {
      const userData = JSON.parse(json)
      return {
         isAuthorized: true,
         token: userData.token,
         email: userData.email,
         role: userData.role,
      }
   }

   return {
      isAuthorized: false,
      token: '',
      email: '',
      role: 'GUEST',
      error: '',
   }
}

export const authSlice = createSlice({
   name: 'auth',
   initialState: getInitialState(),
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(signIn.fulfilled, (state, { payload }) => {
         state.isAuthorized = true
         state.token = payload.token
         state.email = payload.email
         state.role = payload.role
      })
      builder.addCase(signUp.fulfilled, (state, { payload }) => {
         state.isAuthorized = true
         state.token = payload.token
         state.email = payload.email
         state.role = payload.role
      })
      builder.addCase(signIn.rejected, (state, { payload }) => {
         state.error = payload
      })
      builder.addCase(signUp.rejected, (state, { payload }) => {
         state.error = payload
      })
   },
})
