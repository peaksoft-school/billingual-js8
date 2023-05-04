import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './reducer/auth/auth.slice'

export const store = configureStore({
   reducer: {
      [authSlice.name]: authSlice.reducer,
   },
})
