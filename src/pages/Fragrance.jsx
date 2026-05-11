import {
  Link,
  Navigate,
  useParams,
} from "react-router-dom"

import { motion } from "framer-motion"

import { useCart } from "../context/CartContext"

import {
  allProducts,
  products,
} from "../data/products"

import { formatINR } from "../utils/currency"

function Fragrance() {

  const { slug } = useParams()

  const { addItem } = useCart()

  const product = allProducts.find(
    (item) => item.id === slug
  )

  if (!product) {
    return <Navigate to="/collection" replace />
  }

  const related = products
    .filter((item) => item.id !== product.id)
    .slice(0, 3)

  const notePyramid = [
    ["Top", product.top],
    ["Heart", product.heart],
    ["Base", product.base],
  ]

  return (
    <main
      className="
        relative

        min-h-screen

        overflow-hidden

        bg-black
      "
    >

      {/* BACKGROUND */}
      <div
        className="
          absolute
          inset-0

          bg-[linear-gradient(180deg,rgba(5,6,7,0.95),rgba(0,0,0,1))]
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

      {/* HERO */}
      <section
        className="
          relative
          z-10

          grid

          min-h-screen

          lg:grid-cols-[0.92fr_1.08fr]
        "
      >

        {/* LEFT IMAGE */}
        <motion.div

          initial={{
            opacity: 0,
            scale: 1.05,
          }}

          animate={{
            opacity: 1,
            scale: 1,
          }}

          transition={{
            duration: 1.8,
            ease: [0.22, 1, 0.36, 1],
          }}

          className="
            relative

            min-h-[72vh]

            overflow-hidden

            lg:min-h-screen
          "
        >

          <img
            src={product.image}
            alt={product.name}

            className="
              absolute
              inset-0

              h-full
              w-full

              object-cover
            "
          />

          {/* OVERLAY */}
          <div
            className="
              absolute
              inset-0

              bg-[linear-gradient(180deg,transparent_30%,rgba(0,0,0,0.92)),linear-gradient(90deg,transparent,rgba(0,0,0,0.45))]
            "
          />

          {/* INFO */}
          <div
            className="
              absolute

              bottom-8
              left-6
              right-6

              md:left-10
              md:right-10

              flex
              items-end
              justify-between

              gap-6
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
                  color: `${product.tone}90`,
                }}
              >
                {product.type}
              </p>

              <p
                className="
                  text-[10px]

                  uppercase

                  tracking-[0.32em]

                  text-[#c9baaa]/40
                "
              >
                {product.size} / {product.mood}
              </p>

            </div>

            <p
              className="
                text-[34px]

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

        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div

          initial={{
            opacity: 0,
            y: 60,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            delay: 0.1,
            duration: 1.4,
            ease: [0.22, 1, 0.36, 1],
          }}

          className="
            relative

            flex
            items-center

            px-6
            md:px-16
            lg:px-20

            py-20
          "
        >

          <div className="max-w-3xl">

            {/* BACK */}
            <Link
              to="/collection"

              className="
                mb-10

                inline-block

                text-[10px]

                uppercase

                tracking-[0.42em]

                text-[#c9baaa]/40

                transition-all
                duration-500

                hover:text-[#c9baaa]
              "
            >
              Back To Collection
            </Link>

            {/* TITLE */}
            <h1
              className="
                uppercase

                text-[64px]
                sm:text-[84px]
                md:text-[120px]
                lg:text-[150px]

                leading-[0.82]
                tracking-[-0.08em]

                mb-8
              "
              style={{
                color: product.tone,
                fontFamily:
                  "'Cormorant Garamond', serif",
              }}
            >
              {product.name}
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
                mb-12

                max-w-[640px]

                text-[16px]
                md:text-[20px]

                leading-[2]

                text-[#c9baaa]/55
              "
            >
              {product.line}
              {" "}
              Designed for {product.wear}.
            </p>

            {/* NOTES */}
            <div
              className="
                mb-12

                grid

                gap-4

                sm:grid-cols-3
              "
            >

              {notePyramid.map(([label, value]) => (

                <div
                  key={label}

                  className="
                    border
                    border-white/5

                    bg-[rgba(7,8,10,0.82)]

                    p-5
                  "
                >

                  <p
                    className="
                      mb-5

                      text-[10px]

                      uppercase

                      tracking-[0.36em]
                    "
                    style={{
                      color: `${product.tone}90`,
                    }}
                  >
                    {label}
                  </p>

                  <p
                    className="
                      text-[14px]

                      leading-[1.9]

                      text-[#c9baaa]/50
                    "
                  >
                    {value}
                  </p>

                </div>

              ))}

            </div>

            {/* DETAILS */}
            <div
              className="
                mb-12

                grid

                gap-5

                border-y
                border-white/5

                py-8

                sm:grid-cols-2
              "
            >

              <div>

                <p
                  className="
                    mb-4

                    text-[10px]

                    uppercase

                    tracking-[0.34em]

                    text-[#c9baaa]/30
                  "
                >
                  Intensity
                </p>

                <p
                  className="
                    text-[15px]

                    leading-[1.8]

                    text-[#c9baaa]/55
                  "
                >
                  {product.intensity}
                </p>

              </div>

              <div>

                <p
                  className="
                    mb-4

                    text-[10px]

                    uppercase

                    tracking-[0.34em]

                    text-[#c9baaa]/30
                  "
                >
                  Best Worn For
                </p>

                <p
                  className="
                    text-[15px]

                    leading-[1.8]

                    text-[#c9baaa]/55
                  "
                >
                  {product.wear}
                </p>

              </div>

            </div>

            {/* ACTIONS */}
            <div
              className="
                flex
                flex-col

                gap-4

                sm:flex-row
                sm:items-center
              "
            >

              {/* ADD */}
              <motion.button

                type="button"

                onClick={() =>
                  addItem(product)
                }

                whileHover={{
                  y: -3,
                }}

                whileTap={{
                  scale: 0.98,
                }}

                className="
                  border

                  px-8
                  py-5

                  text-[10px]

                  uppercase

                  tracking-[0.34em]

                  transition-all
                  duration-500
                "
                style={{
                  borderColor: `${product.tone}35`,
                  color: product.tone,
                }}
              >
                Add To Cart — {formatINR(product.price)}
              </motion.button>

              {/* CART */}
              <Link
                to="/cart"

                className="
                  text-[10px]

                  uppercase

                  tracking-[0.34em]

                  text-[#c9baaa]/40

                  transition-all
                  duration-500

                  hover:text-[#c9baaa]
                "
              >
                View Cart
              </Link>

            </div>

          </div>

        </motion.div>

      </section>

      {/* RELATED */}
      <section
        className="
          relative
          z-10

          px-6
          md:px-20

          pb-28
        "
      >

        <div
          className="
            mx-auto
            max-w-7xl

            border-t
            border-white/5

            pt-16
          "
        >

          {/* TOP */}
          <div
            className="
              mb-12

              flex
              flex-col

              gap-4

              sm:flex-row
              sm:items-end
              sm:justify-between
            "
          >

            <div>

              <p
                className="
                  mb-4

                  text-[10px]

                  uppercase

                  tracking-[0.42em]

                  text-[#c9baaa]/35
                "
              >
                Related Scents
              </p>

              <h2
                className="
                  uppercase

                  text-[42px]

                  leading-[0.9]
                  tracking-[-0.06em]

                  text-[#c9baaa]
                "
                style={{
                  fontFamily:
                    "'Cormorant Garamond', serif",
                }}
              >
                Stay Close
              </h2>

            </div>

            <Link
              to="/collection"

              className="
                text-[10px]

                uppercase

                tracking-[0.34em]

                text-[#c9baaa]/35

                transition-all
                duration-500

                hover:text-[#c9baaa]
              "
            >
              View All
            </Link>

          </div>

          {/* GRID */}
          <div
            className="
              grid

              gap-6

              md:grid-cols-3
            "
          >

            {related.map((item) => (

              <Link
                key={item.id}

                to={`/fragrance/${item.id}`}

                className="
                  group
                  relative

                  overflow-hidden

                  border
                  border-white/5

                  bg-[rgba(7,8,10,0.82)]
                "
              >

                <img
                  src={item.image}
                  alt={item.name}

                  className="
                    h-[420px]
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

                    bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.92))]
                  "
                />

                {/* CONTENT */}
                <div
                  className="
                    absolute

                    bottom-6
                    left-6
                    right-6
                  "
                >

                  <p
                    className="
                      mb-4

                      text-[10px]

                      uppercase

                      tracking-[0.34em]
                    "
                    style={{
                      color: `${item.tone}90`,
                    }}
                  >
                    {item.mood}
                  </p>

                  <h3
                    className="
                      uppercase

                      text-[38px]

                      leading-[0.9]
                      tracking-[-0.06em]
                    "
                    style={{
                      color: item.tone,
                      fontFamily:
                        "'Cormorant Garamond', serif",
                    }}
                  >
                    {item.name}
                  </h3>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>

    </main>
  )
}

export default Fragrance