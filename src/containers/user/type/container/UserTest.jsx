import React from 'react'
import FormContainer from '../../../../components/UI/form/FormContainer'
import ProgressBar from '../../../../components/UI/progressBar/ProgressBar'
import { useProgressBar } from '../../../../hooks/useTime'

const UserTest = ({ questions, setCountPage, count, children }) => {
   const handleNextClick = () => {
      setCountPage((prev) => {
         if (prev < questions.length) {
            return prev + 1
         }
         return prev
      })
   }

   const { duration } = questions[count]

   const handleTimeUp = () => {
      handleNextClick()
   }

   const { timeObject, chartPercent } = useProgressBar(duration, handleTimeUp)

   return (
      <FormContainer>
         <ProgressBar timeObject={timeObject} timeProgress={chartPercent} />
         <>{React.cloneElement(children, { handleNextClick })}</>
      </FormContainer>
   )
}

export default UserTest
