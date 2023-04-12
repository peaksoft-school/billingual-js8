import React from 'react'
import { IconButton } from '@mui/material'

const MyIconButton = ({ children, ...rest }) => {
   return <IconButton {...rest}>{children}</IconButton>
}

export default MyIconButton
