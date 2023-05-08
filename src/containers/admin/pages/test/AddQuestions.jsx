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
import { ReactComponent as EditIcon } from '../../../../assets/icons/editicon.svg'
import { ReactComponent as DeleteIcon } from '../../../../assets/icons/deletedIcon.svg'
import Spinner from '../../../../components/UI/spinner/Spinner'

const AddQuestions = () => {
   const [test, setTest] = useState([])
   const { testId, isLoading } = useParams()
   const navigate = useNavigate()

   const getTest = async () => {
      const { data } = await getTestById(testId)
      setTest([data])
   }

   useEffect(() => {
      getTest()
   }, [])

   const formatTime = (seconds) => {
      const minutes = Math.floor(seconds / 60)
      const remainingSeconds = seconds % 60
      const formattedMinutes = minutes.toString().padStart(2, '0')
      const formattedSeconds = remainingSeconds.toString().padStart(2, '0')
      return `${formattedMinutes}:${formattedSeconds}`
   }

   return (
      <FormContainer>
         {isLoading && <Spinner />}
         {test.map((item) => (
            <Grid key={item.id}>
               <TestInfo>
                  <StyledTypography>
                     Title: <StyledSpan>{item.title}</StyledSpan>
                  </StyledTypography>
                  <StyledTypography>
                     Short Description:
                     <StyledSpan> {item.shortDescription}</StyledSpan>
                  </StyledTypography>
                  <StyledTypography>
                     Duration:
                     <StyledSpan> {formatTime(item.duration)}</StyledSpan>
                  </StyledTypography>
               </TestInfo>
               <ButtonContainer>
                  <Button variant="contained">+ Add more questions</Button>
               </ButtonContainer>
               <Hr />
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
                     {item.questions.map((question, i) => (
                        <StyledTr hover key={question.id}>
                           <StyledTd>{i + 1}</StyledTd>
                           <StyledTd>{question.title}</StyledTd>
                           <StyledTd>{formatTime(question.duration)}</StyledTd>
                           <StyledTd>{question.questionType}</StyledTd>
                           <StyledTd>
                              <IconsContainer>
                                 <Switcher />
                                 <MyIconButton>
                                    <StyledEditIcon />
                                 </MyIconButton>
                                 <MyIconButton>
                                    <StyledDeleteIcon />
                                 </MyIconButton>
                              </IconsContainer>
                           </StyledTd>
                        </StyledTr>
                     ))}
                  </TableBody>
               </StyledTable>
               <ButtonContainer>
                  <Button onClick={() => navigate('/admin/test')}>
                     Go back
                  </Button>
               </ButtonContainer>
            </Grid>
         ))}
      </FormContainer>
   )
}

export default AddQuestions

const TestInfo = styled(Grid)(() => ({
   marginBottom: '2.5rem',
}))

const StyledTypography = styled(Typography)(() => ({
   color: '#3752B4',
   fontFamily: 'Poppins, Gilroy',
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

const Hr = styled('hr')(() => ({
   color: '#D4D0D0',
   margin: '1.375rem 0',
}))

const StyledTable = styled(Table)(() => ({
   borderSpacing: '0 20px',
   borderCollapse: 'separate',
   width: '100%',
}))

const StyledTh = styled(TableCell)(() => ({
   textAlign: 'start',
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

   ':first-of-type': {
      padding: '0 0 0 16px',
   },
   ':last-of-type': {
      padding: '0 16px 0',
   },
}))

const IconsContainer = styled(Grid)(() => ({
   display: 'flex',
   alignItems: 'center',
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
