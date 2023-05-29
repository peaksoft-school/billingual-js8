import { Grid, Typography, styled } from '@mui/material'
import { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import img from '../../../../../assets/images/describeimage.png'
import Input from '../../../../../components/UI/input/Input'
import Button from '../../../../../components/UI/buttons/Buttons'

import { useSnackbar } from '../../../../../hooks/useSnackbar'
import { postDescribeImage } from '../../../../../redux/question/question.thunk'

const DescribeImage = ({ title, duration, testId }) => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { link } = useSelector((state) => state.questions)
   const inputRef = useRef(null)
   const [input, setInput] = useState('')
   const { notify } = useSnackbar()

   const [imgFile, setImgFile] = useState(null)
   const [imgUrl, setImgUrl] = useState(null)
   const [imgName, setImgName] = useState('')

   const goBackHandler = () => {
      navigate('/admin/test')
   }

   const handleImageClick = () => {
      inputRef.current.click()
   }
   const handleImageChange1 = async (event) => {
      const files = event.target.files[0]
      setImgName(files.name)
      setImgFile(files)
      const imgUrl = URL.createObjectURL(files)
      setImgUrl(imgUrl)
   }

   useEffect(() => {
      setImgFile(link)
   }, [link])

   const submitTests = (e) => {
      e.preventDefault()
      const describeImgData = {
         title,
         correctAnswer: input,
         duration,
         questionOrder: 11,
         file: imgFile,
         testId,
         isActive: true,
      }
      dispatch(postDescribeImage({ describeImgData, notify, imgFile }))
      goBackHandler()
   }

   const changeInputHandler = (e) => {
      setInput(e.target.value)
   }

   return (
      <Contain onSubmit={submitTests}>
         <SectionOne onClick={handleImageClick}>
            {imgFile ? (
               <Image src={imgUrl} alt="" />
            ) : (
               <Image src={img} alt="" />
            )}
            <FileName>
               {imgFile ? imgName : 'File_name_of_the_image_file.jpg'}
            </FileName>
            <input
               type="file"
               ref={inputRef}
               onChange={handleImageChange1}
               accept="image/*"
               style={{ display: 'none' }}
            />
         </SectionOne>
         <SectionTwo>
            <CorrectAnswer> Correct answer</CorrectAnswer>
            <StyledInput value={input} onChange={changeInputHandler} />
         </SectionTwo>
         <Buttons>
            <GoBack variant="outlined" onClick={goBackHandler}>
               GO BACK
            </GoBack>
            <SaveButton type="submit" variant="contained">
               Save
            </SaveButton>
         </Buttons>
      </Contain>
   )
}
export default DescribeImage
const Contain = styled('form')(() => ({
   display: 'flex',
   flexDirection: 'column',
}))

const SectionOne = styled(Grid)(() => ({
   width: '820px',
   margin: '0 auto',
   display: 'flex',
}))
const Image = styled('img')(() => ({
   width: '181px',
   height: '178px',
   marginTop: '24px',
   borderRadius: '8px',
}))
const FileName = styled('p')(() => ({
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '16px',
   lineHeight: '18px',
   color: '#4C4859',
   marginLeft: '40px',
   marginTop: '104px',
}))
const SectionTwo = styled(Grid)(() => ({
   margin: '0 auto',
}))
const CorrectAnswer = styled(Typography)(() => ({
   fontStyle: 'normal',
   fontWeight: 500,
   fontSize: '16px',
   lineHeight: '16px',
   display: 'flex',
   alignItems: 'center',
   color: '#4C4859',
   marginTop: '24px',
   marginBottom: '12px',
}))
const StyledInput = styled(Input)(() => ({
   width: '820px',
   height: '46px',
}))
const GoBack = styled(Button)(() => ({
   border: '2px solid #3A10E5',
   borderRadius: '8px',
   width: '105px',
   height: '42px',
   marginTop: '40px',
}))

const SaveButton = styled(Button)(() => ({
   borderRadius: '8px',
   width: '82px',
   height: '42px',
   marginTop: '40px',
   marginLeft: '16px',
   background: '#2AB930',
   ': hover': { background: '#31CF38' },
}))
const Buttons = styled(Grid)(() => ({
   width: '820px',
   margin: '0 auto',
   textAlign: 'end',
}))
