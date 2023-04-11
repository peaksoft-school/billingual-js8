import { Radio } from '@mui/material'

const RadioButtons = ({ checked, onChange, value }) => {
   return <Radio checked={checked} onChange={onChange} value={value} />
}

export default RadioButtons
