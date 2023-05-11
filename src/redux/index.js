import { configureStore } from '@reduxjs/toolkit'
import { testSlice } from './tests/test.slice'
import { authSlice } from './auth/auth.slice'
import questionSlice from './question/question.slice'

export const store = configureStore({
   reducer: {
      [authSlice.name]: authSlice.reducer,
      [testSlice.name]: testSlice.reducer,
      [questionSlice.name]: questionSlice.reducer,
   },
})
