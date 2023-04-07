import React from 'react'
import { Button, styled } from '@mui/material'
import { ReactComponent as Logo } from '../../assets/icons/Logo.svg'

const AdminHeader = () => {
   return (
      <Header>
         <Logo />
         <Container>
            <TestBtn>TESTS</TestBtn>
            <SubmitBtn>SUBMITTED RESULTS</SubmitBtn>
            <LogOut>LOG OUT</LogOut>
         </Container>
      </Header>
   )
}

export default AdminHeader

const Header = styled('header')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   padding: '26px 120px',
   alignItems: 'center',
   background: '#ffffff',
}))

const LogOut = styled(Button)(() => ({
   border: '2px solid #4C4859',
   boxShadow:
      '0px 1px 2px rgba(76, 72, 89, 0.2), 0px 1px 2px rgba(76, 72, 89, 0.2)',
   borderRadius: '8px',
   background: 'none',
   fontSize: '14px',
   lineHeight: '16px',
   color: '#4C4C4C',
   padding: '13px 24px',
   fontWeight: 700,
   gap: '8px',
   marginLeft: '60px',
   ':hover': {
      background: '#3A10E5',
      color: '#fff',
      border: '2px solid #3A10E5',
   },
}))
const Container = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
}))

const TestBtn = styled(Button)(() => ({
   fontSize: '15px',
   lineHeight: '18px',
   textTransform: 'uppercase',
   color: '#3A10E5',
   fontWeight: 700,
   cursor: 'pointer',
   textDecoration: 'none',
}))

const SubmitBtn = styled(Button)(() => ({
   fontSize: '15px',
   fontWeight: 700,
   lineHeight: '18px',
   textTransform: 'uppercase',
   color: '#4C4859',
   marginLeft: '60px',
   cursor: 'pointer',
   textDecoration: 'none',
}))
