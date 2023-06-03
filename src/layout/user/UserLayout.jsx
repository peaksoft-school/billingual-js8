import { styled } from '@mui/material'
import React from 'react'
import { Outlet, useLocation, useParams } from 'react-router-dom'
import Header from '../../components/header/Header'

const UserLayout = () => {
   const { pathname } = useLocation()
   const { testId } = useParams()

   return (
      <>
         {pathname === `/user/tests/${testId}/practice` ? null : (
            <Header title="MY" endpoint="/user/tests" />
         )}
         <BackgroundContainer>
            <Outlet />
         </BackgroundContainer>
      </>
   )
}

export default UserLayout
const BackgroundContainer = styled('main')(() => ({
   backgroundColor: '#D7E1F8',
   height: '100vh',
}))
