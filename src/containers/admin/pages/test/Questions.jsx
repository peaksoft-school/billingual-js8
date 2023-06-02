import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
   Grid,
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableRow,
   Typography,
   styled,
} from '@mui/material'
import FormContainer from '../../../../components/UI/form/FormContainer'
import { getTestById } from '../../../../api/testService'
import Button from '../../../../components/UI/buttons/Buttons'
import Switcher from '../../../../components/UI/checkbox/Switcher'
import MyIconButton from '../../../../components/UI/Icon-button/IconButton'
import { ReactComponent as EditIcon } from '../../../../assets/icons/editIcon.svg'
import { ReactComponent as DeleteIcon } from '../../../../assets/icons/deletedIcon.svg'
import Spinner from '../../../../components/UI/spinner/Spinner'
import { formatTime } from '../../../../utils/helpers/formatTime'
import {
   deleteQuestionRequest,
   updateQuestionRequest,
} from '../../../../api/questionService'
import { useSnackbar } from '../../../../hooks/useSnackbar'

const AddQuestions = () => {
   const [test, setTest] = useState(null)
   const { testId } = useParams()
   const navigate = useNavigate()

   const { notify } = useSnackbar()

   const getTest = async () => {
      try {
         const { data } = await getTestById(testId)
         setTest(data)
      } catch (error) {
         notify('error', 'Test', 'Failed to get test')
      }
   }

   useEffect(() => {
      getTest()
   }, [])

   const deleteHandler = async (id) => {
      try {
         await deleteQuestionRequest(id)
         notify('success', 'Question', 'Delete question')
      } catch (error) {
         notify('error', 'Question', error.response?.data.message)
      }
      return getTest()
   }

   const updateQuestion = async (question) => {
      const newQuestion = { ...question, isActive: !question.isActive }

      try {
         await updateQuestionRequest(newQuestion)
         notify('success', 'Question', 'Successfully updated')
         return getTest()
      } catch (error) {
         return notify('error', 'Question', error.response?.data.message)
      }
   }

   return (
      <FormContainer>
         {test !== null ? (
            <Grid>
               <TestInfo>
                  <StyledTypography>
                     Title: <StyledSpan>{test.title}</StyledSpan>
                  </StyledTypography>
                  <StyledTypography>
                     Short Description:
                     <StyledSpan> {test.shortDescription}</StyledSpan>
                  </StyledTypography>
                  <StyledTypography>
                     Duration:
                     <StyledSpan> {formatTime(test.duration)}</StyledSpan>
                  </StyledTypography>
               </TestInfo>
               <ButtonContainer>
                  <Button
                     variant="contained"
                     onClick={() => navigate(`createtest`)}
                  >
                     + Add more questions
                  </Button>
               </ButtonContainer>

               <Hr />

               {test.questions !== null && test.questions.length === 0 ? (
                  <Typography>Question list is empty</Typography>
               ) : (
                  <div style={{ overflowX: 'auto', padding: '10px' }}>
                     <StyledTable>
                        <TableHead>
                           <TableRow>
                              <StyledTh>#</StyledTh>
                              <StyledTh>Name</StyledTh>
                              <StyledTh>Duration</StyledTh>
                              <StyledTh>Question type</StyledTh>
                              <StyledTh />
                           </TableRow>
                        </TableHead>
                        <TableBody>
                           {test.questions !== null ? (
                              test.questions.map((question, i) => (
                                 <StyledTr hover key={question.id}>
                                    <StyledTd>{i + 1}</StyledTd>
                                    <StyledTd>{question.title}</StyledTd>
                                    <StyledTd>
                                       {formatTime(question.duration)}
                                    </StyledTd>
                                    <StyledTd>{question.questionType}</StyledTd>
                                    <StyledTd>
                                       <IconsContainer>
                                          <Switcher
                                             checked={question.isActive}
                                             onClick={() =>
                                                updateQuestion(question)
                                             }
                                          />
                                          <MyIconButton>
                                             <StyledEditIcon />
                                          </MyIconButton>
                                          <MyIconButton
                                             onClick={() =>
                                                deleteHandler(question.id)
                                             }
                                          >
                                             <StyledDeleteIcon />
                                          </MyIconButton>
                                       </IconsContainer>
                                    </StyledTd>
                                 </StyledTr>
                              ))
                           ) : (
                              <p>Question is empty</p>
                           )}
                        </TableBody>
                     </StyledTable>
                  </div>
               )}
               <ButtonContainer>
                  <GoBackButton onClick={() => navigate('/admin/test')}>
                     Go back
                  </GoBackButton>
               </ButtonContainer>
            </Grid>
         ) : (
            <Spinner />
         )}
      </FormContainer>
   )
}

export default AddQuestions

const TestInfo = styled(Grid)(() => ({
   marginBottom: '2.5rem',
}))

const StyledTypography = styled(Typography)(() => ({
   color: '#3752B4',
   fontFamily: 'Poppins',
   fontWeight: 500,
   fontSize: '16px',
   lineHeight: '20px',
}))

const StyledSpan = styled('span')(() => ({
   color: '#222',
}))

const ButtonContainer = styled(Grid)(() => ({
   textAlign: 'end',
}))

const GoBackButton = styled(Button)(() => ({
   '&:hover': {
      background: '#3A10E5',
      color: '#fff',
   },
}))

const Hr = styled('hr')(() => ({
   color: '#D4D0D0',
   margin: '1.375rem 0',
}))

const StyledTable = styled(Table)(() => ({
   borderSpacing: '0 20px',
   borderCollapse: 'separate',
}))

const StyledTh = styled(TableCell)(() => ({
   textAlign: 'start',
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: '500',
   fontSize: '16px',
   linHeight: '18px',
   color: '#4C4859',
}))

const StyledTr = styled(TableRow)(() => ({
   boxShadow:
      '0px -4px 10px rgba(0, 0, 0, 0.06), 0px 4px 10px rgba(0, 0, 0, 0.06)',
   borderRadius: '8px',
}))

const StyledTd = styled(TableCell)(() => ({
   padding: '24px 0',
   fontFamily: 'Poppins, Gilroy',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '16px',
   lineHeight: '18px',
   color: ' #4C4859',
   overflow: 'hidden',
   textOverflow: 'ellipsis',

   ':first-of-type': {
      padding: '0 0 0 16px',
   },
   ':last-of-type': {
      padding: '0 16px 0',
   },
}))

const IconsContainer = styled(Grid)(() => ({
   display: 'flex',
   aligntests: 'center',
   gap: '5px',
}))

const StyledEditIcon = styled(EditIcon)(({ theme }) => ({
   '&:hover': {
      path: {
         stroke: theme.palette.secondary.skyBlue,
      },
   },
}))

const StyledDeleteIcon = styled(DeleteIcon)(({ theme }) => ({
   '&:hover': {
      path: {
         stroke: theme.palette.secondary.main,
      },
   },
}))
