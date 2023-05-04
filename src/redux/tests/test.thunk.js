import { createAsyncThunk } from '@reduxjs/toolkit'
import { getAllTests } from '../../api/testService'

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
