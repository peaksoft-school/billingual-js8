/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AxiosError } from 'axios'
import { styled } from '@mui/material'
import Checkboxes from '../../../../../components/UI/checkbox/Checkbox'
import DeleteIcon from '../../../../../assets/icons/deletedIcon.svg'
import Button from '../../../../../components/UI/buttons/Buttons'
import ModalDelete from '../ModalDelete'
import QuestionModal from '../../../../../components/UI/modal/QuestionModal'
import { questionActions } from '../../../../../redux/question/question.slice'
import { useSnackbar } from '../../../../../hooks/useSnackbar'
import { postSelectRealEnglishWord } from '../../../../../api/questionService'

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
   const { notify } = useSnackbar()
   const [isOpenModalDelete, setIsOpenModalDelete] = useState(false)
   const [isOpenModalSave, setIsOpenModalSave] = useState(false)
   const [idListen, setListenId] = useState()
   const [deleteArrayListen, setDeleteArrayListen] = useState([])
   const sliceWordOne = deleteArrayListen.slice(0, 3)
   const sliceWordTwo = deleteArrayListen.slice(3, 6)

   useEffect(() => {
      setDeleteArrayListen(options)
   }, [options])
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
   const checkedFunc = (id) => {
      dispatch(questionActions.changeTrueOption(id))
   }
   const navigateGoBackTest = () => {
      navigate(-1)
   }
   const goBack = () => {
      navigate('/admin/test')
   }
   const saveTest = async () => {
      const data = {
         title,
         duration,
         questionOrder: 1,
         testId,
         options,
      }
      try {
         if (!title || !duration || options.length === 0) {
            return notify('error', 'Question', 'Please fill in all fields')
         }
         await postSelectRealEnglishWord(data)
         goBack()
         notify('success', 'Question', 'Successfully added')
         return dispatch(questionActions.clearOptions())
      } catch (error) {
         if (AxiosError(error)) {
            return notify('error', 'Question', error.response?.data.message)
         }
         return notify('error', 'Question', 'Something went wrong')
      }
   }
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
               {sliceWordOne.map((elem) => (
                  <WordEnglish>
                     <NumberWords>{elem.id}</NumberWords>
                     <WordEnglishTest>{elem.title}</WordEnglishTest>
                     <Checkboxes
                        sx={styleCheckboxes}
                        color="success"
                        checked={elem.isCorrect}
                        onClick={() => checkedFunc(elem.id)}
                     />
                     <Delete
                        onClick={() => openModalDelete(elem.id)}
                        src={DeleteIcon}
                     />
                  </WordEnglish>
               ))}
            </TestSelectRealEnglishWordsLine>
            <TestSelectRealEnglishWordsLine>
               {sliceWordTwo.map((elem) => (
                  <WordEnglish>
                     <NumberWords>{elem.id}</NumberWords>
                     <WordEnglishTest>{elem.title}</WordEnglishTest>
                     <Checkboxes
                        sx={styleCheckboxes}
                        color="success"
                        checked={elem.isCorrect}
                        onClick={() => checkedFunc(elem.id)}
                     />
                     <Delete
                        onClick={() => openModalDelete(elem.id)}
                        src={DeleteIcon}
                     />
                  </WordEnglish>
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
   display: 'flex',
   gap: '2.2%',
   marginBottom: '18px',
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
}))

const Delete = styled('img')(() => ({
   width: '7.66%',
   height: '43.48%',
   cursor: 'pointer',
   marginLeft: '4.98%',
}))
const DivButtonGoBackAndSave = styled('div')(() => ({
   width: '637px',
   height: '94px',
   background: ' #F0F1F1',
   borderRadius: '0px 0px 20px 20px',
   marginTop: '80px',
   display: 'flex',
   alignItems: 'center',
}))

const DivTitle = styled('div')(() => ({
   width: '517px',
   height: '120px',
   margin: '0 auto',
   marginTop: '40px',
}))
const TitleText = styled('div')(() => ({
   width: '37.28px',
   height: '18px',
   fontFamily: 'DINNextRoundedLTW04-Medium',
   fontStyle: 'normal',
   fontWeight: 500,
   fontSize: '16px',
   lineHeight: '18px',
   display: 'flex',
   alignItems: 'center',
   color: '#4B4759',
   paddingBottom: '16px',
}))

const InfoTypeTest = styled('div')(() => ({
   boxSizing: 'border-box',
   width: '517px',
   height: '46px',
   background: '#FFFFFF',
   border: ' 1.53px solid #D4D0D0',
   borderRadius: '8px',
   paddingLeft: '16px',
   paddingTop: '11.1px',
}))

const IsTrueOption = styled('div')(() => ({
   width: '99px',
   textAlign: 'center',
   height: '18px',
   fontFamily: 'DINNextRoundedLTW01-Regular',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '16px',
   lineHeight: '18px',
   color: ' #4C4859',
   marginTop: '20px',
}))

const DivButton = styled('div')(() => ({
   width: '203px',
   height: '42px',
   marginLeft: '374px',
   display: 'flex',
   gap: '16px',
}))
const StyledIcon = styled('img')(() => ({
   marginLeft: '583px',
   marginTop: '20px',
   marginRight: '32px',
   cursor: 'pointer',
   ':hover': {
      backgroundColor: '#b6ea7f',
      borderRadius: '300px',
      textColor: '#fff',
   },
}))
const DivTrueOption = styled('div')(() => ({ display: 'flex', gap: '5px' }))
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

const ImageVector = styled('img')(() => ({
   width: '6.77%',
   height: '35%',
}))
