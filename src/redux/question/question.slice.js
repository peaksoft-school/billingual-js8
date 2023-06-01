import { createSlice } from '@reduxjs/toolkit'
import { getAllQuestions } from './question.thunk'

const initialState = {
   questions: [],
   isLoading: false,
   error: null,
   options: [],
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
   },
   extraReducers: (builder) => {
      builder
         .addCase(getAllQuestions.fulfilled, (state, action) => {
            state.questions = action.payload
            state.isLoading = false
            state.error = null
         })
         .addCase(getAllQuestions.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
         })
         .addCase(getAllQuestions.pending, (state) => {
            state.isLoading = true
            state.error = null
         })
   },
})

export default questionSlice

export const questionActions = questionSlice.actions
