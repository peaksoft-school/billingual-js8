import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import {
   deleteQuestionRequest,
   getAllQuestionsRequest,
} from '../../api/questionService'
import { describeImageReq, postFilesReq } from '../../api/testService'

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

export const postFiles = createAsyncThunk(
   'questions/postFiles',
   async (payload, { rejectWithValue }) => {
      try {
         const formData = new FormData()
         formData.append('multipartFile', payload)
         const { data } = await postFilesReq(formData)

         return data
      } catch (error) {
         if (AxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
         }
         return rejectWithValue('Error')
      }
   }
)
export const postDescribeImage = createAsyncThunk(
   'questions/postDescribeImage',
   async (payload, { rejectWithValue }) => {
      try {
         const { data } = await describeImageReq(payload)
         return data
      } catch (error) {
         if (AxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
         }
         return rejectWithValue('Error')
      }
   }
)
