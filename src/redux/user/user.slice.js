import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   testId: null,
   answers: [],
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
   },
})

export const userQuestionActions = userSlice.actions
