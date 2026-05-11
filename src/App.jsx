import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Collection from "./pages/Collection"
import Philosophy from "./pages/Philosophy"
import Fragrance from "./pages/Fragrance"
import Contact from "./pages/Contact"
import Cart from "./pages/Cart"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"
import SmoothScroll from "./components/SmoothScroll"
import ScrollProgress from "./components/ScrollProgress"

function App() {

  return (
    <div
      className="
        bg-[var(--zen-void)]
        text-[var(--zen-text)]

        min-h-screen

        overflow-x-hidden
      "
    >

      {/* AUTO SCROLL */}
      <ScrollToTop />

      {/* SMOOTH SCROLL */}
      <SmoothScroll />

      {/* SCROLL PROGRESS */}
      <ScrollProgress />

      {/* GLOBAL NAVBAR */}
      <Navbar />

      {/* ROUTES */}
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/collection"
          element={<Collection />}
        />

        <Route
          path="/philosophy"
          element={<Philosophy />}
        />

        <Route
          path="/about"
          element={<Philosophy />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="/fragrance/:slug"
          element={<Fragrance />}
        />

      </Routes>

      {/* GLOBAL FOOTER */}
      <Footer />

    </div>
  )
}

export default App