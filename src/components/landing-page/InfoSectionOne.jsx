import React from 'react'
import { styled } from '@mui/material'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { animation } from '../../utils/helpers/animations'
import paperAirline from '../../assets/images/infoSectionImg/imgGroup1/group.png'
import borderFrame from '../../assets/images/infoSectionImg/imgGroup1/vector-8.png'
import globusImage from '../../assets/images/infoSectionImg/imgGroup2/group.png'
import lineImage from '../../assets/images/infoSectionImg/imgGroup2/group-1.png'
import rays from '../../assets/images/infoSectionImg/imgGroup2/group-2.png'
import rays2 from '../../assets/images/infoSectionImg/imgGroup2/group-3.png'
import moneyImage from '../../assets/images/infoSectionImg/imgGroup3/group.png'
import piggyBankImage1 from '../../assets/images/infoSectionImg/imgGroup3/group-1.png'
import piggyBankImage2 from '../../assets/images/infoSectionImg/imgGroup3/group-2.png'
import piggyBankRays from '../../assets/images/infoSectionImg/imgGroup3/group-3.png'
import piggyBankRays2 from '../../assets/images/infoSectionImg/imgGroup3/group-4.png'
import dollar from '../../assets/images/infoSectionImg/imgGroup3/dollarLogo.png'

const InfoCard = styled(motion.div)(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   flexWrap: 'wrap',
   width: '83.54%',
   height: 'auto',
   margin: '0 auto',
}))

const InfoDivOne = styled(motion.div)(() => ({
   width: '27.85%',
   height: 'auto',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
}))
const InfoDivSecond = styled('div')(() => ({
   width: '27.1%',
   height: 'auto',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'center',
}))
const InfoDivThird = styled('div')(() => ({
   width: '25.1%',
   height: 'auto',
   marginTop: '4.5px',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center',
}))

const ImagePaperAirline = styled(motion.div)(() => ({
   width: '89.84%',
   height: '176px',
   marginTop: '1.8px',
}))
const ImageGlobus = styled('div')(() => ({
   width: '92.36%',
   height: '176px',
}))
const ImagePiggyBank = styled('div')(() => ({
   width: '99.66%',
   height: '176px',
}))
const ImagePaperAirline1 = styled('img')(() => ({
   width: '100%',
   height: '175.97px',
}))
const ImageBorder = styled('img')(() => ({
   width: '68.84%',
   height: '98px',
   position: 'relative',
   top: '-141.4px',
   left: '22.5%',
}))
const CountNumber = styled('h1')(() => ({
   position: 'relative',
   top: '-20px',
   zIndex: 400,
   left: '2%',
   right: '-28%',
   fontFamil: 'Gilroy',
   color: '#4C4C4C',
   fontStyle: 'normal',
   fontWeight: 600,
   fontSize: '3rem',
}))

const ImageOne = styled('img')(() => ({
   width: '55%',
   height: '166.28px',
   marginLeft: '22.22%',
   marginTop: '7.48px',
   zIndex: 400,
}))
const ImageLine = styled('img')(() => ({
   width: '84.06%',
   height: '170.21px',
   position: 'relative',
   left: '6.84%',
   right: '7.08%',
   top: '-98%',
   zIndex: '200',
}))
const ImageFrame = styled('img')(() => ({
   width: '68.5%',
   height: '56%',
   position: 'relative',
   left: '16.1%',
   right: '17.54%',
   top: '-179%',
   bottom: '25.5%',
   zIndex: 600,
}))
const BorderFrameImageTwo = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'center',
   textAlign: 'center',
   width: '64.91% ',
   height: '50%',
   background: ' rgba(255, 255, 255, 0.94)',
   border: '1.8px solid #3785D7',
   borderRadius: '6px',
   position: 'relative',
   left: '17.6%',
   right: '16.08%',
   top: '-236.4%',
   bottom: '22.75%',
   zIndex: 900,
}))
const ImageRays = styled('img')(() => ({
   width: '7.22%',
   position: 'relative',
   left: '-1.43%',
   right: '26.35%',
   top: '-163.29%',
   bottom: ' 3.25%',
   zIndex: 900,
}))
const ImageRays2 = styled('img')(() => ({
   width: '6.5%',
   position: 'relative',
   left: '-46.5%',
   right: '65.8%',
   top: '-245.5%',
   bottom: '84.1%',
   zIndex: 900,
}))
const ImageMoney = styled('img')(() => ({
   width: '66.15%',
   height: '95.46%',
   marginLeft: '17%',
}))
const ImagePiggyBank1 = styled('img')(() => ({
   width: '23.41%',
   height: '40.03% ',
   position: 'relative',
   left: '10.63%',
   right: '69.96%',
   top: '-95.27%',
   bottom: '53.7%',
}))
const ImagePiggyBank2 = styled('img')(() => ({
   width: '26.75%',
   height: '38.74% ',
   position: 'relative',
   left: '46.63%',
   right: '69.96%',
   top: '-48.27%',
   bottom: '53.7%',
}))

const ImageFrameBorderPiggy = styled('img')(() => ({
   width: '69.5%',
   height: '56.5%',
   position: 'relative',
   left: '21.9%',
   right: '16.08%',
   top: '-120.5%',
   bottom: '22.75%',
   zIndex: 900,
}))
const ImageRaysPiggy = styled('img')(() => ({
   width: '4.75%',
   height: '8.06%',
   position: 'relative',
   left: '-47.5%',
   right: '65.8%',
   top: '-192.4%',
   zIndex: 900,
}))
const PiggyBankRaysImage = styled('img')(() => ({
   width: '4.69%',
   height: '8.06%',
   position: 'relative',
   left: '-17.9%',
   right: '65.8%',
   top: '-112%',
   zIndex: 900,
}))
const CountNumber2 = styled('h1')(() => ({
   position: 'relative',
   top: '-22px',
   left: '2%',
   right: '-28%',
   fontFamil: 'Gilroy',
   color: '#4C4C4C',
   fontStyle: 'normal',
   fontWeight: 700,
   fontSize: '3rem',
   zIndex: 600,
}))
const CountNumber3 = styled('h1')(() => ({
   position: 'relative',
   fontFamil: 'Gilroy',
   color: '#4C4C4C',
   fontStyle: 'normal',
   fontWeight: 600,
   fontSize: '3rem',
   zIndex: 600,
}))
const Dollar = styled('img')(() => ({
   width: '14.19px',
   height: '26.8px',
   position: 'relative',
   right: '7px',
   top: '-9px',
}))
const BorderFrameImageOne = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'center',
   textAlign: 'center',
   width: '64.91%',
   height: '50%',
   background: ' rgba(255, 255, 255, 0.94)',
   border: '1.8px solid #3785D7',
   borderRadius: '6px',
   position: 'relative',
   left: '24%',
   right: '16.08%',
   top: '-137.7%',
   bottom: '22.75%',
   zIndex: 900,
}))
const BorderFrameImageThird = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   textAlign: 'center',
   width: '64.91%',
   height: '50%',
   background: ' rgba(255, 255, 255, 0.94)',
   border: '1.8px solid #3785D7',
   borderRadius: '6px',
   position: 'relative',
   left: '24%',
   right: '16.08%',
   top: '-178%',
   zIndex: 900,
}))
const Text = styled('div')(() => ({
   fontFamily: 'Poppins',
   width: '100%',
   height: '48px',
   marginTop: '24px',
   textAlign: 'center',
}))
const InfoSectionOne = ({ count }) => {
   return (
      <InfoCard
         initial="hidden"
         whileInView="visible"
         viewport={{ amount: 0.5 }}
         variants={animation}
      >
         <InfoDivOne variants={animation}>
            <ImagePaperAirline>
               <ImagePaperAirline1 src={paperAirline} />
               {/* <OptimizedImage
                  src={paperAirline}
                  blurhash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
                  alt={paperAirline}
               /> */}
               <ImageBorder src={borderFrame} />
               <BorderFrameImageOne>
                  <CountNumber>
                     {count && (
                        <CountUp
                           className="count-up"
                           start={0}
                           end={10000}
                           duration={2}
                           delay={0}
                        />
                     )}
                     +
                  </CountNumber>
               </BorderFrameImageOne>
            </ImagePaperAirline>
            <Text>
               Over 10,000 fee waivers for the Bilingual English Test are
               offered annually.
            </Text>
         </InfoDivOne>
         <InfoDivSecond variants={animation}>
            <ImageGlobus variants={animation}>
               <ImageOne src={globusImage} />
               <ImageLine src={lineImage} />
               <ImageFrame src={borderFrame} />
               <ImageRays src={rays} />
               <ImageRays2 src={rays2} />
               <BorderFrameImageTwo>
                  <CountNumber2>
                     {count && (
                        <CountUp start={0} end={100} duration={2} delay={0} />
                     )}
                     +
                  </CountNumber2>
               </BorderFrameImageTwo>
            </ImageGlobus>
            <Text>
               Students from over 100 countries and territories have benefitted.
            </Text>
         </InfoDivSecond>
         <InfoDivThird variants={animation}>
            <ImagePiggyBank variants={animation}>
               <ImageMoney src={moneyImage} />
               <ImagePiggyBank1 src={piggyBankImage1} />
               <ImagePiggyBank2 src={piggyBankImage2} />
               <ImageFrameBorderPiggy src={borderFrame} />
               <ImageRaysPiggy src={piggyBankRays} />
               <PiggyBankRaysImage src={piggyBankRays2} />
               <BorderFrameImageThird>
                  <CountNumber3>
                     <Dollar src={dollar} />
                     {count && (
                        <CountUp start={100} end={0} duration={3} delay={0} />
                     )}
                  </CountNumber3>
               </BorderFrameImageThird>
            </ImagePiggyBank>
            <Text>
               Eligible students can take the test with absolutely zero cost to
               them.
            </Text>
         </InfoDivThird>
      </InfoCard>
   )
}

export default InfoSectionOne
