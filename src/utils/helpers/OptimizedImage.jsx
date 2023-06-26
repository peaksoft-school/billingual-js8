// import React from 'react'
// // import { Blurhash } from 'react-blurhash'
// import { styled } from '@mui/material'

// const ImageWrapper = styled('div')(() => ({
//    position: 'relative',
//    width: '100%',
//    height: '100%',
// }))

// // const ImageOverlay = styled('div')(() => ({
// //    position: 'absolute',
// //    top: 0,
// //    left: 0,
// //    width: '100%',
// //    height: '100%',
// // }))

// const Image = styled('img')(() => ({
//    display: 'block',
//    width: '100%',
//    height: '100%',
//    objectFit: 'cover',
// }))

// const Placeholder = styled()(({ $visible }) => ({
//    display: $visible ? 'none' : 'block',
//    width: '100%',
//    height: '100%',
// }))

// const OptimizedImage = ({ src, blurhash, alt }) => {
//    const [visible, setVisible] = React.useState(false)

//    const handleImageLoad = () => {
//       setVisible(true)
//    }

//    return (
//       <ImageWrapper>
//          <Placeholder
//             hash={blurhash}
//             width={32}
//             height={32}
//             resolutionX={32}
//             resolutionY={32}
//             punch={1}
//             $visible={visible}
//          />
//          <Image
//             src={src}
//             alt={alt}
//             onLoad={handleImageLoad}
//             style={{ opacity: visible ? 1 : 0 }}
//          />
//       </ImageWrapper>
//    )
// }

// export default OptimizedImage
