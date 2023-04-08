import React from 'react'
import { styled } from '@mui/material/styles'
import { ReactComponent as ToBegin } from '../../../assets/icons/toBeggin.svg'
import { ReactComponent as GetStarted } from '../../../assets/icons/getStarted.svg'

const LandingButton = ({ textButton, ...rest }) => {
   return <StyleButton textButton={textButton} {...rest} />
}

export default LandingButton

const StyleButton = styled(({ textButton = 'getStarted', ...rest }) => {
   const Icon = textButton === 'toBeggin' ? ToBegin : GetStarted

   return <Icon {...rest} />
})(() => ({
   cursor: 'pointer',
   svg: {
      width: '200px',
   },
   '&:hover': {
      linearGradient: {
         stop: {
            stopColor: '#C53476',
            offset: 0.312009,
         },
      },
   },
   '&:active': {
      linearGradient: {
         stop: {
            stopColor: '#C93D7D',
            offset: 0.560069,
         },
      },
   },
}))
