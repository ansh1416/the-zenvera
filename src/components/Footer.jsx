import { motion } from "framer-motion"
import { Link } from "react-router-dom"

function Footer() {

  const collection = [
    {
      name: "After You",
      path: "/fragrance/after-you",
      color: "#7d746d",
    },

    {
      name: "Closer",
      path: "/fragrance/closer",
      color: "#5f6d7a",
    },

    {
      name: "Naked",
      path: "/fragrance/naked",
      color: "#c6a16b",
    },

    {
      name: "Still",
      path: "/fragrance/still",
      color: "#7b4a32",
    },

    {
      name: "Mine",
      path: "/fragrance/mine",
      color: "#8f4035",
    },
  ]

  const explore = [
    {
      name: "Discovery Set",
      path: "/discovery-set",
    },

    {
      name: "About",
      path: "/about",
    },

    {
      name: "Contact",
      path: "/contact",
    },
  ]

  return (
    <footer
      className="
        relative

        overflow-hidden

        bg-black

        border-t
        border-white/5
      "
    >


      {/* CONTENT */}
      <div
        className="
          relative
          z-10

          px-6
          sm:px-8
          md:px-16
          lg:px-24

          pt-24
          md:pt-28

          pb-10
        "
      >

        {/* TOP */}
        <div
          className="
            flex
            flex-col

            gap-20
          "
        >

          {/* HERO */}
          <motion.div

            initial={{
              opacity: 0,
              y: 50,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            viewport={{
              once: true,
            }}

            transition={{
              duration: 1.4,
              ease: [0.22, 1, 0.36, 1],
            }}

            className="
              max-w-[1100px]
            "
          >

            <p
              className="
                uppercase

                text-[10px]
                md:text-[11px]

                tracking-[0.42em]

                text-[#c9baaa]/30

                mb-8
              "
            >
              Final Obsession
            </p>

            <h2
              className="
                uppercase

                text-[52px]
                sm:text-[72px]
                md:text-[110px]
                lg:text-[140px]

                leading-[0.84]
                tracking-[-0.08em]

                text-[#c9baaa]

                mb-10
              "
              style={{
                fontFamily:
                  "'Cormorant Garamond', serif",
              }}
            >
              THE
              <br />
              ZENVERA
            </h2>

            <p
              className="
                max-w-[720px]

                text-[15px]
                sm:text-[17px]
                md:text-[21px]

                leading-[2]

                text-[#c9baaa]/48
              "
            >
              A cinematic fragrance house
              built around emotional tension,
              intimacy, obsession, heartbreak,
              memory, and the quiet violence
              of human connection.
            </p>

          </motion.div>

          {/* GRID */}
          <div
            className="
              grid

              grid-cols-1
              md:grid-cols-3

              gap-16
              md:gap-10
            "
          >

            {/* COLLECTION */}
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
              }}

              transition={{
                delay: 0.1,
                duration: 1,
              }}
            >

              <p
                className="
                  uppercase

                  text-[10px]

                  tracking-[0.42em]

                  text-[#c9baaa]/25

                  mb-7
                "
              >
                Collection
              </p>

              <div className="flex flex-col gap-5">

                {collection.map((item) => (

                  <Link
                    key={item.name}
                    to={item.path}

                    className="
                      group

                      w-fit
                    "
                  >

                    <span
                      className="
                        inline-block

                        uppercase

                        text-[20px]
                        md:text-[24px]

                        tracking-[-0.04em]

                        transition-all
                        duration-500

                        group-hover:translate-x-2
                      "
                      style={{
                        color: `${item.color}90`,
                        fontFamily:
                          "'Cormorant Garamond', serif",
                      }}
                    >
                      {item.name}
                    </span>

                  </Link>

                ))}

              </div>

            </motion.div>

            {/* EXPLORE */}
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
              }}

              transition={{
                delay: 0.2,
                duration: 1,
              }}
            >

              <p
                className="
                  uppercase

                  text-[10px]

                  tracking-[0.42em]

                  text-[#c9baaa]/25

                  mb-7
                "
              >
                Explore
              </p>

              <div className="flex flex-col gap-5">

                {explore.map((item) => (

                  <Link
                    key={item.name}
                    to={item.path}

                    className="
                      group

                      w-fit
                    "
                  >

                    <span
                      className="
                        inline-block

                        uppercase

                        text-[20px]
                        md:text-[24px]

                        tracking-[-0.04em]

                        text-[#c9baaa]/45

                        transition-all
                        duration-500

                        group-hover:text-[#c9baaa]
                        group-hover:translate-x-2
                      "
                      style={{
                        fontFamily:
                          "'Cormorant Garamond', serif",
                      }}
                    >
                      {item.name}
                    </span>

                  </Link>

                ))}

              </div>

            </motion.div>

            {/* SOCIAL */}
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
              }}

              transition={{
                delay: 0.3,
                duration: 1,
              }}
            >

              <p
                className="
                  uppercase

                  text-[10px]

                  tracking-[0.42em]

                  text-[#c9baaa]/25

                  mb-7
                "
              >
                Social
              </p>

              <div className="flex flex-col gap-5">

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"

                  className="
                    group

                    w-fit
                  "
                >

                  <span
                    className="
                      inline-block

                      uppercase

                      text-[20px]
                      md:text-[24px]

                      tracking-[-0.04em]

                      text-[#c9baaa]/45

                      transition-all
                      duration-500

                      group-hover:text-[#c9baaa]
                      group-hover:translate-x-2
                    "
                    style={{
                      fontFamily:
                        "'Cormorant Garamond', serif",
                    }}
                  >
                    Instagram
                  </span>

                </a>

              </div>

            </motion.div>

          </div>

        </div>

        {/* BOTTOM */}
        <motion.div

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
            delay: 0.4,
            duration: 1.2,
          }}

          className="
            mt-24
            md:mt-28

            pt-6

            border-t
            border-white/5

            flex
            flex-col
            md:flex-row

            items-start
            md:items-center

            justify-between

            gap-4
          "
        >

          <p
            className="
              uppercase

              text-[9px]
              md:text-[10px]

              tracking-[0.32em]

              text-[#c9baaa]/20
            "
          >
            © 2026 THE ZENVERA
          </p>

          <p
            className="
              uppercase

              text-[9px]
              md:text-[10px]

              tracking-[0.32em]

              text-[#c9baaa]/20
            "
          >
            Crafted By Ansh
          </p>

        </motion.div>

      </div>

    </footer>
  )
}

export default Footer