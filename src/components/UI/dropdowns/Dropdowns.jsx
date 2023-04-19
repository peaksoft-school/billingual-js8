import { MenuItem, Select, styled } from '@mui/material'
import React from 'react'

const ITEM_HEIGHT = 60
const ITEM_PADDING_TOP = 0
const MenuProps = {
   PaperProps: {
      style: {
         maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
         width: 360,
         marginLeft: -16,
      },
   },
}

const Dropdowns = ({ arraySelect, value, onChange }) => {
   return (
      <StyledList
         displayEmpty
         value={value}
         onChange={onChange}
         input={<StyledListItem />}
         MenuProps={MenuProps}
      >
         {arraySelect.map((item) => {
            return (
               <MenuItem key={item.id} value={item.name}>
                  {item.name}
               </MenuItem>
            )
         })}
      </StyledList>
   )
}

export default Dropdowns
const StyledListItem = styled(Select)(() => ({
   '&:hover': {
      Bordercolor: '#1A237E',
   },
}))
const StyledList = styled(Select)(() => ({
   borderRadius: '10px 10px 0 0',
   width: '100%',
   fontStyle: 'normal',
   fontWeight: '400',
   fontSize: '16px',
   lineHeight: '18px',
}))
