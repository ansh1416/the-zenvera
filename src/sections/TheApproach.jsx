import memoryVide from "../assets/memoryVide.mp4"
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  AnimatePresence,
} from "framer-motion"
import { useRef, useState, useEffect } from "react"

function TheApproach() {

  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const videoY = useTransform(
    scrollYProgress,
    [0, 1],
    [120, -120]
  )

  const textY = useTransform(
    scrollYProgress,
    [0, 1],
    [100, -100]
  )

  const intimacyX = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 200]
  )

  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.4],
    [0.06, 0.18]
  )

  const videoScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1.18]
  )

  const videoRotate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -1.5]
  )

  const floatingWords = [
    { text: "AFTER YOU", className: "top-[4%] left-[6%]" },
    { text: "TOUCH", className: "top-[14%] left-[30%]" },
    { text: "MINE", className: "top-[8%] right-[16%]" },

    { text: "NAKED", className: "top-[52%] left-[18%]" },
    { text: "OBSESSION", className: "bottom-[26%] left-[42%]" },
    { text: "STILL", className: "top-[34%] left-[54%]" },

    { text: "LINGER", className: "bottom-[16%] right-[10%]" },
    { text: "CRAVE", className: "top-[66%] right-[8%]" },
    { text: "CLOSER", className: "bottom-[8%] right-[28%]" },

    { text: "SKIN", className: "top-[24%] left-[4%]" },
    { text: "WARMTH", className: "top-[24%] left-[16%]" },

    { text: "SLOW", className: "top-[76%] left-[8%]" },
    { text: "FEVER", className: "bottom-[10%] left-[18%]" },

    { text: "TEMPTATION", className: "bottom-[6%] left-[48%]" },

    { text: "BREATH", className: "top-[22%] right-[2%]" },

    { text: "DESIRE", className: "bottom-[24%] right-[2%]" },

    { text: "LIPS", className: "bottom-[18%] right-[12%]" },
  ]

  const glitchWords = [
    "INTIMACY",
    "STILL",
    "MINE",
    "YOU",
    "NAKED",
    "CLOSER",
    "LINGER",
    "DESIRE",
    "VELVET",
    "CRAVE",
    "FEVER",
  ]

  const [activeWord, setActiveWord] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWord((prev) => (prev + 1) % glitchWords.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.section

     initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{
    duration: 1.8,
    ease: [0.22, 1, 0.36, 1],
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
                  ? [0, -180 - i * 20]
                  : [0, 120 + i * 10]
              ),

              x: useTransform(
                scrollYProgress,
                [0, 1],
                i % 3 === 0
                  ? [0, 60]
                  : i % 2 === 0
                  ? [0, -40]
                  : [0, 25]
              ),

              opacity: useTransform(
                scrollYProgress,
                [0, 0.5],
                [0.03, 0.09]
              ),
            }}
          >

            <span
              className={`
                text-[18px]
                ${i % 3 === 0 ? "md:text-[42px]" : "md:text-[30px]"}
                font-light
                uppercase
                tracking-[0.45em]
                text-white
                blur-[2px]
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

        <div className="hidden md:block absolute right-[45%] h-[100%] w-px bg-white/[0.05] blur-[1px]" />

        <div className="hidden md:block absolute right-0 top-[80px] h-px w-[52%] bg-white/[0.05] blur-[1px]" />

        <div className="hidden md:block absolute right-0 bottom-[80px] h-px w-[52%] bg-white/[0.05] blur-[1px]" />

        <div className="md:hidden absolute top-[70px] left-0 h-px w-full bg-white/[0.05] blur-[1px]" />

        <div className="md:hidden absolute left-0 top-162 h-px w-full bg-white/[0.05] blur-[1px]" />

        <div className="md:hidden absolute top-10 right-4 w-px h-160 bg-white/[0.05] blur-[1px]" />

        <div className="md:hidden absolute left-4 top-10 w-px h-160 bg-white/[0.05] blur-[1px]" />

        {/* DESKTOP */}
        <motion.div
          style={{
            x: intimacyX,
          }}
          className="
            hidden
            lg:block
            absolute
            right-[56%]
            top-[54%]
            -translate-y-1/2
            select-none
            pointer-events-none
            z-20
          "
        >

          <AnimatePresence mode="wait">

            <motion.div
              key={glitchWords[activeWord]}
              initial={{
                opacity: 0,
                filter: "blur(4px)",
                y: 10,
              }}
              animate={{
                opacity: 1,
                filter: "blur(0px)",
                y: 0,
              }}
              exit={{
                opacity: 0,
                filter: "blur(2px)",
                y: -10,
              }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
              className="relative"
            >

              <span
                className="
                  absolute
                  left-[-2px]
                  top-[-2px]
                  text-[70px]
                  font-medium
                  tracking-[0.30em]
                  uppercase
                  opacity-[0.28]
                  whitespace-nowrap
                  text-red-800/[0.58]
                  blur-[1px]
                "
                style={{
                  writingMode: "vertical-rl",
                }}
              >
                {glitchWords[activeWord].split("").join(" ")}
              </span>

              <span
                className="
                  absolute
                  left-[2px]
                  top-[2px]
                  text-[70px]
                  font-medium
                  tracking-[0.30em]
                  uppercase
                  whitespace-nowrap
                  opacity-[0.28]
                  text-blue-800/[0.55]
                  blur-[1px]
                "
                style={{
                  writingMode: "vertical-rl",
                }}
              >
                {glitchWords[activeWord].split("").join(" ")}
              </span>

              <span
                className="
                  relative
                  text-[70px]
                  font-medium
                  tracking-[0.27em]
                  uppercase
                  whitespace-nowrap
                  text-white/[0.32]
                "
                style={{
                  writingMode: "vertical-rl",
                  textShadow: "0 0 10px rgba(255,255,255,0.04)",
                }}
              >
                {glitchWords[activeWord].split("").join(" ")}
              </span>

            </motion.div>

          </AnimatePresence>

        </motion.div>

        {/* MOBILE */}
        <motion.div
          className="
            lg:hidden
            absolute
            bottom-[425px]
            left-1/2
            -translate-x-1/2
            select-none
            pointer-events-none
            z-20
          "
        >

          <AnimatePresence mode="wait">

            <motion.div
              key={glitchWords[activeWord]}
              initial={{
                opacity: 0,
                filter: "blur(4px)",
                y: 10,
              }}
              animate={{
                opacity: 1,
                filter: "blur(0px)",
                y: 0,
              }}
              exit={{
                opacity: 0,
                filter: "blur(2px)",
                y: -10,
              }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
              className="relative"
            >

              <span
                className="
                  absolute
                  left-[-4px]
                  top-[-4px]
                  text-[36px]
                  font-medium
                  tracking-[0.26em]
                  uppercase
                  opacity-[0.60]
                  whitespace-nowrap
                  text-red-800/[0.58]
                  blur-[1px]
                "
              >
                {glitchWords[activeWord].split("").join(" ")}
              </span>

              <span
                className="
                  absolute
                  left-[4px]
                  top-[4px]
                  text-[36px]
                  font-medium
                  tracking-[0.26em]
                  uppercase
                  opacity-[0.60]
                  whitespace-nowrap
                  text-blue-800/[0.55]
                  blur-[1px]
                "
              >
                {glitchWords[activeWord].split("").join(" ")}
              </span>

              <span
                className="
                  relative
                  text-[36px]
                  tracking-[0.26em]
                  font-medium
                  uppercase
                  text-white/[0.38]
                  whitespace-nowrap
                "
                style={{
                  textShadow: "0 0 10px rgba(255,255,255,0.04)",
                }}
              >
                {glitchWords[activeWord].split("").join(" ")}
              </span>

            </motion.div>

          </AnimatePresence>

        </motion.div>

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
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
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
            "
          >
            THE APPROACH
          </p>

          <motion.h2
            animate={{
              opacity: [0.92, 1, 0.92],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="
              text-[#e7d8ce]
              uppercase
              leading-[0.9]
              tracking-[-0.06em]
              text-4xl
              sm:text-5xl
              md:text-7xl
              font-light
            "
                        style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            YOU WERE MEANT
            <br />
            TO STAY THIS CLOSE.
          </motion.h2>

          <p
            className="
              mt-10
              md:mt-14
              max-w-md
              text-neutral-500
              leading-relaxed
              text-sm
              md:text-[15px]
            "
          >
            THE ZENVERA explores intimacy through scent,
            memory, warmth, and emotional temptation.
            A quiet atmosphere where desire lingers softly,
            like perfume left behind on skin.
          </p>

          <motion.p
            animate={{
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="
              mt-14
              italic
              text-neutral-400
              text-sm
            "
          >
            “Some people stay on skin longer than memory.”
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
                x: ["-10%", "10%", "-10%"],
                y: ["-5%", "5%", "-5%"],
                scale: [1, 1.2, 1],
                opacity: [0.12, 0.22, 0.12],
              }}
              transition={{
                duration: 10,
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
              "
            />

            <motion.video
              style={{
                y: videoY,
                scale: videoScale,
                rotate: videoRotate,
              }}
              autoPlay
              muted
              loop
              playsInline
              animate={{
                x: ["0%", "-2%", "0%"],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                grayscale
                contrast-[1.5]
                brightness-[0.42]
                opacity-[0.82]
              "
            >
              <source src={memoryVide} type="video/mp4" />
            </motion.video>

            <div
              className="
                absolute
                inset-0
                z-10
                bg-black/28
              "
            />

            <motion.div
              animate={{
                rotate: [0, 8, -6, 0],
                scale: [1, 1.15, 0.95, 1],
                opacity: [0.08, 0.18, 0.1, 0.08],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                -top-[20%]
                -left-[20%]
                w-[140%]
                h-[140%]
                z-20
                rounded-full
                blur-[120px]
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

