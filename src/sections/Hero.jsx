import React from "react";
import { Link } from "react-router-dom"
import hero from "../assets/hero-main.png"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { easeOutCinematic, easeOutLuxury } from "../utils/motion"

const Hero = () => {
  const { scrollYProgress } = useScroll()

  // Premium spring for progress line - smooth and responsive
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 75,
    damping: 24,
    restDelta: 0.001,
    mass: 1,
  })

  const { scrollY } = useScroll()

  // Subtle parallax for background - slow, expensive-feeling motion
  const bgY = useTransform(scrollY, [0, 1200], [0, 35])

  // Smooth text fade on scroll
  const textY = useTransform(scrollY, [0, 500], [0, -75])
  const textOpacity = useTransform(scrollY, [0, 380], [1, 0])

  return (
    <section
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-[#050505]
        flex
        items-center
        justify-center
        px-6
      "
    >

      {/* SCROLL PROGRESS BAR - LUXURY GRADIENT */}
      <motion.div
        className="
          fixed
          top-0
          left-0
          right-0
          h-[2px]
          origin-left
          z-[9999]
          bg-gradient-to-r
          from-[#c9baaa]/0
          via-[#c9baaa]/80
          to-[#c9baaa]/0
          shadow-[0_0_24px_rgba(201,186,170,0.16)]
        "
        style={{ scaleX }}
      />

{/* BLURRED BASE - SUBTLE PARALLAX */}
<motion.img
  src={hero}
  alt="The Zenvera Fragrance Collection"
  style={{ y: bgY, scale: 1.16 }}
  className="
    absolute
    inset-0
    h-full
    w-full
    object-cover
    object-[30%_8%]
    sm:object-[center_18%]

    grayscale

    brightness-[1]
    sm:brightness-[1]

    contrast-[1.08]
    sm:contrast-[1.12]

    blur-[0.3px]
    sm:blur-[0.5px]

    opacity-[0.98]

    scale-[1.04]
    sm:scale-[1.01]

    pointer-events-none
    select-none
    will-change-transform
    animate-float
  "
/>

{/* SHARP DETAIL LAYER - ADDS DEPTH */}
<img
  src={hero}
  alt=""
  className="
    absolute
    inset-0
    h-full
    w-full
    object-cover
    object-[58%_20%]
    sm:object-[center_18%]

    
    brightness-[0.78]

    contrast-[1.10]

    opacity-[0.16]

    mix-blend-soft-light
    pointer-events-none
    select-none
  "
/>



      {/* TYPOGRAPHY BLOCK */}
      <motion.div
        style={{
          y: textY,
          opacity: textOpacity,
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 2.4,
          ease: easeOutCinematic,
          type: "tween",
        }}
        className="
          relative
          text-center
          w-full
          max-w-[1000px]
          -translate-y-[10px]
          sm:-translate-y-[30px]
          md:-translate-y-[70px]
        "
      >
        {/* LABEL */}
        <motion.p
          initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            delay: 0.55,
            duration: 1.4,
            ease: easeOutCinematic,
          }}
          className="
            uppercase
            mb-5
            md:mb-6
            text-[10px]
            tracking-[0.42em]
            text-[#c9baaa]/60
            font-light
          "
        >
          Eau de Parfum · 2026 Collection
        </motion.p>

        {/* TITLE STACK */}
        <div className="relative">
          {/* THE */}
          <motion.h1
            initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              delay: 0.75,
              duration: 1.5,
              ease: easeOutCinematic,
            }}
            className="
              uppercase
              leading-none
              relative
              z-10
              mb-[10px]
              md:mb-[-18px]
              text-[38px]
              sm:text-[52px]
              md:text-[72px]
              tracking-[0.12em]
              text-[#c9baaa]/80
              font-normal
              transition-colors
              duration-700
            "
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            THE
          </motion.h1>

          {/* ZENVERA */}
          <motion.h1
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              delay: 0.95,
              duration: 1.6,
              ease: easeOutCinematic,
            }}
            className="
              uppercase
              leading-[0.9]
              whitespace-nowrap
              text-[72px]
              sm:text-[110px]
              md:text-[190px]
              tracking-[-0.095em]
              text-[#c9baaa]
              font-normal
              transition-colors
              duration-700
            "
            style={{
              fontFamily: "'Cormorant Garamond', serif",

            }}
          >
            ZENVERA
          </motion.h1>
        </div>

        {/* DIVIDER */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{
            delay: 1.15,
            duration: 1.2,
            ease: easeOutLuxury,
          }}
          className="
            mx-auto
            mt-2
            mb-4
            md:mt-7
            md:mb-7
            w-[140px]
            h-[1.5px]
            bg-gradient-to-r
            from-[#c9baaa]/0
            via-[#c9baaa]/30
            to-[#c9baaa]/0
            origin-center
          "
        />

        {/* TAGLINE */}
        <motion.p
          initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            delay: 1.35,
            duration: 1.4,
            ease: easeOutCinematic,
          }}
          className="
            italic
            text-center
            mx-auto
            px-4
            sm:px-2
            mt-4
            mb-4
            text-[14px]
            sm:text-[16px]
            md:text-[20px]
            leading-[1.7]
            tracking-[0.03em]
            text-[#c9baaa]/55
            max-w-[720px]
            transition-opacity
            duration-700
          "
        >
          Five fragrances. Five stories. One obsession.
        </motion.p>

        {/* BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            delay: 1.55,
            duration: 1.35,
            ease: easeOutCinematic,
          }}
          className="flex justify-center mt-7"
        >
          <Link
            to="/Collection"
className="
  group
  relative
  overflow-hidden

  uppercase
  text-[8px]
  sm:text-[9px]
  tracking-[0.42em]

  px-6
  sm:px-8
  md:px-10
  py-[18px]

  border
  border-[#c9baaa]/20

  !text-[#c9baaa]

  bg-[#1a1411]
  backdrop-blur-md



  transition-all
  duration-700
  ease-out

  hover:bg-[#c9baaa]/10
  hover:!text-[#f5ede4]
  hover:border-[#c9baaa]/40


  active:scale-[0.98]
  will-change-transform
"
          >
            Discover The Collection
          </Link>
        </motion.div>
      </motion.div>

    </section>
  )
}

export default Hero