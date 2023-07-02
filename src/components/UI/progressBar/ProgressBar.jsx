import { styled } from '@mui/material'
import React from 'react'

const GridStyle = styled('div')(() => ({
   width: '100%',
   // height: '540px',
   // margin: '0 auto',
   paddingTop: '1px',
}))

const DivProgressBar = styled('div')(() => ({
   width: '100%',
   height: '52px',
}))
const Time = styled('h3')(() => ({
   width: '61px',
   height: '24px',
   marginBottom: '20px',
   fontStyle: 'normal',
   fontWeight: 500,
   fontSize: '32px',
   lineHeight: '24px',
}))

const ProgressLine = styled('progress')(() => ({
   height: '15px',
   width: '100%',
   accentColor: ' #3909fa',
}))

const ProgressBar = ({ timeObject, timeProgress }) => {
   return (
      <div>
         <GridStyle>
            <DivProgressBar>
               <Time>
                  {timeObject.minute}:{timeObject.seconds}
               </Time>
               <ProgressLine value={100 - timeProgress} max="100" />
            </DivProgressBar>
         </GridStyle>
      </div>
   )
}

export default React.memo(ProgressBar)
