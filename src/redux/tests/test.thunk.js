import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import {
   deleteTestRequest,
   getAllTests,
   updateTestRequest,
} from '../../api/testService'

export const getTests = createAsyncThunk(
   'tests/getTests',
   async (_, { rejectWithValue }) => {
      try {
         const { data } = await getAllTests()
         return data
      } catch (error) {
         if (AxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
         }
         return rejectWithValue('Something went wrong')
      }
   }
)

export const deleteTest = createAsyncThunk(
   'test/deleteTest',
   async (id, { rejectWithValue, dispatch }) => {
      try {
         await deleteTestRequest(id)
         return dispatch(getTests())
      } catch (error) {
         if (AxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
         }
         return rejectWithValue('Something went wrong')
      }
   }
)

export const updateTest = createAsyncThunk(
   'test/updateTest',
   async (
      { id, title, shortDescription, isActive },
      { rejectWithValue, dispatch }
   ) => {
      try {
         await updateTestRequest({ id, title, shortDescription, isActive })
         return dispatch(getTests())
      } catch (error) {
         if (AxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
         }
         return rejectWithValue('Something went wrong')
      }
   }
)
