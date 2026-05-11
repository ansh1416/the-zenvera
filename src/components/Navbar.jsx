import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useCart } from "../context/CartContext"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showNavbar, setShowNavbar] = useState(true)

  const { totals } = useCart()
  

  /* HIDE NAVBAR ON SCROLL */
  useEffect(() => {
    let lastScroll = window.scrollY

    const handleScroll = () => {
      const currentScroll = window.scrollY

      if (currentScroll > lastScroll && currentScroll > 80) {
        setShowNavbar(false)
      } else {
        setShowNavbar(true)
      }

      lastScroll = currentScroll
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  /* LOCK BODY SCROLL WHEN MENU OPENS */
  useEffect(() => {
  let scrollY = 0

  if (menuOpen) {
    scrollY = window.scrollY

    document.body.style.position = "fixed"
    document.body.style.top = `-${scrollY}px`
    document.body.style.left = "0"
    document.body.style.right = "0"
    document.body.style.width = "100%"
  } else {
    const top = document.body.style.top

    document.body.style.position = ""
    document.body.style.top = ""
    document.body.style.left = ""
    document.body.style.right = ""
    document.body.style.width = ""

    window.scrollTo(0, parseInt(top || "0") * -1)
  }
}, [menuOpen])

  const navItems = [
    { label: "Collection", path: "/Collection" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
    {
      label: `Cart ${totals.quantity ? `(${totals.quantity})` : ""}`,
      path: "/cart",
    },
  ]
  return (
    <>

      {/* HEADER */}
      <motion.header
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 1.6,
              ease: [0.22, 1, 0.36, 1],
            }}
        className={`
        
          fixed
          top-0
          left-0
          w-full
          z-50
          transition-transform
          duration-700
          border-b
          border-white/[0.06]
          bg-black/30
          backdrop-blur-xl
           ${showNavbar ? "translate-y-0" : "-translate-y-full"}`} >

        {/* NAVBAR */}
        <nav
          className="
            relative
            z-[110]

            flex
            items-center
            justify-between

            px-6
            md:px-12

            py-5
          "
        >

          {/* LOGO */}
          <Link
            to="/"
            className="
              text-[#f1e7db]

              text-[18px]
              sm:text-[18px]
              md:text-[18px]


              tracking-[0.42em]
              font-light

              transition-opacity
              duration-500

              hover:opacity-80
            "
          >
            THE ZENVERA
          </Link>

          {/* DESKTOP NAV */}
          <div
            className="
              hidden
              md:flex
              items-center
              gap-12
            "
          >

            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="
                  group
                  relative

                  text-[14px]
                  uppercase
                  tracking-[0.30em]

                  text-[#c9baaa]/55

                  transition-all
                  duration-500

                  hover:text-[#f1e7db]
                "
              >
                {item.label}

                <span
                  className="
                    absolute
                    left-0
                    -bottom-2

                    h-px
                    w-0

                    bg-[#c9baaa]/50

                    transition-all
                    duration-500

                    group-hover:w-full
                  "
                />

              </Link>
            ))}

          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              md:hidden

              relative
              z-[120]

              flex
              items-center
              justify-center

              w-12
              h-12
            "
          >

            <span
              className={`
                absolute
                w-5
                h-px
                bg-[#c9baaa]

                transition-all
                duration-500

                ${
                  menuOpen
                    ? "rotate-45"
                    : "-translate-y-[4px]"
                }
              `}
            />

            <span
              className={`
                absolute
                w-5
                h-px
                bg-[#c9baaa]

                transition-all
                duration-500

                ${
                  menuOpen
                    ? "-rotate-45"
                    : "translate-y-[4px]"
                }
              `}
            />

          </button>

        </nav>

      </motion.header>

      <AnimatePresence>

     {/* MOBILE MENU */}
{menuOpen && (
  <motion.div

  initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
exit={{ opacity: 0 }}

transition={{
  duration: 0.6,
}}
    className="
      fixed
      inset-0
      z-[100]

      md:hidden

      bg-[#050505]/96
      backdrop-blur-2xl

      flex
      items-start
      justify-center

      pt-56
      overflow-hidden
    "
  >

    {/* TOP LOGO */}
    <div
      className="
        absolute
        top-10
        left-8
      "
    >
      <p
        className="
          text-[10px]
          tracking-[0.42em]
          text-[#c9baaa]/55
          uppercase
        "
      >
        THE ZENVERA
      </p>
    </div>

    {/* CLOSE BUTTON */}
    <button
      onClick={() => setMenuOpen(false)}
      className="
        absolute
        top-8
        right-8

        flex
        items-center
        gap-3

        text-[#c9baaa]/70

        uppercase
        text-[10px]
        tracking-[0.35em]

        transition-all
        duration-500

        hover:text-white
      "
    >

      <span></span>

      <div
        className="
          relative
          w-5
          h-5
        "
      >

        <span
          className="
            absolute
            top-1/2
            left-0

            w-5
            h-px

            bg-[#c9baaa]

            rotate-45
          "
        />

        <span
          className="
            absolute
            top-1/2
            left-0

            w-5
            h-px

            bg-[#c9baaa]

            -rotate-45
          "
        />

      </div>

    </button>

    {/* CONTENT */}
    <motion.div

      initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: 10 }}

  transition={{
    delay: 0.2,
    duration: 1,
    ease: [0.22, 1, 0.36, 1],
  }}
      className="
        relative
        z-10

        flex
        flex-col
        items-center

        gap-10
      "
    >

      {/* BACKGROUND VERTICAL TEXT */}
      <h1
        className="
          absolute
          inset-y-0
          right-[-35px]

          flex
          items-center

          text-[170px]
          uppercase
          tracking-[0.10em]

          text-white/[0.025]

          pointer-events-none
          select-none
          whitespace-nowrap
        "
        style={{
          writingMode: "vertical-rl",
        }}
      >
        ZENVERA
      </h1>

      {/* NAV ITEMS */}
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          onClick={() => setMenuOpen(false)}
          className="
            group
            relative

            text-[#c9baaa]

            text-[18px]

            uppercase
            tracking-[0.32em]
            font-light

            transition-all
            duration-500

            hover:text-white
          "
        >

          {item.label}

          <span
            className="
              absolute
              left-0
              -bottom-3

              h-px
              w-0

              bg-[#c9baaa]/50

              transition-all
              duration-500

              group-hover:w-full
            "
          />

        </Link>
      ))}

    </motion.div>

    {/* BOTTOM ATMOSPHERE */}
    <div
      className="
        absolute
        bottom-0
        left-0

        w-full
        h-[30%]

        bg-gradient-to-t
        from-[#1a1411]/30
        to-transparent

        pointer-events-none
      "
    />

  </motion.div>
)}

</AnimatePresence>

    </>
  )
}

export default Navbar