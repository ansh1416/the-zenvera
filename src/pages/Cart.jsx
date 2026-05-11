import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { useCart } from "../context/CartContext"
import { formatINR } from "../utils/currency"

function Cart() {

  const {
    items,
    updateQuantity,
    removeItem,
    clearCart,
    totals,
  } = useCart()

  /* FORMAT INR */
  const formatPriceINR = (value) => {
    return formatINR(Number(value || 0))
  }

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

          bg-[linear-gradient(180deg,rgba(5,6,7,0.92),rgba(0,0,0,1))]
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
            y: 45,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}

          className="
            mb-16

            flex
            flex-col

            gap-8

            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >

          <div>

            {/* LABEL */}
            <p
              className="
                mb-8

                text-[10px]

                uppercase

                tracking-[0.52em]

                text-[#c9baaa]/40
              "
            >
              Cart
            </p>

            {/* TITLE */}
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
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              Your private
              <br />
              selection.
            </h1>

          </div>

          {/* ITEM COUNT */}
          <p
            className="
              text-[10px]

              uppercase

              tracking-[0.36em]

              text-[#c9baaa]/30
            "
          >
            {totals?.quantity || 0} item
            {totals?.quantity === 1 ? "" : "s"} selected
          </p>

        </motion.div>

        {/* EMPTY CART */}
        {items.length === 0 ? (

          <div
            className="
              border
              border-white/5

              bg-[rgba(7,8,10,0.82)]

              p-12

              text-center
            "
          >

            <p
              className="
                mb-8

                text-sm

                tracking-[0.08em]

                text-[#c9baaa]/55
              "
            >
              Your cart is quiet.
            </p>

            <Link
              to="/collection"

              className="
                inline-block

                border
                border-[#c9baaa]/20

                px-8
                py-5

                text-[10px]

                uppercase

                tracking-[0.36em]

                text-[#c9baaa]

                transition-all
                duration-500

                hover:border-[#c9baaa]/40
              "
            >
              Shop Collection
            </Link>

          </div>

        ) : (

          <div
            className="
              grid

              gap-8

              lg:grid-cols-[1fr_380px]
            "
          >

            {/* LEFT SIDE */}
            <div className="space-y-5">

              {items.map((item) => (

                <article
                  key={item.id}

                  className="
                    grid

                    gap-5

                    border
                    border-white/5

                    bg-[rgba(7,8,10,0.82)]

                    p-4

                    shadow-[0_20px_60px_rgba(0,0,0,0.22)]

                    sm:grid-cols-[170px_1fr]
                  "
                >

                  {/* IMAGE */}
                  <img
                    src={item.image}
                    alt={item.name}

                    className="
                      h-44
                      w-full

                      object-cover

                      sm:h-full
                    "
                  />

                  {/* CONTENT */}
                  <div
                    className="
                      flex
                      flex-col

                      justify-between

                      gap-8

                      p-2
                    "
                  >

                    {/* TOP */}
                    <div
                      className="
                        flex
                        flex-col

                        gap-5

                        md:flex-row
                        md:items-start
                        md:justify-between
                      "
                    >

                      {/* INFO */}
                      <div>

                        <p
                          className="
                            mb-4

                            text-[10px]

                            uppercase

                            tracking-[0.34em]

                            text-[#c9baaa]/40
                          "
                        >
                          {item.type}
                        </p>

                        <h2
                          className="
                            uppercase

                            text-[38px]
                            md:text-[52px]

                            leading-[0.9]
                            tracking-[-0.06em]

                            text-[#c9baaa]
                          "
                          style={{
                            fontFamily:
                              "'Cormorant Garamond', serif",
                          }}
                        >
                          {item.name}
                        </h2>

                        <p
                          className="
                            mt-4

                            text-sm

                            tracking-[0.04em]

                            text-[#c9baaa]/45
                          "
                        >
                          {item.size} / {item.notes}
                        </p>

                      </div>

                      {/* PRICE */}
                      <p
                        className="
                          text-[24px]

                          font-light

                          tracking-[-0.03em]

                          text-[#c9baaa]
                        "
                        style={{
                          fontFamily:
                            "'Cormorant Garamond', serif",
                        }}
                      >
                        {formatPriceINR(
                          Number(item?.price || 0) *
                          Number(item?.quantity || 1)
                        )}
                      </p>

                    </div>

                    {/* BOTTOM */}
                    <div
                      className="
                        flex
                        flex-wrap

                        items-center
                        justify-between

                        gap-4

                        border-t
                        border-white/5

                        pt-5
                      "
                    >

                      {/* QUANTITY */}
                      <div
                        className="
                          flex
                          items-center

                          border
                          border-white/10
                        "
                      >

                        <button
                          type="button"

                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.quantity - 1
                            )
                          }

                          className="
                            px-4
                            py-3

                            text-sm

                            text-[#c9baaa]/70

                            hover:text-[#c9baaa]

                            transition-colors
                          "
                        >
                          −
                        </button>

                        <span
                          className="
                            min-w-10

                            text-center

                            text-sm

                            tracking-[0.16em]

                            text-[#c9baaa]
                          "
                        >
                          {item.quantity}
                        </span>

                        <button
                          type="button"

                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.quantity + 1
                            )
                          }

                          className="
                            px-4
                            py-3

                            text-sm

                            text-[#c9baaa]/70

                            hover:text-[#c9baaa]

                            transition-colors
                          "
                        >
                          +
                        </button>

                      </div>

                      {/* REMOVE */}
                      <button
                        type="button"

                        onClick={() =>
                          removeItem(item.id)
                        }

                        className="
                          text-[10px]

                          uppercase

                          tracking-[0.32em]

                          text-[#c9baaa]/35

                          transition

                          hover:text-[#c9baaa]
                        "
                      >
                        Remove
                      </button>

                    </div>

                  </div>

                </article>

              ))}

            </div>

            {/* SUMMARY */}
            <aside
              className="
                h-fit

                border
                border-white/5

                bg-[rgba(7,8,10,0.82)]

                p-8

                shadow-[0_20px_60px_rgba(0,0,0,0.22)]
              "
            >

              <h2
                className="
                  mb-10

                  uppercase

                  text-[34px]

                  leading-[0.9]
                  tracking-[-0.05em]

                  text-[#c9baaa]
                "
                style={{
                  fontFamily:
                    "'Cormorant Garamond', serif",
                }}
              >
                Order
                <br />
                Summary
              </h2>

              {[
                [
                  "Quantity",
                  totals?.quantity || 0,
                ],

                [
                  "Subtotal",
                  formatPriceINR(
                    Number(totals?.subtotal || 0)
                  ),
                ],

                [
                  "Shipping",

                  totals?.shipping === 0
                    ? "Complimentary"
                    : formatPriceINR(
                        Number(totals?.shipping || 0)
                      ),
                ],
              ].map(([label, value]) => (

                <div
                  key={label}

                  className="
                    mb-5

                    flex
                    justify-between

                    gap-6

                    text-sm

                    tracking-[0.06em]

                    text-[#c9baaa]/40
                  "
                >

                  <span>{label}</span>

                  <span className="text-[#c9baaa]/80">
                    {value}
                  </span>

                </div>

              ))}

              <div
                className="
                  my-8

                  border-t
                  border-white/5
                "
              />

              {/* TOTAL */}
              <div
                className="
                  mb-8

                  flex
                  justify-between

                  gap-6

                  text-[26px]

                  tracking-[-0.03em]

                  text-[#c9baaa]
                "
                style={{
                  fontFamily:
                    "'Cormorant Garamond', serif",
                }}
              >

                <span>Total</span>

                <span>
                  {formatPriceINR(
                    Number(totals?.total || 0)
                  )}
                </span>

              </div>

              {/* CHECKOUT */}
              <button
                type="button"

                className="
                  mb-4

                  w-full

                  border
                  border-[#c9baaa]/15

                  bg-[#c9baaa]

                  px-7
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
                Checkout
              </button>

              {/* CLEAR */}
              <button
                type="button"

                onClick={clearCart}

                className="
                  w-full

                  py-3

                  text-[10px]

                  uppercase

                  tracking-[0.32em]

                  text-[#c9baaa]/35

                  transition

                  hover:text-[#c9baaa]
                "
              >
                Clear Cart
              </button>

            </aside>

          </div>

        )}

      </section>

    </main>
  )
}

export default Cart