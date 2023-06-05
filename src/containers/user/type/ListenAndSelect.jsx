import React from 'react'
import { styled } from '@mui/material'
import MultiplySelect from '../../../components/UI/multiply-select/MultiplySelect'

const ListenAndSelect = ({ question }) => {
   return (
      <Container>
         {question.map((item, i) => (
            <MultiplySelect id={i + 1} word="awdawd" audio={item.fileUrl} />
         ))}
      </Container>
   )
}

export default ListenAndSelect

const Container = styled('div')(() => ({
   display: 'flex',
   gap: '10px 77px',
   justifyContent: 'space-between',
   flexWrap: 'wrap',
}))
