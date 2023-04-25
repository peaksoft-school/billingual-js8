import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const ProtectedRoute = () => {
   const { roles, user } = useAuth()

   const isAllowed = ['awdwadwad']

   return user.loggedIn && roles?.find((r) => isAllowed?.includes(r.role)) ? (
      <Outlet />
   ) : (
      <Navigate to="/login" replace />
   )
}

export default ProtectedRoute
