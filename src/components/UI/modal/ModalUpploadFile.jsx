import { Box, Modal, styled } from '@mui/material'
import { React } from 'react'
import { useDropzone } from 'react-dropzone'
import Button from '../buttons/Buttons'
import Input from '../input/Input'
import closeCross from '../../../assets/icons/closeCross.svg'

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
      background: '#2c9a00',
   },
}

const ModalUpploadFile = ({
   isOpenModalSave,
   goBackCloseFunction,
   onDrop,
   validationObject,
   addOptions,
   titleChange,
   audioUrl,
   audioName,
}) => {
   const { getRootProps, getInputProps } = useDropzone({
      accept: 'audio/mp3',
      onDrop,
   })

   return (
      <div>
         <Modal open={isOpenModalSave} onClose={goBackCloseFunction}>
            <BoxStyle>
               <StyledIcon src={closeCross} onClick={goBackCloseFunction} />
               <DivTitle>
                  <TitleText>Title</TitleText>
                  <Input
                     fullWidth
                     error={validationObject.titleInputWarning}
                     onChange={titleChange}
                  />
                  {validationObject.titleInputWarning && (
                     <Warning>{validationObject.titleInputWarning}</Warning>
                  )}
                  <DownloadAudioFileDiv>
                     <input
                        {...getInputProps()}
                        style={{ display: 'none' }}
                        id="file"
                     />
                     <UpploadButton
                        {...getRootProps()}
                        audioUrl={audioUrl}
                        variant="outlined"
                        errorButton={validationObject.fileURLValue}
                     >
                        {validationObject.fileURLValue
                           ? 'upload an audio file'
                           : 'Uppload audio file'}
                     </UpploadButton>
                     <AudioFileName id="file">
                        {audioUrl ? audioName : 'file_name_not_found!'}
                     </AudioFileName>
                  </DownloadAudioFileDiv>
               </DivTitle>
               <DivButtonGoBackAndSave>
                  <DivButton>
                     <Button
                        sx={styleButtonGoBack}
                        onClick={goBackCloseFunction}
                     >
                        Go back
                     </Button>
                     <Button sx={buttonStyleSave} onClick={addOptions}>
                        Save
                     </Button>
                  </DivButton>
               </DivButtonGoBackAndSave>
            </BoxStyle>
         </Modal>
      </div>
   )
}

export default ModalUpploadFile

const BoxStyle = styled(Box)(() => ({
   position: 'absolute',
   top: '45%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   backgroundColor: '#fff',
   borderRadius: '15px',
   boxShadow: '0px 4px 39px -5px rgba(196, 196, 196, 0.6)',
}))
const DivTitle = styled('div')(() => ({
   width: '517px',
   height: '120px',
   margin: '0 auto',
   paddingTop: '41.83px',
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
const UpploadButton = styled(Button)(({ audioUrl, errorButton }) => ({
   boxSizing: 'border-box',
   fontSize: '14px',
   lineHeight: '16px',
   padding: audioUrl ? '14px  24px' : '14px  28px',
   fontWeight: 700,
   gap: '8px',
   fontFamily: 'Poppins',
   marginBottom: '3px',
   marginTop: '24px',
   textTransform: 'capitalize',
   borderColor: errorButton ? '#f00' : '#3A10E5',
   color: errorButton ? '#f00' : '#3A10E5',
   ':hover': {
      background: '#3A10E5',
      color: '#FFFFFF',
      variant: 'contained',
   },
}))
const AudioFileName = styled('p')(() => ({
   marginTop: '30px',
}))
const DownloadAudioFileDiv = styled('div')(() => ({
   cursor: 'pointer',
   display: 'flex',
   alignItems: 'center',
   gap: '18px',
}))
const Warning = styled('p')(() => ({
   color: '#ff0000',
   marginTop: '-1px',
   marginBottom: '-10px',
   textTransform: 'uppercase',
}))
