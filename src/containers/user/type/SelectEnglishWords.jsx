import { styled } from '@mui/material'
import React from 'react'
import DragAndDrop from '../../../components/DragAndDrop'
import Button from '../../../components/UI/buttons/Buttons'

const NextBtn = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'flex-end',
   borderTop: '2px solid #D4D0D0',
   padding: '32px 0  0 0 ',
}))

const SelectEnglishWords = () => {
   return (
      <>
         <DragAndDrop />
         <NextBtn>
            <Button style={{ padding: '12.5px 54px' }} variant="contained">
               Next
            </Button>
         </NextBtn>
      </>
   )
}

export default SelectEnglishWords
