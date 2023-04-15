import { Typography, styled } from '@mui/material'
import React from 'react'
import { useDrag } from 'react-dnd'

const Words = ({ item, onClick }) => {
   const [{ isDragging }, drag] = useDrag(() => ({
      type: 'words',
      item: { id: item.id },
      collect: (monitor) => ({
         isDragging: !!monitor.isDragging(),
      }),
   }))

   return (
      <WordsContainer
         ref={drag}
         onClick={() => onClick(item.id)}
         key={item.id}
         isDragging={isDragging}
      >
         <Word>{item.title}</Word>
      </WordsContainer>
   )
}

export default Words

const WordsContainer = styled('div')(() => ({
   border: '2px solid #D4D0D0',
   borderRadius: '8px',
   padding: '10px 39px',
   cursor: 'pointer',
   ':active': {
      backgroundColor: '#3A10E5',
      color: '#fff',
   },

   ':hover': {
      border: '2px solid #3A10E5',
   },
}))

const Word = styled(Typography)(() => ({
   fontFamily: 'DINNextRoundedLTW04-Medium',
   fontStyle: 'normal',
   fontWeight: 500,
   fontSize: '18px',
   lineHeight: '21px',
}))
