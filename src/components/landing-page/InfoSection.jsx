import { styled } from '@mui/material'
import paperAirline from '../../assets/images/paperAirline.png'
import globus from '../../assets/images/globus.png'
import piggyBank from '../../assets/images/piggyBank.png'
import accessible from '../../assets/images/accessible.png'
import speech from '../../assets/images/speech.png'
import extensive from '../../assets/images/extensive.png'
import tutoring from '../../assets/images/tutoring.png'
import booksImage from '../../assets/images/imgBookEnglish.png'
import OurTeamImg1 from '../../assets/images/person1.png'
import OurTeamImg2 from '../../assets/images/person2.png'
import OurTeamImg3 from '../../assets/images/person3.png'
import OurTeamImg4 from '../../assets/images/person4.png'
import OurTeamImg5 from '../../assets/images/person5.png'
import OurTeamImg6 from '../../assets/images/person6.png'

const infoCardArray = [
   {
      img: paperAirline,
      text: 'Over 10,000 fee waivers for the Bilingual English Test areoffered annually.',
      id: 1,
   },
   {
      img: globus,
      text: 'Students from over 200 countries and territories have benefitted.',
      id: 2,
   },
   {
      img: piggyBank,
      text: 'Eligible students can take the test with absolutely zero cost to them.',
      id: 3,
   },
]

const ourTeamArray = [
   {
      img: OurTeamImg1,
      name: 'Alice Archie',
      employee: 'Founder Bilingual',
      id: 1,
   },
   {
      img: OurTeamImg2,
      name: 'Mia George',
      employee: 'Marketer',
      id: 2,
   },
   {
      img: OurTeamImg3,
      name: 'Oscar Ryan',
      employee: 'Developer',
      id: 3,
   },
   {
      img: OurTeamImg4,
      name: 'Jack William',
      employee: 'UX/UI Designer',
      id: 4,
   },
   {
      img: OurTeamImg5,
      name: 'Rose Thomas',
      employee: 'Chief Editor',
      id: 5,
   },
   {
      img: OurTeamImg6,
      name: 'Albert Stanley',
      employee: 'Chief Editor',
      id: 6,
   },
]

const Card = styled('div')(() => ({
   position: 'absolute',
   width: '100%',
   paddingTop: '120px',
   marginTop: '778px',
   paddingBottom: '120px',
   background: '#f0f0dc',
}))

const InfoCard = styled('div')(() => ({
   height: '248px',
   width: '1203px',
   margin: '0 auto',
   borderRadius: '0px',
   display: 'flex',
   padding: '0px',
   gap: '120px',
}))

const Img = styled('img')(() => ({
   width: '300.96px',
   height: '176px',
   top: '898px',
}))
const Img1DivOne = styled('div')(() => ({
   width: '335px',
   height: '248px',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
}))
const Over = styled('p')(() => ({
   width: '335px',
   height: '48px',
   marginTop: '23px',
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '16px',
   lineHeight: '24px',
   textAlign: 'center',
   color: '#23212A',
}))
const Description = styled('div')(() => ({
   width: '1205.81px',
   height: ' 437px',
   margin: '0 auto',
   marginLeft: '110px',
   marginTop: '120px',
   display: 'flex',
   marginBottom: '121.39px',
}))

const UserExpiriance = styled('div')(() => ({
   fontFamily: 'Gilroy',
   fontSize: '40px',
   fontWeight: 700,
   lineHeight: '48px',
   letterSpacing: '0em',
   textAlign: 'left',
   height: '96px',
   width: '338px',
   color: '#3752B4',
}))

const DescriptionText = styled('div')(() => ({
   width: '640px',
   height: '120px',
   marginTop: '34px',
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '1rem',
   lineHeight: '24px',
   color: '#23212A',
}))

const ImgAccessible = styled('img')(() => ({
   width: ' 44.12px',
   height: '50px',
}))

const ImgAccessibleText = styled('div')(() => ({
   width: '160px',
   height: '44px',
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '16px',
   lineHeight: '22px',
   color: '#23212A',
}))

const DivAccessible = styled('div')(() => ({
   display: 'flex',
   gap: '28.58px',
   alignItems: 'center',
   marginTop: '40px',
}))

const ImgSpeech = styled('img')(() => ({
   width: '39px',
   height: '50px',
}))

const ImgSpeechText = styled('div')(() => ({
   width: '160px',
   height: '44px',
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '16px',
   lineHeight: ' 140%',
   color: '#23212A',
}))

const DivSpeech = styled('div')(() => ({
   display: 'flex',
   gap: '28.58px',
   alignItems: 'center',
   marginTop: '48.98px',
}))

const ImgExtensive = styled('img')(() => ({
   width: ' 54.44px',
   height: ' 50px',
}))

const ImgExtensiveText = styled('div')(() => ({
   width: '160px',
   height: '44px',
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '16px',
   lineHeight: '140%',
   color: '#23212A',
}))

const DivExtensive = styled('div')(() => ({
   display: 'flex',
   gap: '28.58px',
   alignItems: 'center',
   marginTop: '40px',
}))

const ImgTutoring = styled('img')(() => ({
   width: ' 55.56px',
   height: '50px',
}))

const TutoringText = styled('div')(() => ({
   width: '160px',
   height: '44px',
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '16px',
   lineHeight: '140%',
   color: '#23212A',
}))

const DivTutoring = styled('div')(() => ({
   display: 'flex',
   gap: '28.58px',
   alignItems: 'center',
   marginTop: '48.98px',
}))

const ImgBook = styled('img')(() => ({
   width: '460.81px',
   height: '420px',
   marginLeft: '104px',
   marginTop: '17px',
   marginRight: '154.19px',
}))
const DivSeparation = styled('div')(() => ({
   display: 'flex',
   gap: '67.88px',
}))
const OurTeam = styled('div')(() => ({
   width: '1232px',
   height: '335px',
   marginTop: '1045px',
   margin: '0 auto',
}))

const TextOurTeam = styled('div')(() => ({
   width: '180px',
   height: '52px',
   margin: '0 auto',
   fontFamily: 'Gilroy',
   fontStyle: 'normal',
   fontWeight: 700,
   fontSize: '40px',
   lineHeight: ' 130%',
   textTransform: 'capitalize',
   color: '#3752B4',
}))
const OurTeamImage = styled('img')(() => ({
   width: '180px',
   height: '180px',
}))
const DivImage = styled('div')(() => ({
   display: 'flex',
   marginTop: '48px',
}))
const DivImageEmployeeName = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   width: '180px',
   height: '235px',
   marginRight: '30px',
}))

const DivEmployeeNamePerson = styled('div')(() => ({
   height: '41px',
   width: '124px',
   margin: '0 auto',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   textAlign: 'center',
   marginTop: '14px',
}))
const NamePersonEmployee = styled('div')(() => ({
   width: '115px',
   height: '21px',
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: '600',
   fontSize: '16px',
   lineHeight: '130%',
   color: '#3A10E5',
}))
const Employee = styled('div')(() => ({
   width: '124px',
   height: '18px',
   marginTop: '2px',
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '14px',
   lineHeight: '130%',
   textAlign: 'center',
   color: '#020202',
}))

const InfoSection = () => {
   return (
      <Card>
         <InfoCard>
            {infoCardArray.map((elem) => (
               <Img1DivOne>
                  <Img src={elem.img} />
                  <Over>{elem.text}</Over>
               </Img1DivOne>
            ))}
         </InfoCard>
         <Description>
            <div>
               <UserExpiriance>Unparalleled user experience</UserExpiriance>
               <DescriptionText>
                  The most effective way to perfect a language is by immersing
                  yourself in it. Rosetta Stone for Enterprise delivers an
                  effective end-to-end experience, founded on a wealth of
                  carefully structured content. Each learner has the opportunity
                  to balance independent study with optional online tutoring in
                  a way that fits their schedule and language learning goals.
               </DescriptionText>
               <DivSeparation>
                  <DivAccessible>
                     <ImgAccessible src={accessible} />
                     <ImgAccessibleText>
                        Accessible anytime, anywhere
                     </ImgAccessibleText>
                  </DivAccessible>
                  <DivExtensive>
                     <ImgExtensive src={extensive} />
                     <ImgExtensiveText>
                        Extensive business content
                     </ImgExtensiveText>
                  </DivExtensive>
               </DivSeparation>
               <DivSeparation>
                  <DivSpeech>
                     <ImgSpeech src={speech} />
                     <ImgSpeechText>Leading speech recognition</ImgSpeechText>
                  </DivSpeech>
                  <DivTutoring>
                     <ImgTutoring src={tutoring} />
                     <TutoringText>Unlimited live tutoring</TutoringText>
                  </DivTutoring>
               </DivSeparation>
            </div>
            <ImgBook src={booksImage} />
         </Description>
         <OurTeam>
            <TextOurTeam>Our Team</TextOurTeam>
            <DivImage>
               {ourTeamArray.map((elem) => (
                  <DivImageEmployeeName>
                     <OurTeamImage src={elem.img} />
                     <DivEmployeeNamePerson>
                        <NamePersonEmployee>{elem.name}</NamePersonEmployee>
                        <Employee>{elem.employee}</Employee>
                     </DivEmployeeNamePerson>
                  </DivImageEmployeeName>
               ))}
            </DivImage>
         </OurTeam>
      </Card>
   )
}

export default InfoSection
