import { useRef } from "react"
import { useNavigate } from "react-router-dom"

import AfterYou from "../assets/AfterYou.PNG"
import Closer from "../assets/Closer.PNG"
import Naked from "../assets/Naked.PNG"
import Still from "../assets/Still.PNG"
import Mine from "../assets/Mine.PNG"
import Main from "../assets/collection-final.PNG"

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion"
import { easeOutCinematic, easeOutLuxury } from "../utils/motion"


const fragrances = [
  {
    name: "AFTER YOU",
    line: "The scent of longing that never truly leaves.",
    image: AfterYou,
  },
  {
    name: "CLOSER",
    line: "Soft intimacy wrapped in midnight warmth.",
    image: Closer,
  },
  {
    name: "NAKED",
    line: "Desire with nothing left to hide.",
    image: Naked,
  },
  {
    name: "STILL",
    line: "Silence darker than memory itself.",
    image: Still,
  },
  {
    name: "MINE",
    line: "Possession disguised as tenderness.",
    image: Mine,
  },
]

function TheObsession() {

  const navigate = useNavigate()

  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], [0, -240])
  const bgOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0.12])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -110])
  const bgImageY = useTransform(scrollYProgress, [0, 1], [0, -160])

  return (
    <section className="bg-black overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10 pointer-events-none" />

      {/* INTRO */}
      <motion.div
        ref={sectionRef}
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 1.5,
          ease: easeOutCinematic,
        }}
        className="
          relative
          overflow-hidden
          px-6
          md:px-16
          lg:px-24
          pt-40
          md:pt-56
          pb-28
          md:pb-40
        "
      >


<div
  className="
    absolute
    inset-0

    bg-gradient-to-r
    from-black
    via-black
    to-transparent

    z-10
  "
/>



        {/* CONTENT */}
        <motion.div
          style={{
            y: contentY,
            
          }}

          className="
            relative
            z-10
            max-w-[1200px]
          "
        >

          {/* LABEL */}
          <motion.p
            style={{
              y: contentY,
            }}
            initial={{
              opacity: 0,
              y: 18,

            }}
            whileInView={{
              opacity: 1,
              y: 0,

            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.2,
              duration: 1.2,
              ease: easeOutCinematic,
            }}
            className="
              uppercase
              text-[10px]
              tracking-[0.42em]
              text-[#c9baaa]/45
              mb-10
              transition-opacity
              duration-700
            "
          >
            The Collection
          </motion.p>

          {/* TITLE */}
          <motion.h2
            initial={{
              opacity: 0,
              y: 32,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.35,
              duration: 1.6,
              ease: easeOutCinematic,
            }}
            className="
              uppercase
              text-[54px]
              sm:text-[72px]
              md:text-[110px]
              lg:text-[140px]
              leading-[0.88]
              tracking-[-0.08em]
              text-[#c9baaa]
              font-light
              transition-colors
              duration-700
            "
            style={{
              fontFamily: "'Cormorant Garamond', serif",

            }}
          >
            FIVE SCENTS.
            <br />
            FIVE COLLISIONS.
          </motion.h2>

          {/* DIVIDER */}
          <motion.div
            initial={{
              width: 0,
              opacity: 0,
            }}
            whileInView={{
              width: 120,
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}

            className="
              mt-10
              mb-10
              h-[1.5px]
              bg-gradient-to-r
              from-[#c9baaa]/0
              via-[#c9baaa]/40
              to-[#c9baaa]/0
              origin-left
            "
          />

          {/* DESCRIPTION */}
          <motion.p
            style={{
              x: -contentY,
            }}
            initial={{
              opacity: 0,
              y: 16,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}

            className="
              max-w-[700px]
              text-[15px]
              md:text-[18px]
              leading-[1.9]
              tracking-[0.03em]
              text-[#c9baaa]/80
              transition-opacity
              duration-700
            "
          >
            Every fragrance within THE ZENVERA
            was designed like an emotional addiction —
            intimate, dangerous, impossible to forget.
          </motion.p>

        </motion.div>

      </motion.div>


      {/* CINEMATIC FRAGRANCE EXPERIENCE */}
<div className="relative bg-black overflow-hidden">

  {fragrances.map((item, index) => (

    <section
      key={item.name}
      className="
        relative

        min-h-screen

        flex
        items-center

        px-5
        sm:px-6
        md:px-16
        lg:px-24

        py-24
        md:py-32
      "
    >
      {/* ABSTRACT PERFUME BACKGROUND */}
<motion.div
  initial={{
    opacity: 0,
    scale: 1.2,
  }}

  whileInView={{
    opacity: 1,
    scale: 1,
  }}

  viewport={{
    once: false,
    amount: 0.2,
  }}

  transition={{
    duration: 2.5,
    ease: [0.22, 1, 0.36, 1],
  }}

  className={`
    absolute
    inset-0

    overflow-hidden

    pointer-events-none

    z-0
  `}
>

  {/* ABSTRACT IMAGE */}
  <img
    src={item.image}
    alt=""

    className={`
      absolute

      top-1/2
      -translate-y-1/2

      ${
        index % 2 === 0
          ? "-right-[22%]"
          : "-left-[22%]"
      }

      w-[900px]
      max-w-none

      object-cover

      opacity-[0.28]

      blur-[2px]

      scale-[1.9]

      rotate-[12deg]

      select-none
    `}
  />

</motion.div>
      {/* MAIN LAYOUT */}
      <div
        className={`
          relative
          z-20

          flex
          flex-col

          md:flex-row

          items-start
          md:items-center

          justify-between

          gap-14
          md:gap-20

          w-full

          ${
            index % 2 !== 0
              ? "md:flex-row-reverse"
              : ""
          }
        `}
      >

        {/* IMAGE SIDE */}
        <motion.div
          initial={{
            opacity: 0,
            y: 80,

            scale: 0.92,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: false,
            amount: 0.25,
          }}
          transition={{
            duration: 1.6,
            ease: easeOutCinematic,
          }}
          className="
            relative
            w-full
            md:w-[72%]
            flex-shrink-0
            will-change-transform
          "
        >

          {/* MOBILE ATMOSPHERE GLOW */}
          <div
            className="
              absolute
              inset-0

              bg-[#c9baaa]/[0.02]

              blur-3xl

              scale-110

              md:hidden
            "
          />

          {/* FRAME TOP */}
          <div
            className="
              absolute

              -top-3
              -left-3

              md:-top-5
              md:-left-5

              w-[70px]
              h-[70px]

              md:w-[120px]
              md:h-[120px]

              border-l
              border-t

              border-[#c9baaa]/20

              z-30
            "
          />

          {/* FRAME BOTTOM */}
          <div
            className="
              absolute

              -bottom-3
              -right-3

              md:-bottom-5
              md:-right-5

              w-[70px]
              h-[70px]

              md:w-[120px]
              md:h-[120px]

              border-r
              border-b

              border-[#c9baaa]/20

              z-30
            "
          />

          {/* IMAGE */}
          <div
            className="
              relative

              overflow-hidden

              aspect-[4/5]
              md:aspect-[16/11]
            "
          >

            <img
              src={item.image}
              alt={item.name}

              className="
                h-full
                w-full

                object-cover

                scale-[1.02]

                transition-transform
                duration-[2500ms]

                hover:scale-[1.04]
              "
            />

          </div>

        </motion.div>

{/* TEXT SIDE */}
<motion.div
  initial={{
    opacity: 0,
    y: 60,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
    
  }}
  viewport={{
    once: false,
    amount: 0.3,
  }}
  transition={{
    duration: 1.5,
    ease: easeOutCinematic,
    delay: 0.1,
  }}
  className="
    relative
    z-20
    w-full
    md:w-[28%]
    flex
    flex-col
    items-start
    px-1
    md:px-0
  "
>

  {/* NUMBER */}
  <p
    className={`
      mb-5

      text-[9px]
      md:text-[10px]

      uppercase
      tracking-[0.42em]

      ${
        item.name === "AFTER YOU"
          ? "text-[#7d746d]/70"

          : item.name === "CLOSER"
          ? "text-[#5f6d7a]/70"

          : item.name === "NAKED"
          ? "text-[#c6a16b]/70"

          : item.name === "STILL"
          ? "text-[#7b4a32]/70"

          : "text-[#8f4035]/70"
      }
    `}
  >
    Obsession {String(index + 1).padStart(2, "0")}
  </p>

  {/* NAME */}
  <h2
    className={`
      uppercase

      text-[52px]
      sm:text-[72px]

      ${
        item.name === "MINE"
          ? "md:text-[125px] tracking-[-0.10em]"
          : "md:text-[110px] tracking-[-0.08em]"
      }

      lg:text-[140px]

      leading-[0.88]

      ${
        item.name === "AFTER YOU"
          ? "text-[#7d746d]"

          : item.name === "CLOSER"
          ? "text-[#5f6d7a]"

          : item.name === "NAKED"
          ? "text-[#c6a16b]"

          : item.name === "STILL"
          ? "text-[#7b4a32]"

          : "text-[#8f4035]"
      }

      mb-6
      md:mb-8
    `}
    style={{
      fontFamily: "'Cormorant Garamond', serif",
    }}
  >
    {item.name}
  </h2>

  {/* DESCRIPTION */}
  <p
    className={`
      max-w-[320px]

      text-[15px]
      sm:text-[17px]
      md:text-[20px]

      leading-[1.9]

      ${
        item.name === "AFTER YOU"
          ? "text-[#7d746d]/90"

          : item.name === "CLOSER"
          ? "text-[#5f6d7a]/90"

          : item.name === "NAKED"
          ? "text-[#c6a16b]/90"

          : item.name === "STILL"
          ? "text-[#7b4a32]/90"

          : "text-[#8f4035]/90"
      }
    `}
  >
    {item.line}
  </p>

  {/* EMOTIONAL TEXT */}
<motion.div

  initial={{
    opacity: 0,
    y: 20,
  }}

  whileInView={{
    opacity: 1,
    y: 0,
  }}

  transition={{
    delay: 0.2,
    duration: 1,
  }}

  className="
    mt-8
    mb-10

    border-l
    border-white/10

    pl-5
  "
>

  <p
    className={`
      mb-4

      text-[9px]

      uppercase

      tracking-[0.42em]

      ${
        item.name === "AFTER YOU"
          ? "text-[#7d746d]"

          : item.name === "CLOSER"
          ? "text-[#5f6d7a]"

          : item.name === "NAKED"
          ? "text-[#c6a16b]"

          : item.name === "STILL"
          ? "text-[#7b4a32]"

          : "text-[#8f4035]"
      }
    `}
  >
    Emotional State
  </p>

  <p
    className="
      max-w-[340px]

      text-[14px]
      md:text-[15px]

      leading-[2]

      text-[#c9baaa]
    "
  >
    {
      item.name === "AFTER YOU"
        ? "Built around distance, memory, and unfinished love."

        : item.name === "CLOSER"
        ? "The warmth of intimacy in low light and silence."

        : item.name === "NAKED"
        ? "Emotional exposure with nothing left hidden."

        : item.name === "STILL"
        ? "The beauty of silence after emotional collapse."

        : "Obsession disguised as tenderness and possession."
    }
  </p>

</motion.div>

<motion.button

  whileHover={{
    y: -4,
  }}

  whileTap={{
    scale: 0.98,
  }}

onClick={() => {
  navigate(`/fragrance/${item.name.toLowerCase().replace(/\s+/g, "-")}`)
}}

  className={`
    group
    relative

    overflow-hidden

    uppercase

    text-[9px]
    md:text-[10px]

    tracking-[0.36em]

    border

    px-7
    md:px-8

    py-4

    transition-all
    duration-700

    ${
      item.name === "AFTER YOU"
        ? "text-[#7d746d] border-[#7d746d]"

        : item.name === "CLOSER"
        ? "text-[#5f6d7a] border-[#5f6d7a]"

        : item.name === "NAKED"
        ? "text-[#c6a16b] border-[#c6a16b]"

        : item.name === "STILL"
        ? "text-[#7b4a32] border-[#7b4a32]"

        : "text-[#8f4035] border-[#8f4035]"
    }
  `}
>

  {/* BUTTON BACKGROUND */}
  <motion.span

    initial={{
      x: "-100%",
    }}

    whileHover={{
      x: "0%",
    }}

    transition={{
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    }}

    className={`
      absolute
      inset-0

      ${
        item.name === "AFTER YOU"
          ? "bg-[#7d746d]"

          : item.name === "CLOSER"
          ? "bg-[#5f6d7a]"

          : item.name === "NAKED"
          ? "bg-[#c6a16b]"

          : item.name === "STILL"
          ? "bg-[#7b4a32]"

          : "bg-[#8f4035]"
      }
    `}
  />

  {/* TEXT */}
  <span className="relative z-10">
    Enter The Fragrance
  </span>

</motion.button>

  {/* MOBILE DIVIDER */}
  <div
    className={`
      mt-10

      h-px
      w-16

      ${
        item.name === "AFTER YOU"
          ? "bg-[#7d746d]"

          : item.name === "CLOSER"
          ? "bg-[#5f6d7a]"

          : item.name === "NAKED"
          ? "bg-[#c6a16b]"

          : item.name === "STILL"
          ? "bg-[#7b4a32]"

          : "bg-[#8f4035]"
      }

      md:hidden
    `}
  />

</motion.div>

      </div>

    </section>

  ))}

</div>
      

    </section>
  )
}
export default TheObsession