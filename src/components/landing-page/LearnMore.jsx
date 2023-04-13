import { Grid, Typography, styled } from '@mui/material'
import { ReactComponent as Icon } from '../../assets/icons/Vector 2.svg'
import { ReactComponent as Icon1 } from '../../assets/icons/globe 1.svg'
import { ReactComponent as Icon2 } from '../../assets/icons/research 1.svg'
import { ReactComponent as Icon3 } from '../../assets/icons/Group 4376.svg'
import { ReactComponent as Icon4 } from '../../assets/icons/dashboard 1.svg'
import { ReactComponent as Icon5 } from '../../assets/icons/img-secure-design 1.svg'
import LandingButton from '../UI/buttons/LandingButtton'

const LearnMore = () => {
   return (
      <Contain>
         <TitleContainer>
            <Title>Learn more</Title>
         </TitleContainer>
         <StyledIcon />
         <Container>
            <Grid>
               <Title1>Expand your applicant pool</Title1>
               <Text1>
                  Tap into a diverse pool of candidates from 210+ countries and
                  <br />
                  territories of origin, who have taken the Bilingual English
                  Test <br /> because of its radical accessibility.
               </Text1>
            </Grid>

            <Icon1 />
         </Container>
         <Container1>
            <Icon2 />
            <Grid>
               <Title2>Built on the latest assessment sciencee</Title2>
               <Text2>
                  The Duolingo English Test is a computer adaptive test backed
                  <br />
                  by rigorous research, with results that are highly correlated
                  <br />
                  with other major assessments such as the TOEFL and the
                  <br /> IELTS.
               </Text2>
            </Grid>
         </Container1>
         <Container2>
            <Grid>
               <Title1>Innovative test security</Title1>
               <Text1>
                  Industry-leading security protocols, individual test
                  proctoring,
                  <br />
                  and computer adaptive technology help prevent fraud and <br />
                  cheating and ensure results you can trust.
               </Text1>
            </Grid>
            <Icon3 />
         </Container2>
         <Container3>
            <Icon4 />
            <Grid>
               <Title2>Convenient results dashboard</Title2>
               <Text2>
                  Access candidates’ certificates, video interviews, and writing
                  <br />
                  samples through a free and secure dashboard. Quickly and
                  <br /> easily view applicant data with filtering tools.
               </Text2>
            </Grid>
         </Container3>
         <Container4>
            <Grid>
               <Title1>Secure Design</Title1>
               <Text1>
                  Adaptive test engine dynamically administers test questions
                  <br /> from a database of hundreds of thousands of items.
                  <br /> Someone would have to take the test more than 1,000
                  times
                  <br /> to see a question repeated.
               </Text1>
            </Grid>
            <Icon5 />
         </Container4>
         <StyledButton>
            <LandingButton />
         </StyledButton>
      </Contain>
   )
}
export default LearnMore

const Contain = styled(Grid)(() => ({
   display: 'flex',
   width: '1229px',
   margin: '0 auto',
   flexDirection: 'column',
}))

const TitleContainer = styled(Grid)(() => ({
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

const StyledIcon = styled(Icon)(() => ({
   position: 'absolute',
   zIndex: '-1',
   left: '0',
   right: '0',
   marginLeft: 'auto',
   marginRight: 'auto',
   marginTop: '107px',
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
const Container = styled(Grid)(() => ({
   display: 'flex',
   marginTop: '78px',
   alignItems: 'center',
}))
const Container1 = styled(Grid)(() => ({
   display: 'flex',
   marginTop: '264px',
   justifyContent: 'flex-end',
   gap: '215px',
   alignItems: 'center',
}))
const Container2 = styled(Grid)(() => ({
   display: 'flex',
   marginTop: '96px',
   gap: '160px',
   alignItems: 'center',
}))
const Container3 = styled(Grid)(() => ({
   display: 'flex',
   marginTop: '150px',
   gap: '220px',
   justifyContent: 'flex-end',
   alignItems: 'center',
}))
const Container4 = styled(Grid)(() => ({
   display: 'flex',
   marginTop: '190px',
   gap: '162px',
   alignItems: 'center',
}))

const StyledButton = styled(Grid)(() => ({
   marginTop: '139px',
   display: 'flex',
   justifyContent: 'center',
}))
