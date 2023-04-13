import { Grid, Typography, styled } from '@mui/material'
import video from '../../assets/images/video.jpg'
import { ReactComponent as Start } from '../../assets/icons/arrow (1).svg'

const videos = [
   {
      id: 1,
      video,
      title: 'Test Overview',
      duration: 'Duration 1:00',
   },
   {
      id: 2,
      video,
      title: 'Test Walkthrough',
      duration: 'Duration 5:00',
   },
   {
      id: 3,
      video,
      title: 'Integrated Subscores',
      duration: 'Duration 2:55',
   },
]

const UsefulVideos = ({ onClick }) => {
   return (
      <Contain>
         <TitleContainer>
            <Title> Useful videos </Title>
         </TitleContainer>
         <Container>
            {videos.map((item) => (
               <VideoContainer key={item.id}>
                  <Image src={item.video} alt="video" />
                  <StartIcon onClick={onClick} />
                  <VideoTitle>{item.title}</VideoTitle>
                  <VideoDuration>{item.duration}</VideoDuration>
               </VideoContainer>
            ))}
         </Container>
      </Contain>
   )
}

export default UsefulVideos

const Contain = styled(Grid)(() => ({
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
const Container = styled(Grid)(() => ({
   display: 'flex',
   justifyContent: 'center',
   gap: '70px',
   marginBottom: '120px',
   marginTop: '48px',
}))

const Image = styled('img')(() => ({
   borderRadius: '16px 16px 0px 0px',
   marginBottom: -7,
}))

const StartIcon = styled(Start)(() => ({
   transform: 'matrix(1, 0, 0, 1, -224, 100)',
   position: 'absolute',
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
