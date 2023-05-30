import { createSlice } from '@reduxjs/toolkit'
import { getAllQuestions, postFiles } from './question.thunk'

const initialState = {
   questions: [],
   isLoading: false,
   error: null,
   link: '',
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
         state.audioLink = action.payload.link
         state.isLoading = false
         state.error = null
      })
      builder.addCase(postFiles.pending, (state) => {
         state.isLoading = true
         state.error = null
      })
      builder.addCase(postFiles.rejected, (state, action) => {
         state.isLoading = false
         state.error = action.payload
      })
   },
})

export default questionSlice
