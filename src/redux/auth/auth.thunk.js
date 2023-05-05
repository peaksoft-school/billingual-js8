import { createAsyncThunk } from '@reduxjs/toolkit'
import { STORAGE_KEYS } from '../../utils/constants/common'
import authService from '../../api/authService'

export const signUp = createAsyncThunk(
   'auth/signUp',
   async (userData, { rejectWithValue }) => {
      try {
         const { data } = await authService.signUp(userData)
         localStorage.setItem(STORAGE_KEYS.AUTH, JSON.stringify(data))
         return data
      } catch (error) {
         return rejectWithValue(error.response?.data.message)
      }
   }
)

export const signIn = createAsyncThunk(
   'auth/signIn',
   async (userData, { rejectWithValue }) => {
      try {
         const { data } = await authService.signIn(userData)
         localStorage.setItem(STORAGE_KEYS.AUTH, JSON.stringify(data))
         return data
      } catch (error) {
         return rejectWithValue(error.response?.data.message)
      }
   }
)

export const signOut = createAsyncThunk('auth/signout', async () => {
   return localStorage.removeItem(STORAGE_KEYS.AUTH)
})
