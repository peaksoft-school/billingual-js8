import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import AdminLayout from './admin/AdminLayout'

const MainRoutes = () => {
   const roles = {
      admin: 'Admin',
      user: 'User',
   }

   return (
      <div>
         <Routes>
            {/* Guest */}
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />

            {/* User */}
            <Route element={<ProtectedRoute isAllowed={[roles.user]} />}>
               <Route path="/about" element={<About />} />
               <Route path="/contact" element={<Contact />} />
            </Route>

            {/* Admin */}
            <Route element={<ProtectedRoute isAllowed={[roles.admin]} />}>
               <Route path="/admin/" element={<AdminLayout />}>
                  <Route path="" />
               </Route>
            </Route>
         </Routes>
      </div>
   )
}

export default MainRoutes
