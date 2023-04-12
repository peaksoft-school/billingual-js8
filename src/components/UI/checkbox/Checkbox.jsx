import Checkbox from '@mui/material/Checkbox'

const Checkboxes = ({ disabled, onChange, ...restProps }) => {
   return <Checkbox disabled={disabled} onChange={onChange} {...restProps} />
}
export default Checkboxes
