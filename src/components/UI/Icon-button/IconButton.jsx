import React from 'react'
import { IconButton } from '@mui/material'

const MyIconButton = ({ icon, ...rest }) => {
   return <IconButton {...rest}>{icon}</IconButton>
}

export default MyIconButton
