import { styled } from '@mui/material'
import logo from '../../assets/logo/layer1.png'
import imageBubble from '../../assets/images/bubble.png'
import cap from '../../assets/images/cap.png'
import imageBook from '../../assets/images/books.png'
import LandingButton from '../UI/buttons/LandingButtton'
import Button from '../UI/buttons/Buttons'
import InfoSection from './InfoSection'

const LandingPage = styled('div')(() => ({
   height: '778px',
   width: '100%',
   bottom: ' 90.3%',
   background: ' #FCD200',
   zIndex: '-44',
}))

const Logo = styled('img')(() => ({
   position: 'absolute',
   height: '48px',
   left: '80px',
   right: '78.13%',
   top: '24px',
   bottom: '99.1%',
}))

const LogoAndButtonDiv = styled('div')(() => ({
   display: 'flex',
}))

const ButtonDiv = styled('div')(() => ({
   position: 'absolute',
   width: '16.1875rem',
   display: 'flex',
   height: '42px',
   right: '80px',
   top: '27px',
}))
const ButtonToComeIn = {
   width: '122px',
   height: '42',
   marginRight: '24px',
   fontSize: '14px',
   background: '#3A10E5',
   fontFamily: 'Poppins',
   lineHeight: '16px',
   alignItems: 'center',
   textAlign: 'center',
   letterSpacing: ' 0.02em',
}
const ButtonSx = {
   width: '113px',
   height: '42',
   fontSize: '14px',
   background: '#ffffff',
   color: '#4C4C4C',
   fontFamily: 'Poppins',
   lineHeight: '16px',
   alignItems: 'center',
   textAlign: 'center',
   letterSpacing: ' 0.02em',
   boxShadow:
      '0px 1px 2px rgba(76, 72, 89, 0.2), 0px 1px 2px rgba(76, 72, 89, 0.2)',
   borderRadius: '8px',
   ':hover': {
      background: '#3A10E5',
      color: '#fff',
   },
}
const ImgBubble = styled('img')(() => ({
   height: '659.9998779296875px',
   width: '100%',
   position: 'absolute',
   top: ' 1.47%',
   bottom: ' 90.3%',
   mixBlendMode: 'overlay',
   marginTop: '107px',
}))
const EnglishProficiency = styled('div')(() => ({
   position: 'absolute',
   width: '680px',
   height: '219px',
   marginTop: '192px',
}))
const ProveYourEnglish = styled('h1')(() => ({
   fontFamily: 'Gilroy',
   marginTop: '0px',
   marginBottom: '0px',
   width: '680px',
   height: '141px',
   fontStyle: 'normal',
   fontWeight: 700,
   fontSize: '60px',
   lineHeight: '73px',
   color: ' #43404E',
}))
const DivInfo = styled('div')(() => ({
   marginLeft: '80px',
   lineHeight: '73px',
}))
const Bilingual = styled('h1')(() => ({
   width: '320px',
   height: '85px',
   marginleft: '80px',
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
   position: 'absolute',
   width: '772px',
   height: '60px',
   marginleft: '80px',
   top: '440px',
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '20px',
   lineHeight: '30px',
   color: '#23212A',
}))

const AcademicCap = styled('img')(() => ({
   position: 'absolute',
   width: ' 236.09px',
   height: '243px',
   left: '869px',
   top: '189px',
}))

const ImageBooks = styled('img')(() => ({
   position: 'absolute',
   width: '594.78px',
   height: '499px',
   marginLeft: '820px',
   marginTop: '279px',
   zIndex: 10,
}))

const ButtonToBegin = styled('div')(() => ({
   height: '59.99999237060547px',
   width: ' 200px',
   marginleft: '80px',
   top: '530px',
   position: 'absolute',
   bottom: ' 92.65%',
}))

const LandingPageSectionOne = () => {
   return (
      <LandingPage>
         <LogoAndButtonDiv>
            <Logo src={logo} />
            <ButtonDiv>
               <Button sx={ButtonToComeIn} variant="contained">
                  To come in
               </Button>
               <Button sx={ButtonSx} variant="contained">
                  Register
               </Button>
            </ButtonDiv>
         </LogoAndButtonDiv>
         <ImgBubble src={imageBubble} />
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
               <LandingButton textButton="toBeggin" />
            </ButtonToBegin>
         </DivInfo>
         <AcademicCap src={cap} />
         <ImageBooks src={imageBook} />
         <InfoSection />
      </LandingPage>
   )
}

export default LandingPageSectionOne
