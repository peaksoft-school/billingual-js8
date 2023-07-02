import React from 'react'
import { Tooltip, styled } from '@mui/material'
import { ReactComponent as DeleteIcon } from '../../assets/icons/deletedIcon.svg'
import Checkboxes from './checkbox/Checkbox'

const TextContainer = ({ elem, index, checkedFunc, openModal }) => {
   return (
      <Container>
         <StyledGrid>
            <Number>{index + 1}</Number>
            <Tooltip title={elem.title}>
               <Word>{elem.title}</Word>
            </Tooltip>
            <Checkboxes
               onClick={(e) => checkedFunc(e, elem.id)}
               checked={elem.isCorrect}
               color="success"
            />
            <StyledDeleteIcon onClick={() => openModal(elem.id)} />
         </StyledGrid>
      </Container>
   )
}

export default TextContainer

const Container = styled('div')(() => ({
   width: '192px',
   height: '42px',
   display: 'flex',
   alignItems: 'center',
}))

const StyledGrid = styled('div')(() => ({
   border: '1px solid #D4D0D0',
   borderRadius: '8px',
   display: 'flex',
   padding: '0 16px',
   gap: '15px',
   alignItems: 'center',
}))

const Number = styled('span')(() => ({
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '16px',
   lineHeight: '18px',
   color: ' #4C4859',
}))

const Word = styled('span')(() => ({
   width: '50px',
   fontFamily: 'Poppins',
   fontWeight: 500,
   lineHeight: '16px',
   color: ' #4C4859',
   overflow: 'hidden',
   textOverflow: 'ellipsis',
}))

const StyledDeleteIcon = styled(DeleteIcon)(() => ({
   cursor: 'pointer',
   '&:hover': {
      path: {
         stroke: '#f00',
      },
   },
}))
