import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { MotionConfig, LazyMotion, domAnimation } from 'framer-motion'
import App from './App'
import { CartProvider } from './context/CartContext'
import './index.css'
import { easeOutLuxury, pageTransition } from './utils/motion'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LazyMotion features={domAnimation}>
      <MotionConfig
        // Respect user's motion preferences
        reducedMotion="user"
        transition={{
          ease: easeOutLuxury,
          duration: 0.95,
          type: "tween",
        }}
      >
        <BrowserRouter>
          <CartProvider>
            <App />
          </CartProvider>
        </BrowserRouter>
      </MotionConfig>
    </LazyMotion>
  </React.StrictMode>,
)
