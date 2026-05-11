import {
  createContext,
  useContext,
  useMemo,
  useState,
} from "react"

const CartContext = createContext(null)

export function CartProvider({ children }) {

  const [items, setItems] = useState([])

  /* ADD ITEM */
  const addItem = (product, quantity = 1) => {

    setItems((currentItems) => {

      const existingItem = currentItems.find(
        (item) => item.id === product.id
      )

      /* IF ITEM ALREADY EXISTS */
      if (existingItem) {

        return currentItems.map((item) =>

          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item
        )
      }

      /* NEW ITEM */
      return [
        ...currentItems,
        {
          ...product,
          quantity,
        },
      ]
    })
  }

  /* UPDATE QUANTITY */
  const updateQuantity = (id, quantity) => {

    if (quantity < 1) {
      removeItem(id)
      return
    }

    setItems((currentItems) =>

      currentItems.map((item) =>

        item.id === id
          ? {
              ...item,
              quantity,
            }
          : item
      )
    )
  }

  /* REMOVE ITEM */
  const removeItem = (id) => {

    setItems((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    )
  }

  /* CLEAR CART */
  const clearCart = () => {
    setItems([])
  }

  /* TOTALS */
  const totals = useMemo(() => {

    const quantity = items.reduce(
      (sum, item) => sum + item.quantity,
      0
    )

    const subtotal = items.reduce(
      (sum, item) =>
        sum + Number(item.price) * item.quantity,
      0
    )

    /* FREE SHIPPING OVER 3999 */
    const shipping =
      subtotal === 0
        ? 0
        : subtotal >= 3999
        ? 0
        : 149

    const total = subtotal + shipping

    return {
      quantity,
      subtotal,
      shipping,
      total,
    }

  }, [items])

  const value = {
    items,

    addItem,
    updateQuantity,
    removeItem,
    clearCart,

    totals,
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {

  const context = useContext(CartContext)

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    )
  }

  return context
}