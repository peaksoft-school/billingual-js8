import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import LandingPage from '../components/landing-page/LandingPage'
import AdminTest from '../containers/admin/pages/AdminTest'
import AdminRoute from './admin/AdminRoute'

const MainRoutes = () => {
   const roles = {
      user: 'User',
      admin: 'Admin',
   }

   return (
      <div>
         <Routes>
            {/* Guest */}
            <Route path="/" element={<LandingPage />} />

            {/* User */}
            <Route element={<ProtectedRoute isAllowed={[roles.user]} />}>
               {/* пока что пусто */}
            </Route>

            {/* Admin */}
            <Route element={<ProtectedRoute isAllowed={[roles.admin]} />}>
               <Route path="/admin/" element={<AdminRoute />}>
                  <Route path="test" element={<AdminTest />} />
               </Route>
            </Route>
         </Routes>
      </div>
   )
}

export default MainRoutes
