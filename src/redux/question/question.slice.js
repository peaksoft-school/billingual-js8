import { createSlice } from '@reduxjs/toolkit'
import { getAllQuestions, postFiles } from './question.thunk'

const initialState = {
   questions: [],
   isLoading: false,
   error: null,
   imageLink: '',
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
      builder.addCase(postFiles.fulfilled, (state, action) => {
         state.imageLink = action.payload.link
      })
   },
})

export default questionSlice
