import { motion } from "framer-motion"
import { Link } from "react-router-dom"

import { useCart } from "../context/CartContext"
import {
  discoveryProducts,
  products,
} from "../data/products"

import { formatINR } from "../utils/currency"

function Collection() {

  const { addItem } = useCart()

  const fullCollection = [
    ...products,
    ...discoveryProducts,
  ]

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

        {/* HERO */}
        <motion.div

          initial={{
            opacity: 0,
            y: 40,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 1.2,
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

                text-[#c9baaa]/40
              "
            >
              The Collection
            </p>

            <h1
              className="
                uppercase

                text-[58px]
                sm:text-[82px]
                md:text-[120px]

                leading-[0.86]
                tracking-[-0.08em]

                text-[#c9baaa]
              "
              style={{
                fontFamily:
                  "'Cormorant Garamond', serif",
              }}
            >
              Choose your
              <br />
              obsession.
            </h1>

          </div>

          {/* RIGHT */}
          <p
            className="
              max-w-[480px]

              text-[15px]
              md:text-[18px]

              leading-[1.9]

              text-[#c9baaa]/50
            "
          >
            Extrait-level fragrances designed
            for late nights, emotional tension,
            and unforgettable skin.
          </p>

        </motion.div>

        {/* PRODUCTS */}
        <div
          className="
            grid

            gap-8

            md:grid-cols-2
            xl:grid-cols-3
          "
        >

          {fullCollection.map((product, index) => (

            <motion.article
              key={product.id}

              initial={{
                opacity: 0,
                y: 70,
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
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}

              className="
                group
                relative

                overflow-hidden

                border
                border-white/5

                bg-[rgba(7,8,10,0.82)]

                transition-all
                duration-700

                hover:-translate-y-2
                hover:border-white/10
              "
            >

              {/* IMAGE */}
              <div
                className="
                  relative

                  overflow-hidden
                "
              >

                <img
                  src={product.image}
                  alt={product.name}

                  className="
                    h-[520px]
                    w-full

                    object-cover

                    transition-transform
                    duration-[2200ms]

                    group-hover:scale-[1.04]
                  "
                />

                {/* OVERLAY */}
                <div
                  className="
                    absolute
                    inset-0

                    bg-[linear-gradient(180deg,transparent_35%,rgba(0,0,0,0.92))]
                  "
                />

                {/* TYPE */}
                <div
                  className="
                    absolute

                    left-6
                    top-6

                    text-[9px]

                    uppercase

                    tracking-[0.42em]

                    text-[#c9baaa]/45
                  "
                >
                  {product.type}
                </div>

                {/* CONTENT ON IMAGE */}
                <div
                  className="
                    absolute

                    bottom-0
                    left-0
                    right-0

                    p-6
                  "
                >

                  {/* NAME */}
                  <h2
                    className="
                      uppercase

                      text-[42px]
                      md:text-[56px]

                      leading-[0.9]
                      tracking-[-0.06em]

                      mb-3
                    "
                    style={{
                      color: product.tone,
                      fontFamily:
                        "'Cormorant Garamond', serif",
                    }}
                  >
                    {product.name}
                  </h2>

                  {/* INFO */}
                  <div
                    className="
                      flex
                      items-center
                      justify-between

                      gap-5
                    "
                  >

                    <p
                      className="
                        text-[10px]

                        uppercase

                        tracking-[0.32em]
                      "
                      style={{
                        color: `${product.tone}90`,
                      }}
                    >
                      {product.size}
                    </p>

                    <p
                      className="
                        text-[26px]

                        tracking-[-0.03em]
                      "
                      style={{
                        color: product.tone,
                        fontFamily:
                          "'Cormorant Garamond', serif",
                      }}
                    >
                      {formatINR(product.price)}
                    </p>

                  </div>

                </div>

              </div>

              {/* BOTTOM */}
              <div className="p-6">

                {/* DESCRIPTION */}
                <p
                  className="
                    mb-8

                    text-[15px]

                    leading-[1.9]

                    text-[#c9baaa]/50
                  "
                >
                  {product.line}
                </p>

                {/* NOTES */}
                <div
                  className="
                    mb-8

                    flex
                    items-center
                    justify-between

                    gap-5

                    border-y
                    border-white/5

                    py-5
                  "
                >

                  <span
                    className="
                      text-[10px]

                      uppercase

                      tracking-[0.26em]

                      text-[#c9baaa]/30
                    "
                  >
                    {product.mood}
                  </span>

                  <span
                    className="
                      text-[10px]

                      uppercase

                      tracking-[0.22em]

                      text-right

                      text-[#c9baaa]/30
                    "
                  >
                    {product.notes}
                  </span>

                </div>

                {/* BUTTONS */}
                <div
                  className="
                    flex
                    flex-col

                    gap-3

                    sm:flex-row
                  "
                >

                  {/* DISCOVER */}
                  <Link
                    to={`/fragrance/${product.id}`}

                    className="
                      flex-1

                      border
                      border-white/10

                      px-6
                      py-5

                      text-center

                      text-[10px]

                      uppercase

                      tracking-[0.34em]

                      text-[#c9baaa]

                      transition-all
                      duration-500

                      hover:border-white/20
                    "
                  >
                    Discover
                  </Link>

                  {/* ADD TO CART */}
                  <button
                    type="button"

                    onClick={() =>
                      addItem(product)
                    }

                    className="
                      flex-1

                      border

                      px-6
                      py-5

                      text-[10px]

                      uppercase

                      tracking-[0.34em]

                      transition-all
                      duration-500
                    "
                    style={{
                      borderColor: `${product.tone}30`,
                      color: product.tone,
                    }}
                  >
                    Add To Cart
                  </button>

                </div>

              </div>

            </motion.article>

          ))}

        </div>

      </section>

    </main>
  )
}

export default Collection