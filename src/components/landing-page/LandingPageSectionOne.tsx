import { styled } from '@mui/material';
import logo from '../../assets/logo/Layer 1.png';
import imageBubble from '../../assets/images/Group.png';
import cap from '../../assets/images/Group 4264.png';
import imageBook from '../../assets/images/Group 4265.png';
import Button from '@mui/material/Button';
import InfoSection from './InfoSection';

const LandingPage = styled('div')(() => ({
  height: '778px',
  width: '100%',
  bottom: ' 90.3%',
  background: ' #FCD200',
  zIndex: '-44'
}));

const Logo = styled('img')(() => ({
  position: 'absolute',
  height: '48px',
  left: '90px',
  right: '78.13%',
  top: '24px',
  bottom: '99.1%'
}));

const LogoAndButtonDiv = styled('div')(() => ({
  display: 'flex'
}));

const ButtonDiv = styled('div')(() => ({
  position: 'absolute',
  width: '16.1875rem',
  height: '42px',
  right: '80px',
  top: '27px'
}));
const ButtonToComeIn = {
  marginRight: '24px'
};
const ImgBubble = styled('img')(() => ({
  height: '659.9998779296875px',
  width: '100%',
  position: 'absolute',
  top: ' 1.47%',
  bottom: ' 90.3%',
  mixBlendMode: 'overlay',
  marginTop: '107px'
}));
const EnglishProficiency = styled('h3')(() => ({
  position: 'absolute',
  width: '635px',
  height: '219px',
  top: '120px',
  fontFamily: 'Gilroy',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '60px',
  lineHeight: '73px',
  color: ' #43404E'
}));

const DivInfo = styled('div')(() => ({
  marginLeft: '90px',
  lineHeight: '73px'
}));
const Bilingual = styled('div')(() => ({
  position: 'absolute',
  width: '295px',
  height: '75px',
  marginleft: '80px',
  top: '339px',
  fontFamily: 'Gilroy',
  fontStyle: 'normal',
  fontWeight: ' 900',
  fontSize: '60px',
  lineHeight: '75px',
  color: '#C93D7D'
}));

const TextDivInfo = styled('div')(() => ({
  position: 'absolute',
  width: '772px',
  height: '60px',
  marginleft: '80px',
  top: '440px',
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '20px',
  lineHeight: '30px',
  color: '#23212A'
}));

const AcademicCap = styled('img')(() => ({
  position: 'absolute',
  width: ' 236.09px',
  height: '243px',
  left: '869px',
  top: '189px'
}));

const ImageBooks = styled('img')(() => ({
  position: 'absolute',
  width: '594.78px',
  height: '499px',
  marginLeft: '820px',
  marginTop: '279px',
  zIndex: 10
}));

const ButtonToBegin = styled('button')(() => ({
  height: '59.99999237060547px',
  width: ' 200px',
  marginleft: '80px',
  top: '530px',
  borderRadius: '0px',
  position: 'absolute',
  bottom: ' 92.65%',
  background:
    'linear-gradient(186.36deg, #CB4080 5.01%, #C93D7D 29.76%, #BD3172 55.4%, #AD1E60 94.99%)',
  boxShadow: 'inset 4px -5px 0px rgba(255, 204, 191, 0.68)'
}));

const LandingPageSectionOne = () => {
  return (
    <LandingPage>
      <LogoAndButtonDiv>
        <Logo src={logo} />

        <ButtonDiv>
          <Button sx={ButtonToComeIn} variant="contained">
            To come in
          </Button>
          <Button variant="contained">Register</Button>
        </ButtonDiv>
      </LogoAndButtonDiv>
      <ImgBubble src={imageBubble} />
      <DivInfo>
        <div>
          <EnglishProficiency>Prove your English proficiency today with</EnglishProficiency>
          <Bilingual>BILINGUAL</Bilingual>
        </div>

        <TextDivInfo>
          For nearly 30 years, learners have turned to Rosetta Stone to build the fluency and
          confidence they need to speak new languages.
        </TextDivInfo>
        <ButtonToBegin>Register</ButtonToBegin>
      </DivInfo>
      <AcademicCap src={cap}></AcademicCap>
      <ImageBooks src={imageBook}></ImageBooks>
      <InfoSection />
    </LandingPage>
  );
};

export default LandingPageSectionOne;
