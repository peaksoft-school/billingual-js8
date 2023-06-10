import { createSlice } from '@reduxjs/toolkit'
import { signIn, signOut, signUp } from './auth.thunk'

const initialState = {
   isAuthorized: false,
   token: '',
   email: '',
   role: 'GUEST',
   error: '',
   isLoading: false,
}

export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      login(state, { payload }) {
         state.token = payload.token
         state.role = payload.role
         state.email = payload.email
         state.isAuthorized = true
      },
   },
   extraReducers: (builder) => {
      builder.addCase(signIn.fulfilled, (state, { payload }) => {
         state.isAuthorized = true
         state.token = payload.token
         state.email = payload.email
         state.role = payload.role
         state.isLoading = false
         state.error = ''
      })
      builder.addCase(signUp.fulfilled, (state, { payload }) => {
         state.isAuthorized = true
         state.token = payload.token
         state.email = payload.email
         state.role = payload.role
         state.isLoading = false
         state.error = ''
      })
      builder.addCase(signOut.fulfilled, (state) => {
         state.isAuthorized = false
         state.token = ''
         state.email = ''
         state.role = ''
         state.isLoading = false
         state.error = ''
      })
      builder.addCase(signIn.pending, (state) => {
         state.isLoading = true
         state.error = ''
      })
      builder.addCase(signUp.pending, (state) => {
         state.isLoading = true
         state.error = ''
      })
      builder.addCase(signIn.rejected, (state, { payload }) => {
         state.error = payload
         state.isLoading = false
      })
      builder.addCase(signUp.rejected, (state, { payload }) => {
         state.error = payload
         state.isLoading = false
      })
   },
})

export const authActions = authSlice.actions
