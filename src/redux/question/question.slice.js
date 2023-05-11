import { createSlice } from '@reduxjs/toolkit'
import { getAllQuestions } from './question.thunk'

const initialState = {
   questions: [],
   isLoading: false,
   error: null,
}

const questionSlice = createSlice({
   name: 'questions',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getAllQuestions.fulfilled, (state, action) => {
         state.questions = action.payload
         state.isLoading = false
         state.error = null
      })
      builder.addCase(getAllQuestions.rejected, (state, action) => {
         state.isLoading = false
         state.error = action.payload
      })
      builder.addCase(getAllQuestions.pending, (state) => {
         state.isLoading = true
         state.error = null
      })
   },
})

export default questionSlice
