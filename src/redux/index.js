import { configureStore } from '@reduxjs/toolkit'
import { authSlice, reducer } from './auth/auth.slice'
import { testSlice } from './tests/test.slice'

export const store = configureStore({
   reducer: {
      [authSlice.name]: reducer,
      [testSlice.name]: testSlice.reducer,
   },
})
