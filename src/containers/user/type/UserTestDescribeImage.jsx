import { React, useState } from 'react'
import { useDispatch } from 'react-redux'
import { styled } from '@mui/material'
import Button from '../../../components/UI/buttons/Buttons'
import TextArea from '../../../components/UI/textArea/TextArea'
import { userQuestionActions } from '../../../redux/user/user.slice'

const styleTextArea = {
   width: '64.1%',
   fontFamily: 'Poppins',
   '& .MuiInputBase-root': {
      borderRadius: '8px',
      height: '185px',
      border: '1px solid #D4D0D0',
   },
   ' & .MuiInputBase-input': {
      fontFamily: 'Poppins',
   },
}

const UserTestDescribeImage = ({ question, handleNextClick }) => {
   const dispatch = useDispatch()
   const [testResponse, setTestResponse] = useState('')

   const files = question.files.find((elem) => {
      return elem.fileUrl
   })

   const chnageCorrectAnswer = (e) => {
      const wordResponse = e.target.value
      setTestResponse(wordResponse)
   }
   const nextTestHandler = () => {
      const dataAnswer = {
         data: testResponse,
      }
      dispatch(userQuestionActions.addAnswer(dataAnswer))
      handleNextClick()
      setTestResponse('')
   }
   return (
      <DescribeImageDivv>
         <SecondDescribeImageDiv>
            <TextTitle>
               Write one or more sentences that describe the image
            </TextTitle>
            <DivInputandImage>
               <ImageForTheTest urlImage={files.fileUrl} />
               <TextArea
                  value={testResponse}
                  handleChange={chnageCorrectAnswer}
                  placeholder="Your response"
                  maxRows={6}
                  rows={6}
                  sx={styleTextArea}
               />
            </DivInputandImage>
         </SecondDescribeImageDiv>
         <ContainerBtn>
            <Button
               onClick={nextTestHandler}
               variant="contained"
               style={{ padding: '12px 54px' }}
               disabled={testResponse.length === 0}
            >
               NEXT
            </Button>
         </ContainerBtn>
      </DescribeImageDivv>
   )
}

export default UserTestDescribeImage

const DescribeImageDivv = styled('div')(() => ({
   width: '100%',
   height: 'auto',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   marginTop: '50px',
}))
const ContainerBtn = styled('div')(() => ({
   width: '100%',
   display: 'flex',
   justifyContent: 'end',
   marginTop: '3.75rem',
   borderTop: '1.5296px solid #D4D0D0',
   padding: '32px 0  0 0 ',
}))
const SecondDescribeImageDiv = styled('div')(() => ({
   width: '78.72%',
   height: 'auto',
   boxSizing: 'border-box',
   margin: '0 auto',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
}))
const TextTitle = styled('div')(() => ({
   textAlign: 'center',
   width: '100%',
   height: '32px',
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '1.75rem',
   lineHeight: '2rem',
   letterSpacing: '1px',
   color: '#4C4859',
}))
const DivInputandImage = styled('div')(() => ({
   width: '92.81%',
   display: 'flex',
   gap: '5.05%',
   marginTop: '50px',
}))

const ImageForTheTest = styled('div')(({ urlImage }) => ({
   width: '36.64%',
   height: '183px',
   backgroundImage: `url(${urlImage})`,
   backgroundSize: 'cover',
   backgroundPosition: 'center',
   borderRadius: '2px',
   cursor: 'pointer',
}))
