/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { styled } from '@mui/material'
import { Howl } from 'howler'
import Button from '../../../../../components/UI/buttons/Buttons'
import { ReactComponent as Volumeup } from '../../../../../assets/icons/volumeup.svg'
import Checkboxes from '../../../../../components/UI/checkbox/Checkbox'
import DeleteIcon from '../../../../../assets/icons/deletedIcon.svg'
import closeCross from '../../../../../assets/icons/closeCross.svg'
import ModalReusable from '../../../../../components/UI/modal/Modal'
import ModalDelete from '../ModalDelete'

const listenEglishWords = [
   {
      word: 'word 1',
      id: 1,
   },
   {
      word: 'word 2',
      id: 2,
   },
   {
      word: 'word 3',
      id: 3,
   },
   {
      word: 'word 4',
      id: 4,
   },
   {
      word: 'word 5',
      id: 5,
   },
   {
      word: 'word 6',
      id: 6,
   },
]

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
const modalStyleDiv = {
   width: '637px',
   height: '406px',
   marginTop: '100px',
   borderRadius: '20px',
}
const styleButtonGoBack = {
   width: '105px',
   height: '42px',
   background: '#FFFFFF',
   border: '2px solid #3A10E5',
   borderRadius: '8px',
   ':hover': {
      background: '#3700ff',
      color: '#fff',
   },
}
const buttonStyleSave = {
   width: '82px',
   height: '42px',
   background: '#2AB930',
   borderRadius: '8px',
   color: '#fff',
   ':hover': {
      background:
         'linear-gradient(90deg, #29bf26 12%, #00ff37 50%, #35bf43 86%)',
   },
}

const styleCheckboxes = {
   width: '6.97%',
   height: '43.48%',
   marginLeft: '17.97%',
}

const ListenWords = ({ audio }) => {
   const { options } = useSelector((data) => data.questions)
   const [isOpenModal, setIsOpenModal] = useState(false)
   const [isOpenModalSave, setIsOpenModalSave] = useState(false)
   const [upploadFile, setUpploadFile] = useState({})
   const [idListen, setListenId] = useState()
   const [deleteArrayListen, setDeleteArrayListen] = useState(listenEglishWords)
   const soundPlay = (src) => {
      const sound = new Howl({
         src,
         html5: true,
      })
      sound.play()
   }
   const openModal = (id) => {
      setIsOpenModal((prevState) => !prevState)
      setListenId(id)
   }
   console.log(options)
   const openModalSave = () => {
      setIsOpenModalSave((prevState) => !prevState)
   }

   const changeFileName = (event) => {
      setUpploadFile(event.target.files[0])
   }
   const sliceListenWordOne = deleteArrayListen.slice(0, 3)
   const sliceListenWordTwo = deleteArrayListen.slice(3, 6)

   const deleteTest = () => {
      setIsOpenModal((prevState) => !prevState)
      setDeleteArrayListen(
         deleteArrayListen.filter((elem) => elem.id !== idListen)
      )
   }
   return (
      <>
         <ModalReusable
            isOpen={isOpenModalSave}
            handleClose={openModalSave}
            modalStyle={modalStyleDiv}
         >
            <StyledIcon src={closeCross} onClick={openModalSave} />
            <DivTitle>
               <TitleText>Title</TitleText>
               <InfoTypeTest>Listen and select English word</InfoTypeTest>
               <StyleDivUpploadFile>
                  <UpploadFile htmlFor="file">Uppload audio file</UpploadFile>
                  <UpploadAudioFile
                     id="file"
                     type="file"
                     accept="audio/*"
                     onChange={changeFileName}
                  />
                  <UpploadFileName>{upploadFile.name}</UpploadFileName>
               </StyleDivUpploadFile>
            </DivTitle>
            <DivButtonGoBackAndSave>
               <DivButton>
                  <Button sx={styleButtonGoBack} onClick={openModalSave}>
                     Go back
                  </Button>
                  <Button sx={buttonStyleSave}>Save</Button>
               </DivButton>
            </DivButtonGoBackAndSave>
         </ModalReusable>
         <ModalDelete
            deleteFunction={deleteTest}
            openModal={openModal}
            isOpenModal={isOpenModal}
         />
         <TestListenAndSelectEnglishWords>
            {sliceListenWordOne.map((elem) => (
               <ListenWordEnglish>
                  <NumberListenWords>{elem.id}</NumberListenWords>
                  <StyledVolumeup onClick={() => soundPlay(audio)} />
                  <ListenWordEnglishTest>{elem.word}</ListenWordEnglishTest>
                  <Checkboxes sx={styleCheckboxes} color="success" />
                  <Delete onClick={() => openModal(elem.id)} src={DeleteIcon} />
               </ListenWordEnglish>
            ))}
         </TestListenAndSelectEnglishWords>
         <TestListenAndSelectEnglishWords>
            {sliceListenWordTwo.map((elem) => (
               <ListenWordEnglish>
                  <NumberListenWords>{elem.id}</NumberListenWords>
                  <StyledVolumeup onClick={() => soundPlay(audio)} />
                  <ListenWordEnglishTest>{elem.word}</ListenWordEnglishTest>
                  <Checkboxes sx={styleCheckboxes} color="success" />
                  <Delete onClick={openModal} src={DeleteIcon} />
               </ListenWordEnglish>
            ))}
         </TestListenAndSelectEnglishWords>
         <DivButtonSaveandGoBack>
            <Button sx={buttonStyleGoBack}>go Back</Button>
            <Button sx={buttonSave} onClick={openModalSave}>
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

const TestListenAndSelectEnglishWords = styled('div')(() => ({
   width: '100%',
   height: '46px',
   margin: '0 auto',
   display: 'flex',
   gap: '2.2%',
   marginBottom: '18px',
}))

const ListenWordEnglish = styled('div')(() => ({
   width: '31.83%',
   height: '46px',
   background: '#FFFFFF',
   border: '1.53px solid #D4D0D0',
   borderRadius: '8px',
   display: 'flex',
   alignItems: 'center',
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

const Delete = styled('img')(() => ({
   width: '7.66%',
   height: '43.48%',
   cursor: 'pointer',
   marginLeft: '4.98%',
}))
const StyledVolumeup = styled(Volumeup)(() => ({
   width: '8.43%',
   height: '47.83%',
   cursor: 'pointer',
}))
const DivTitle = styled('div')(() => ({
   width: '517px',
   height: '120px',
   margin: '0 auto',
   marginTop: '74px',
}))
const TitleText = styled('div')(() => ({
   width: '37.28px',
   height: '18px',
   fontFamily: 'Gilroy',
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
   marginBottom: '24px',
}))
const DivButtonGoBackAndSave = styled('div')(() => ({
   width: '637px',
   height: '94px',
   background: ' #F0F1F1',
   borderRadius: '0px 0px 20px 20px',
   marginTop: '110px',
   display: 'flex',
   alignItems: 'center',
}))
const DivButton = styled('div')(() => ({
   width: '203px',
   height: '42px',
   marginLeft: '374px',
   display: 'flex',
   gap: '16px',
}))
const UpploadAudioFile = styled('input')(() => ({
   background: '#FFFFFF',
   border: '1.53px solid #3A10E5',
   borderRadius: '8px',
   fontFamily: 'DINNextRoundedLTW04-Medium',
   fontStyle: 'normal',
   fontWeight: 500,
   fontSize: '16px',
   lineHeight: '18px',
   display: 'none',
   width: '159px',
   height: '46px',
   alignItems: 'center',
   textAlign: 'center',
   color: '#3A10E5',
   marginTop: '24px',
}))
const UpploadFile = styled('label')(() => ({
   padding: '14px 16px 14px 16px',
   background: '#FFFFFF',
   border: '1.53px solid #3A10E5',
   borderRadius: '8px',
   color: '#3A10E5',
   fontFamily: 'Gilroy',
   fontStyle: 'normal',
   fontWeight: 500,
   fontSize: '16px',
   lineHeight: '18px',
   alignItems: 'center',
   textAlign: 'center',
   cursor: 'pointer',
}))
const UpploadFileName = styled('div')(() => ({
   width: '233px',
   height: '18px',
   fontFamily: 'Gilroy',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '16px',
   lineHeight: '18px',
   color: '#4C4859',
}))
const StyledIcon = styled('img')(() => ({
   marginLeft: '595px',
   marginTop: '20px',
   marginRight: '20px',
   cursor: 'pointer',
   ':hover': {
      backgroundColor: '#b6ea7f',
      borderRadius: '300px',
      textColor: '#fff',
   },
}))
const StyleDivUpploadFile = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
   gap: '18px',
}))
