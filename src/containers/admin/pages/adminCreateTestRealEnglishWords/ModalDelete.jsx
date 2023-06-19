import { Box, Modal, Typography, styled } from '@mui/material'
import redCross from '../../../../assets/icons/redCross.svg'
import closeCross from '../../../../assets/icons/closeCross.svg'
import Button from '../../../../components/UI/buttons/Buttons'

const style = { borderRadius: '20px', borderStyle: 'none' }

const ModalDelete = ({ isOpenModal, openModal, deleteFunction }) => {
   return (
      <Modal modalStyle={style} open={isOpenModal} onClose={openModal}>
         <StyledModal>
            <StyledIcon src={closeCross} onClick={openModal} />
            <RedCrossImage src={redCross} />
            <Title>Do you want delete? </Title>
            <Text>You can t restore this file </Text>
            <Buttons>
               <StyledButton onClick={openModal}>Cancel</StyledButton>
               <DeleteButton variant="contained" onClick={deleteFunction}>
                  Delete
               </DeleteButton>
            </Buttons>
         </StyledModal>
      </Modal>
   )
}
export default ModalDelete
const StyledModal = styled(Box)(() => ({
   width: '520px',
   height: '368px',
   borderRadius: '20px',
   position: 'absolute',
   top: '45%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   background: '#fff',
}))
const StyledIcon = styled('img')(() => ({
   marginLeft: '475px',
   marginTop: '22px',
   marginRight: '22px',
   cursor: 'pointer',
   ':hover': {
      backgroundColor: '#b6ea7f',
      borderRadius: '300px',
      textColor: '#fff',
   },
}))
const RedCrossImage = styled('img')(() => ({
   display: 'flex',
   justifyContent: 'center',
   marginTop: '15px',
   marginLeft: '227px',
}))
const Title = styled(Typography)(() => ({
   fontFamily: 'Gilroy',
   marginTop: '51px',
   marginLeft: '170px',
   marginBottom: '7px',
   fontSize: '20px',
   lineHeight: '23px',
   display: 'flex',
   alignItems: 'center',
   textAlign: 'center',
   color: '#4C4859',
}))
const Text = styled(Typography)(() => ({
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '16px',
   lineHeight: '18px',
   color: '#4C4859',
   marginLeft: '165px',
   marginBottom: '48px',
}))
const Buttons = styled('div')(() => ({
   background: '#F0F1F1',
   borderRadius: '0px 0px 20px 20px',
   paddingTop: '26px',
   paddingBottom: '22px',
}))
const StyledButton = styled(Button)(() => ({
   border: '2px solid #3A10E5',
   marginLeft: '153px',
   marginRight: '16px',
   height: '42px',
   width: '98px',
}))
const DeleteButton = styled(Button)(() => ({
   width: '98px',
   height: '42px',
}))
