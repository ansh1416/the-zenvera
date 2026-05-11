import AfterYou from "../assets/AfterYou.png"
import Closer from "../assets/Closer.png"
import Naked from "../assets/Naked.png"
import Still from "../assets/Still.png"
import Mine from "../assets/Mine.png"
import CollectionFinal from "../assets/collection-final.png"

export const products = [
  {
    id: "after-you",

    name: "AFTER YOU",

    type: "Extrait de Parfum",

    mood: "Longing",

    size: "100ML",

    price: 2999,

    tone: "#7d746d",

    notes: "violet skin / cold musk / pale woods",

    top: "frozen violet, white pepper",

    heart: "pale skin musk, iris shadow",

    base: "cold woods, mineral amber",

    intensity: "Soft but persistent",

    wear: "after midnight, close conversations, unfinished goodbyes",

    line: "The scent of longing that never truly leaves.",

    image: AfterYou,
  },

  {
    id: "closer",

    name: "CLOSER",

    type: "Extrait de Parfum",

    mood: "Intimacy",

    size: "100ML",

    price: 2999,

    tone: "#5f6d7a",

    notes: "silver iris / silk smoke / warm skin",

    top: "silver iris, aldehydic air",

    heart: "silk smoke, skin warmth",

    base: "cashmere musk, dim amber",

    intensity: "Intimate and enveloping",

    wear: "low light, black fabric, the second drink",

    line: "Soft intimacy wrapped in midnight warmth.",

    image: Closer,
  },

  {
    id: "naked",

    name: "NAKED",

    type: "Extrait de Parfum",

    mood: "Exposure",

    size: "100ML",

    price: 2999,

    tone: "#c6a16b",

    notes: "clean amber / wet shadow / soft suede",

    top: "bare bergamot, wet stone",

    heart: "soft suede, clean amber",

    base: "salted musk, shadowed vanilla",

    intensity: "Radiant skin scent",

    wear: "white sheets, warm pulse points, no explanation",

    line: "Desire with nothing left to hide.",

    image: Naked,
  },

  {
    id: "still",

    name: "STILL",

    type: "Extrait de Parfum",

    mood: "Silence",

    size: "100ML",

    price: 2999,

    tone: "#7b4a32",

    notes: "charcoal tea / white incense / mineral musk",

    top: "charcoal tea, cold air",

    heart: "white incense, smoked iris",

    base: "mineral musk, black cedar",

    intensity: "Quiet and atmospheric",

    wear: "rain at night, gallery rooms, beautiful silence",

    line: "Silence darker than memory itself.",

    image: Still,
  },

  {
    id: "mine",

    name: "MINE",

    type: "Extrait de Parfum",

    mood: "Possession",

    size: "100ML",

    price: 2999,

    tone: "#8f4035",

    notes: "pale rose / skin salt / dark vanilla",

    top: "pale rose, skin salt",

    heart: "dark vanilla, satin musk",

    base: "smoked resin, warm woods",

    intensity: "Deep and possessive",

    wear: "private rooms, black silk, staying too long",

    line: "Possession disguised as tenderness.",

    image: Mine,
  },
]

export const discoveryProducts = [
  {
    id: "discovery-set",

    name: "DISCOVERY SET",

    type: "Five Fragrance Collection",

    mood: "Introduction",

    size: "5 × 50ML",

    price: 1999,

    tone: "#c9baaa",

    notes: "all five ZENVERA fragrances",

    top: "five extrait impressions",

    heart: "skin testing ritual",

    base: "private selection",

    intensity: "A complete introduction",

    wear: "first encounters with the house",

    line: "A private introduction to every emotional addiction.",

    image: CollectionFinal,
  },
]

export const allProducts = [
  ...products,
  ...discoveryProducts,
]