import React from 'react'
import { styled } from '@mui/material'
import LandingPageSectionOne from './LandingPageSectionOne'
import LandingSlider from './landingSlider/Slider'
import UsefulVideos from './UsefulVideos'
import LearnMore from './LearnMore'
import SecondSlider from './SecondSlider'
import Partners from './Partners'
import Footer from './Footer'
import InfoSection from './InfoSection'

const LandingPage = () => {
   return (
      <Landing>
         <LandingPageSectionOne />
         <InfoSection />
         <LandingSlider />
         <UsefulVideos />
         <LearnMore />
         <SecondSlider />
         <Partners />
         <Footer />
      </Landing>
   )
}

export default LandingPage

const Landing = styled('div')(() => ({
   backgroundColor: '#F0F0DC',
}))
