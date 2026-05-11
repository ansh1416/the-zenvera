import memoryVide from "../assets/memoryVide.mp4"
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { easeOutCinematic, easeOutLuxury } from "../utils/motion"

function TheApproach() {

  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  // Premium parallax effect - subtle and expensive-feeling
  const videoY = useTransform(scrollYProgress, [0, 1], [140, -140])
  const textY = useTransform(scrollYProgress, [0, 1], [110, -110])

  
  // Cinematic scale effect
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.05])


const floatingWords = [
  { text: "AFTER YOU", className: "top-[4%] left-[6%]" },
  { text: "TOUCH", className: "top-[14%] left-[30%]" },
  { text: "MINE", className: "top-[8%] right-[16%]" },
  { text: "NAKED", className: "top-[52%] left-[18%]" },
  { text: "OBSESSION", className: "bottom-[26%] left-[42%]" },
  { text: "STILL", className: "top-[34%] left-[54%]" },
  { text: "LINGER", className: "bottom-[16%] right-[10%]" },
  { text: "CRAVE", className: "top-[66%] right-[8%]" },
]



  return (
    <motion.section
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 1.6,
        ease: easeOutCinematic,
      }}
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        bg-black
        z-10
      "
    >

      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">

        {floatingWords.map((item, i) => (

          <motion.div
            key={`${item.text}-${i}`}
            className={`
              absolute
              ${item.className}
            `}
            style={{
              y: useTransform(
                scrollYProgress,
                [0, 1],
                i % 2 === 0
                  ? [0, -70 - i * 8]
                  : [0, 50 + i * 5]
              ),

              opacity: useTransform(
                scrollYProgress,
                [0, 0.5],
                [0.10, 0.22]
              ),
            }}
          >

            <span
              className={`
  text-[14px]
  ${i % 3 === 0 ? "md:text-[42px]" : "md:text-[30px]"}
  sm:text-[18px]
  font-light
  uppercase
  tracking-[0.32em]
  text-white/80
  opacity-90
  whitespace-nowrap
  select-none
`}
            >
              {item.text}
            </span>

          </motion.div>

        ))}

      </div>

      <div className="absolute inset-0 pointer-events-none">

        <div className="hidden md:block absolute right-[45%] h-[100%] w-px bg-white/[0.07] blur-[1px]" />

        <div className="hidden md:block absolute right-0 top-[80px] h-px w-[52%] bg-white/[0.07] blur-[1px]" />

        <div className="hidden md:block absolute right-0 bottom-[80px] h-px w-[52%] bg-white/[0.07] blur-[1px]" />

        <div className="md:hidden absolute top-[70px] left-0 h-px w-full bg-white/[0.14] blur-[1px]" />

        <div className="md:hidden absolute left-0 top-162 h-px w-full bg-white/[0.14] blur-[1px]" />

        <div className="md:hidden absolute top-10 right-4 w-px h-160 bg-white/[0.14] blur-[1px]" />

        <div className="md:hidden absolute left-4 top-10 w-px h-160 bg-white/[0.14] blur-[1px]" />

        

    

      </div>

      <div
        className="
          relative
          z-10
          min-h-screen
          grid
          lg:grid-cols-2
          gap-16
          items-center
          px-6
          sm:px-10
          md:px-16
          lg:px-24
          py-24
        "
      >

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
            
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.4,
            ease: easeOutCinematic,
          }}
          viewport={{ once: true }}
          className="
            max-w-[520px]
            order-2
            lg:order-1
          "
        >

          <p
            className="
              mb-8
              mt-5
              text-[10px]
              md:text-[11px]
              tracking-[0.35em]
              uppercase
              text-neutral-500
              transition-all
              duration-700
            "
          >
            THE APPROACH
          </p>

          <motion.h2
            initial={{ opacity: 0.6 }}
            whileInView={{ 
              opacity: 1,
              transition: {
                delay: 0.2,
                duration: 1.2,
                ease: easeOutCinematic,
              }
            }}

            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              text-[#c9baaa]/80
              uppercase
              leading-[0.9]
              tracking-[-0.06em]
              text-4xl
              sm:text-5xl
              md:text-7xl
              font-light
              transition-colors
              duration-700
            "
            style={{
              fontFamily: "'Cormorant Garamond', serif",

            }}
          >
            YOU WERE MEANT
            <br />
            TO STAY THIS CLOSE.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ 
              opacity: 1,
              transition: {
                delay: 0.3,
                duration: 1.2,
                ease: easeOutCinematic,
              }
            }}
            className="
              mt-10
              md:mt-14
              max-w-md
              text-[#c9baaa]
              leading-relaxed
              text-sm
              md:text-[15px]
              transition-opacity
              duration-700
            "
          >
            THE ZENVERA explores intimacy through scent,
            memory, warmth, and emotional temptation.
            A quiet atmosphere where desire lingers softly,
            like perfume left behind on skin.
          </motion.p>

          <motion.p
            initial={{ opacity: 0.2 }}
            whileInView={{ 
              opacity: 1,
              transition: {
                delay: 0.4,
                duration: 1.2,
              }
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              mt-14
              italic
              text-[#c59057]
              text-sm
              uppercase
              transition-opacity
              duration-700
            "
          >
            “Some people stay on skin longer than memory”
          </motion.p>

        </motion.div>

        <div
          className="
            relative
            flex
            justify-center
            order-1
            lg:order-2
          "
        >

          <div
            className="
              relative
              w-full
              max-w-[500px]
              sm:max-w-[420px]
              md:max-w-[500px]
              aspect-[3/4]
              overflow-hidden
              bg-black
            "
          >

            <motion.div
              animate={{
                x: ["-8%", "8%", "-8%"],
                y: ["-6%", "6%", "-6%"],
                scale: [1, 1.15, 1],
                opacity: [0.10, 0.20, 0.10],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                inset-[-20%]
                z-10
                rounded-full
                blur-[120px]
                bg-white
                mix-blend-soft-light
                pointer-events-none
                will-change-transform
              "
            />

            <motion.video
              style={{
                y: videoY,
                scale: videoScale,
              }}
              autoPlay
              muted
              loop
              playsInline
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                saturate-[0.9]
                contrast-[1.5]
                brightness-[0.62]
                opacity-[0.82]
                transform-gpu
                will-change-transform
              "
            >
              <source src={memoryVide} type="video/mp4" />
            </motion.video>

            <div
              className="
                absolute
                inset-0
                z-10
                bg-black/26
              "
            />

            <motion.div
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                -top-[25%]
                -left-[25%]
                w-[150%]
                h-[150%]
                z-20
                rounded-full
                blur-[70px]
                bg-white
                mix-blend-overlay
                pointer-events-none
              "
            />

          </div>

        </div>

      </div>

    </motion.section>
  )
}

export default TheApproach

