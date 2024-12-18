"use client"
import { useEffect } from "react"

const Snowfall = () => {
  useEffect(() => {
    const totalSnowflakes = 200
    const snowflakesContainer = document.getElementById("snowflakes-container")

    for (let i = 0; i < totalSnowflakes; i++) {
      const snowflake = document.createElement("div")
      snowflake.classList.add("snow")

      // Random positions and properties for each snowflake
      const randomX = Math.random() * 100
      const randomOffset = Math.random() * 200 - 100
      const randomScale = Math.random()
      const fallDuration = 10 + Math.random() * 20
      const fallDelay = Math.random() * -30
      const yoyoTime = 0.3 + Math.random() * 0.5

      snowflake.style.left = `${randomX}vw`
      snowflake.style.opacity = Math.random().toString()
      snowflake.style.transform = `scale(${randomScale})`
      snowflake.style.animationDuration = `${fallDuration}s`
      snowflake.style.animationDelay = `${fallDelay}s`

      // Creating keyframes dynamically for each snowflake
      const keyframes = `
        @keyframes fall-${i} {
          ${yoyoTime * 100}% {
            transform: translate(${randomX + randomOffset}vw, ${yoyoTime * 100}vh) scale(${randomScale});
          }
          100% {
            transform: translate(${randomX + randomOffset / 2}vw, 100vh) scale(${randomScale});
          }
        }
      `

      const styleSheet = document.createElement("style")
      //   styleSheet.type = "text/css"
      styleSheet.innerText = keyframes
      document.head.appendChild(styleSheet)

      snowflake.style.animationName = `fall-${i}`

      if (snowflakesContainer) {
        snowflakesContainer.appendChild(snowflake)
      }
    }

    return () => {
      if (snowflakesContainer) {
        snowflakesContainer.innerHTML = ""
      }
    }
  }, [])

  return <div id="snowflakes-container"></div>
}

export default Snowfall
