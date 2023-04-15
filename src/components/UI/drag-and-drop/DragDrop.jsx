import { styled } from '@mui/material'
import React, { useState } from 'react'
import { useDrop } from 'react-dnd'
import Words from './Words'

const data = [
   {
      title: 'twall',
      id: Math.random().toString(),
   },
   {
      title: 'greesey',
      id: Math.random().toString(),
   },
   {
      title: 'jelance',
      id: Math.random().toString(),
   },
   {
      title: 'cability',
      id: Math.random().toString(),
   },
   {
      title: 'advantage',
      id: Math.random().toString(),
   },
   {
      title: 'uncove',
      id: Math.random().toString(),
   },
   {
      title: 'port',
      id: Math.random().toString(),
   },
   {
      title: 'ecorated',
      id: Math.random().toString(),
   },
   {
      title: 'beathing',
      id: Math.random().toString(),
   },
   {
      title: 'distinge',
      id: Math.random().toString(),
   },
   {
      title: 'soap',
      id: Math.random().toString(),
   },
   {
      title: 'vivory',
      id: Math.random().toString(),
   },
   {
      title: 'internate',
      id: Math.random().toString(),
   },
   {
      title: 'outee',
      id: Math.random().toString(),
   },
   {
      title: 'fold',
      id: Math.random().toString(),
   },
   {
      title: 'beer',
      id: Math.random().toString(),
   },
   {
      title: 'filend',
      id: Math.random().toString(),
   },
   {
      title: 'living',
      id: Math.random().toString(),
   },
]

const DragDrop = () => {
   const [state, setState] = useState([])

   const addWordsToBoard = (id) => {
      const addWords = data.filter((words) => id === words.id)
      setState((prevState) => [...prevState, addWords[0]])
   }

   const [{ isOver }, drop] = useDrop(() => ({
      accept: 'words',
      drop: (item) => addWordsToBoard(item.id),
      collect: (monitor) => ({
         isOver: !!monitor.isOver(),
      }),
   }))

   const addWordsToBoardWithClick = (id) => {
      if (!state.some((item) => item.id === id)) {
         addWordsToBoard(id)
      }
   }

   const removeWordsFromBoard = (id) => {
      const newWords = state.filter((item) => item.id !== id)
      setState(newWords)
   }

   return (
      <Container>
         <DragContainer>
            {data.map((item) => (
               <Words
                  onClick={addWordsToBoardWithClick}
                  key={item.id}
                  item={item}
               />
            ))}
         </DragContainer>
         <DropBoard isOver={isOver} ref={drop}>
            {state.length === 0 ? (
               <span>Select and drag words here</span>
            ) : (
               state.map((item) => (
                  <Words
                     key={item.id}
                     item={item}
                     onClick={() => removeWordsFromBoard(item.id)}
                  />
               ))
            )}
         </DropBoard>
      </Container>
   )
}

export default DragDrop

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

const DropBoard = styled('div')(({ isOver }) => ({
   border: `1px dashed ${isOver ? '#3A10E5' : ''}`,
   background: isOver ? 'rgba(58, 16, 229, 0.1)' : '',
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
}))
