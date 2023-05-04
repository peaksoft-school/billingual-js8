import { createSlice } from '@reduxjs/toolkit'
import { getTests } from './test.thunk'

const initialState = {
   tests: [],
   isLoading: true,
   error: '',
}

export const testSlice = createSlice({
   name: 'tests',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getTests.pending, (state) => {
            state.isLoading = true
         })
         .addCase(getTests.fulfilled, (state, action) => {
            state.tests = action.payload
            state.isLoading = false
         })
         .addCase(getTests.rejected, (state, action) => {
            state.error = action.payload.response?.data.message
            state.isLoading = false
         })
   },
})

export const { actions, reducer } = testSlice
