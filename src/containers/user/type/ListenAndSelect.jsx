import React, { useState } from 'react'
import { Typography, styled } from '@mui/material'
import { useDispatch } from 'react-redux'
import MultiplySelect from '../../../components/UI/multiply-select/MultiplySelect'
import Button from '../../../components/UI/buttons/Buttons'
import { userQuestionActions } from '../../../redux/user/user.slice'

const ListenAndSelect = ({ question, handleNextClick }) => {
   const dispatch = useDispatch()
   const [audio, setAudio] = useState([])
   const nextHandler = () => {
      const answerData = {
         questionId: question.id,
         numberOfPlays: 1,
         fileUrl: 'null',
         optionsIds: audio,
      }

      dispatch(userQuestionActions.addAnswer(answerData))
      handleNextClick()
      setAudio([])
   }

   return (
      <Container>
         <TitleStyle>{question.title}</TitleStyle>

         <AudioContainer>
            {question !== null && question.options.length === 0 ? (
               <p style={{ margin: '0 auto' }}>Empty</p>
            ) : (
               question.options.map((item, i) => (
                  <MultiplySelect
                     key={item.id}
                     id={item.id}
                     word={item.title}
                     audio={item.fileUrl}
                     setAudio={setAudio}
                     audioIds={audio}
                     index={i}
                  />
               ))
            )}
         </AudioContainer>
         <BtnContainer>
            <NextBtn
               onClick={nextHandler}
               variant="contained"
               disabled={audio.length === 0}
            >
               Next
            </NextBtn>
         </BtnContainer>
      </Container>
   )
}

export default ListenAndSelect

const Container = styled('div')(() => ({}))
const TitleStyle = styled(Typography)(() => ({
   textAlign: 'center',
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '28px',
   lineHeight: '32px',
   color: '#4C4859',
   margin: '50px 0',
   letterSpacing: '1.5px',
}))

const AudioContainer = styled('div')(() => ({
   display: 'flex',
   flexWrap: 'wrap',
   justifyContent: 'flex-start',
   alignItems: 'center',
   gap: '.625rem 4.1875rem',
   justifyItems: 'center',
   padding: '0 5% 32px',
   borderBottom: '1.53px solid #D4D0D0',
}))

const BtnContainer = styled('div')(() => ({
   padding: '32px 0 0',
   textAlign: 'end',
}))

const NextBtn = styled(Button)(() => ({
   padding: '12px 54px',
}))
