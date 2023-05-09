import React from 'react'
import { styled } from '@mui/material/styles'
import MuiButton from '@mui/material/Button'

const BaseButton = styled(MuiButton)(() => ({
   borderRadius: '8px',
}))

const Button = ({ children, variant, onClick, disabled, ...rest }) => {
   return (
      <BaseButton
         onClick={onClick}
         variant={variant}
         disabled={disabled}
         {...rest}
      >
         {children}
      </BaseButton>
   )
}

export default Button
