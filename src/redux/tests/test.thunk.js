import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import {
   getAllTests,
   deleteTestRequest,
   updateTestRequest,
} from '../../api/testService'

export const getTests = createAsyncThunk(
   'tests/getTests',
   async (notify, { rejectWithValue }) => {
      try {
         const { data } = await getAllTests()
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
   async ({ id, notify, setOpenModal }, { rejectWithValue, dispatch }) => {
      try {
         await deleteTestRequest(id)
         notify('success', 'Test', 'Successfully deleted')
         setOpenModal(false)
         return dispatch(getTests(notify))
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
         return dispatch(getTests(notify))
      } catch (error) {
         if (AxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
         }
         notify('error', 'Test', 'Failed to update test')
         return rejectWithValue('Something went wrong')
      }
   }
)
