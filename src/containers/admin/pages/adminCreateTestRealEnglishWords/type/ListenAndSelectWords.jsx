import { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { AxiosError } from 'axios'
import { styled } from '@mui/material'
import Button from '../../../../../components/UI/buttons/Buttons'
import ModalDelete from '../../../../../components/UI/modal/ModalDelete'
import { questionActions } from '../../../../../redux/question/question.slice'
import ModalUpploadFile from '../../../../../components/UI/modal/ModalUpploadFile'
import { useSnackbar } from '../../../../../hooks/useSnackbar'

import {
   postListenSelectRealEnglishWord,
   updateQuestionRequest,
} from '../../../../../api/questionService'
import { postFiles } from '../../../../../redux/question/question.thunk'
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
}
const buttonSave = {
   width: '10%',
   height: '42px',
   background: '#2AB930',
   borderRadius: '8px',
   color: '#fff',
   ':hover': {
      background: '#1eff00',
   },
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

const ListenWords = ({ title, duration, testId }) => {
   const { options, link } = useSelector((data) => data.questions)
   const dispatch = useDispatch()
   const { state } = useLocation()
   const navigate = useNavigate()
   const { notify } = useSnackbar()
   const [titleListen, setTitle] = useState('')
   const [isOpenModal, setIsOpenModal] = useState(false)
   const [isOpenModalSave, setIsOpenModalSave] = useState(false)
   const [idListen, setListenId] = useState()
   const [audioUrl, setAudioUrl] = useState()
   const [audioName, setAudioName] = useState('')
   const [validationObject, setValidationObject] = useState({})
   const [optionOrder, setOptionOrder] = useState(1)
   const audioRef = useRef('')
   const [isChecked, setIsChecked] = useState(false)

   const addOptions = () => {
      if (titleListen === '' && audioName === '') {
         setValidationObject((prevState) => ({
            ...prevState,
            titleInputWarning: 'Please add a title!',
            fileURLValue: 'Please',
         }))
      } else if (titleListen === '') {
         setValidationObject((prevState) => ({
            ...prevState,
            titleInputWarning: 'Please add a title!',
         }))
      } else if (audioName === '') {
         setValidationObject((prevState) => ({
            ...prevState,
            fileURLValue: 'Please',
         }))
      } else {
         const data = {
            title: titleListen,
            isCorrect: isChecked,
            fileUrl: link,
            optionOrder,
            id: optionOrder,
            isActive: true,
         }
         setOptionOrder((prevState) => prevState + 1)
         dispatch(questionActions.addOption(data))
         setIsOpenModalSave((prevState) => !prevState)
         setValidationObject({})
         setTitle('')
         setAudioName('')
      }
   }
   const onDrop = (acceptedFiles) => {
      setValidationObject((prevState) => ({
         ...prevState,
         fileURLValue: '',
      }))
      const file = acceptedFiles[0]
      setAudioName(file.name)
      dispatch(postFiles({ file }))
      const audioUrl = URL.createObjectURL(file)
      setAudioUrl(file)
      audioRef.current.src = audioUrl
   }

   const openModal = (id) => {
      setIsOpenModal((prevState) => !prevState)
      setListenId(id)
   }

   const openModalSave = () => {
      setIsOpenModalSave((prevState) => !prevState)
   }

   const deleteTest = (id) => {
      dispatch(questionActions.deleteOption(id))
      setIsOpenModal((prevState) => !prevState)
   }

   const titleChange = (e) => {
      const valueInput = e.target.value
      setTitle(valueInput)
      setValidationObject((prevState) => ({
         ...prevState,
         titleInputWarning: '',
      }))
      if (!valueInput) {
         setValidationObject((prevState) => ({
            ...prevState,
            titleInputWarning: 'Please add a title!',
         }))
      }
   }

   const goBackCloseFunction = (e) => {
      e.preventDefault()
      openModalSave()
      setValidationObject({})
      setAudioName('')
      setAudioUrl()
      setTitle('')
   }

   const goBack = () => {
      navigate(`/admin/test/${testId}`)
   }

   const checkedFunc = (e, id) => {
      setIsChecked(e.target.checked)
      dispatch(questionActions.changeTrueOption(id))
   }

   const saveTest = async () => {
      const data = {
         title,
         duration,
         questionOrder: 2,
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
            await postListenSelectRealEnglishWord(data)
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
         <ModalUpploadFile
            audioName={audioName}
            audioUrl={audioUrl}
            addOptions={addOptions}
            validationObject={validationObject}
            onDrop={onDrop}
            isOpenModalSave={isOpenModalSave}
            goBackCloseFunction={goBackCloseFunction}
            titleChange={titleChange}
         />
         <ModalDelete
            deleteFunction={deleteTest}
            openModal={openModal}
            isOpenModal={isOpenModal}
            idListen={idListen}
         />
         <Button sx={buttonStyle} type="submit" onClick={openModalSave}>
            + Add Options
         </Button>
         <TestListenAndSelectEnglishWords options={options}>
            {options.map((elem, i) => (
               <AdminMultiplySelect
                  key={elem.id}
                  elem={elem}
                  index={i}
                  checkedFunc={checkedFunc}
                  openModal={openModal}
               />
            ))}
         </TestListenAndSelectEnglishWords>
         <DivButtonSaveandGoBack>
            <Button sx={buttonStyleGoBack} onClick={goBack}>
               go Back
            </Button>
            <Button sx={buttonSave} onClick={saveTest}>
               Save
            </Button>
         </DivButtonSaveandGoBack>
      </>
   )
}
export default ListenWords
const DivButtonSaveandGoBack = styled('div')(() => ({
   width: '100%',
   height: '42px',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'end',
   marginTop: '32px',
   gap: '1.95%',
}))

const TestListenAndSelectEnglishWords = styled('div')(({ options }) => ({
   width: '100%',
   height: 'auto',
   margin: '0 auto',
   marginBottom: !options ? '18px' : '0px',
   display: 'flex',
   flexWrap: 'wrap',
   justifyContent: 'flex-start',
   alignItems: 'center',
   gap: '10px 67px',
   justifyItems: 'center',
}))
