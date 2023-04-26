import { configureStore } from '@reduxjs/toolkit'
import { authSlice, reducer } from './auth/auth.slice'

export const store = configureStore({
   reducer: {
      [authSlice.name]: reducer,
   },
})
