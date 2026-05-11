import { motion } from "framer-motion"

function Philosophy() {

  const fragrances = [
    {
      name: "AFTER YOU",
      tone: "#7d746d",
      emotion: "Longing",

      text:
        "A cold smoky-grey fragrance built around distance, memory, and unfinished conversations. AFTER YOU lingers softly like someone you still feel long after they disappear.",
    },

    {
      name: "CLOSER",
      tone: "#5f6d7a",
      emotion: "Intimacy",

      text:
        "A muted yellow-ash warmth wrapped in skin musk and soft shadows. CLOSER feels like low light, warm breath, and silence between two people.",
    },

    {
      name: "NAKED",
      tone: "#c6a16b",
      emotion: "Exposure",

      text:
        "Raw golden skin, wet shadows, and emotional vulnerability. NAKED is designed to feel intimate, sensual, and emotionally unguarded.",
    },

    {
      name: "STILL",
      tone: "#7b4a32",
      emotion: "Silence",

      text:
        "Dark brown woods, mineral musk, and atmospheric quietness. STILL captures the feeling of beautiful silence after emotional collapse.",
    },

    {
      name: "MINE",
      tone: "#8f4035",
      emotion: "Possession",

      text:
        "Deep reddish warmth, addictive musk, and dangerous tenderness. MINE is obsession disguised as affection.",
    },
  ]

  return (
    <main
      className="
        relative

        overflow-hidden

        bg-black

        px-6
        md:px-20

        pt-32
        md:pt-44

        pb-36
      "
    >

      {/* BACKGROUND */}
      <div
        className="
          absolute
          inset-0

          bg-[linear-gradient(180deg,rgba(5,6,7,0.97),rgba(0,0,0,1))]
        "
      />

      {/* NOISE */}
      <div
        className="
          absolute
          inset-0

          opacity-[0.03]

          mix-blend-soft-light

          zen-noise
        "
      />

      {/* FLOATING ATMOSPHERE */}
      <motion.div

        animate={{
          y: [0, -40, 0],
          x: [0, 20, 0],
        }}

        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}

        className="
          absolute

          right-[-180px]
          top-[35%]

          h-[500px]
          w-[500px]

          rounded-full

          bg-[#c9baaa]/[0.03]

          blur-[140px]
        "
      />

      {/* HUGE WORD */}
      <motion.h1

        initial={{
          opacity: 0,
        }}

        animate={{
          opacity: 1,
        }}

        transition={{
          duration: 2,
        }}

        className="
          absolute

          top-16
          left-1/2

          -translate-x-1/2

          whitespace-nowrap

          text-[120px]
          md:text-[280px]

          leading-none
          tracking-[-0.12em]

          text-white/[0.02]

          uppercase

          pointer-events-none
          select-none
        "
      >
        ZENVERA
      </motion.h1>

      {/* CONTENT */}
      <section
        className="
          relative
          z-10

          mx-auto
          max-w-7xl
        "
      >

        {/* HERO */}
        <motion.div

          initial={{
            opacity: 0,
            y: 50,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 1.4,
            ease: [0.22, 1, 0.36, 1],
          }}

          className="
            mb-32

            flex
            flex-col

            gap-12

            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >

          {/* LEFT */}
          <div>

            <p
              className="
                mb-8

                text-[10px]

                uppercase

                tracking-[0.52em]

                text-[#c9baaa]/35
              "
            >
              About The Zenvera
            </p>

            <div className="overflow-hidden">

              <motion.h1

                initial={{
                  y: "120%",
                }}

                animate={{
                  y: "0%",
                }}

                transition={{
                  duration: 1.4,
                  ease: [0.22, 1, 0.36, 1],
                }}

                className="
                  uppercase

                  text-[60px]
                  sm:text-[84px]
                  md:text-[130px]

                  leading-[0.82]
                  tracking-[-0.08em]

                  text-[#c9baaa]
                "
                style={{
                  fontFamily:
                    "'Cormorant Garamond', serif",
                }}
              >
                Fragrance
                <br />
                as emotion.
              </motion.h1>

            </div>

          </div>

          {/* RIGHT */}
          <div
            className="
              max-w-[620px]
            "
          >

            <p
              className="
                mb-8

                text-[16px]
                md:text-[20px]

                leading-[2]

                text-[#c9baaa]/58
              "
            >
              THE ZENVERA is not built around
              luxury alone. It is built around
              emotional addiction.
            </p>

            <p
              className="
                text-[15px]
                md:text-[18px]

                leading-[2]

                text-[#c9baaa]/45
              "
            >
              Every fragrance within the house
              was designed like a cinematic
              memory — intimate, dangerous,
              restrained, and impossible to
              forget.
            </p>

          </div>

        </motion.div>

        {/* WHY FRAGRANCE EXISTS */}
        <motion.section

          initial={{
            opacity: 0,
            y: 80,
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
            duration: 1.5,
            ease: [0.22, 1, 0.36, 1],
          }}

          className="
            mb-36
          "
        >

          <div
            className="
              border-t
              border-white/5

              pt-14
            "
          >

            <p
              className="
                mb-8

                text-[10px]

                uppercase

                tracking-[0.46em]

                text-[#c9baaa]/28
              "
            >
              Why Fragrance Exists
            </p>

            <div
              className="
                grid

                gap-10

                lg:grid-cols-[0.9fr_1.1fr]
              "
            >

              <h2
                className="
                  uppercase

                  text-[42px]
                  md:text-[76px]

                  leading-[0.84]
                  tracking-[-0.06em]

                  text-[#c9baaa]
                "
                style={{
                  fontFamily:
                    "'Cormorant Garamond', serif",
                }}
              >
                Because memory
                <br />
                needs a body.
              </h2>

              <div className="space-y-8">

                <p
                  className="
                    text-[16px]
                    md:text-[19px]

                    leading-[2]

                    text-[#c9baaa]/52
                  "
                >
                  Fragrance is the only luxury
                  capable of entering memory
                  instantly.
                </p>

                <p
                  className="
                    text-[15px]
                    md:text-[17px]

                    leading-[2]

                    text-[#c9baaa]/42
                  "
                >
                  A song fades.
                  A photograph becomes distant.
                  Words lose shape.

                  But scent survives in the body.

                  It returns suddenly:
                  during heartbreak,
                  intimacy,
                  loneliness,
                  happiness,
                  hotel nights,
                  cigarettes in cold air,
                  unfinished love,
                  and people you promised to forget.
                </p>

              </div>

            </div>

          </div>

        </motion.section>

        {/* CONCEPT */}
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
            once: true,
          }}

          transition={{
            duration: 1.3,
          }}

          className="
            mb-36

            border
            border-white/5

            bg-[rgba(7,8,10,0.82)]

            p-8
            md:p-14
          "
        >

          <div
            className="
              grid

              gap-12

              lg:grid-cols-[0.9fr_1.1fr]
            "
          >

            <div>

              <p
                className="
                  mb-6

                  text-[10px]

                  uppercase

                  tracking-[0.46em]

                  text-[#c9baaa]/30
                "
              >
                The Concept
              </p>

              <h2
                className="
                  uppercase

                  text-[44px]
                  md:text-[72px]

                  leading-[0.86]
                  tracking-[-0.06em]

                  text-[#c9baaa]
                "
                style={{
                  fontFamily:
                    "'Cormorant Garamond', serif",
                }}
              >
                Quiet luxury.
                <br />
                Dark intimacy.
              </h2>

            </div>

            <div className="space-y-8">

              <p
                className="
                  text-[16px]
                  md:text-[18px]

                  leading-[2]

                  text-[#c9baaa]/50
                "
              >
                THE ZENVERA was imagined as an
                after-dark fragrance universe.
                A place where scent behaves
                like memory instead of
                decoration.
              </p>

              <p
                className="
                  text-[15px]
                  md:text-[17px]

                  leading-[2]

                  text-[#c9baaa]/42
                "
              >
                The house avoids loud sweetness
                and excessive brightness.
                Instead, every composition
                focuses on emotional textures:
                cold smoke, skin warmth, dark
                fabric, mineral musk, faded
                light, and quiet obsession.
              </p>

            </div>

          </div>

        </motion.div>

        {/* EMOTIONAL STATES */}
        <motion.section

          initial={{
            opacity: 0,
          }}

          whileInView={{
            opacity: 1,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 1.4,
          }}

          className="
            mb-36
          "
        >

          <div className="mb-14">

            <p
              className="
                mb-6

                text-[10px]

                uppercase

                tracking-[0.46em]

                text-[#c9baaa]/30
              "
            >
              Emotional States
            </p>

            <h2
              className="
                uppercase

                text-[48px]
                md:text-[90px]

                leading-[0.84]
                tracking-[-0.08em]

                text-[#c9baaa]
              "
              style={{
                fontFamily:
                  "'Cormorant Garamond', serif",
              }}
            >
              Intimacy.
              <br />
              Breakup.
              <br />
              Obsession.
              <br />
              Silence.
            </h2>

          </div>

          <div
            className="
              grid

              gap-6

              md:grid-cols-2
            "
          >

            {[
              "The warmth of someone sleeping beside you.",

              "The silence after an argument at 2AM.",

              "The smell of clothes left behind after heartbreak.",

              "Skin after dancing under dim lights.",

              "The strange beauty of emotional collapse.",

              "Wanting someone you know is dangerous.",
            ].map((text, index) => (

              <motion.div
                key={index}

                initial={{
                  opacity: 0,
                  y: 40,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                viewport={{
                  once: true,
                }}

                transition={{
                  delay: index * 0.08,
                  duration: 1,
                }}

                whileHover={{
                  y: -6,
                }}

                className="
                  border
                  border-white/5

                  bg-[rgba(7,8,10,0.82)]

                  p-8

                  transition-all
                  duration-700

                  hover:border-white/10
                "
              >

                <p
                  className="
                    text-[18px]
                    md:text-[22px]

                    leading-[1.8]

                    tracking-[-0.02em]

                    text-[#c9baaa]/58
                  "
                  style={{
                    fontFamily:
                      "'Cormorant Garamond', serif",
                  }}
                >
                  {text}
                </p>

              </motion.div>

            ))}

          </div>

        </motion.section>

        {/* FRAGRANCES */}
        <div className="space-y-6">

          {fragrances.map((item, index) => (

            <motion.div
              key={item.name}

              initial={{
                opacity: 0,
                y: 60,
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
                delay: index * 0.12,
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}

              whileHover={{
                y: -4,
              }}

              className="
                group

                border
                border-white/5

                bg-[rgba(7,8,10,0.82)]

                p-8
                md:p-12

                transition-all
                duration-700

                hover:border-white/10
              "
            >

              <div
                className="
                  grid

                  gap-10

                  lg:grid-cols-[0.6fr_1.4fr]
                "
              >

                <div>

                  <p
                    className="
                      mb-5

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

                      text-[52px]
                      md:text-[84px]

                      leading-[0.86]
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

                <div className="flex items-center">

                  <p
                    className="
                      max-w-[780px]

                      text-[16px]
                      md:text-[20px]

                      leading-[2]

                      text-[#c9baaa]/50
                    "
                  >
                    {item.text}
                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

        {/* FINAL QUOTE */}
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
            once: true,
          }}

          transition={{
            duration: 1.3,
          }}

          className="
            mx-auto

            mt-32

            max-w-5xl

            border-t
            border-white/5

            pt-16

            text-center
          "
        >

          <p
            className="
              text-[28px]
              md:text-[52px]

              leading-[1.45]
              tracking-[-0.04em]

              text-[#c9baaa]/72
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