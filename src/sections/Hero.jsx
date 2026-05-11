import React from "react";
import { Link } from "react-router-dom"
import hero from "../assets/hero-main.png"
import { motion, useScroll,useTransform, useSpring } from "framer-motion"


const Hero = () => {
  const { scrollYProgress } = useScroll()

const scaleX = useSpring(scrollYProgress, {
  stiffness: 90,
  damping: 20,
  restDelta: 0.001,
})

const { scrollY } = useScroll()

const bgY = useTransform(scrollY, [0, 1000], [0, 40])

const textY = useTransform(scrollY, [0, 500], [0, -80])

const textOpacity = useTransform(
  scrollY,
  [0, 350],
  [1, 0]
)

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

      <motion.div
  className="
    fixed
    top-0
    left-0
    right-0
    h-px
    origin-left
    z-[9999]

    bg-gradient-to-r
    from-[#c9baaa]/0
    via-[#c9baaa]/70
    to-[#c9baaa]/0
  "
  style={{
    scaleX,
  }}
/>

{/* BLURRED BASE */}
<motion.img
  src={hero}
  style={{ y: bgY ,scale:1.16, }}
  alt=""
  className="
    absolute
    inset-0
    h-full
    w-full

    object-cover

    object-[30%_8%]
    sm:object-[center_18%]

    grayscale
    brightness-[0.46]
    sm:brightness-[0.42]

    contrast-[1.18]
    sm:contrast-[1.28]

    blur-[0.6px]
    sm:blur-[0.8px]

    opacity-[0.94]
    scale-[1.06]
    sm:scale-[1.02]

    pointer-events-none
    select-none

    animate-[float_14s_ease-in-out_infinite]
  "
/>

{/* SHARP EDGE LAYER */}
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

    grayscale
    brightness-[0.56]
    contrast-[1.32]

    opacity-[0.10]
    mix-blend-soft-light

    pointer-events-none
    select-none
  "
/>

      

      {/* BOTTOM ATMOSPHERE */}
      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-[45%]
          pointer-events-none
          bg-gradient-to-t
          from-black/70
          via-black/25
          to-transparent
        "
      />

      {/* TYPOGRAPHY BLOCK */}
      <motion.div   

        style={{
          y: textY,
          opacity: textOpacity,
        }}

        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 2.8,
          ease: [0.22, 1, 0.36, 1],
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
        
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6,
              duration: 1.6,
              ease: [0.22, 1, 0.36, 1],
            }}

          className="
            uppercase
            mb-5
            md:mb-6
            text-[10px]
            tracking-[0.42em]
            text-[#c9baaa]/50
            font-light
          "
        >
          Eau de Parfum · 2025 Collection
        </motion.p>

        {/* TITLE STACK */}
        <div className="relative">

          {/* THE */}
          <motion.h1

            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.8,
              duration: 1.6,
              ease: [0.22, 1, 0.36, 1],
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
            "
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            THE
          </motion.h1>

          {/* ZENVERA */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1,
              duration: 1.6,
              ease: [0.22, 1, 0.36, 1],
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
                    initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.2,
              duration: 1.6,
            }}
          className="
            mx-auto
            mt-2
            mb-4
            md:mt-7
            md:mb-7
            w-[140px]
            h-px
            bg-[#c9baaa]/20
          "
        />

        {/* TAGLINE */}
        <motion.p
                    initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.5,
              duration: 1.6,
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
            -translate-x-[18px]
          "
        >
          Five fragrances. Five stories. One obsession.
        </motion.p>

        {/* BUTTON */}
        <motion.div
        
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.7,
              duration: 1.6,
            }}

        className="flex justify-center mt-7">


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

  text-[#c9baaa]
   bg-[#1a1411]

  transition-all
  duration-500

  hover:bg-[#c9baaa]/10
  hover:text-[#f5ede4]
  hover:border-[#c9baaa]/40
"
  >  Discover The Collection
</Link>

        </motion.div>

      </motion.div>

    </section>
  )
}

export default Hero