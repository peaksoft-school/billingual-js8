import { styled, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DragAndDrop from '../../../components/DragAndDrop'
import Button from '../../../components/UI/buttons/Buttons'
import { userQuestionActions } from '../../../redux/user/user.slice'

const SelectEnglishWords = ({ question, handleNextClick }) => {
   const dispatch = useDispatch()
   const { words } = useSelector((state) => state.user)

   const nextHandler = () => {
      const optionIds = words.map((item) => item.id)
      const answerData = {
         questionId: question.id,
         numberOfPlays: 1,
         fileUrl: 'null',
         optionsIds: optionIds,
      }
      dispatch(userQuestionActions.addAnswer(answerData))
      handleNextClick()
      dispatch(userQuestionActions.clearOptionsIds())
   }

   return (
      <>
         <TitleStyle>{question.title}</TitleStyle>
         <DragAndDrop data={question.options} words={words} />
         <ContainerBtn>
            <Button
               onClick={nextHandler}
               variant="contained"
               style={{ padding: '12px 54px' }}
               disabled={words.length === 0}
            >
               NEXT
            </Button>
         </ContainerBtn>
      </>
   )
}

export default React.memo(SelectEnglishWords)

const TitleStyle = styled(Typography)(() => ({
   textAlign: 'center',
   fontFamily: 'DINNextRoundedLTW01-Regular',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '28px',
   lineHeight: '32px',
   color: '#4C4859',
   marginTop: '50px',
   letterSpacing: '1.5px',
}))
const ContainerBtn = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'end',
   marginTop: '3.75rem',
   borderTop: '1.5296px solid #D4D0D0',
   padding: '32px 0  0 0 ',
}))
