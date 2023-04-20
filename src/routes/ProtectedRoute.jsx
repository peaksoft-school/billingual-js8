import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const ProtectedRoute = ({ isAllowed }) => {
   const isAuth = useAuth()

   // проверяет есть-ли такая роль или нет
   return isAuth.roles?.find((r) => isAllowed?.includes(r.role)) ? (
      <Outlet />
   ) : (
      <Navigate to="/login" />
   )
}

export default ProtectedRoute
