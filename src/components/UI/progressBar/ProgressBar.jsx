import { styled } from '@mui/material'

const GridStyle = styled('div')(() => ({
   width: '1092px',
   height: '540px',
   margin: '0 auto',
   marginTop: '100px',
   paddingTop: '1px',
}))

const DivProgressBar = styled('div')(() => ({
   minWidth: '814px',
   maxWidth: '1006px',
   height: '52px',
   margin: '40px 43px 0px 43px',
}))
const Time = styled('h3')(() => ({
   width: '61px',
   height: '24px',
   marginBottom: '20px',
   fontFamily: 'Roundet',
   fontStyle: 'normal',
   fontWeight: 500,
   fontSize: '32px',
   lineHeight: '24px',
}))

const ProgressLine = styled('progress')(() => ({
   height: '15px',
   width: '1006px',
   accentColor: ' #3909fa',
}))

const ProgressBar = ({ timeObject, time, timeProgress }) => {
   return (
      <div>
         <GridStyle>
            <DivProgressBar>
               <Time>
                  {timeObject.minute}:{timeObject.seconds}
               </Time>
               <ProgressLine value={time} max={timeProgress} />
            </DivProgressBar>
         </GridStyle>
      </div>
   )
}

export default ProgressBar
