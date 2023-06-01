import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = ({ roles, fallbackPath, isAuthorized, role }) => {
   return isAuthorized && roles?.includes(role) ? (
      <Outlet />
   ) : (
      <Navigate to={fallbackPath} replace />
   )
}

export default ProtectedRoute
