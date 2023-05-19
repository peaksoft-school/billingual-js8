import { createSlice } from '@reduxjs/toolkit'
import { getTests, postFiles } from './test.thunk'

const initialState = {
   tests: [],
   isLoading: true,
   error: '',
   imageLink: '',
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
            state.error = action.payload
            state.isLoading = false
         })
         .addCase(postFiles.fulfilled, (state, action) => {
            state.imageLink = action.payload.link
         })
   },
})

export const { actions, reducer } = testSlice
