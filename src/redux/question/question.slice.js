import { createSlice } from '@reduxjs/toolkit'
import { getAllQuestions, postFiles } from './question.thunk'

const initialState = {
   questions: [],
   isLoading: false,
   error: null,
   options: [],
   link: '',
}

const questionSlice = createSlice({
   name: 'questions',
   initialState,
   reducers: {
      addOption: (state, action) => {
         state.options.push(action.payload)
      },
      changeTrueOption: (state, action) => {
         state.options = state.options.map((item) => {
            if (item.id === action.payload) {
               return {
                  ...item,
                  isCorrect: !item.isCorrect,
               }
            }
            return item
         })
      },
      deleteOption: (state, action) => {
         state.options = state.options.filter(
            (item) => item.id !== action.payload
         )
      },
      clearOptions(state) {
         state.options = []
      },
      updateOption: (state, action) => {
         state.options = action.payload
      },
      addLink: (state, action) => {
         state.link = action.payload
      },
   },
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
         state.link = action.payload.link
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

export const questionActions = questionSlice.actions
