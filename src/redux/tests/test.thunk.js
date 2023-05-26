import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import {
   deleteTestRequest,
   getAllTests,
   updateTestRequest,
} from '../../api/testService'

export const getTests = createAsyncThunk(
   'tests/getTests',
   async (notify, { rejectWithValue }) => {
      try {
         const { data } = await getAllTests()
         notify('success', 'Test', 'The tests were successfully received')
         return data
      } catch (error) {
         if (AxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
         }
         notify('error', 'Test', 'Failed to get tests')
         return rejectWithValue('Something went wrong')
      }
   }
)

export const deleteTest = createAsyncThunk(
   'test/deleteTest',
   async ({ id, notify }, { rejectWithValue, dispatch }) => {
      try {
         await deleteTestRequest(id)
         notify('success', 'Update test', 'Successfully deleted')
         return dispatch(getTests())
      } catch (error) {
         if (AxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
         }
         notify('error', 'Test', 'Failed to delete test')
         return rejectWithValue('Something went wrong')
      }
   }
)

export const updateTest = createAsyncThunk(
   'test/updateTest',
   async (
      { id, title, shortDescription, isActive, notify },
      { rejectWithValue, dispatch }
   ) => {
      try {
         await updateTestRequest({ id, title, shortDescription, isActive })
         notify('success', 'Update test', 'Successfully updated')
         return dispatch(getTests())
      } catch (error) {
         if (AxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
         }
         notify('error', 'Test', 'Failed to update test')
         return rejectWithValue('Something went wrong')
      }
   }
)
