import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/header/Header'

const UserLayout = () => {
   return (
      <>
         <Header title="MY" />
         <Outlet />
      </>
   )
}

export default UserLayout
