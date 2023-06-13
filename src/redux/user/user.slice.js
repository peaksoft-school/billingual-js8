import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   testId: null,
   answers: [],
   words: [],
}

export const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      addAnswer: (state, action) => {
         state.answers.push(action.payload)
      },
      addTestId: (state, action) => {
         state.testId = action.payload
      },
      setWords: (state, action) => {
         state.words.push(action.payload)
      },
      deleteWord: (state, action) => {
         state.words = state.words.filter((item) => item.id !== action.payload)
      },
      clearWords: (state) => {
         state.words = []
      },
   },
})

export const userQuestionActions = userSlice.actions
