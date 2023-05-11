import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import {
   deleteQuestionRequest,
   getAllQuestionsRequest,
} from '../../api/questionService'

export const getAllQuestions = createAsyncThunk(
   'questions/get',
   async (_, { rejectWithValue }) => {
      try {
         const { data } = getAllQuestionsRequest()
         return data
      } catch (error) {
         if (AxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
         }
         return rejectWithValue('Something went wrong')
      }
   }
)

export const deleteQuestion = createAsyncThunk(
   'question/delete',
   async (id, { rejectWithValue, dispatch }) => {
      try {
         await deleteQuestionRequest(id)
         return dispatch(getAllQuestions())
      } catch (error) {
         if (AxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
         }
         return rejectWithValue('Something went wrong')
      }
   }
)
