import React from 'react'
import { styled } from '@mui/material'
import AdminLayout from '../../layout/admin/AdminLayout'

const AdminRoute = () => {
   return (
      <Admin>
         <AdminLayout />
      </Admin>
   )
}

export default AdminRoute

const Admin = styled('div')(() => ({
   background: '#D7E1F8',
   height: '100vh',
}))
