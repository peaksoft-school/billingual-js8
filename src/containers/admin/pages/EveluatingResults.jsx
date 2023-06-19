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
import { ReactComponent as Checked } from '../../../assets/icons/checkSquareIcon.svg'
import { useSnackbar } from '../../../hooks/useSnackbar'
import Spinner from '../../../components/UI/spinner/Spinner'
import FormContainer from '../../../components/UI/form/FormContainer'
import { getCurrentlResults } from '../../../api/resultService'
import Button from '../../../components/UI/buttons/Buttons'

// const results = [
//    {
//       resultId: 1,
//       userFullName: 'Kauhar',
//       dateOfSubmission: '2023-06-14T11:56:11.518Z',
//       testName: 'string',
//       resultStatus: 'EVALUATED',
//       finalScore: 77,
//    },
//    {
//       resultId: 2,
//       userFullName: 'Aziat',
//       dateOfSubmission: '2023-05-14T11:56:11.518Z',
//       testName: 'string',
//       resultStatus: 'NOT_EVALUATED',
//       finalScore: 0,
//    },
//    {
//       resultId: 3,
//       userFullName: 'Mairam',
//       dateOfSubmission: '2023-04-14T11:56:11.518Z',
//       testName: 'string',
//       resultStatus: 'EVALUATED',
//       finalScore: 6,
//    },
// ]

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
   console.log(results)

   useEffect(() => {
      getResult()
   }, [])
   const tryTestHandle = (questions) => {
      return navigate(`submitted`, { state: questions })
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
                        Date of Submission:
                        <StyledSpan>{results?.dateOfSubmission}</StyledSpan>
                     </StyledTypography>
                  </Grid>
                  <ButtonContainer>
                     <StyledTypography>
                        Final score:
                        <StyledSpan>{results?.finalScore}</StyledSpan>
                     </StyledTypography>
                     <StyledTypography>
                        Final status:
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
                        onClick={() => navigate(`#`)}
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
                        {isLoading && (
                           <SpinnerContainer>
                              <Spinner />
                           </SpinnerContainer>
                        )}
                        {results.resultQuestionResponses &&
                        results.resultQuestionResponses.length > 0 ? (
                           results.resultQuestionResponses.map((result) => {
                              return (
                                 <StyledTr
                                    key={result.questionId}
                                    hover
                                    onClick={() =>
                                       tryTestHandle(result.userAnswerResponse)
                                    }
                                 >
                                    <StyledTd>{result.questionOrder} </StyledTd>
                                    <StyledTd>{result.questionType} </StyledTd>
                                    <StyledTd>{result.score} </StyledTd>
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
                                       {result.resultStatus ===
                                       'NOT_EVALUATED' ? (
                                          <Checked />
                                       ) : (
                                          <Viewed />
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
