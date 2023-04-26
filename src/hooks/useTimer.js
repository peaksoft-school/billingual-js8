import { useEffect, useState } from 'react'

export const useTimer = () => {
   const [time, setTime] = useState()
   const [timeInput, setTimeInput] = useState('')
   const [timeProgress, setTimeProgress] = useState(0)
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
      setTimeProgress(inputValue)
      setBooleanState(true)
   }

   const timeObject = {
      minute: Math.floor(time / 60),
      seconds: time % 60 || 0,
      time,
   }
   return {
      inputOnChange,
      add,
      booleanState,
      timeObject,
      timeInput,
      inputValue,
      time,
      timeProgress,
   }
}
