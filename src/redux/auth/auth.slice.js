import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   user: [],
   email: '',
   password: '',
   isAuthorized: false,
   isLoading: false,
   error: '',
}

export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {},
   extraReducers: {},
})

export const { actions, reducer } = authSlice
