import React, { useState } from 'react'
import { styled } from '@mui/material'
import Checkboxes from '../../../../../components/UI/checkbox/Checkbox'
import DeleteIcon from '../../../../../assets/icons/DeletedIcon.svg'
import closeCross from '../../../../../assets/icons/closeCross.svg'
import Button from '../../../../../components/UI/buttons/Buttons'
import ModalkaDelete from '../DeleteModal'
import ModalReusable from '../../../../../components/UI/modal/Modal'

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
   width: '105px',
   height: '42px',
   background: '#FFFFFF',
   border: '2px solid #3A10E5',
   borderRadius: '8px',
   fontFamily: 'Gilroy',
   fontSize: '14px',
   lineHeight: '16px',
}
const buttonSave = {
   width: '82px',
   height: '42px',
   background: '#2AB930',
   borderRadius: '8px',
   color: '#fff',
   ':hover': {
      background: 'red',
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
      background:
         'linear-gradient(90deg, #29bf26 12%, #00ff37 50%, #35bf43 86%)',
   },
}
const SelectRealEnglishWords = () => {
   const [isOpenModalDelete, setIsOpenModalDelete] = useState(false)
   const [isOpenModalSave, setIsOpenModalSave] = useState(false)
   const sliceWordOne = realEnglishWords.slice(0, 3)
   const sliceWordTwo = realEnglishWords.slice(3, 6)
   const openModalDelete = () => {
      setIsOpenModalDelete((prevState) => !prevState)
   }
   const openModalSave = () => {
      setIsOpenModalSave((prevState) => !prevState)
   }
   return (
      <>
         <ModalkaDelete
            openModal={openModalDelete}
            isOpenModal={isOpenModalDelete}
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
         <CreateTest style={{ paddingBottom: '50px' }}>
            <TestSelectRealEnglishWordsLine>
               {sliceWordOne.map((elem) => (
                  <WordEnglish>
                     <NumberWords>{elem.id}</NumberWords>
                     <WordEnglishTest>{elem.word}</WordEnglishTest>
                     <DivCheckboxAndDeleteButton>
                        <Checkboxes color="success" />
                        <Delete onClick={openModalDelete} src={DeleteIcon} />
                     </DivCheckboxAndDeleteButton>
                  </WordEnglish>
               ))}
            </TestSelectRealEnglishWordsLine>
            <TestSelectRealEnglishWordsLine>
               {sliceWordTwo.map((elem) => (
                  <WordEnglish>
                     <NumberWords>{elem.id}</NumberWords>
                     <WordEnglishTest>{elem.word}</WordEnglishTest>
                     <DivCheckboxAndDeleteButton>
                        <Checkboxes color="success" />
                        <Delete onClick={openModalDelete} src={DeleteIcon} />
                     </DivCheckboxAndDeleteButton>
                  </WordEnglish>
               ))}
            </TestSelectRealEnglishWordsLine>
            <TestSelectRealEnglishWordssss>
               <Button sx={buttonStyleGoBack}>go Back</Button>
               <Button sx={buttonSave} onClick={openModalSave}>
                  Save
               </Button>
            </TestSelectRealEnglishWordssss>
         </CreateTest>
      </>
   )
}

export default SelectRealEnglishWords

const TestSelectRealEnglishWordssss = styled('div')(() => ({
   width: '203px',
   display: 'flex',
   gap: '16px',
   marginLeft: '617px',
   marginTop: '32px',
}))

const TestSelectRealEnglishWordsLine = styled('div')(() => ({
   width: '821px',
   height: '46px',
   margin: '0 auto',
   display: 'flex',
   gap: '19px',
   marginBottom: '18px',
}))

const WordEnglish = styled('div')(() => ({
   width: '261px',
   height: '46px',
   background: '#FFFFFF',
   border: '1.53px solid #D4D0D0',
   borderRadius: '8px',
   display: 'flex',
   alignItems: 'center',
}))

const NumberWords = styled('div')(() => ({
   width: '9px',
   height: '18px',
   marginLeft: '16px',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '16px',
   lineHeight: '18px',
   color: ' #4C4859',
}))

const WordEnglishTest = styled('div')(() => ({
   width: '72px',
   height: '18px',
   fontStyle: 'normal',
   fontweight: 400,
   fontSize: '16px',
   lineHeight: '18px',
   color: '#4C4859',
   marginLeft: '15.94px',
}))

const DivCheckboxAndDeleteButton = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
   marginLeft: '78px',
   width: '54px',
}))
const Delete = styled('img')(() => ({
   width: '20px',
   height: '20px',
   cursor: 'pointer',
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
const CreateTest = styled('div')(() => ({ display: 'flex', gap: '5px' }))
