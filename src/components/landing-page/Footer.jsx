import {
   Accordion,
   AccordionDetails,
   AccordionSummary,
   Typography,
   styled,
} from '@mui/material'
import React from 'react'
import { ReactComponent as Bilingual } from '../../assets/icons/footerLogo.svg'
import { ReactComponent as YouTube } from '../../assets/icons/youTube.svg'
import { ReactComponent as Facebook } from '../../assets/icons/facebook.svg'
import { ReactComponent as Instagram } from '../../assets/icons/instagram.svg'
import { ReactComponent as PlusIcon } from '../../assets/icons/plus.svg'

const FAQ = [
   {
      question: 'What is Bilingual?',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, autem. Soluta at ut perferendis, debitis nisi quidem porro libero, impedit voluptatum expedita vero? Qui aspernatur officiis ut, rem doloribus id.',
   },
   {
      question: 'How can I show what I am typing during the test?',
      text: "Please take the test in a separate, quiet room. Close all other windows and close all other programs before starting the test.An external USB keyboard or mouse can be used during the test. However, when answering test questions, you should only type on one keyboard and use one mouse. Don't switch between multiple keyboards or mice.",
   },
   {
      question: 'Why should I take the Bilingual English Test?',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cupiditate alias, omnis incidunt nemo accusamus consequuntur illum, porro, quos corrupti voluptas consectetur. Quam voluptatum praesentium eos adipisci eum libero aliquid.',
   },
   {
      question: 'How can I make sure my microphone picks up my voice clearly?',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis expedita eius aperiam dolorum ipsum harum aut quis perspiciatis exercitationem in! Officia incidunt architecto rem exercitationem ducimus fugiat voluptatibus nobis voluptatum!',
   },
   {
      question: "How can I allow a test to record my computer's screen?",
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam assumenda facere, esse voluptatibus excepturi labore delectus, cumque ipsa ex expedita soluta debitis consequatur sequi quas vero dicta perferendis, harum nemo.',
   },
]

const Footer = () => {
   return (
      <StyledFooter>
         <div>
            <div>
               <StyledTitle>FAQ:</StyledTitle>
            </div>
            {FAQ.map((item) => (
               <MuiAccordion disableGutters key={item.question}>
                  <MuiAccordionSummary
                     expandIcon={<PlusIcon sx={{ fontSize: '0.9rem' }} />}
                  >
                     <Question>{item.question}</Question>
                  </MuiAccordionSummary>
                  <MuiAccordionDetails>
                     <Typography>{item.text}</Typography>
                  </MuiAccordionDetails>
               </MuiAccordion>
            ))}
            <Logos>
               <div>
                  <Bilingual />
               </div>
               <SocialNetwork>
                  <YouTube />
                  <Facebook />
                  <Instagram />
               </SocialNetwork>
            </Logos>
            <Copyright>
               <Typography>
                  © Copyright PeakSoft. All Rights Reserved
               </Typography>
            </Copyright>
         </div>
      </StyledFooter>
   )
}

export default Footer

const StyledFooter = styled('footer')(() => ({
   backgroundColor: '#262626',
   color: '#fff',
   padding: '60px 110px 12px',
   margin: '120px 0 0 0',
}))

const StyledTitle = styled(Typography)(() => ({
   fontFamily: 'Gilroy',
   fontStyle: 'normal',
   fontWeight: 700,
   fontSize: '40px',
   lineHeight: '51px',
   borderBottom: '1px solid #4a4a4a',
   paddingBottom: '38px',
}))

const MuiAccordion = styled(Accordion)(() => ({
   backgroundColor: '#262626',
   color: '#fff',
   borderBottom: '1px solid #4a4a4a',
   boxShadow: 'none',
   borderRadius: 'none',
   padding: '14px 0',
}))

const MuiAccordionSummary = styled(AccordionSummary)(() => ({
   padding: '0',
   '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(45deg)',
   },
}))

const MuiAccordionDetails = styled(AccordionDetails)({
   padding: '0',
})

const Question = styled(Typography)(() => ({
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 600,
   fontSize: '20px',
   lineHeight: '40px',
}))

const Logos = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   marginTop: '90px',
}))

const SocialNetwork = styled('div')(() => ({
   display: 'flex',
   gap: '16px',
   alignItems: 'center',
   marginBottom: '48px',
}))

const Copyright = styled('div')(() => ({
   textAlign: 'center',
   color: '#98A2B3',
}))
