import { createSlice } from '@reduxjs/toolkit'

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
         .addMatcher(
            (action) => action.type.endsWith('/pending'),
            (state) => {
               state.isLoading = true
               state.error = ''
            }
         )
         .addMatcher(
            (action) => action.type.endsWith('/fulfilled'),
            (state, action) => {
               if (action.type.includes('/getTests/')) {
                  state.tests = action.payload
               } else if (action.type.includes('/postTest/')) {
                  state.error = ''
               }
               state.isLoading = false
            }
         )
         .addMatcher(
            (action) => action.type.endsWith('/rejected'),
            (state, action) => {
               state.error = action.payload
               state.isLoading = false
            }
         )
   },
})

export const { actions, reducer } = testSlice
