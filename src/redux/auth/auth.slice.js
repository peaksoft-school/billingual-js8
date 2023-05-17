import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   isAuthorized: false,
   token: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbGliZWtAZ21haWwuY29tIiwiaWF0IjoxNjg0MTU3MjUwLCJleHAiOjE2ODQxNTg2OTB9.zovwQvzh-J7LYvEKJdijUAGBAwbcAyeucrR6MB2mf0U',
   email: '',
   role: 'ADMIN',
   error: '',
}

export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {},
   extraReducers: () => {},
})

export const { actions, reducer } = authSlice
