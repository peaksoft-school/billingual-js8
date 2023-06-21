/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { AxiosError } from 'axios'
import { styled } from '@mui/material'
import Checkboxes from '../../../../../components/UI/checkbox/Checkbox'
import { ReactComponent as DeleteIcon } from '../../../../../assets/icons/deletedIcon.svg'
import Button from '../../../../../components/UI/buttons/Buttons'
import ModalDelete from '../../../../../components/UI/modal/ModalDelete'
import QuestionModal from '../../../../../components/UI/modal/QuestionModal'
import { questionActions } from '../../../../../redux/question/question.slice'
import { useSnackbar } from '../../../../../hooks/useSnackbar'
import {
   postSelectRealEnglishWord,
   updateQuestionRequest,
} from '../../../../../api/questionService'
import MyIconButton from '../../../../../components/UI/Icon-button/IconButton'
import TextContainer from '../../../../../components/UI/TextContainer'

const buttonStyleGoBack = {
   width: '12.8%',
   height: '42px',
   background: '#FFFFFF',
   border: '2px solid #3A10E5',
   borderRadius: '8px',
   fontFamily: 'Gilroy',
   fontSize: '0.875rem',
   lineHeight: '16px',
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

const styleCheckboxes = {
   width: '6.97%',
   height: '43.48%',
   marginLeft: '9.89%',
}
const buttonStyle = {
   '&:hover': {
      background: '#0015cf',
   },
   width: '15.82%',
   height: '42px',
   background: '#3A10E5',
   borderRadius: '8px',
   marginLeft: '84.02%',
   marginBottom: '22px',
   color: '#ffff',
   whiteSpace: 'nowrap',
   fontFamily: 'Poppins',
   fontSize: '0.875rem',
   lineHeight: '1rem',
}
const SelectRealEnglishWords = ({ title, duration, testId }) => {
   const { options } = useSelector((item) => item.questions)
   const dispatch = useDispatch()
   const { state } = useLocation()
   const { notify } = useSnackbar()
   const [isOpenModalDelete, setIsOpenModalDelete] = useState(false)
   const [isOpenModalSave, setIsOpenModalSave] = useState(false)
   const [idListen, setListenId] = useState()

   const navigate = useNavigate()

   const openModalDelete = (id) => {
      setIsOpenModalDelete((prevState) => !prevState)
      setListenId(id)
   }
   const openModalSave = () => {
      setIsOpenModalSave((prevState) => !prevState)
   }
   const deleteTest = (id) => {
      dispatch(questionActions.deleteOption(id))
      setIsOpenModalDelete((prevState) => !prevState)
   }
   const checkedFunc = (e, id) => {
      dispatch(questionActions.changeTrueOption(id))
   }
   const navigateGoBackTest = () => {
      navigate(-1)
   }
   const goBack = () => {
      navigate(`/admin/test/${testId}`)
   }
   const saveTest = async () => {
      const data = {
         title,
         duration,
         questionOrder: 1,
         testId,
         options,
         isActive: true,
         questionType: state?.question.questionType,
         id: state?.question.id,
      }
      try {
         if (!title || !duration || options.length === 0) {
            return notify('error', 'Question', 'Please fill in all fields')
         }
         if (state !== null) {
            await updateQuestionRequest(data)
            goBack()
            notify('success', 'Question', 'Successfully updated')
         } else {
            await postSelectRealEnglishWord(data)
            goBack()
            notify('success', 'Question', 'Successfully added')
         }
         return dispatch(questionActions.clearOptions())
      } catch (error) {
         if (AxiosError(error)) {
            return notify('error', 'Question', error.response?.data.message)
         }
         return notify('error', 'Question', 'Something went wrong')
      }
   }

   useEffect(() => {
      dispatch(questionActions.updateOption(state?.question.options || []))
   }, [])

   return (
      <>
         <ModalDelete
            idListen={idListen}
            openModal={openModalDelete}
            isOpenModal={isOpenModalDelete}
            deleteFunction={deleteTest}
         />
         <QuestionModal isOpen={isOpenModalSave} onClose={openModalSave} />
         <CreateTest>
            <Button sx={buttonStyle} type="submit" onClick={openModalSave}>
               + Add Options
            </Button>
            <TestSelectRealEnglishWordsLine>
               {options.map((elem, i) => (
                  <TextContainer
                     elem={elem}
                     index={i}
                     checkedFunc={checkedFunc}
                     openModal={deleteTest}
                  />
               ))}
            </TestSelectRealEnglishWordsLine>
            <DivButtonSaveandGoBack>
               <Button sx={buttonStyleGoBack} onClick={navigateGoBackTest}>
                  go Back
               </Button>
               <Button sx={buttonSave} onClick={saveTest}>
                  Save
               </Button>
            </DivButtonSaveandGoBack>
         </CreateTest>
      </>
   )
}

export default SelectRealEnglishWords

const TestSelectRealEnglishWordsLine = styled('div')(() => ({
   width: '100%',
   height: 'auto',
   margin: '0 auto',
   marginBottom: '18px',
   display: 'grid',
   gridTemplateColumns: 'repeat(auto-fit, minmax(200px, auto))',
   gap: '10px 67px',
   justifyItems: 'center',
}))

const WordEnglish = styled('div')(() => ({
   width: '31.83%',
   height: 'auto',
   background: '#FFFFFF',
   border: '1.53px solid #D4D0D0',
   borderRadius: '8px',
   display: 'flex',
   alignItems: 'center',
}))

const NumberWords = styled('div')(() => ({
   width: '3.47%',
   height: '39.13%',
   margin: '14px 6% 14px 6.13%',
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '16px',
   lineHeight: '18px',
   color: ' #4C4859',
}))

const WordEnglishTest = styled('div')(() => ({
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '1rem',
   lineHeight: '18px',
   color: ' #4C4859',
   width: '47.59%',
   height: '39.13%',
   overflow: 'hidden',
   textOverflow: 'ellipsis',
}))

const Delete = styled('img')(() => ({
   width: '7.66%',
   height: '43.48%',
   cursor: 'pointer',
   marginLeft: '4.98%',
}))

const CreateTest = styled('div')(() => ({
   gap: '5px',
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
const DeleteIconLogo = styled(DeleteIcon)(({ theme }) => ({
   width: '20px',
   height: '20px',
   cursor: 'pointer',
   marginLeft: '10px',
   '&:hover': {
      path: {
         stroke: theme.palette.secondary.main,
      },
   },
}))
