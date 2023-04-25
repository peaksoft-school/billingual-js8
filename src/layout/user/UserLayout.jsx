import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/header/Header'

const UserLayout = () => {
   return (
      <>
         <Header title="MY" />
         <main>
            <Outlet />
         </main>
      </>
   )
}

export default UserLayout
