import { React, useState } from 'react'
import { styled } from '@mui/material'
import { motion } from 'framer-motion'
import ScrollTrigger from 'react-scroll-trigger'
import { ourTeamArray } from '../../utils/constants/common'
import { textAnimation } from '../../utils/helpers/animations'
import accessible from '../../assets/images/accessible.png'
import speech from '../../assets/images/speech.png'
import extensive from '../../assets/images/extensive.png'
import tutoring from '../../assets/images/tutoring.png'
import booksBackground from '../../assets/icons/background.svg'
import bookImg from '../../assets/icons/bookImg.svg'
import learnImg from '../../assets/icons/learnImg.svg'
import readingImg from '../../assets/icons/reading.svg'
import InfoSectionOne from './InfoSectionOne'

const imgAnimation = {
   hidden: {
      opacity: 0,
      x: 100,
   },
   visible: (custom) => ({
      opacity: 1,
      x: 0,
      transition: { delay: custom * 0.1 },
   }),
}

const Card = styled('div')(() => ({
   width: '100%',
   paddingTop: '120px',
   paddingBottom: '120px',
   background: '#f0f0dc',
}))

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

const ImgBackground = styled('div')(({ backgroundImage }) => ({
   position: 'relative',
   marginTop: '17px',
   marginRight: '154.19px',
   width: '115rem',
   backgroundImage: `url(${backgroundImage})`,
   backgroundPosition: 'center',
   backgroundRepeat: 'no-repeat',
}))

const ChildContainer = styled(motion.div)(() => ({
   position: 'absolute',
   top: 0,
   left: 0,
   right: 0,
   bottom: 0,
}))

const ImgBook = styled(motion.img)(() => ({
   position: 'relative',
   zIndex: '2',
   left: '3.5rem',
   top: '4.5rem',
}))
const ImgLearn = styled(motion.img)(() => ({
   position: 'relative',
   zIndex: '4',
   right: '20rem',
   bottom: '13rem',
}))
const ImgReading = styled(motion.img)(() => ({
   position: 'relative',
   zIndex: '3',
   left: '21.5rem',
   bottom: '14rem',
}))
// const ImgAnimation = styled('div')(() => ({
//    marginTop: '17px',
//    marginRight: '154.19px',
//    width: '35%',
// }))
const DivSeparation = styled('div')(() => ({
   display: 'flex',
   gap: '67.88px',
}))
const OurTeam = styled(motion.div)(() => ({
   height: '335px',
   display: 'grid',
   justifyItems: 'center',
}))

const TextOurTeam = styled(motion.div)(() => ({
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
const DivImage = styled(motion.div)(() => ({
   display: 'flex',
   marginTop: '48px',
   flexWrap: 'wrap',
}))
const DivImageEmployeeName = styled(motion.div)(() => ({
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

const blockAnimate = {
   offscreen: {
      opacity: 0,
   },
   onscreen: {
      opacity: 1,
      transition: {
         duration: 1,
         damping: 3,
      },
   },
   animate: {
      rotate: [-2, 3, -7, 4, 4], // Rotate back and forth with smaller values
      transition: {
         duration: 2.5,
         repeat: Infinity,
         repeatType: 'reverse',
      },
   },
}

const InfoSection = () => {
   const [count, setCountOn] = useState(false)

   return (
      <Card>
         <ScrollTrigger
            onEnter={() => setCountOn(true)}
            onExit={() => setCountOn(false)}
         >
            <InfoSectionOne count={count} />
         </ScrollTrigger>
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
            <ImgBackground backgroundImage={booksBackground}>
               <ChildContainer>
                  <ImgBook
                     variants={blockAnimate}
                     initial="offscreen"
                     whileInView="onscreen"
                     animate="animate"
                     src={bookImg}
                     loading="lazy"
                  />
                  <ImgLearn
                     variants={blockAnimate}
                     initial="offscreen"
                     whileInView="onscreen"
                     animate="animate"
                     src={learnImg}
                     loading="lazy"
                  />
                  <ImgReading
                     variants={blockAnimate}
                     initial="offscreen"
                     whileInView="onscreen"
                     animate="animate"
                     src={readingImg}
                     loading="lazy"
                  />
               </ChildContainer>
            </ImgBackground>
         </Description>
         <OurTeam
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
         >
            <TextOurTeam variants={textAnimation}>Our Team</TextOurTeam>
            <DivImage>
               {ourTeamArray.map((elem) => (
                  <DivImageEmployeeName
                     key={elem.id}
                     variants={imgAnimation}
                     custom={elem.id}
                  >
                     <OurTeamImage src={elem.img} loading="lazy" />
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
