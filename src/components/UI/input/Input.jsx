import { styled, TextField } from '@mui/material'
import { forwardRef } from 'react'

const TextInput = styled(TextField)((prop) => ({
   input: {
      color: prop.error ? '#f00' : '#757575',
   },
   '& label.Mui-focused': {
      color: prop.error ? '#757575' : '#3a10e5',
   },
   '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
         borderColor: prop.error ? '#f00' : '#3a10e5',
      },
      '&.Mui-focused fieldset': {
         borderColor: prop.error ? '#f00' : '#3a10e5',
      },
   },
}))

const Input = forwardRef((props, ref) => {
   const { value, onChange, label, isError, disabled, ...restProps } = props

   return (
      <TextInput
         label={label}
         ref={ref}
         disabled={disabled}
         value={value}
         onChange={onChange}
         error={isError}
         min={1}
         {...restProps}
      />
   )
})

export default Input
