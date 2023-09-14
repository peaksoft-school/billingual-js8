import { Grid, Typography, styled } from '@mui/material'
import { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import img from '../../../../../assets/images/describeimage.png'
import Input from '../../../../../components/UI/input/Input'
import Button from '../../../../../components/UI/buttons/Buttons'
import { useSnackbar } from '../../../../../hooks/useSnackbar'
import {
   postDescribeImage,
   postFiles,
} from '../../../../../redux/question/question.thunk'
import { updateQuestionRequest } from '../../../../../api/questionService'

const DescribeImage = ({ title, duration, testId, setError }) => {
   const dispatch = useDispatch()
   const { state } = useLocation()
   const navigate = useNavigate()
   const { link } = useSelector((state) => state.questions)
   const inputRef = useRef(null)
   const [input, setInput] = useState(state?.question.correctAnswer || '')
   const { notify } = useSnackbar()

   const [imgFile, setImgFile] = useState(null)
   const [imgUrl, setImgUrl] = useState(null)
   const [imgName, setImgName] = useState('')

   const oldLink = state?.question.files.find((item) => item)

   const goBackHandler = () => {
      navigate(`/admin/test/${testId}`)
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
      if (!title) {
         setError((prevState) => ({
            ...prevState,
            title: 'Please title enter!',
         }))
      }
      if (!duration) {
         setError((prevState) => ({
            ...prevState,
            duration: 'Enter time!',
         }))
      }
      // Validate inputs
      if (!imgFile || input.trim() === '') {
         notify(
            'error',
            'Attention!',
            'Please fix the validation errors before saving.'
         )
      } else {
         const describeImgData = {
            title,
            correctAnswer: input,
            duration,
            questionOrder: 11,
            file: imgFile,
            testId,
            isActive: true,
            questionType: state?.question.questionType,
            id: state?.question.id,
         }
         if (state !== null) {
            dispatch(postFiles({ file: imgFile }))
               .unwrap()
               .then(async ({ link }) => {
                  await updateQuestionRequest({
                     ...describeImgData,
                     file: link,
                  })
                  goBackHandler()
               })
         } else {
            dispatch(
               postDescribeImage({
                  describeImgData,
                  notify,
                  imgFile,
                  goBackHandler,
               })
            )
         }
      }
   }

   const changeInputHandler = (e) => {
      setInput(e.target.value)
   }

   useEffect(() => {
      setImgUrl(oldLink?.fileUrl || null)
   }, [])

   return (
      <Contain onSubmit={submitTests}>
         <SectionOne onClick={handleImageClick}>
            {imgFile ? (
               <Image src={imgUrl} alt="" />
            ) : (
               <Image src={oldLink?.fileUrl || img} alt="Describe image" />
            )}
            <FileName>{imgFile ? imgName : 'file_name_not_found!'}</FileName>
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
   // margin: '0 auto',
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
   width: '100%',
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
   ':hover': { background: '#31CF38' },
}))
const Buttons = styled(Grid)(() => ({
   width: '100%',
   textAlign: 'end',
}))
