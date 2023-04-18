import { useEffect, useState } from 'react'

export const useTimer = () => {
   const [time, setTime] = useState()
   const [timeInput, setTimeInput] = useState('')
   const [booleanState, setBooleanState] = useState(false)

   useEffect(() => {
      const clearTime = setInterval(() => {
         setTime((time) => (time >= 1 ? time - 1 : 0))
      }, 1000)
      return () => {
         clearInterval(clearTime)
      }
   }, [booleanState])
   const inputOnChange = (value) => {
      setTimeInput(value)
   }

   const inputValue = timeInput * 60
   const add = () => {
      setTime(inputValue)
      setTimeInput('')
      setBooleanState(true)
   }

   const timeObject = {
      minute: Math.floor(time / 60),
      seconds: time % 60 || 0,
   }
   return {
      inputOnChange,
      add,
      booleanState,
      timeObject,
      timeInput,
   }
}
