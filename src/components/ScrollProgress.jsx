import { motion, useScroll, useSpring } from "framer-motion"

function ScrollProgress() {

  const { scrollYProgress } = useScroll()

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.22,
  })

  return (
    <motion.div
      style={{ scaleX }}

      className="
        fixed

        left-0
        top-0

        z-[70]

        h-[2px]
        w-full

        origin-left

        bg-[#c9baaa]

        shadow-[0_0_30px_rgba(201,186,170,0.18)]
      "
    />
  )
}

export default ScrollProgress