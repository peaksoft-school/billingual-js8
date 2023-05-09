import { useState } from 'react'
import { styled } from '@mui/material'
import { Howl } from 'howler'
import Button from '../../../../../components/UI/buttons/Buttons'
import { ReactComponent as Volumeup } from '../../../../../assets/icons/volumeup.svg'
import Checkboxes from '../../../../../components/UI/checkbox/Checkbox'
import DeleteIcon from '../../../../../assets/icons/DeletedIcon.svg'
import closeCross from '../../../../../assets/icons/closeCross.svg'
import ModalkaDelete from '../DeleteModal'
import ModalReusable from '../../../../../components/UI/modal/Modal'

const realEnglishWords = [
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

const ListenWords = ({ audio }) => {
   const [isOpenModal, setState] = useState(false)
   const [isOpenModalSave, setIsOpenModalSave] = useState(false)
   const [upploadFile, setUpploadFile] = useState({})
   const soundPlay = (src) => {
      const sound = new Howl({
         src,
         html5: true,
      })
      sound.play()
   }
   const openModal = () => {
      setState((prevState) => !prevState)
   }
   const openModalSave = () => {
      setIsOpenModalSave((prevState) => !prevState)
   }

   const changeFileName = (event) => {
      setUpploadFile(event.target.files[0])
   }
   const sliceWordOne = realEnglishWords.slice(0, 3)
   const sliceWordTwo = realEnglishWords.slice(3, 6)
   return (
      <div style={{ paddingBottom: '50px' }}>
         <ModalReusable
            isOpen={isOpenModalSave}
            handleClose={openModalSave}
            modalStyle={modalStyleDiv}
         >
            <StyledIcon src={closeCross} onClick={openModalSave} />
            <DivTitle>
               <TitleText>Title</TitleText>
               <InfoTypeTest>Listen and select English word</InfoTypeTest>
               <div
                  style={{ display: 'flex', alignItems: 'center', gap: '18px' }}
               >
                  <UpploadFile htmlFor="file">Uppload audio file</UpploadFile>
                  <UpploadAudioFile
                     id="file"
                     type="file"
                     accept="image/*"
                     onChange={changeFileName}
                  />
                  <UpploadFileName>{upploadFile.name}</UpploadFileName>
               </div>
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
         <ModalkaDelete openModal={openModal} isOpenModal={isOpenModal} />
         <TestSelectRealEnglishWordsLine>
            {sliceWordOne.map((elem) => (
               <WordEnglish>
                  <NumberWords>{elem.id}</NumberWords>
                  <StyledVolumeup onClick={() => soundPlay(audio)} />
                  <WordEnglishTest>{elem.word}</WordEnglishTest>
                  <DivCheckboxAndDeleteButton>
                     <Checkboxes color="success" />
                     <Delete
                        onClick={openModal}
                        src={DeleteIcon}
                        alt="sdgsdfsd"
                     />
                  </DivCheckboxAndDeleteButton>
               </WordEnglish>
            ))}
         </TestSelectRealEnglishWordsLine>
         <TestSelectRealEnglishWordsLine>
            {sliceWordTwo.map((elem) => (
               <WordEnglish>
                  <NumberWords>{elem.id}</NumberWords>
                  <StyledVolumeup onClick={() => soundPlay(audio)} />
                  <WordEnglishTest>{elem.word}</WordEnglishTest>
                  <DivCheckboxAndDeleteButton>
                     <Checkboxes color="success" />
                     <Delete
                        onClick={openModal}
                        src={DeleteIcon}
                        alt="sdgsdfsd"
                     />
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
      </div>
   )
}
export default ListenWords
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
}))

const DivCheckboxAndDeleteButton = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
   marginLeft: '40px',
   width: '54px',
}))
const Delete = styled('img')(() => ({
   width: '20px',
   height: '20px',
   cursor: 'pointer',
}))
const StyledVolumeup = styled(Volumeup)(() => ({
   margin: '16px 13px 16.23px 13px',
   alignItems: 'center',
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
