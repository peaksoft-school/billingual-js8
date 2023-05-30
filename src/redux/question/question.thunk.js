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
   async ({ file }, { rejectWithValue }) => {
      try {
         const formData = new FormData()
         formData.append('multipartFile', file)
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
   async (
      { describeImgData, notify, imgFile },
      { rejectWithValue, dispatch }
   ) => {
      try {
         const imageLink = await dispatch(postFiles({ file: imgFile })).unwrap()
         if (!imageLink || !imageLink?.link) {
            return rejectWithValue('Something went wrong')
         }
         const { data } = await describeImageReq({
            ...describeImgData,
            file: imageLink.link,
         })
         return data
      } catch (error) {
         if (AxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
         }
         notify('error', 'Describe image', 'Failed to post')
         return rejectWithValue('Something went wrong')
      }
   }
)
