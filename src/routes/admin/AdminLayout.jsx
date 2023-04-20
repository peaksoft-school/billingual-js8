import React from 'react'
import { styled } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Header from '../../components/header/Header'

const AdminLayout = () => {
   return (
      <Admin>
         <Header title="submitted results" />
         <Outlet />
      </Admin>
   )
}

export default AdminLayout

const Admin = styled('div')(() => ({
   background: '#D7E1F8',
   height: '100vh',
}))
