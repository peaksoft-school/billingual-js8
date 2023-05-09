import React from 'react'
import { styled } from '@mui/material'
import AdminLayout from '../../layout/admin/AdminLayout'
import AdminCreateTest from '../../containers/admin/pages/adminCreateTestRealEnglishWords/AdminCreateTest'

const AdminRoute = () => {
   return (
      <Admin>
         <AdminLayout />
         <AdminCreateTest />
      </Admin>
   )
}

export default AdminRoute

const Admin = styled('div')(() => ({
   background: '#D7E1F8',
   height: '100vh',
}))
