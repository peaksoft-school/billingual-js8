import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const useAuth = () => {
   const user = { loggedIn: true }
   const roles = [
      {
         name: 'Admin',
         role: 'Admin',
      },
      {
         name: 'User',
         role: 'User',
      },
   ]
   return { user, roles }
}
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
