/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AxiosError } from 'axios'
import { styled } from '@mui/material'
import Button from '../../../../../components/UI/buttons/Buttons'
import volumeup from '../../../../../assets/icons/volumeup.svg'
import Checkboxes from '../../../../../components/UI/checkbox/Checkbox'
import { ReactComponent as DeleteIcon } from '../../../../../assets/icons/deletedIcon.svg'
import ModalDelete from '../../../../../components/UI/modal/ModalDelete'
import { questionActions } from '../../../../../redux/question/question.slice'
import ModalUpploadFile from '../../../../../components/UI/modal/ModalUpploadFile'
import volumeUpIcon from '../../../../../assets/icons/volumeOn.svg'
import { useSnackbar } from '../../../../../hooks/useSnackbar'
import MyIconButton from '../../../../../components/UI/Icon-button/IconButton'

import { postListenSelectRealEnglishWord } from '../../../../../api/questionService'

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

const styleCheckboxes = {
   width: '6.97%',
   height: '43.48%',
   marginLeft: '17.97%',
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
   const { options } = useSelector((data) => data.questions)
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { notify } = useSnackbar()
   const [titleListen, setTitle] = useState('')
   const [isOpenModal, setIsOpenModal] = useState(false)
   const [isOpenModalSave, setIsOpenModalSave] = useState(false)
   const [idListen, setListenId] = useState()
   const [isPlaying, setIsPlaying] = useState(false)
   const [deleteArrayListen, setDeleteArrayListen] = useState([])
   const [audioUrl, setAudioUrl] = useState()
   const [audioName, setAudioName] = useState('')
   const [validationObject, setValidationObject] = useState({})
   const [optionOrder, setOptionOrder] = useState(1)
   const [id, setId] = useState('')
   const audioRef = useRef('')

   useEffect(() => {
      setDeleteArrayListen(options)
   }, [options])

   const soundPlay = (elem) => {
      setId(elem.id)
      if (audioUrl) {
         if (isPlaying) {
            audioRef.current.pause()
            setIsPlaying(false)
            setId('')
         } else {
            audioRef.current.play()
            setIsPlaying(true)
         }
      }
   }

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
            isCorrect: false,
            fileUrl: audioUrl.path,
            optionOrder,
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

   const sliceListenWordOne = deleteArrayListen.slice(0, 3)
   const sliceListenWordTwo = deleteArrayListen.slice(3, 6)

   const deleteTest = (id) => {
      dispatch(questionActions.deleteOption(id))
      setIsOpenModal((prevState) => !prevState)
   }

   const handleAudioEnded = () => {
      setIsPlaying(false)
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
      navigate('/admin/test')
   }

   const checkedFunc = (id) => {
      dispatch(questionActions.changeTrueOption(id))
   }

   const saveTest = async () => {
      const data = {
         title,
         duration,
         questionOrder: 2,
         testId,
         optionsRequest: options,
         isActive: true,
      }
      try {
         if (!title || !duration || options.length === 0) {
            return notify('error', 'Question', 'Please fill in all fields')
         }
         await postListenSelectRealEnglishWord(data)
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
            <audio
               style={{ display: 'none' }}
               ref={audioRef}
               type="audio/mp3"
               onEnded={handleAudioEnded}
               controls
            >
               <track kind="captions" srcLang="en" label="English captions" />
               <source src={audioUrl} type="audio/mp3" />
            </audio>
            {sliceListenWordOne.map((elem) => (
               <ListenWordEnglish options={options}>
                  <NumberListenWords>{elem.id}</NumberListenWords>
                  <StyledVolumeup
                     src={elem.id === id ? volumeUpIcon : volumeup}
                     onClick={() => soundPlay(elem)}
                  />
                  <ListenWordEnglishTest>{elem.title}</ListenWordEnglishTest>
                  <Checkboxes
                     sx={styleCheckboxes}
                     color="success"
                     onClick={() => checkedFunc(elem.id)}
                  />
                  <MyIconButton onClick={() => openModal(elem.id)}>
                     <DeleteIconLogo />
                  </MyIconButton>
               </ListenWordEnglish>
            ))}
         </TestListenAndSelectEnglishWords>
         <TestListenAndSelectEnglishWords>
            {sliceListenWordTwo.map((elem) => (
               <ListenWordEnglish options={options}>
                  <NumberListenWords>{elem.id}</NumberListenWords>
                  <StyledVolumeup
                     src={elem.id === id ? volumeUpIcon : volumeup}
                     onClick={() => soundPlay(elem)}
                  />
                  <ListenWordEnglishTest>{elem.title}</ListenWordEnglishTest>
                  <Checkboxes sx={styleCheckboxes} color="success" />
                  <MyIconButton onClick={() => openModal(elem.id)}>
                     <DeleteIconLogo />
                  </MyIconButton>
               </ListenWordEnglish>
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
   display: 'flex',
   gap: '2.2%',
   marginBottom: !options ? '18px' : '0px',
}))

const ListenWordEnglish = styled('div')(({ options }) => ({
   width: '31.83%',
   height: '46px',
   background: '#FFFFFF',
   border: '1.53px solid #D4D0D0',
   borderRadius: '8px',
   display: 'flex',
   alignItems: 'center',
   marginBottom: '18px',
}))

const NumberListenWords = styled('div')(() => ({
   width: '3.47%',
   height: '39.13%',
   margin: '14px 6% 14px 6.46%',
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '16px',
   lineHeight: '18px',
   color: ' #4C4859',
}))

const ListenWordEnglishTest = styled('div')(() => ({
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 500,
   fontSize: '0.875rem',
   textTransform: 'uppercase',
   lineHeight: '16px',
   color: ' #4C4859',
   width: '26.82%',
   height: '34.78%',
   marginLeft: '5.26%',
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
const StyledVolumeup = styled('img')(() => ({
   width: '22px',
   height: '22px',
   cursor: 'pointer',
}))
