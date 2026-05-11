import { useState, useEffect } from "react"

import AfterYou from "../assets/AfterYou.PNG"
import Closer from "../assets/Closer.PNG"
import Naked from "../assets/Naked.PNG"
import Still from "../assets/Still.PNG"
import Mine from "../assets/Mine.PNG"
import Main from "../assets/collection-final.PNG"
import { useCart } from "../context/CartContext"

import { motion } from "framer-motion"

function TheDiscoverySet() {

  const { addItem } = useCart()

  const collection = [
    {
      name: "AFTER YOU",
      image: AfterYou,
      tone: "#7d746d",
      line: "Smoky longing that lingers after midnight.",
      size: "100ML",
      price: "₹2999",
    },

    {
      name: "CLOSER",
      image: Closer,
      tone: "#5f6d7a",
      line: "Cold intimacy wrapped in dark blue silence.",
      size: "100ML",
      price: "₹2999",
    },

    {
      name: "NAKED",
      image: Naked,
      tone: "#c6a16b",
      line: "Golden temptation with nothing left to hide.",
      size: "100ML",
      price: "₹2999",
    },

    {
      name: "STILL",
      image: Still,
      tone: "#7b4a32",
      line: "Brown shadows and quiet emotional tension.",
      size: "100ML",
      price: "₹2999",
    },

    {
      name: "MINE",
      image: Mine,
      tone: "#8f4035",
      line: "Possession disguised as warmth and desire.",
      size: "100ML",
      price: "₹2999",
    },

    {
      name: "THE ART",
      image: Main,
      tone: "#c9baaa",
      line: "All five cinematic obsessions together.",
      size: "5 × 10ML",
      price: "₹1499",
    },
  ]

  const [active, setActive] = useState(collection[0])

  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    setQuantity(1)
  }, [active])

  return (
    <section
      className="
        relative

        overflow-hidden

        bg-black

        px-5
        sm:px-6
        md:px-16
        lg:px-24

        py-28
        md:py-40
      "
    >



      {/* TOP LABEL */}
      <motion.p

        initial={{
          opacity: 0,
          y: 20,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
        }}

        viewport={{
          once: true,
        }}

        transition={{
          duration: 1,
        }}

        className="
          relative
          z-10

          uppercase

          text-[10px]

          tracking-[0.42em]

          text-[#c9baaa]/40

          mb-10
        "
      >
        Discovery Set
      </motion.p>

      {/* MAIN GRID */}
      <div
        className="
          relative
          z-20

          grid
          grid-cols-1
          lg:grid-cols-[140px_1fr_420px]

          gap-14
          lg:gap-20

          items-center
        "
      >

        {/* LEFT MENU */}
        <div
          className="
            relative
            z-30

            flex
            lg:flex-col

            gap-4
            md:gap-5

            overflow-x-auto
            lg:overflow-visible

            pb-2
          "
        >

          {collection.map((item) => (

            <button
              key={item.name}

              onClick={() => setActive(item)}

              className={`
                relative

                flex-shrink-0

                text-left

                uppercase

                text-[10px]
                md:text-[11px]

                tracking-[0.34em]

                transition-all
                duration-500

                ${
                  active.name === item.name
                    ? "text-white"
                    : "text-white/25 hover:text-white/60"
                }
              `}
            >

              {active.name === item.name && (
                <motion.div
                  layoutId="activeDiscovery"

                  className="absolute -left-3 top-1/2 h-[1px] w-6"

                  style={{
                    backgroundColor: item.tone,
                  }}
                />
              )}

              <span
                style={{
                  color:
                    active.name === item.name
                      ? item.tone
                      : "",
                }}
              >
                {item.name}
              </span>

            </button>

          ))}

        </div>

        {/* CENTER IMAGE */}
        <motion.div
          key={active.name}

          initial={{
            opacity: 0,
            scale: 1.04,
          }}

          animate={{
            opacity: 1,
            scale: 1,
          }}

          transition={{
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
          }}

          className="
            relative
            z-10
          "
        >

          {/* IMAGE CONTAINER */}
          <div
            className="
              relative

              overflow-hidden

              border
              border-white/10

              bg-[#060606]
            "
          >

            {/* FLOATING IMAGE */}
            <motion.img

              animate={{
                y: [0, -10, 0],
              }}

              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}

              src={active.image}
              alt={active.name}

              className="
                w-full

                h-[420px]
                md:h-[680px]

                object-cover
              "
            />

          </div>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          key={active.name + "-content"}

          initial={{
            opacity: 0,
            y: 40,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 1,
          }}

          className="
            relative
            z-20
          "
        >

          {/* SMALL LABEL */}
          <p
            className="
              uppercase

              text-[10px]

              tracking-[0.42em]

              text-white/30

              mb-6
            "
          >
            Final Obsession
          </p>

          {/* TITLE */}
          <h2
            className="
              uppercase

              text-[56px]
              sm:text-[74px]
              md:text-[110px]

              leading-[0.88]
              tracking-[-0.08em]

              mb-8
            "
            style={{
              color: active.tone,
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            {active.name}
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              max-w-[420px]

              text-[15px]
              md:text-[18px]

              leading-[1.9]

              text-[#c9baaa]/60
            "
          >
            {active.line}
          </p>

          {/* EMOTIONAL TEXT */}
          <motion.div

            initial={{
              opacity: 0,
              y: 20,
            }}

            animate={{
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
              className="
                text-[14px]
                md:text-[15px]

                leading-[2]

                text-[#c9baaa]/42
              "
            >
              {
                active.name === "AFTER YOU"
                  ? "Built around distance, memory, and unfinished love."

                  : active.name === "CLOSER"
                  ? "The warmth of intimacy in low light and silence."

                  : active.name === "NAKED"
                  ? "Emotional exposure with nothing left hidden."

                  : active.name === "STILL"
                  ? "The beauty of silence after emotional collapse."

                  : active.name === "MINE"
                  ? "Obsession disguised as tenderness and possession."

                  : "All five emotional addictions collected together."
              }
            </p>

          </motion.div>

          {/* DETAILS */}
          <div
            className="
              mt-16

              flex
              flex-col

              gap-10
            "
          >

            {/* PRICE */}
            <div className="space-y-4">

              <div className="flex items-end gap-4">

                <h3
                  className="
                    text-[48px]
                    md:text-[68px]

                    tracking-[-0.06em]
                  "
                  style={{
                    color: active.tone,
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  {active.price}
                </h3>

                <p
                  className="
                    pb-3

                    uppercase

                    text-[10px]

                    tracking-[0.32em]

                    text-[#c9baaa]/30
                  "
                >
                  {active.size}
                </p>

              </div>

              <p
                className="
                  max-w-[420px]

                  text-[15px]
                  md:text-[17px]

                  leading-[1.9]

                  text-[#c9baaa]/55
                "
              >
                {active.name === "THE ART"
                  ? "Discovery set containing all five cinematic fragrances in elegant travel bottles."
                  : "Individual cinematic fragrance bottle crafted for intense emotional presence."
                }
              </p>

            </div>

            {/* CART */}
            <div
              className="
                flex
                flex-wrap

                items-center

                gap-4
              "
            >

              {/* QUANTITY */}
              <div
                className="
                  flex
                  items-center

                  border
                  border-[#c9baaa]/15
                "
              >

                <button
                  onClick={() =>
                    setQuantity((prev) =>
                      prev > 1 ? prev - 1 : 1
                    )
                  }

                  className="
                    px-4
                    py-3

                    text-[#c9baaa]/60

                    hover:text-[#c9baaa]

                    transition-colors
                  "
                >
                  −
                </button>

                <span
                  className="
                    px-5

                    text-[13px]

                    text-[#c9baaa]
                  "
                >
                  {quantity}
                </span>

                <button
                  onClick={() =>
                    setQuantity((prev) => prev + 1)
                  }

                  className="
                    px-4
                    py-3

                    text-[#c9baaa]/60

                    hover:text-[#c9baaa]

                    transition-colors
                  "
                >
                  +
                </button>

              </div>

              {/* ADD TO CART */}
              <motion.button

                whileHover={{
                  y: -4,
                  scale: 1.02,
                }}

                whileTap={{
                  scale: 0.98,
                }}

                  onClick={() => {

    addItem({
      id: active.name,
      name: active.name,
      image: active.image,
      price: Number(active.price.replace("₹", "")),
      quantity,
    })

  }}

                className={`
                  group
                  relative

                  overflow-hidden

                  uppercase

                  text-[10px]

                  tracking-[0.32em]

                  px-8
                  py-4

                  transition-all
                  duration-700

                  ${
                    active.name === "AFTER YOU"
                      ? "text-[#7d746d] border border-[#7d746d]/25"

                      : active.name === "CLOSER"
                      ? "text-[#5f6d7a] border border-[#5f6d7a]/25"

                      : active.name === "NAKED"
                      ? "text-[#c6a16b] border border-[#c6a16b]/25"

                      : active.name === "STILL"
                      ? "text-[#7b4a32] border border-[#7b4a32]/25"

                      : active.name === "MINE"
                      ? "text-[#8f4035] border border-[#8f4035]/25"

                      : "text-[#c9baaa] border border-[#c9baaa]/20"
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
                      active.name === "AFTER YOU"
                        ? "bg-[#7d746d]/10"

                        : active.name === "CLOSER"
                        ? "bg-[#5f6d7a]/10"

                        : active.name === "NAKED"
                        ? "bg-[#c6a16b]/10"

                        : active.name === "STILL"
                        ? "bg-[#7b4a32]/10"

                        : active.name === "MINE"
                        ? "bg-[#8f4035]/10"

                        : "bg-[#c9baaa]/10"
                    }
                  `}
                />

                <span className="relative z-10">
                  Add To Cart
                </span>

              </motion.button>

            </div>

            {/* ENTER COLLECTION */}
            <motion.button

              whileHover={{
                y: -4,
              }}

              whileTap={{
                scale: 0.98,
              }}

              className="
                group
                relative

                overflow-hidden

                uppercase

                text-[10px]
                tracking-[0.36em]

                text-[#c9baaa]

                border
                border-[#c9baaa]/20

                px-8
                md:px-10

                py-5

                w-fit

                transition-all
                duration-700

                hover:border-[#c9baaa]/40
              "
            >

              <span
                className="
                  absolute
                  inset-0

                  bg-white/[0.04]

                  opacity-0

                  transition-opacity
                  duration-700

                  group-hover:opacity-100
                "
              />

              <span className="relative z-10">
                Enter The Collection
              </span>

            </motion.button>

          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default TheDiscoverySet