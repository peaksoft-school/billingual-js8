import Checkbox from '@mui/material/Checkbox'

const Checkboxes = ({ disabled, onChange, ...restProps }) => {
   return (
      <Checkbox
         disabled={disabled}
         onChange={onChange}
         sx={{
            color: 'white',
            '&.Mui-checked': {
               color: '#2AB930',
            },
         }}
         {...restProps}
      />
   )
}
export default Checkboxes
