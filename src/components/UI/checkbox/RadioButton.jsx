import { Radio } from '@mui/material'

const RadioButtons = ({ checked, onChange, value, ...rest }) => {
   return (
      <Radio checked={checked} onCha   nge={onChange} value={value} {...rest} />
   )
}

export default RadioButtons
