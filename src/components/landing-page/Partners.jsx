import React from 'react'
import { Grid, Typography, styled } from '@mui/material'
import Marquee from 'react-fast-marquee'
import Adama from '../../assets/icons/Adama.svg'
import Dekalb from '../../assets/icons/Dekalb.svg'
import Basf from '../../assets/icons/Basf.svg'
import Lidea from '../../assets/icons/Lidea.svg'

const partners = [
   { id: '1', icon: Lidea },
   { id: '2', icon: Adama },
   { id: '3', icon: Dekalb },
   { id: '4', icon: Basf },
   { id: '5', icon: Lidea },
   { id: '6', icon: Adama },
   { id: '7', icon: Dekalb },
   { id: '8', icon: Basf },
]

const Partners = () => {
   return (
      <>
         <PartnersTitle>Partners</PartnersTitle>
         <Marquee speed={100} gradientWidth={0}>
            <StyledPartners>
               {partners.map((item) => (
                  <PartnersCard key={item.id}>
                     <StyledImg src={item.icon} alt="lat" />
                  </PartnersCard>
               ))}
            </StyledPartners>
         </Marquee>
      </>
   )
}

export default Partners

const PartnersTitle = styled(Typography)(() => ({
   fontFamily: 'Gilroy',
   fontStyle: 'normal',
   fontWeight: 700,
   fontSize: '40px',
   lineHeight: '48px',
   textAlign: 'center',
   color: '#3752B4',
   marginBottom: '40px',
}))

const StyledImg = styled('img')(() => ({
   width: '100%',
   height: 'auto',
   objectFit: 'contain',
}))

const PartnersCard = styled(Grid)(() => ({
   width: '255px',
   height: '125px',
   background: '#ffffff',
   border: '1px solid #e4e4e4',
   borderRadius: '20px',
   padding: '20px 40px',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   margin: '0 30px',
}))

const StyledPartners = styled(Grid)(() => ({
   display: 'flex',
   flexDirection: 'row',
   justifyContent: 'space-between',
}))
