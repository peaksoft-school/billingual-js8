import { styled, Typography } from '@mui/material'
import { AxiosError } from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { postEveluatingScore } from '../../../../../api/resultService'
import Button from '../../../../../components/UI/buttons/Buttons'
import volumeUpIcon from '../../../../../assets/icons/volumeOn.svg'
import { useSnackbar } from '../../../../../hooks/useSnackbar'
import AdminMultiplySelect from '../../../../../components/UI/multiply-select/AdminMultiplySelect'

const buttonStyleGoBack = {
   width: '12.8%',
   height: '42px',
   background: '#FFFFFF',
   border: '2px solid #3A10E5',
   borderRadius: '8px',
   fontFamily: 'Gilroy',
   fontSize: '0.875rem',
   lineHeight: '16px',
   '&:hover': {
      background: '#3A10E5',
      color: '#FFFFFF',
   },
}
const buttonSave = {
   width: '10%',
   height: '42px',
   background: '#2AB930',
   borderRadius: '8px',
   color: '#fff',
   ':hover': {
      background: '#00ff2a',
   },
}
const ListenAndSelectResult = ({ question, score, answerId }) => {
   const navigate = useNavigate()
   const { notify } = useSnackbar()

   const goBack = () => {
      navigate(-1)
   }
   const saveScore = async () => {
      const data = {
         answerId,
         score,
      }
      try {
         await postEveluatingScore(data)
         goBack()
         return notify('success', 'Question', 'Successfully added')
      } catch (error) {
         if (AxiosError(error)) {
            return notify('error', 'Question', error.response?.data.message)
         }
         return notify('error', 'Question', 'Something went wrong')
      }
   }

   return (
      <>
         <TestListenAndSelectEnglishWords>
            {question.questionResponse.options.map((elem, i) => (
               // <ListenWordEnglish key={elem.id}>
               //    <NumberListenWords>{i + 1}</NumberListenWords>
               //    <StyledVolumeup src={volumeUpIcon} />
               //    <ListenWordEnglishTest>{elem.title}</ListenWordEnglishTest>
               //    <Checkboxes
               //       sx={styleCheckboxes}
               //       color="success"
               //       checked={elem.isCorrect}
               //    />
               // </ListenWordEnglish>
               <AdminMultiplySelect elem={elem} index={i} />
            ))}
         </TestListenAndSelectEnglishWords>
         <h4 style={{ margin: 0 }}>User&#39;s Answer</h4>
         <TestSelectRealEnglishWordsLine>
            {question.userAnswerResponse.map((elem, i) => (
               <UserAnswer key={elem.optionTitle}>
                  <NumberListenWords>{i + 1}</NumberListenWords>
                  <StyledVolumeup src={volumeUpIcon} />
                  <ListenWordEnglishTest>
                     {elem.optionTitle}
                  </ListenWordEnglishTest>
               </UserAnswer>
            ))}
         </TestSelectRealEnglishWordsLine>
         <DivButtonSaveandGoBack>
            <Button sx={buttonStyleGoBack} onClick={goBack}>
               go Back
            </Button>
            <Button sx={buttonSave} onClick={saveScore}>
               Save
            </Button>
         </DivButtonSaveandGoBack>
      </>
   )
}

export default ListenAndSelectResult

const TestSelectRealEnglishWordsLine = styled('div')(() => ({
   width: '100%',
   height: 'auto',
   margin: 0,
   display: 'flex',
   gap: '2.2%',
   marginBottom: '18px',
}))

const UserAnswer = styled('div')(() => ({
   width: '18.83%',
   background: '#FFFFFF',
   border: '1.53px solid #D4D0D0',
   borderRadius: '8px',
   display: 'flex',
   alignItems: 'center',
   padding: '14px 16px',
}))

const TestListenAndSelectEnglishWords = styled('div')(({ options }) => ({
   width: '100%',
   height: 'auto',
   margin: '0 auto',
   display: 'flex',
   gap: '2.2%',
   marginBottom: !options ? '18px' : '0px',
}))

// const ListenWordEnglish = styled('div')(() => ({
//    width: '31.83%',
//    height: '46px',
//    background: '#FFFFFF',
//    border: '1.53px solid #D4D0D0',
//    borderRadius: '8px',
//    display: 'flex',
//    alignItems: 'center',
//    marginBottom: '18px',
// }))

const NumberListenWords = styled('div')(() => ({
   width: '3.47%',
   margin: '0px 6% 0px 6.46%',
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '16px',
   lineHeight: '18px',
   color: ' #4C4859',
}))

const ListenWordEnglishTest = styled(Typography)(() => ({
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 500,
   fontSize: '0.875rem',
   textTransform: 'uppercase',
   lineHeight: '16px',
   color: ' #4C4859',
   width: '26.82%',
   marginLeft: '5.26%',
}))

const StyledVolumeup = styled('img')(() => ({
   width: '22px',
   height: '22px',
   cursor: 'pointer',
}))
const DivButtonSaveandGoBack = styled('div')(() => ({
   width: '100%',
   height: '42px',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'end',
   marginTop: '32px',
   gap: '1.95%',
}))
