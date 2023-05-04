import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoute = ({ roles }) => {
   const { role, isAuthorized } = useSelector((state) => state.auth)

   return isAuthorized && roles?.includes(role) ? (
      <Outlet />
   ) : (
      <Navigate to="/sign-in" replace />
   )
}

export default ProtectedRoute
