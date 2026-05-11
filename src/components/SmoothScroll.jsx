import { useEffect } from "react"
import Lenis from "lenis"

function SmoothScroll() {

  useEffect(() => {

    const lenis = new Lenis({
      // Cinematic smooth duration - feels premium and intentional
      duration: 1.35,

      // Easing function for ultra-smooth, luxury feel
      easing: (t) => {
        // Custom easing that combines exponential and ease-out for smoothness
        return t === 1 
          ? 1 
          : 1 - Math.pow(2, -10 * t) * (1 - t * 0.1)
      },

      direction: "vertical",
      gestureDirection: "vertical",

      // Enable smooth scrolling on wheel and touch
      smoothWheel: true,
      smoothTouch: false, // Keep false for better mobile experience

      // Premium scroll multipliers - responsive to input
      wheelMultiplier: 0.88,
      touchMultiplier: 0.92,

      syncTouch: true,

      // Prevent horizontal scroll
      preventDefault: (node) => {
        return false
      },

      // Improve responsiveness
      tablet: {
        duration: 1.3,
        easing: (t) => 1 - Math.pow(2, -10 * t),
      },

      mobile: {
        duration: 1.15,
        easing: (t) => 1 - Math.pow(2, -10 * t),
      },
    })

    // High-performance RAF loop with passive event listeners
    let frameId

    const raf = (time) => {
      lenis.raf(time)
      frameId = requestAnimationFrame(raf)
    }

    frameId = requestAnimationFrame(raf)

    // Optimize scroll performance
    window.addEventListener("scroll", () => {}, { passive: true })

    return () => {
      cancelAnimationFrame(frameId)
      lenis.destroy()
    }

  }, [])

  return null
}

export default SmoothScroll