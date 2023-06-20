import { styled, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import FormContainer from '../../../../components/UI/form/FormContainer'
import Input from '../../../../components/UI/input/Input'
import { resultQuestionComponents } from '../../../../utils/constants/common'
import { questionName } from '../../../../utils/helpers/questionName'

const SubmiteQuestions = () => {
   const { state } = useLocation()
   const [score, setScore] = useState(state.evaluationScore)

   const QuestionComponent =
      resultQuestionComponents[state?.questionResponse.questionType]

   const changeScoreHandler = (e) => {
      setScore(e.target.value)
   }
   return (
      <FormContainer>
         <div>
            <StyledText>
               User: <StyledSpan>{state.userFullName}</StyledSpan>
            </StyledText>
            <StyledText>
               Test: <StyledSpan>{state.testName}</StyledSpan>
            </StyledText>
         </div>

         <UserInfo>
            <div>
               <h4 style={{ margin: '0 0 14px 0' }}>Test question</h4>
               <StyledText>
                  Question Title:
                  <StyledSpan>{state.questionResponse.title}</StyledSpan>
               </StyledText>
               <StyledText>
                  Duration:
                  <StyledSpan>{state.questionResponse.duration}</StyledSpan>
               </StyledText>
               <StyledText>
                  Question Type:
                  <StyledSpan>
                     {questionName(state.questionResponse.questionType)}
                  </StyledSpan>
               </StyledText>
               {state.questionResponse.questionType === 'TYPE_WHAT_YOU_HEAR' ? (
                  <StyledText>
                     Mimimum number of words:
                     <StyledSpan>{state.questionResponse.minWords}</StyledSpan>
                  </StyledText>
               ) : null}
               {state.questionResponse.questionType ===
               'RECORD_SAYING_STATEMENT' ? (
                  <StyledText>
                     Statement:
                     <StyledSpan>{state.questionResponse.statement}</StyledSpan>
                  </StyledText>
               ) : null}
               {state.questionResponse.questionType === 'RESPOND_N_WORDS' ? (
                  <>
                     <StyledText>
                        Mimimum number of words:
                        <StyledSpan>
                           {state.questionResponse.minWords}
                        </StyledSpan>
                     </StyledText>
                     <StyledText>
                        Question Statement:
                        <StyledSpan>
                           {state.questionResponse.questionStatement}
                        </StyledSpan>
                     </StyledText>
                  </>
               ) : null}
            </div>
            <div style={{ width: '100px' }}>
               <h4 style={{ margin: 0 }}>Evaluation</h4>
               {state.questionResponse.questionType ===
                  'LISTEN_AND_SELECT_ENGLISH_WORD' ||
               state.questionResponse.questionType === 'SELECT_ENGLISH_WORD' ? (
                  <StyledText>
                     Score: <Score>{state.evaluationScore}</Score>
                  </StyledText>
               ) : (
                  <>
                     <StyledScoreText>Score:(1-10)</StyledScoreText>
                     <Input
                        value={score}
                        onChange={changeScoreHandler}
                        type="number"
                        min={1}
                     />
                  </>
               )}
            </div>
         </UserInfo>
         {QuestionComponent && (
            <QuestionComponent
               question={state}
               score={score}
               answerId={state.answerId}
            />
         )}
      </FormContainer>
   )
}

export default SubmiteQuestions

const StyledText = styled(Typography)(() => ({
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 500,
   fontSize: '18px',
   lineHeight: '21px',
   color: '#3752B4',
   paddingBottom: '8px',
}))
const UserInfo = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   margin: '40px 0',
}))

const StyledSpan = styled('span')(() => ({
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 500,
   fontSize: '18px',
   lineHeight: '21px',
   color: '#4C4859',
}))

const Score = styled('span')(() => ({
   color: '#2AB930',
}))

const StyledScoreText = styled(Typography)(() => ({
   color: '#3752B4',
   fontFamily: 'Poppins',
   fontWeight: '500',
}))
