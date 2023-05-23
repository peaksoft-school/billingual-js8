import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import {
   deleteQuestionRequest,
   getAllQuestionsRequest,
   postAudioFileRequest,
   typeWhatYourHearRequest,
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

export const postFiles = createAsyncThunk(
   'question/postFiles',
   async ({ file }, { rejectWithValue }) => {
      try {
         const formData = new FormData()
         formData.append('multipartFile', file)
         const { data } = await postAudioFileRequest(formData)
         return data
      } catch (error) {
         if (AxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
         }
         return rejectWithValue('Error')
      }
   }
)

export const typeWhatHearThunk = createAsyncThunk(
   'question/postTypeWhatHear',
   async (
      { requestData, notify, audioFile },
      { rejectWithValue, dispatch }
   ) => {
      try {
         const audioLink = await dispatch(
            postFiles({ file: audioFile })
         ).unwrap()
         if (!audioLink || !audioLink?.link) {
            return rejectWithValue('Something went wrong')
         }
         const { data } = await typeWhatYourHearRequest({
            ...requestData,
            fileRequest: audioLink.link,
         })
         return data
      } catch (error) {
         if (AxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
         }
         notify('error', 'Type what hear', 'Failed to post')
         return rejectWithValue('Something went wrong')
      }
   }
)
