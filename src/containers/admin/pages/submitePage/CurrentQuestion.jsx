import React from 'react'
import { useDispatch } from 'react-redux'
import FormContainer from '../../../../components/UI/form/FormContainer'
import { resultQuestionComponents } from '../../../../utils/constants/common'

const UserTest = ({ questions, setCountPage, children }) => {
   const dispatch = useDispatch()
   const handleNextClick = () => {
      setCountPage((prev) => {
         if (prev < questions.length) {
            return prev + 1
         }
         return prev
      })
   }

   const handleTimeUp = () => {
      handleNextClick()
      dispatch(resultQuestionComponents.clearOptionsIds())
   }

   return (
      <FormContainer>
         {React.cloneElement(children, {
            handleNextClick,
            handleTimeUp,
         })}
      </FormContainer>
   )
}

export default UserTest
