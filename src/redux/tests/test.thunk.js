import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import {
   deleteTestRequest,
   getAllTests,
   postTestRequest,
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

export const postTest = createAsyncThunk(
   'test/postTest',
   async (test, { rejectWithValue, dispatch }) => {
      try {
         await postTestRequest(test)
         return dispatch(getTests())
      } catch (error) {
         return rejectWithValue(error)
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
         return rejectWithValue(error)
      }
   }
)

export const updateTest = createAsyncThunk(
   'test/updateTest',
   async ({ id, title, shortDescription }, { rejectWithValue, dispatch }) => {
      try {
         await updateTestRequest({ id, title, shortDescription })
         return dispatch(getTests())
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
