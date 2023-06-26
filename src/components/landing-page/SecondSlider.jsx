import { Grid, Rating, Typography, styled } from '@mui/material'
import React, { useState } from 'react'

import Slider from 'react-slick'
import avatar1 from '../../assets/images/avatar1.jpg'
import avatar2 from '../../assets/images/avatar2.jpg'
import avatar3 from '../../assets/images/avatar3.jpg'
import avatar4 from '../../assets/images/avatar4.jpg'
import avatar5 from '../../assets/images/avatar5.jpg'
import { ReactComponent as NextIcon } from '../../assets/icons/nextIcon.svg'
import { ReactComponent as PrevIcon } from '../../assets/icons/prevIcon.svg'
import { ReactComponent as Pagination } from '../../assets/icons/pagination.svg'
import { ReactComponent as ActivePagination } from '../../assets/icons/activePagination.svg'

const humans = [
   {
      id: 1,
      description:
         'I have tried other language apps and found them boring but with Bilingual, it is easy and fun to practice every day.',
      name: 'Aziat Abdimalikov',
      rating: 5,
      avatar: avatar1,
   },
   {
      id: 2,
      description:
         'I have tried other language apps and found them boring but with Bilingual, it is easy and fun to practice every day.',
      name: 'Ilim Shabdanov',
      rating: 5,
      avatar: avatar1,
   },
   {
      id: 3,
      description:
         'I have tried other language apps and found them boring but with Bilingual, it is easy and fun to practice every day.',
      name: 'Saltanat Nematilla kyzy',
      rating: 5,
      avatar: avatar2,
   },
   {
      id: 4,
      description:
         'I have tried other language apps and found them boring but with Bilingual, it is easy and fun to practice every day.',
      name: 'Mairam Ormonova',
      rating: 5,
      avatar: avatar3,
   },
   {
      id: 5,
      description:
         'I have tried other language apps and found them boring but with Bilingual, it is easy and fun to practice every day.',
      name: 'Adil Aitbaev',
      rating: 5,
      avatar: avatar4,
   },
   {
      id: 6,
      description:
         'I have tried other language apps and found them boring but with Bilingual, it is easy and fun to practice every day.',
      name: 'Jazgul Joroeva',
      rating: 5,
      avatar: avatar5,
   },
   {
      id: 7,
      description:
         'I have tried other language apps and found them boring but with Bilingual, it is easy and fun to practice every day.',
      name: 'Anarbek Ishembek uulu',
      rating: 5,
      avatar: avatar1,
   },
   {
      id: 8,
      description:
         'I have tried other language apps and found them boring but with Bilingual, it is easy and fun to practice every day.',
      name: 'Alibek Altynbek uulu',
      rating: 5,
      avatar: avatar2,
   },
   {
      id: 9,
      description:
         'I have tried other language apps and found them boring but with Bilingual, it is easy and fun to practice every day.',
      name: 'Kauhar Zarlykova',
      rating: 5,
      avatar: avatar3,
   },
]

const PrevArrow = ({ className, style, onClick }) => {
   return (
      <PrevIcon className={className} style={{ ...style }} onClick={onClick} />
   )
}
const NextArrow = ({ className, style, onClick }) => {
   return (
      <NextIcon className={className} style={{ ...style }} onClick={onClick} />
   )
}

const SecondSlider = () => {
   const [index, setindex] = useState(0)

   const customDots = (dots) => <div>{dots}</div>

   const activePaging = (i) => {
      if (i === index) {
         return <ActivePagination />
      }
      return <Pagination />
   }

   const settings = {
      focusOnSelect: true,
      className: 'center',
      centerMode: true,
      centerPadding: 0,
      infinite: true,
      slidesToShow: 3,
      speed: 1500,
      autoplaySpeed: 2000,
      dots: true,
      appendDots: (dots) => customDots(dots),
      customPaging: (i) => activePaging(i),
      swipeToSlide: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      beforeChange: (current, next) => setindex(next),
   }

   return (
      <>
         <TitleContainer>
            <Title>Why people love Bilingual</Title>
         </TitleContainer>
         <Container>
            <StyledSlider {...settings}>
               {humans.map((item, i) => (
                  <UserContainer key={item.id} prop={i === index}>
                     <UserImg
                        prop={i === index}
                        src={item.avatar}
                        alt="avatar"
                     />
                     <UserText prop={i === index}>{item.description}</UserText>
                     <UserName prop={i === index}>- {item.name}</UserName>
                     <Rating value={item.rating} readOnly />
                  </UserContainer>
               ))}
            </StyledSlider>
         </Container>
      </>
   )
}

export default SecondSlider

const TitleContainer = styled(Grid)(() => ({
   marginTop: '7.5rem',
   display: 'flex',
   justifyContent: 'center',
}))

const Title = styled(Typography)(() => ({
   fontfamily: 'Gilroy',
   fontStyle: 'normal',
   fontWeight: 700,
   fontSize: '40px',
   lineHeight: '48px',
   color: '#3752B4',
}))

const Container = styled(Grid)(() => ({
   display: 'flex',
   justifyContent: 'center',
   gap: '50px',
   marginBottom: '120px',
   marginTop: '60px',
}))

const UserImg = styled('img')(({ prop }) => ({
   width: prop ? '80%' : '50%',
   height: prop ? '260px' : '180px',
   borderRadius: '50%',
   margin: prop ? '40px 30px' : '40px 60px',
}))

const UserContainer = styled(Grid)(({ prop }) => ({
   textAlign: 'center',
   background: prop ? '#666CA7' : '',
   transition: prop ? 'all 0.5s ease' : 'all 0.5s ease',
   transform: prop ? 'scale(1.1)' : '',
   padding: prop ? '0 0 50px 0' : '0 0 50px 0',
   maxWidth: prop ? '350px' : '',
   borderRadius: prop ? '40px' : '40px',
   color: prop ? 'white' : '',
}))

const UserText = styled(Typography)(({ prop }) => ({
   textAlign: 'left',
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: '400',
   fontSize: '16px',
   lineHeight: '24px',
   color: prop ? '#fff' : '#23212A',
   padding: '0 30px',
}))

const UserName = styled(Typography)(({ prop }) => ({
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: '600',
   fontSize: '16px',
   lineHeight: '24px',
   color: prop ? '#fff' : '#3A10E5',
   margin: '24px 0',
}))

const StyledSlider = styled(Slider)({
   padding: '0 30px',
   display: 'grid',
   gridTemplateColumns: 'repeat(3, auto)',
   gridTemplateRows: 'repeat(1, auto)',
   alignItems: 'center',
   justifyItems: 'center',
   gridAutoFlow: 'dense',

   '& .slick-slide': {
      width: '700px',
      background: '#e5e5e5',
      borderRadius: '40px',
   },

   '& .slick-track': {
      display: 'flex',
      gap: '30px',
      justifyContent: 'center',
      // width: '564px',
      alignItems: 'flex-start',
      paddingTop: '50px',
   },

   '& .slick-list': {
      width: '80%',
      height: '760px',
      overflow: 'hidden',
      padding: '50px',
   },

   '& .slick-arrow': {
      display: 'flex',
      justifyContent: 'flex-end',
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      cursor: 'pointer',
   },
   '& .slick-next:hover, .slick-prev:hover': {
      content: 'none',
      circle: {
         fill: '#3A10E5',
      },

      path: {
         fill: '#fff',
      },
   },

   '& .slick-dots': {
      gridColumn: 2,
      display: 'flex',
      justifyContent: 'center',
      listStyle: 'none',
      gap: '10px',
      alignItems: 'flex-end',
   },
})
