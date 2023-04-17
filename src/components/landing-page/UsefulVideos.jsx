import { Grid, Typography, styled } from '@mui/material'
import { DefaultPlayer as Video } from 'react-html5video'
import 'react-html5video/dist/styles.css'
import video1 from '../../assets/videos/video1.MP4'
import video2 from '../../assets/videos/video2.MP4'
import video3 from '../../assets/videos/video3.MP4'
import poster from '../../assets/images/poster.jpg'

const videos = [
   {
      id: 1,
      poster,
      video: video1,
      title: 'Test Overview',
      duration: 'Duration 1:00',
   },
   {
      id: 2,
      poster,
      video: video2,
      title: 'Test Walkthrough',
      duration: 'Duration 5:00',
   },
   {
      id: 3,
      poster,
      video: video3,
      title: 'Integrated Subscores',
      duration: 'Duration 2:55',
   },
]

const UsefulVideos = () => {
   return (
      <Container>
         <FirstSection>
            <TitleContainer>
               <Title> Useful videos </Title>
            </TitleContainer>
            <SecondSection>
               {videos.map((item) => {
                  return (
                     <VideoContainer key={item.id}>
                        <StyledVideo
                           controle={[
                              'PlayPause',
                              'Seek',
                              'Time',
                              'Volume',
                              'FullScreen',
                           ]}
                           poster={item.poster}
                        >
                           <source src={item.video} type="video/webm" />
                        </StyledVideo>

                        <VideoTitle>{item.title}</VideoTitle>
                        <VideoDuration>{item.duration}</VideoDuration>
                     </VideoContainer>
                  )
               })}
            </SecondSection>
         </FirstSection>
      </Container>
   )
}

export default UsefulVideos

const Container = styled(Grid)(() => ({
   background: '#F0F0DC',
}))

const FirstSection = styled(Grid)(() => ({
   display: 'flex',
   width: '1250px',
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
   marginTop: '138px',
}))
const SecondSection = styled(Grid)(() => ({
   display: 'flex',
   justifyContent: 'center',
   gap: '70px',
   marginBottom: '120px',
   marginTop: '48px',
}))
const StyledVideo = styled(Video)(() => ({
   borderRadius: '16px 16px 0px 0px',
   marginBottom: -7,
   width: '370px',
   height: '261px',
}))

const VideoContainer = styled(Grid)(() => ({
   background: '#FFFFFF',
   border: '1px solid #DDDDDD',
   borderRadius: '16px',
   transform: 'matrix(1, 0, 0, 1, 0, 0)',
}))
const VideoTitle = styled(Typography)(() => ({
   fontFamily: 'Gilroy',
   fontStyle: 'normal',
   fontWeight: 700,
   fontSize: '20px',
   lineHeight: '24px',
   color: '#3A10E5',
   marginTop: '16px',
   marginLeft: '20px',
   marginBottom: '10px',
}))

const VideoDuration = styled(Typography)(() => ({
   fontFamily: 'Gilroy',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '18px',
   lineHeight: '21px',
   color: '#212629',
   marginLeft: '20px',
   marginBottom: '16px',
}))
