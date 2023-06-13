import { useState, useEffect } from 'react'
import { keyframes, styled } from '@mui/material'
import accessible from '../../assets/images/accessible.png'
import speech from '../../assets/images/speech.png'
import extensive from '../../assets/images/extensive.png'
import tutoring from '../../assets/images/tutoring.png'
import booksImage from '../../assets/images/imgBookEnglish.png'
import { ourTeamArray } from '../../utils/constants/common'
import paperAirline from '../../assets/images/infoSectionImg/imgGroup1/group.png'
import frame from '../../assets/images/infoSectionImg/imgGroup1/vector-7.png'
import borderFrame from '../../assets/images/infoSectionImg/imgGroup1/vector-8.png'

// const fadeIn = keyframes`
//    from {
//       opacity: 0;
//    }
//    to {
//       opacity: 1;
//    }
// `

const slideIn = keyframes`
   from {
      transform: translateX(-100%);
   }
   to {
      transform: translateX(0);
   }
`

const Card = styled('div')(() => ({
   width: '100%',
   paddingTop: '120px',
   paddingBottom: '120px',
   background: '#f0f0dc',
}))

const InfoCard = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   flexWrap: 'wrap',
   background: 'red',
   width: '83.54%',
   height: 'auto',
   margin: '0 auto',
}))

// const Img = styled('img')(() => ({
//    width: '300.96px',
//    height: '176px',
//    top: '898px',
// }))
// const Img1DivOne = styled('div')(() => ({
//    width: '335px',
//    height: '248px',
//    display: 'flex',
//    flexDirection: 'column',
//    alignItems: 'center',
//    animation: `${fadeIn} 1s ease-in-out`,
// }))
// const Over = styled('p')(() => ({
//    height: '48px',
//    marginTop: '23px',
//    fontFamily: 'Poppins',
//    fontStyle: 'normal',
//    fontWeight: 400,
//    fontSize: '16px',
//    lineHeight: '24px',
//    textAlign: 'center',
//    color: '#23212A',
// }))
const Description = styled('div')(() => ({
   height: ' 437px',
   marginLeft: '110px',
   marginTop: '120px',
   display: 'flex',
   justifyContent: 'space-between',
   marginBottom: '121.39px',
}))

const UserExpiriance = styled('div')(() => ({
   fontFamily: 'Gilroy',
   fontSize: '40px',
   fontWeight: 700,
   lineHeight: '48px',
   textAlign: 'left',
   width: '21.125rem',
   color: '#3752B4',
}))

const DescriptionText = styled('div')(() => ({
   width: '90%',
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
   marginTop: '17px',
   marginRight: '154.19px',
   width: '35%',
}))
const DivSeparation = styled('div')(() => ({
   display: 'flex',
   gap: '67.88px',
}))
const OurTeam = styled('div')(() => ({
   height: '335px',
   display: 'grid',
   justifyItems: 'center',
   animation: `${slideIn} 1s ease-in-out`,
}))

const TextOurTeam = styled('div')(() => ({
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
   flexWrap: 'wrap',
}))
const DivImageEmployeeName = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
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
const InfoDivOne = styled('div')(() => ({
   width: '27.85%',
   height: 'auto',
   background: 'blue',
   display: 'flex',
   justifyContent: 'center',
}))
const InfoDivSecond = styled('div')(() => ({
   width: '27.1%',
   height: 'auto',
   background: 'blue',
   display: 'flex',
   justifyContent: 'center',
}))
const InfoDivThird = styled('div')(() => ({
   width: '25.1%',
   height: 'auto',
   background: 'blue',
   display: 'flex',
   justifyContent: 'center',
}))

const ImagePaperAirline = styled('div')(() => ({
   width: '89.84%',
   height: '176px',
   background: '#000',
}))
const ImageGlobus = styled('div')(() => ({
   width: '92.36%',
   height: '176px',
   background: 'green',
}))
const ImagePiggyBank = styled('div')(() => ({
   width: '99.66%',
   height: '176px',
   background: 'green',
}))
const ImagePaperAirline1 = styled('img')(() => ({
   width: '100%',
   height: '175.97px',
}))
const ImagePaperAirlineFrame = styled('img')(() => ({
   width: '64.91%',
   height: '88px',
   zIndex: 100,
   position: 'relative',
   top: '-142px',
   left: '19%',
}))
const ImageBorder = styled('img')(() => ({
   width: '67.84%',
   height: '96.8px',
   position: 'relative',
   top: '-240px',
   left: '17.5%',
}))

const InfoSection = () => {
   const [count, setCount] = useState(0)
   useEffect(() => {
      const handlescroll = () => {
         const scrollPosition = window.scrollY || window.pageYOffset

         setCount(scrollPosition)
      }
      window.addEventListener('scroll', handlescroll)

      return () => {
         window.removeEventListener('scroll', handlescroll)
      }
   }, [])
   return (
      <Card>
         <InfoCard>
            <InfoDivOne>
               <ImagePaperAirline>
                  <ImagePaperAirline1 src={paperAirline} />
                  <ImagePaperAirlineFrame src={frame} />
                  <ImageBorder src={borderFrame} />
                  <h1>{count}</h1>
               </ImagePaperAirline>
            </InfoDivOne>
            <InfoDivSecond>
               <ImageGlobus>dfbd</ImageGlobus>
            </InfoDivSecond>
            <InfoDivThird>
               <ImagePiggyBank>dgre</ImagePiggyBank>
            </InfoDivThird>
            {/* {infoCardArray.map((elem) => (
               <Img1DivOne key={elem.id}>
                  <Img src={elem.img} />
                  <Over>{elem.text}</Over>
               </Img1DivOne>
            ))} */}
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
                  <DivImageEmployeeName key={elem.id}>
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
