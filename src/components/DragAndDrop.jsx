import { Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import { v4 } from 'uuid'

const data = [
   {
      title: 'twall',
      id: v4(),
   },
   {
      title: 'greesey',
      id: v4(),
   },
   {
      title: 'jelance',
      id: v4(),
   },
   {
      title: 'cability',
      id: v4(),
   },
   {
      title: 'advantage',
      id: v4(),
   },
   {
      title: 'uncove',
      id: v4(),
   },
   {
      title: 'port',
      id: v4(),
   },
   {
      title: 'ecorated',
      id: v4(),
   },
   {
      title: 'beathing',
      id: v4(),
   },
   {
      title: 'distinge',
      id: v4(),
   },
   {
      title: 'soap',
      id: v4(),
   },
   {
      title: 'vivory',
      id: v4(),
   },
   {
      title: 'internate',
      id: v4(),
   },
   {
      title: 'outee',
      id: v4(),
   },
   {
      title: 'fold',
      id: v4(),
   },
   {
      title: 'beer',
      id: v4(),
   },
   {
      title: 'filend',
      id: v4(),
   },
   {
      title: 'living',
      id: v4(),
   },
]

const DragAndDrop = () => {
   const [board, setBoard] = useState([])
   const [isDropped, setIsDropped] = useState(false)
   const [isDragging, setIsDragging] = useState(false)

   const dragEndHandler = (e, word) => {
      e.preventDefault()
      if (isDropped) {
         setBoard((prev) => {
            if (prev.find((item) => item.id === word.id)) {
               return prev
            }
            return [...prev, word]
         })
      }
      setIsDropped(false)
      setIsDragging(false)
   }

   const dragOverHandler = (e) => {
      e.preventDefault()
      setIsDragging(true)
   }

   const dropHandler = (e) => {
      e.preventDefault()
      setIsDropped(true)
   }

   const removeWordHandler = (id) => {
      setBoard((prev) => prev.filter((item) => item.id !== id))
   }

   return (
      <Container>
         <DragContainer>
            {data.map((item) => (
               <WordsContainer
                  key={item.id}
                  draggable={!false}
                  onDragEnd={(e) => dragEndHandler(e, item)}
               >
                  <Word>{item.title}</Word>
               </WordsContainer>
            ))}
         </DragContainer>
         <DropBoard
            isDragging={isDragging}
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => dropHandler(e)}
         >
            {board.length === 0 ? (
               <span>Select and drag words here</span>
            ) : (
               board.map((item) => (
                  <WordsContainer
                     key={item.id}
                     onClick={() => removeWordHandler(item.id)}
                  >
                     <Word>{item.title}</Word>
                  </WordsContainer>
               ))
            )}
         </DropBoard>
      </Container>
   )
}
export default DragAndDrop

const Container = styled('div')(() => ({
   padding: '44px',
   display: 'grid',
   justifyItems: 'end',
   gap: '30px',
}))

const DragContainer = styled('div')(() => ({
   display: 'flex',
   gap: '10px',
   flexWrap: 'wrap',
}))

const WordsContainer = styled('div')(() => ({
   border: '2px solid #D4D0D0',
   borderRadius: '8px',
   padding: '10px 29px',
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
   fontFamily: 'Poppins, Gilroy',
   fontStyle: 'normal',
   fontWeight: 500,
   fontSize: '18px',
   lineHeight: '21px',
}))

const DropBoard = styled('div')(({ isDragging }) => ({
   borderRadius: '5px',
   display: 'flex',
   gap: '10px',
   flexWrap: 'wrap',
   padding: '30px 38px',
   maxWidth: '500px',
   minWidth: '250px',
   justifyContent: 'center',
   alignItems: 'center',
   minHeight: '100px',
   border: isDragging ? `1px dashed  #3A10E5` : '1px dashed',
   background: isDragging ? 'rgba(58, 16, 229, 0.1)' : '',
}))
