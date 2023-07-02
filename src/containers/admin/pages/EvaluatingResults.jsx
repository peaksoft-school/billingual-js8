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
import { useEffect, useState } from 'react'
import { ReactComponent as Viewed } from '../../../assets/icons/eyeDefaultIcon.svg'
import { useSnackbar } from '../../../hooks/useSnackbar'
import Spinner from '../../../components/UI/spinner/Spinner'
import FormContainer from '../../../components/UI/form/FormContainer'
import { getAnswerResult, getCurrentlResults } from '../../../api/resultService'
import Button from '../../../components/UI/buttons/Buttons'
import { questionName } from '../../../utils/helpers/questionName'
import Checkboxes from '../../../components/UI/checkbox/Checkbox'
import { formatDate } from '../../../utils/helpers/formatDate'
import { instanse } from '../../../config/axios-instanse/Instance'

const styleCheckboxes = {
   width: '6.97%',
   height: '43.48%',
   marginLeft: '9.89%',
}

const EveluatingResults = () => {
   const [results, setResults] = useState(null)
   const [isLoading, setIsLoading] = useState(true)
   const { resultId } = useParams()
   const { notify } = useSnackbar()
   const navigate = useNavigate()

   const getResult = async () => {
      try {
         setIsLoading(true)
         const { data } = await getCurrentlResults(resultId)
         setResults(data)
         setIsLoading(false)
      } catch (error) {
         notify('error', 'Result', 'Something went wrong')
         setIsLoading(false)
      }
   }

   useEffect(() => {
      getResult()
   }, [])
   const evaluatingQuestionHandle = async (questions) => {
      const ids = questions.find((item) => item)
      try {
         const { data } = await getAnswerResult(ids)
         return navigate(`submitted`, { state: data })
      } catch (error) {
         return error
      }
   }
   const renderDate = (date) => {
      const [d, h] = formatDate(new Date(date))
      return (
         <>
            {d}&nbsp;&nbsp;{h}
         </>
      )
   }

   const sendEmailHandler = async () => {
      try {
         await instanse.post(
            `api/sendEmail/${resultId}?link=http://localhost:3000/user/my-result`
         )
         notify('success', 'Email', 'Successfully sent')
      } catch (error) {
         notify('error', 'Failed', error.response.data.message)
      }
   }

   return (
      <FormContainer>
         {results !== null ? (
            <>
               <TestInfo>
                  <Grid>
                     <StyledTypography>
                        User: <StyledSpan>{results?.userFullName}</StyledSpan>
                     </StyledTypography>
                     <StyledTypography>
                        Test:
                        <StyledSpan> {results?.testTitle}</StyledSpan>
                     </StyledTypography>
                     <StyledTypography>
                        Date of Submission:{' '}
                        <StyledSpan>
                           {renderDate(results?.dateOfSubmission)}
                        </StyledSpan>
                     </StyledTypography>
                  </Grid>
                  <ButtonContainer>
                     <StyledTypography>
                        Final score:{' '}
                        <StyledSpan>{results?.finalScore.toFixed()}</StyledSpan>
                     </StyledTypography>
                     <StyledTypography>
                        Final status:{' '}
                        <StyledSpan
                           sx={{
                              color:
                                 results.resultStatus === 'NOT_EVALUATED'
                                    ? '#f00'
                                    : '#2AB930',
                           }}
                        >
                           {results?.resultStatus}
                        </StyledSpan>
                     </StyledTypography>
                     <Button
                        sx={{ marginTop: '1.5rem' }}
                        variant="outlined"
                        onClick={sendEmailHandler}
                        disabled={results?.resultStatus === 'NOT_EVALUATED'}
                     >
                        Send results to user&#39;s email
                     </Button>
                  </ButtonContainer>
               </TestInfo>
               <div
                  style={{
                     borderTop: '1.5296px solid #D4D0D0',
                     padding: '32px 0  0 0 ',
                     overflowX: 'auto',
                  }}
               >
                  {isLoading && (
                     <SpinnerContainer>
                        <Spinner />
                     </SpinnerContainer>
                  )}
                  <StyledTable>
                     <TableHead>
                        <TableRow>
                           <StyledTh> # </StyledTh>
                           <StyledTh> Question </StyledTh>
                           <StyledTh> Score </StyledTh>
                           <StyledTh> Status </StyledTh>
                        </TableRow>
                     </TableHead>
                     <TableBody>
                        {results.resultQuestionResponses &&
                        results.resultQuestionResponses.length > 0 ? (
                           results.resultQuestionResponses.map((result, i) => {
                              return (
                                 <StyledTr
                                    key={result.questionId}
                                    hover
                                    onClick={() =>
                                       evaluatingQuestionHandle(
                                          result.userAnswerResponse
                                       )
                                    }
                                 >
                                    <StyledTd>{i + 1} </StyledTd>
                                    <StyledTd>
                                       {questionName(result.questionType)}
                                    </StyledTd>
                                    <StyledTd>
                                       {result.score.toFixed()} out of 10
                                    </StyledTd>
                                    <StyledTd
                                       sx={{
                                          color:
                                             result.answerStatus ===
                                             'NOT_EVALUATED'
                                                ? '#f00'
                                                : '#2AB930',
                                       }}
                                    >
                                       {result.answerStatus}
                                    </StyledTd>
                                    <StyledTd>
                                       {result.answerStatus ===
                                       'NOT_EVALUATED' ? (
                                          <StyledViewIcon />
                                       ) : (
                                          <Checkboxes
                                             sx={styleCheckboxes}
                                             color="success"
                                             checked="true"
                                          />
                                       )}
                                    </StyledTd>
                                 </StyledTr>
                              )
                           })
                        ) : (
                           <Text>Извините ничего не найдено</Text>
                        )}
                     </TableBody>
                  </StyledTable>
               </div>
            </>
         ) : (
            <Spinner />
         )}
      </FormContainer>
   )
}

export default EveluatingResults

const TestInfo = styled(Grid)(() => ({
   display: 'flex',
   justifyContent: 'space-between',
}))

const StyledTypography = styled(Typography)(() => ({
   color: '#3752B4',
   fontFamily: 'Poppins',
   fontWeight: 500,
   fontSize: '16px',
   lineHeight: '20px',
   paddingBottom: '5px',
}))

const StyledSpan = styled('span')(() => ({
   color: '#222',
}))

const ButtonContainer = styled(Grid)(() => ({
   textAlign: 'end',
}))

const StyledTable = styled(Table)(() => ({
   borderSpacing: '0 20px',
   borderCollapse: 'separate',
}))

const StyledTr = styled(TableRow)(() => ({
   boxShadow:
      '0px -4px 10px rgba(0, 0, 0, 0.06), 0px 4px 10px rgba(0, 0, 0, 0.06)',
   borderRadius: '8px',
}))

const StyledTd = styled(TableCell)(() => ({
   padding: '24px 0',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '16px',
   lineHeight: '18px',
   color: ' #4C4859',
   overflow: 'hidden',
   textOverflow: 'ellipsis',
   borderBottom: 'none',
   ':first-of-type': {
      padding: '0 0 0 16px',
   },
   ':last-of-type': {
      marginRight: '20px',
   },
}))

const StyledTh = styled(TableCell)(() => ({
   textAlign: 'start',
   fontStyle: 'normal',
   fontWeight: '500',
   fontSize: '16px',
   linHeight: '18px',
   color: '#4C4859',
   borderBottom: 'none',
   padding: 0,
}))
const Text = styled(Typography)(() => ({
   marginTop: '60px',
   fontSize: '20px',
   marginRight: '-600px',
   marginLeft: '18.50rem',
   color: '#f00',
}))
const SpinnerContainer = styled(Grid)(() => ({
   marginRight: '-600px',
   marginTop: '50px',
   marginLeft: '13rem',
}))
const StyledViewIcon = styled(Viewed)(({ theme }) => ({
   cursor: 'pointer',
   '&:hover': {
      path: {
         stroke: theme.palette.secondary.skyBlue,
      },
   },
}))
