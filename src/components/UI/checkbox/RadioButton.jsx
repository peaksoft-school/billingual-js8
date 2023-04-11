import { Radio } from '@mui/material'

const RadioButtons = ({ checked, onChange, value, ...rest }) => {
   return (
      <Radio checked={checked} onChange={onChange} value={value} {...rest} />
   )
}

export default RadioButtons
