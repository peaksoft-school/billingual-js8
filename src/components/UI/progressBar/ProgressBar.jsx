import { Line } from 'rc-progress'
import { Grid, styled } from '@mui/material'

const GridStyle = styled(Grid)(() => ({
   width: '1092px',
   height: '540px',
   margin: '0 auto',
   marginTop: '100px',
   paddingTop: '1px',
}))

const LineProgress = {
   width: '100%',
   height: '8px',
   trailWidth: '100%',
   borderRadius: '3.5px',
   backgroundImage: 'linear-gradient(270deg, #3A10E5 29.37%, #6746EF 84.8%)',
}
const DivProgressBar = styled('div')(() => ({
   maxWidth: '1006px',
   height: '52px',
   margin: '20px 43px 0px 43px',
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

const ProgressBar = ({ timeObject }) => {
   return (
      <div>
         <GridStyle>
            <DivProgressBar>
               <Time>
                  {timeObject.minute}:{timeObject.seconds}
               </Time>
               <Line
                  strokeColor="#6746EF"
                  percent={11.11}
                  style={LineProgress}
               />
            </DivProgressBar>
         </GridStyle>
      </div>
   )
}

export default ProgressBar
