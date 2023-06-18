import React, { useEffect, useRef } from 'react'

const MicrophoneVisualizer = () => {
   const canvasRef = useRef(null)
   const audioContextRef = useRef(null)
   const analyserRef = useRef(null)

   useEffect(() => {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')

      const audioContext = new AudioContext()
      audioContextRef.current = audioContext

      const analyser = audioContext.createAnalyser()
      analyserRef.current = analyser

      navigator.mediaDevices
         .getUserMedia({ audio: true })
         .then((stream) => {
            const microphoneSource =
               audioContext.createMediaStreamSource(stream)
            microphoneSource.connect(analyser)
         })
         .catch((error) => {
            console.error('Error accessing microphone:', error)
         })

      const bufferLength = analyser.frequencyBinCount
      const dataArray = new Uint8Array(bufferLength)

      const draw = () => {
         requestAnimationFrame(draw)

         analyser.getByteFrequencyData(dataArray)

         ctx.clearRect(0, 0, canvas.width, canvas.height)

         const barWidth = (canvas.width / bufferLength) * 2.5
         let x = 0

         // eslint-disable-next-line no-plusplus
         for (let i = 0; i < bufferLength; i++) {
            const barHeight = (dataArray[i] / 255) * canvas.height

            ctx.fillStyle = `rgb(${barHeight + 100}, 50, 50)`
            ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight)

            x += barWidth + 1
         }
      }

      draw()

      return () => {
         if (audioContext.state !== 'closed') {
            audioContext.close()
         }
      }
   }, [])

   return (
      <div>
         <canvas ref={canvasRef} />
      </div>
   )
}

export default MicrophoneVisualizer
