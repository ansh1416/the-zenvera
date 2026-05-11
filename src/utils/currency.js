export function formatINR(value) {

  const number = Number(value || 0)

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",

    maximumFractionDigits: 0,
  }).format(number)
}

/* OPTIONAL SAFE NUMBER FORMATTER */
export function getNumericINRPrice(value) {

  if (typeof value === "number") {
    return value
  }

  if (!value) {
    return 0
  }

  return Number(
    String(value)
      .replace(/₹/g, "")
      .replace(/,/g, "")
      .trim()
  )
}