import { Grid, Typography, styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ReactComponent as Roadmap } from '../../assets/icons/roadmap.svg'
import { ReactComponent as Icon1 } from '../../assets/icons/globe.svg'
import { ReactComponent as Icon2 } from '../../assets/icons/research.svg'
import { ReactComponent as Icon3 } from '../../assets/icons/thirdicon.svg'
import { ReactComponent as Icon4 } from '../../assets/icons/dashboard.svg'
import { ReactComponent as Icon5 } from '../../assets/icons/img-secure-design.svg'
import { textAnimation } from '../../utils/helpers/animations'
import ButtonLanding from '../UI/buttons/LandingButton'

const infoAnimation = {
   hidden: {
      opacity: 0,
      x: -500,
   },
   visible: (custom) => ({
      opacity: 1,
      x: 0,
      transition: { delay: custom * 0.3 },
      visibility: true,
   }),
}

const secondInfoAnimation = {
   hidden: {
      opacity: 0,
      x: 500,
   },
   visible: (custom) => ({
      opacity: 1,
      x: 0,
      transition: { delay: custom * 0.2 },
   }),
}

const LearnMore = () => {
   const navigate = useNavigate()

   const goToTests = () => {
      navigate('/user/')
   }

   return (
      <Background>
         <Contain>
            <TitleContainer
               initial="hidden"
               whileInView="visible"
               viewport={{ amount: 0.5 }}
               variants={textAnimation}
            >
               <Title>Learn more</Title>
            </TitleContainer>
            <StyledIcon />
            <Container
               initial="hidden"
               whileInView="visible"
               viewport={{ amount: 0.5 }}
            >
               <motion.div variants={infoAnimation}>
                  <Title1>Expand your applicant pool</Title1>
                  <Text1>
                     Tap into a diverse pool of candidates from 210+ countries
                     and
                     <br />
                     territories of origin, who have taken the Bilingual English
                     Test <br /> because of its radical accessibility.
                  </Text1>
               </motion.div>

               <Icon1 style={{ position: 'relative', zIndex: 1 }} />
            </Container>
            <Container1
               initial="hidden"
               whileInView="visible"
               viewport={{ amount: 0.5 }}
            >
               <Icon2 style={{ position: 'relative', zIndex: 1 }} />
               <motion.div
                  style={{ overflow: 'hidden' }}
                  variants={secondInfoAnimation}
               >
                  <Title2>Built on the latest assessment sciencee</Title2>
                  <Text2>
                     The Duolingo English Test is a computer adaptive test
                     backed
                     <br />
                     by rigorous research, with results that are highly
                     correlated
                     <br />
                     with other major assessments such as the TOEFL and the
                     <br /> IELTS.
                  </Text2>
               </motion.div>
            </Container1>
            <Container2
               initial="hidden"
               whileInView="visible"
               viewport={{ amount: 0.5 }}
            >
               <motion.div variants={infoAnimation}>
                  <Title1>Innovative test security</Title1>
                  <Text1>
                     Industry-leading security protocols, individual test
                     proctoring,
                     <br />
                     and computer adaptive technology help prevent fraud and{' '}
                     <br />
                     cheating and ensure results you can trust.
                  </Text1>
               </motion.div>
               <Icon3 style={{ position: 'relative', zIndex: 1 }} />
            </Container2>
            <Container3
               initial="hidden"
               whileInView="visible"
               viewport={{ amount: 0.5 }}
            >
               <Icon4 style={{ position: 'relative', zIndex: 1 }} />
               <motion.div variants={secondInfoAnimation}>
                  <Title2>Convenient results dashboard</Title2>
                  <Text2>
                     Access candidates’ certificates, video interviews, and
                     writing
                     <br />
                     samples through a free and secure dashboard. Quickly and
                     <br /> easily view applicant data with filtering tools.
                  </Text2>
               </motion.div>
            </Container3>
            <Container4
               initial="hidden"
               whileInView="visible"
               viewport={{ amount: 0.5 }}
            >
               <motion.div variants={infoAnimation}>
                  <Title1>Secure Design</Title1>
                  <Text1>
                     Adaptive test engine dynamically administers test questions
                     <br /> from a database of hundreds of thousands of items.
                     <br /> Someone would have to take the test more than 1,000
                     times
                     <br /> to see a question repeated.
                  </Text1>
               </motion.div>
               <Icon5 style={{ position: 'relative', zIndex: 1 }} />
            </Container4>
            <StyledButton
               initial="hidden"
               whileInView="visible"
               viewport={{ amount: 0.5 }}
               variants={textAnimation}
            >
               <ButtonLanding onClick={goToTests}>Get started</ButtonLanding>
            </StyledButton>
         </Contain>
      </Background>
   )
}
export default LearnMore

const Background = styled(motion(Grid))(() => ({
   width: '100%',
   zIndex: '-2',
}))
const Contain = styled(Grid)(() => ({
   display: 'flex',
   margin: '0 auto',
   // justifyContent: 'center',
   flexDirection: 'column',
   padding: '0 80px',
}))

const TitleContainer = styled(motion(Grid))(() => ({
   textAlign: 'center',
}))

const Title = styled(Typography)(() => ({
   fontFamily: 'Gilroy',
   fontStyle: 'normal',
   fontWeight: 700,
   fontSize: '40px',
   lineHeight: '48px',
   color: '#3752B4',
}))

const StyledIcon = styled(Roadmap)(() => ({
   position: 'absolute',
   zIndex: '1',
   left: '0',
   right: '0',
   margin: '107px auto',
}))

const Title1 = styled(Typography)(() => ({
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 600,
   fontSize: '24px',
   lineHeight: '36px',
   color: '#23212A',
   marginBottom: '16px',
}))

const Text1 = styled(Typography)(() => ({
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '16px',
   lineHeight: '24px',
   color: '#23212A',
}))

const Title2 = styled(Typography)(() => ({
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 600,
   fontSize: '24px',
   lineHeight: '120%',
   color: '#23212A',
   marginBottom: '16px',
}))

const Text2 = styled(Typography)(() => ({
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '16px',
   lineHeight: '24px',
   color: '#23212A',
}))
const Container = styled(motion(Grid))(() => ({
   maxWidth: '1200px',
   display: 'flex',
   marginTop: '78px',
   alignItems: 'center',
}))
const Container1 = styled(motion(Grid))(() => ({
   maxWidth: '1400px',
   display: 'flex',
   marginTop: '264px',
   justifyContent: 'flex-end',
   gap: '215px',
   alignItems: 'center',
   overflow: 'hidden',
}))
const Container2 = styled(motion(Grid))(() => ({
   maxWidth: '1200px',
   display: 'flex',
   marginTop: '96px',
   gap: '160px',
   alignItems: 'center',
}))
const Container3 = styled(motion(Grid))(() => ({
   maxWidth: '1400px',
   display: 'flex',
   marginTop: '150px',
   gap: '220px',
   justifyContent: 'flex-end',
   alignItems: 'center',
   overflow: 'hidden',
}))
const Container4 = styled(motion(Grid))(() => ({
   maxWidth: '1200px',
   display: 'flex',
   marginTop: '190px',
   gap: '162px',
   alignItems: 'center',
}))

const StyledButton = styled(motion(Grid))(() => ({
   marginTop: '139px',
   display: 'flex',
   justifyContent: 'center',
}))
