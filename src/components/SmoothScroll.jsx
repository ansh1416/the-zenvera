import { useEffect } from "react"
import Lenis from "lenis"

function SmoothScroll() {

  useEffect(() => {

    const lenis = new Lenis({

      duration: 1.2,

      easing: (t) =>
        Math.min(
          1,
          1.001 - Math.pow(2, -10 * t)
        ),

      direction: "vertical",
      gestureDirection: "vertical",

      smoothWheel: true,
      smoothTouch: false,

      wheelMultiplier: 0.85,
      touchMultiplier: 0.9,

      syncTouch: true,
    })

    let frameId

    const raf = (time) => {
      lenis.raf(time)
      frameId = requestAnimationFrame(raf)
    }

    frameId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frameId)
      lenis.destroy()
    }

  }, [])

  return null
}

export default SmoothScroll