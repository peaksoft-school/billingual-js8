import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import LandingPage from '../components/landing-page/LandingPage'
import AdminTest from '../containers/admin/pages/AdminTest'
import AdminRoute from './admin/AdminRoute'
import UserRoute from './user/UserRoute'
import GetAllTests from '../layout/user/GetAllTests'
import CurrentTest from '../layout/user/CurrentTest'

const MainRoutes = () => {
   return (
      <div>
         <Routes>
            {/* Guest */}
            <Route path="/" element={<LandingPage />} />

            {/* User */}
            <Route element={<ProtectedRoute />}>
               <Route path="/user/" element={<UserRoute />}>
                  <Route path="all-tests" element={<GetAllTests />} />
                  <Route
                     path="all-tests/:current-tests"
                     element={<CurrentTest />}
                  />
               </Route>
            </Route>

            {/* Admin */}
            <Route element={<ProtectedRoute />}>
               <Route path="/admin/" element={<AdminRoute />}>
                  <Route path="test" element={<AdminTest />} />
               </Route>
            </Route>
         </Routes>
      </div>
   )
}

export default MainRoutes
