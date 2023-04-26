import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { authSlice } from './auth/auth.slice'

const rootReducer = combineReducers({
   [authSlice.name]: authSlice.reducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
