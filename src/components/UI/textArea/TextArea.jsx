import { styled, TextField } from '@mui/material'
import React, { forwardRef } from 'react'

const TextArea = forwardRef(
   ({ handleChange, value, placeholder, rows, ...props }, ref) => {
      return (
         <TextAreaStyle
            {...props}
            multiline
            minRows={rows}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            ref={ref}
         />
      )
   }
)

export default TextArea

const TextAreaStyle = styled(TextField)(({ theme }) => ({
   width: '100%',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '16px',
   lineHeight: '23px',
   letterSpacing: '0.03em',
   textTransform: 'uppercase',

   ' & .MuiInputBase-root': {
      borderRadius: '8px',
      padding: '14px 16px ',
      border: '1.53px solid #D5D0D0',
   },
   ' & .MuiInputBase-input': {
      color: theme.palette.primary.fontColor,
      fontFamily: 'DINNextRoundedLTW01-Regular',
   },
}))
