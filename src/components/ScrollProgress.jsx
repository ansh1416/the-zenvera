import { motion, useScroll, useSpring } from "framer-motion"

function ScrollProgress() {

  const { scrollYProgress } = useScroll()

  // Ultra-smooth spring physics for premium feel
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.5,
    restDelta: 0.001,
  })

  return (
    <motion.div
      style={{ scaleX }}
      className="
        fixed
        left-0
        top-0
        z-[70]
        h-[2.5px]
        w-full
        origin-left
        bg-gradient-to-r
        from-[#c9baaa]/0
        via-[#c9baaa]/90
        to-[#c9baaa]/0
        shadow-[0_0_30px_rgba(201,186,170,0.24)]
        will-change-transform
      "
    />
  )
}

export default ScrollProgress