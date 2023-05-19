/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { styled } from '@mui/material'
import Checkboxes from '../../../../../components/UI/checkbox/Checkbox'
import DeleteIcon from '../../../../../assets/icons/deletedIcon.svg'
import closeCross from '../../../../../assets/icons/closeCross.svg'
import Button from '../../../../../components/UI/buttons/Buttons'
import ModalReusable from '../../../../../components/UI/modal/Modal'
import ModalDelete from '../ModalDelete'

const realEnglishWords = [
   {
      word: 'advantage',
      id: 1,
   },
   {
      word: 'advantage',
      id: 2,
   },
   {
      word: 'advantage',
      id: 3,
   },
   {
      word: 'advantage',
      id: 4,
   },
   {
      word: 'advantage',
      id: 5,
   },
   {
      word: 'advantage',
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
      background: '#00ff2a',
   },
}

const modalStyleDiv = {
   width: '637px',
   height: '376px',
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
      background: '#059903',
      boxShadow: '0px -0.5px 10px 0px rgba(0, 0, 0, 0.5)',
   },
}

const styleCheckboxes = {
   width: '6.97%',
   height: '43.48%',
   marginLeft: '29.89%',
}
const SelectRealEnglishWords = () => {
   const [isOpenModalDelete, setIsOpenModalDelete] = useState(false)
   const [isOpenModalSave, setIsOpenModalSave] = useState(false)
   const [idListen, setListenId] = useState()
   const [deleteArrayListen, setDeleteArrayListen] = useState()
   const sliceWordOne = realEnglishWords.slice(0, 3)
   const sliceWordTwo = realEnglishWords.slice(3, 6)
   const navigate = useNavigate()
   const openModalDelete = (id) => {
      setIsOpenModalDelete((prevState) => !prevState)
      setListenId(id)
   }
   const openModalSave = () => {
      setIsOpenModalSave((prevState) => !prevState)
   }
   const deleteTest = () => {
      setIsOpenModalDelete((prevState) => !prevState)
      setDeleteArrayListen(
         realEnglishWords.filter((elem) => elem.id !== idListen)
      )
   }
   const navigateGoBackTest = () => {
      navigate(-1)
   }
   return (
      <>
         <ModalDelete
            openModal={openModalDelete}
            isOpenModal={isOpenModalDelete}
            deleteFunction={deleteTest}
         />
         <ModalReusable
            isOpen={isOpenModalSave}
            handleClose={openModalSave}
            modalStyle={modalStyleDiv}
         >
            <StyledIcon src={closeCross} onClick={openModalSave} />
            <DivTitle>
               <TitleText>Title</TitleText>
               <InfoTypeTest>Select a real English words</InfoTypeTest>
               <DivTrueOption>
                  <IsTrueOption>Is true option?</IsTrueOption>
                  <Checkboxes sx={{ marginTop: '5.83px' }} color="success" />
               </DivTrueOption>
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
         <CreateTest>
            <TestSelectRealEnglishWordsLine>
               {sliceWordOne.map((elem) => (
                  <WordEnglish>
                     <NumberWords>{elem.id}</NumberWords>
                     <WordEnglishTest>{elem.word}</WordEnglishTest>
                     <Checkboxes sx={styleCheckboxes} color="success" />
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
                     <WordEnglishTest>{elem.word}</WordEnglishTest>
                     <Checkboxes sx={styleCheckboxes} color="success" />
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
               <Button sx={buttonSave} onClick={openModalSave}>
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
   height: '46px',
   margin: '0 auto',
   display: 'flex',
   gap: '2.2%',
   marginBottom: '18px',
}))

const WordEnglish = styled('div')(() => ({
   width: '31.83%',
   height: '46px',
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
   width: '27.59%',
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
