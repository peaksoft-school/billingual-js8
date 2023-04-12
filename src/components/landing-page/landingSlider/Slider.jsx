import React, { useState } from 'react'
import Slider from 'react-slick'
import { Grid, Typography, styled } from '@mui/material'
import { ReactComponent as Globus } from '../../assets/icons/globus.svg'
import { ReactComponent as NextIcon } from '../../assets/icons/nextIcon.svg'
import { ReactComponent as PrevIcon } from '../../assets/icons/prevIcon.svg'
import { ReactComponent as Pagination } from '../../assets/icons/pagination.svg'
import { ReactComponent as ActivePagination } from '../../assets/icons/activePagination.svg'
import SlideItem from './SliderItem'

const info = [
   {
      title: 'Confirm your English proficiency today!',
      text: 'For nearly 30 years, learners have turned to Rosetta Stone to build the fluency and confidence they need to speak new languages.',
      img: <Globus />,
      id: new Date().toISOString(),
      titleColor: '#FE9102',
      background: '#212629',
   },
   {
      title: 'Confirm your English proficiency today!',
      text: 'For nearly 30 years, learners have turned to Rosetta Stone to build the fluency and confidence they need to speak new languages.',
      img: <Globus />,
      id: new Date().toISOString(),
      titleColor: '#FFFFFF',
      background: '#FE9102',
   },
   {
      title: 'Confirm your English proficiency today!',
      text: 'For nearly 30 years, learners have turned to Rosetta Stone to build the fluency and confidence they need to speak new languages.',
      img: <Globus />,
      id: new Date().toISOString(),
      titleColor: '#FE9102',
      background: '#212629',
   },
   {
      title: 'Confirm your English proficiency today!',
      text: 'For nearly 30 years, learners have turned to Rosetta Stone to build the fluency and confidence they need to speak new languages.',
      img: <Globus />,
      id: new Date().toISOString(),
      titleColor: '#FFFFFF',
      background: '#FE9102',
   },
   {
      title: 'Confirm your English proficiency today!',
      text: 'For nearly 30 years, learners have turned to Rosetta Stone to build the fluency and confidence they need to speak new languages.',
      img: <Globus />,
      id: new Date().toISOString(),
      titleColor: '#FE9102',
      background: '#212629',
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

const LandingSlider = () => {
   const [index, setindex] = useState(0)

   const customDots = (dots) => <div>{dots}</div>

   const activePaging = (i) => {
      if (i === index) {
         return <ActivePagination />
      }
      return <Pagination />
   }

   const settings = {
      infinite: false,
      className: 'center',
      slidesToShow: 1,
      speed: 500,
      dots: true,
      appendDots: (dots) => customDots(dots),
      customPaging: (i) => activePaging(i),
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      beforeChange: (current, next) => setindex(next),
   }

   return (
      <>
         <TitleContainer>
            <Title>Check out each question type</Title>
         </TitleContainer>
         <Container>
            <StyledSlider style={{ position: 'relative' }} {...settings}>
               {info.map((item, i) => (
                  <SlideItem key={item.id} item={item} prop={i === index} />
               ))}
            </StyledSlider>
         </Container>
      </>
   )
}

export default LandingSlider

const TitleContainer = styled(Grid)(() => ({
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
   '& .slick-center': {
      transition: 'all 0.3s ease',
      transform: 'scale(1.15)',
   },
   gap: '50px',
   overflow: 'hidden',
   marginBottom: '120px',
   marginTop: '30px',
   widht: '100%',
}))

const StyledSlider = styled(Slider)({
   padding: '40px',
   display: 'grid',
   gridTemplateColumns: 'repeat(3, 1fr)',
   gridColumnStart: 1,
   gridColumnEnd: 4,
   alignItems: 'center',
   justifyItems: 'center',
   gap: '30px',
   maxHeight: '600px',

   '& .slick-track': {
      display: 'flex',
      justifyContent: 'center',
      width: '100px',
   },

   '& .slick-list': {
      width: '1050px',
      height: '740px',
   },
   '& .slick-arrow': {
      cursor: 'pointer',
      zIndex: 11,
      position: 'relative',
      top: '200px',
   },
   '& .slick-next': {
      position: 'relative',
      right: '460px',
   },
   '& .slick-prev': {
      position: 'relative',
      left: '370px',
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
      position: 'relative',
      bottom: '210px',
      right: '40px',
      gridRowStart: 2,
      gridColumn: 2,
      display: 'flex',
      justifyContent: 'center',
      listStyle: 'none',
      gap: '10px',
      alignItems: 'flex-end',
   },
})
