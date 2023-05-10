import { styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import logo from '../../assets/icons/logo.svg'
import imageBubble from '../../assets/images/bubble.png'
import cap from '../../assets/images/cap.png'
import imageBook from '../../assets/images/books.png'
import LandingButton from '../UI/buttons/LandingButtton'
import Button from '../UI/buttons/Buttons'
import { signOut } from '../../redux/auth/auth.thunk'

const LandingPage = styled('div')(() => ({
   width: '100%',
   background: ' #FCD200',
}))

const LogoAndButtonDiv = styled('div')(({ bgColor }) => ({
   position: 'fixed',
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   zIndex: 1000,
   backgroundColor: bgColor ? '' : '#fff',
   padding: '20px 0',
   width: '100%',
   transition: 'background 0.2s ease',
}))

const Logo = styled('img')(() => ({
   height: '48px',
   padding: '0 0 0 80px',
}))

const ButtonDiv = styled('div')(() => ({
   display: 'flex',
   gap: '20px',
   padding: '0 80px',
}))
const ButtonToComeIn = styled(Button)(() => ({
   padding: '12px 20px',
   fontSize: '14px',
   fontFamily: 'Poppins',
   lineHeight: '16px',
   letterSpacing: ' 0.02em',
}))

const RegisterBtn = styled(Button)(() => ({
   fontSize: '14px',
   background: '#ffffff',
   color: '#4C4C4C',
   fontFamily: 'Poppins',
   lineHeight: '16px',
   letterSpacing: ' 0.02em',
   boxShadow:
      '0px 1px 2px rgba(76, 72, 89, 0.2), 0px 1px 2px rgba(76, 72, 89, 0.2)',
   borderRadius: '8px',
   ':hover': {
      background: '#3A10E5',
      color: '#fff',
   },
}))
const ImgBubble = styled('img')(() => ({
   height: '41.25rem',
   width: '100%',
   mixBlendMode: 'overlay',
   marginTop: '-550px',
}))
const EnglishProficiency = styled('div')(() => ({
   width: '50%',
   height: '219px',
   margin: '0 0 50px',
   position: 'relative',
   zIndex: 1,
}))
const ProveYourEnglish = styled('h1')(() => ({
   fontFamily: 'Gilroy',
   margin: '0px',
   fontStyle: 'normal',
   fontWeight: 700,
   fontSize: '60px',
   lineHeight: '73px',
   color: ' #43404E',
}))
const DivInfo = styled('div')(() => ({
   padding: '180px 0',
   margin: '0 0 0 4.5625rem',
   lineHeight: '73px',
   position: 'relative',
   zIndex: 1,
}))
const Bilingual = styled('h1')(() => ({
   fontFamily: 'Gilroy',
   fontStyle: 'normal',
   fontWeight: 900,
   fontSize: '60px',
   lineHeight: '74.88px',
   color: '#C93D7D',
   marginTop: '5px',
   textTransform: 'uppercase',
}))

const TextDivInfo = styled('div')(() => ({
   width: '60%',
   marginleft: '80px',
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '20px',
   lineHeight: '30px',
   color: '#23212A',
}))

const AcademicCap = styled('img')(() => ({
   position: 'absolute',
   width: '236.09px',
   height: '243px',
   top: '189px',
   right: '25%',
}))

const ImageBooks = styled('img')(() => ({
   position: 'absolute',
   width: '594.78px',
   height: '499px',
   top: '293px',
   right: '0',
}))

const ButtonToBegin = styled('div')(() => ({
   marginleft: '80px',
   top: '530px',
   position: 'absolute',
   zIndex: 1,
}))

const LandingPageSectionOne = () => {
   const dispatch = useDispatch()
   const { isAuthorized } = useSelector((state) => state.auth)
   const navigate = useNavigate()
   const [bgColor, setBgColor] = useState(true)

   const changeColor = () => {
      if (window.scrollY) {
         setBgColor(false)
      }
      if (window.scrollY <= 80) {
         setBgColor(true)
      }
      return bgColor
   }
   useEffect(() => {
      changeColor()
      window.addEventListener('scroll', changeColor)
   })

   const goToSignInPage = () => {
      navigate('/sign-in')
   }

   const goToSignUpPage = () => {
      navigate('/sign-up')
   }

   const goToTests = () => {
      navigate('/user/tests')
   }

   const onLogOut = () => {
      dispatch(signOut())
   }

   return (
      <LandingPage>
         {/* Header */}
         <LogoAndButtonDiv bgColor={bgColor}>
            <Logo src={logo} />
            <ButtonDiv>
               {isAuthorized ? (
                  <>
                     <Button variant="contained" onClick={onLogOut}>
                        Log out
                     </Button>
                     <Button variant="contained" onClick={goToTests}>
                        Tests
                     </Button>
                  </>
               ) : (
                  <>
                     <ButtonToComeIn
                        variant="contained"
                        onClick={goToSignInPage}
                     >
                        To come in
                     </ButtonToComeIn>
                     <RegisterBtn variant="outlined" onClick={goToSignUpPage}>
                        Register
                     </RegisterBtn>
                  </>
               )}
            </ButtonDiv>
         </LogoAndButtonDiv>
         {/* Header */}

         <DivInfo>
            <EnglishProficiency>
               <ProveYourEnglish>
                  Prove your English proficiency today with
               </ProveYourEnglish>
               <Bilingual>bilingual</Bilingual>
            </EnglishProficiency>
            <TextDivInfo>
               For nearly 30 years, learners have turned to Rosetta Stone to
               build the fluency and confidence they need to speak new
               languages.
            </TextDivInfo>
            <ButtonToBegin>
               <LandingButton textButton="toBeggin" onClick={goToTests} />
            </ButtonToBegin>
         </DivInfo>

         <ImgBubble src={imageBubble} />

         <AcademicCap src={cap} />
         <ImageBooks src={imageBook} />
      </LandingPage>
   )
}

export default LandingPageSectionOne
