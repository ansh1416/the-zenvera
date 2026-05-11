import { motion } from "framer-motion"

function Contact() {

  return (
    <main
      className="
        relative

        min-h-screen

        overflow-hidden

        bg-black

        px-6
        md:px-20

        pt-32
        md:pt-44

        pb-28
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

      {/* CONTENT */}
      <section
        className="
          relative
          z-10

          mx-auto
          max-w-7xl
        "
      >

        {/* TOP */}
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
            duration: 1.3,
            ease: [0.22, 1, 0.36, 1],
          }}

          className="
            mb-20

            flex
            flex-col

            gap-10

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
              Private Contact
            </p>

            <h1
              className="
                uppercase

                text-[60px]
                sm:text-[84px]
                md:text-[120px]

                leading-[0.84]
                tracking-[-0.08em]

                text-[#c9baaa]
              "
              style={{
                fontFamily:
                  "'Cormorant Garamond', serif",
              }}
            >
              Speak
              <br />
              softly.
            </h1>

          </div>

          {/* RIGHT */}
          <p
            className="
              max-w-[500px]

              text-[15px]
              md:text-[18px]

              leading-[1.9]

              text-[#c9baaa]/50
            "
          >
            For private appointments, scent
            guidance, press inquiries, and
            order support. Our concierge
            responds within one business day.
          </p>

        </motion.div>

        {/* MAIN GRID */}
        <div
          className="
            grid

            gap-10

            lg:grid-cols-[0.8fr_1.2fr]
          "
        >

          {/* LEFT INFO */}
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
              delay: 0.1,
              duration: 1.2,
            }}

            className="
              flex
              flex-col

              justify-between

              gap-12
            "
          >

            {/* BLOCK 1 */}
            <div
              className="
                border
                border-white/5

                bg-[rgba(7,8,10,0.82)]

                p-8
              "
            >

              <p
                className="
                  mb-5

                  text-[10px]

                  uppercase

                  tracking-[0.42em]

                  text-[#c9baaa]/30
                "
              >
                Email
              </p>

              <h3
                className="
                  text-[30px]
                  md:text-[42px]

                  leading-[0.9]
                  tracking-[-0.05em]

                  text-[#c9baaa]
                "
                style={{
                  fontFamily:
                    "'Cormorant Garamond', serif",
                }}
              >
                concierge@
                <br />
                thezenvera.com
              </h3>

            </div>

            {/* BLOCK 2 */}
            <div
              className="
                border
                border-white/5

                bg-[rgba(7,8,10,0.82)]

                p-8
              "
            >

              <p
                className="
                  mb-5

                  text-[10px]

                  uppercase

                  tracking-[0.42em]

                  text-[#c9baaa]/30
                "
              >
                Hours
              </p>

              <p
                className="
                  text-[16px]

                  leading-[2]

                  text-[#c9baaa]/55
                "
              >
                Monday — Friday
                <br />
                10PM — 6AM
              </p>

            </div>

            {/* BLOCK 3 */}
            <div
              className="
                border
                border-white/5

                bg-[rgba(7,8,10,0.82)]

                p-8
              "
            >

              <p
                className="
                  mb-5

                  text-[10px]

                  uppercase

                  tracking-[0.42em]

                  text-[#c9baaa]/30
                "
              >
                Atmosphere
              </p>

              <p
                className="
                  text-[16px]

                  leading-[2]

                  text-[#c9baaa]/55
                "
              >
                Minimal.
                <br />
                Intimate.
                <br />
                After-dark.
              </p>

            </div>

          </motion.div>

          {/* FORM */}
          <motion.form

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
              delay: 0.15,
              duration: 1.3,
            }}

            className="
              border
              border-white/5

              bg-[rgba(7,8,10,0.82)]

              p-6
              md:p-10
            "
          >

            {/* NAME */}
            <div className="mb-8">

              <label
                className="
                  mb-4

                  block

                  text-[10px]

                  uppercase

                  tracking-[0.42em]

                  text-[#c9baaa]/30
                "
              >
                Name
              </label>

              <input
                type="text"

                className="
                  w-full

                  border-b
                  border-white/10

                  bg-transparent

                  px-0
                  py-5

                  text-[15px]

                  tracking-[0.04em]

                  text-[#c9baaa]

                  outline-none

                  transition-all
                  duration-500

                  placeholder:text-[#c9baaa]/20

                  focus:border-[#c9baaa]/35
                "

                placeholder="Your name"
              />

            </div>

            {/* EMAIL */}
            <div className="mb-8">

              <label
                className="
                  mb-4

                  block

                  text-[10px]

                  uppercase

                  tracking-[0.42em]

                  text-[#c9baaa]/30
                "
              >
                Email
              </label>

              <input
                type="email"

                className="
                  w-full

                  border-b
                  border-white/10

                  bg-transparent

                  px-0
                  py-5

                  text-[15px]

                  tracking-[0.04em]

                  text-[#c9baaa]

                  outline-none

                  transition-all
                  duration-500

                  placeholder:text-[#c9baaa]/20

                  focus:border-[#c9baaa]/35
                "

                placeholder="your@email.com"
              />

            </div>

            {/* SUBJECT */}
            <div className="mb-8">

              <label
                className="
                  mb-4

                  block

                  text-[10px]

                  uppercase

                  tracking-[0.42em]

                  text-[#c9baaa]/30
                "
              >
                Subject
              </label>

              <input
                type="text"

                className="
                  w-full

                  border-b
                  border-white/10

                  bg-transparent

                  px-0
                  py-5

                  text-[15px]

                  tracking-[0.04em]

                  text-[#c9baaa]

                  outline-none

                  transition-all
                  duration-500

                  placeholder:text-[#c9baaa]/20

                  focus:border-[#c9baaa]/35
                "

                placeholder="Private appointment"
              />

            </div>

            {/* MESSAGE */}
            <div className="mb-10">

              <label
                className="
                  mb-4

                  block

                  text-[10px]

                  uppercase

                  tracking-[0.42em]

                  text-[#c9baaa]/30
                "
              >
                Message
              </label>

              <textarea
                rows="6"

                className="
                  w-full

                  resize-none

                  border-b
                  border-white/10

                  bg-transparent

                  px-0
                  py-5

                  text-[15px]

                  leading-[1.9]

                  tracking-[0.04em]

                  text-[#c9baaa]

                  outline-none

                  transition-all
                  duration-500

                  placeholder:text-[#c9baaa]/20

                  focus:border-[#c9baaa]/35
                "

                placeholder="Write your message..."
              />

            </div>

            {/* BUTTON */}
            <motion.button

              type="button"

              whileHover={{
                y: -3,
              }}

              whileTap={{
                scale: 0.98,
              }}

              className="
                border
                border-[#c9baaa]/15

                bg-[#c9baaa]

                px-8
                py-5

                text-[10px]

                uppercase

                tracking-[0.34em]

                text-black

                transition-all
                duration-500

                hover:bg-[#e8dccd]
              "
            >
              Send Message
            </motion.button>

          </motion.form>

        </div>

      </section>

    </main>
  )
}

export default Contact