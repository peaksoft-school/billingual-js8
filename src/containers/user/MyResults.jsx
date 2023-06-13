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
import FormContainer from '../../components/UI/form/FormContainer'
import { ReactComponent as DeleteIcon } from '../../assets/icons/deletedIcon.svg'
import { deleteResultRequest, getAllResults } from '../../api/resultService'
import { useSnackbar } from '../../hooks/useSnackbar'
import Spinner from '../../components/UI/spinner/Spinner'
import ModalDelete from '../../components/UI/modal/ModalDelete'

const MyResults = () => {
   const [results, setResults] = useState(null)
   const [isLoading, setIsLoading] = useState(true)
   const [isOpenModalDelete, setIsOpenModalDelete] = useState(false)
   const [resultId, setResultId] = useState(null)

   const openModalDelete = (id) => {
      setIsOpenModalDelete((prevState) => !prevState)
      setResultId(id)
   }

   const { notify } = useSnackbar()

   const getResult = async () => {
      try {
         setIsLoading(true)
         const { data } = await getAllResults()
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
   const deleteHandler = async (id) => {
      try {
         await deleteResultRequest(id)
         notify('success', 'Result', 'Delete result')
         setIsOpenModalDelete(false)
      } catch (error) {
         notify('error', 'Result', error.response?.data.message)
      }
      return getResult()
   }

   return (
      <>
         <ModalDelete
            openModal={openModalDelete}
            isOpenModal={isOpenModalDelete}
            deleteFunction={() => deleteHandler(resultId)}
         />
         <FormContainer>
            <StyledTable>
               <TableHead>
                  <TableRow>
                     <StyledTh> # </StyledTh>
                     <StyledTh> Date of Submition </StyledTh>
                     <StyledTh> Test name </StyledTh>
                     <StyledTh> Status </StyledTh>
                     <StyledTh> Score </StyledTh>
                  </TableRow>
               </TableHead>
               <TableBody>
                  {isLoading && (
                     <SpinnerContainer>
                        <Spinner />
                     </SpinnerContainer>
                  )}
                  {results && results.length > 0 ? (
                     results.map((result) => {
                        return (
                           <StyledTr key={result.id}>
                              <StyledTd>{result.id} </StyledTd>
                              <StyledTd>{result.dateOfSubmission}</StyledTd>
                              <StyledTd>{result.testName} </StyledTd>
                              <StyledTd
                                 sx={{
                                    color:
                                       result.resultStatus === 'NOT_EVALUATED'
                                          ? '#f00'
                                          : '#2AB930',
                                 }}
                              >
                                 {result.resultStatus}
                              </StyledTd>
                              <StyledTd
                                 sx={{
                                    color:
                                       result.resultStatus === 'NOT_EVALUATED'
                                          ? '#f00'
                                          : '#2AB930',
                                 }}
                              >
                                 {result.score}
                              </StyledTd>
                              <StyledTd>
                                 <DeleteIcon
                                    onClick={() => openModalDelete(result.id)}
                                 />
                              </StyledTd>
                           </StyledTr>
                        )
                     })
                  ) : (
                     <Text>Извините ничего не найдено</Text>
                  )}
               </TableBody>
            </StyledTable>
         </FormContainer>
      </>
   )
}

export default MyResults

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
      marginRight: '16px',
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
