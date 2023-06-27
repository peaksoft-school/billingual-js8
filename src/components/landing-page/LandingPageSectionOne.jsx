import { keyframes, styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import logo from '../../assets/icons/logo.svg'
import imageBubble from '../../assets/images/bubble.png'
import cap from '../../assets/images/cap.png'
import imageBook from '../../assets/images/books.png'
// import LandingButton from '../UI/buttons/LandingButtton'
import Button from '../UI/buttons/Buttons'
import { signOut } from '../../redux/auth/auth.thunk'
import ButtonLanding from '../UI/buttons/LandingButton'

const fadeInAnimation = keyframes`
   0% {
      opacity: 0;
      transform: translateY(20px);
   }
   100% {
      opacity: 1;
      transform: translateY(0);
   }
`

const slideInAnimation = keyframes`
   0% {
      opacity: 0;
      transform: translateY(100px);
   }
   100% {
      opacity: 1;
      transform: translateY(0);
   }
`

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
   padding: '13px 24px',
   fontSize: '14px',
   fontFamily: 'Gilroy',
   lineHeight: '16px',
   letterSpacing: ' 0.02em',
}))

const RegisterBtn = styled(Button)(() => ({
   border: 'none',
   fontSize: '14px',
   background: '#ffffff',
   color: '#4C4C4C',
   fontFamily: 'Gilroy',
   lineHeight: '16px',
   fontWeight: 400,
   letterSpacing: ' 0.02em',
   boxShadow:
      '0px 1px 2px rgba(76, 72, 89, 0.2), 0px 1px 2px rgba(76, 72, 89, 0.2)',
   borderRadius: '8px',
   ':hover': {
      background: '#F0EDED',
      color: '#4C4C4C',
      border: 'none',
   },
}))
const ImgBubble = styled('img')(() => ({
   height: '41.25rem',
   width: '100%',
   mixBlendMode: 'overlay',
   marginTop: '-43.75rem',
   animation: `${slideInAnimation} 1s ease-in-out`,
}))
const EnglishProficiency = styled('div')(() => ({
   width: '50%',
   margin: '0 0 30px',
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
   animation: `${fadeInAnimation} 1s ease-in-out`,
}))
const DivInfo = styled('div')(() => ({
   padding: '180px 0',
   margin: '0 0 0 4.5625rem',
   lineHeight: '73px',
   position: 'relative',
   zIndex: 1,
   animation: `${slideInAnimation} 1s ease-in-out`,
}))
const Bilingual = styled('h1')(() => ({
   fontFamily: 'Gilroy',
   fontStyle: 'normal',
   fontWeight: 900,
   fontSize: '60px',
   lineHeight: '74.88px',
   color: '#C93D7D',
   margin: '5px 0 0',
   textTransform: 'uppercase',
}))

const TextDivInfo = styled('div')(() => ({
   width: '60%',
   margin: '0 0 2.8125rem',
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '20px',
   lineHeight: '30px',
   color: '#23212A',
   animation: `${fadeInAnimation} 1s ease-in-out`,
}))

const AcademicCap = styled('img')(() => ({
   position: 'absolute',
   width: '236.09px',
   height: '243px',
   top: '189px',
   right: '25%',
   animation: `${slideInAnimation} 1s ease-in-out`,
}))

const ImageBooks = styled('img')(() => ({
   position: 'absolute',
   width: '594.78px',
   height: '499px',
   top: '293px',
   right: '0',
   animation: `${slideInAnimation} 1s ease-in-out`,
}))

const ButtonToBegin = styled('div')(() => ({
   // marginleft: '80px',
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
            <Logo loading="lazy" src={logo} />
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

         <DivInfo id="home">
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
               <ButtonLanding onClick={goToTests}>to begin</ButtonLanding>
            </ButtonToBegin>
         </DivInfo>

         <ImgBubble src={imageBubble} loading="lazy" />

         <AcademicCap loading="lazy" src={cap} />
         <ImageBooks loading="lazy" src={imageBook} />
      </LandingPage>
   )
}

export default LandingPageSectionOne
