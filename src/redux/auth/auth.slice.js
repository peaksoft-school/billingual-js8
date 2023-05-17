import { createSlice } from '@reduxjs/toolkit'
import { signIn, signOut, signUp } from './auth.thunk'
import { STORAGE_KEYS } from '../../utils/constants/common'

const getInitialState = () => {
   const json = localStorage.getItem(STORAGE_KEYS.BILINGUAL_USER_KEY)
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
      isLoading: false,
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
