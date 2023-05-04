import { createAsyncThunk } from '@reduxjs/toolkit'
import { getAllTests, getTestById } from '../../api/testService'

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

export const getCurrentTest = createAsyncThunk(
   'tests/getCurrentTest',
   async (id, { rejectedWithValue }) => {
      try {
         const { data } = await getTestById(id)
         return data
      } catch (error) {
         const message =
            error.response?.data?.message || 'Failed to fetch test.'
         return rejectedWithValue(message)
      }
   }
)
