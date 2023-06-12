import React, { useEffect } from 'react'
import FormContainer from '../../../components/UI/form/FormContainer'
import ProgressBar from '../../../components/UI/progressBar/ProgressBar'
import { useProgressBar } from '../../../hooks/useTime'

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

   const { timeObject, chartPercent, setTime, isEnded } = useProgressBar(
      duration,
      handleTimeUp
   )

   useEffect(() => {
      setTime(duration)
   }, [duration, count])

   const childrenAsFunc =
      typeof children === 'function' ? children(isEnded) : children

   return (
      <FormContainer>
         <ProgressBar timeObject={timeObject} timeProgress={chartPercent} />
         <>
            {React.cloneElement(childrenAsFunc, {
               handleNextClick,
               handleTimeUp,
            })}
         </>
      </FormContainer>
   )
}

export default UserTest
