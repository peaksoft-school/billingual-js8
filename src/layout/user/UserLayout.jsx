import { styled } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/header/Header'

const UserLayout = () => {
   return (
      <>
         <Header title="MY" endpoint="/user/all-tests" />
         <BackgroundContainer>
            <Outlet />
         </BackgroundContainer>
      </>
   )
}

export default UserLayout
const BackgroundContainer = styled('main')(() => ({
   backgroundColor: '#D7E1F8',
}))
