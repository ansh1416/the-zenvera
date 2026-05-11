import { motion } from "framer-motion"

function Philosophy() {
  const fragrances = [
    {
      name: "AFTER YOU",
      tone: "#7d746d",
      emotion: "Longing",
    },
    {
      name: "CLOSER",
      tone: "#5f6d7a",
      emotion: "Intimacy",
    },
    {
      name: "NAKED",
      tone: "#c6a16b",
      emotion: "Exposure",
    },
    {
      name: "STILL",
      tone: "#7b4a32",
      emotion: "Silence",
    },
    {
      name: "MINE",
      tone: "#8f4035",
      emotion: "Possession",
    },
  ]

  return (
    <main
      className="
        relative
        overflow-hidden
        bg-black

        px-6
        md:px-16
        lg:px-24

        pt-28
        md:pt-36

        pb-24
        md:pb-32
      "
    >
      {/* BACKGROUND */}
      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(180deg,rgba(5,6,7,0.96),rgba(0,0,0,1))]
        "
      />

      {/* HUGE WORD */}
      <h1
        className="
          absolute
          top-10
          left-1/2
          -translate-x-1/2

          whitespace-nowrap

          text-[90px]
          md:text-[220px]

          leading-none
          tracking-[-0.12em]

          text-white/[0.02]

          uppercase

          pointer-events-none
          select-none
        "
        style={{
          fontFamily: "'Cormorant Garamond', serif",
        }}
      >
        ZENVERA
      </h1>

      {/* CONTENT */}
      <section
        className="
          relative
          z-10
          mx-auto
          max-w-6xl
        "
      >
        {/* HERO */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 1,
          }}
          className="
            mb-24

            grid
            gap-14

            lg:grid-cols-[1fr_0.8fr]
            lg:items-end
          "
        >
          {/* LEFT */}
          <div>
            <p
              className="
                mb-6

                text-[10px]

                uppercase

                tracking-[0.46em]

                text-[#c9baaa]/35
              "
            >
              About The Zenvera
            </p>

            <h1
              className="
                uppercase

                text-[52px]
                sm:text-[72px]
                md:text-[110px]

                leading-[0.84]
                tracking-[-0.08em]

                text-[#c9baaa]
              "
              style={{
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              Fragrance
              <br />
              as emotion.
            </h1>
          </div>

          {/* RIGHT */}
          <div>
            <p
              className="
                text-[15px]
                md:text-[18px]

                leading-[2]

                text-[#c9baaa]/52
              "
            >
              THE ZENVERA explores intimacy,
              obsession, silence, memory,
              and emotional addiction through scent.
            </p>
          </div>
        </motion.div>

        {/* CONCEPT */}
        <motion.div
          initial={{
            opacity: 0,
            y: 24,
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
            mb-24

            border
            border-white/5

            bg-[rgba(7,8,10,0.72)]

            p-8
            md:p-12
          "
        >
          <div
            className="
              grid
              gap-10

              lg:grid-cols-[0.9fr_1.1fr]
            "
          >
            <div>
              <p
                className="
                  mb-5

                  text-[10px]

                  uppercase

                  tracking-[0.42em]

                  text-[#c9baaa]/30
                "
              >
                The Concept
              </p>

              <h2
                className="
                  uppercase

                  text-[40px]
                  md:text-[68px]

                  leading-[0.88]
                  tracking-[-0.06em]

                  text-[#c9baaa]
                "
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                Quiet luxury.
                <br />
                Dark intimacy.
              </h2>
            </div>

            <div>
              <p
                className="
                  text-[15px]
                  md:text-[17px]

                  leading-[2]

                  text-[#c9baaa]/46
                "
              >
                Every fragrance was designed
                like a cinematic memory —
                restrained, intimate,
                dangerous, and impossible to forget.
              </p>
            </div>
          </div>
        </motion.div>

        {/* FRAGRANCES */}
        <div className="space-y-5">
          {fragrances.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{
                opacity: 0,
                y: 24,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                delay: index * 0.08,
                duration: 0.8,
              }}
              className="
                border
                border-white/5

                bg-[rgba(7,8,10,0.72)]

                p-6
                md:p-10
              "
            >
              <div
                className="
                  grid
                  gap-6

                  md:grid-cols-[0.6fr_1.4fr]
                  md:items-center
                "
              >
                <div>
                  <p
                    className="
                      mb-4

                      text-[10px]

                      uppercase

                      tracking-[0.42em]
                    "
                    style={{
                      color: `${item.tone}90`,
                    }}
                  >
                    {item.emotion}
                  </p>

                  <h2
                    className="
                      uppercase

                      text-[44px]
                      sm:text-[58px]
                      md:text-[74px]

                      leading-[0.88]
                      tracking-[-0.08em]
                    "
                    style={{
                      color: item.tone,
                      fontFamily:
                        "'Cormorant Garamond', serif",
                    }}
                  >
                    {item.name}
                  </h2>
                </div>

                <p
                  className="
                    text-[15px]
                    md:text-[17px]

                    leading-[1.9]

                    text-[#c9baaa]/48
                  "
                >
                  Emotional fragrance built around{" "}
                  {item.emotion.toLowerCase()},
                  intimacy, and memory.
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FINAL QUOTE */}
        <motion.div
          initial={{
            opacity: 0,
            y: 24,
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
            mx-auto

            mt-24

            max-w-4xl

            border-t
            border-white/5

            pt-14

            text-center
          "
        >
          <p
            className="
              text-[26px]
              md:text-[46px]

              leading-[1.45]
              tracking-[-0.04em]

              text-[#c9baaa]/70
            "
            style={{
              fontFamily:
                "'Cormorant Garamond', serif",
            }}
          >
            “THE ZENVERA was never designed
            to smell beautiful.
            <br />
            It was designed to stay.”
          </p>
        </motion.div>
      </section>
    </main>
  )
}

export default Philosophy