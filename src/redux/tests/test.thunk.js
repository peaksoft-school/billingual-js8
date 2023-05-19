import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import {
   describeImageReq,
   getAllTests,
   postFilesReq,
} from '../../api/testService'

export const getTests = createAsyncThunk(
   'tests/getTests',
   async (_, { rejectWithValue }) => {
      try {
         const { data } = await getAllTests()

         return data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const postFiles = createAsyncThunk(
   'tests/postFiles',
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
   'tests/postDescribeImage',
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
