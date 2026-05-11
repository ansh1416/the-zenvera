// PREMIUM EASING CURVES
export const easeOutLuxury = [0.22, 1, 0.36, 1]
export const easeInOutLuxury = [0.65, 0, 0.35, 1]
export const easeOutCinematic = [0.2, 0.85, 0.3, 1]
export const easeInOutCinematic = [0.43, 0.13, 0.23, 0.96]
export const easeOutSilky = [0.25, 0.46, 0.45, 0.94]
export const easeInOutSilky = [0.5, 0, 0.5, 1]
export const easeOutElastic = [0.34, 1.56, 0.64, 1]

// TRANSITION PRESETS
export const pageTransition = {
  duration: 0.95,
  ease: easeOutLuxury,
}

export const revealTransition = {
  duration: 1.15,
  ease: easeOutCinematic,
}

export const staggerTransition = {
  duration: 1.05,
  ease: easeOutSilky,
}

export const quickTransition = {
  duration: 0.65,
  ease: easeOutLuxury,
}

export const smoothTransition = {
  duration: 1.6,
  ease: easeOutCinematic,
}

// SOFT REVEAL WITH CINEMATIC BLUR
export const softReveal = {
  hidden: {
    opacity: 0,
    y: 32,
    filter: "blur(12px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: revealTransition,
  },
}

// ULTRA SMOOTH FADE
export const ultraSoftFade = {
  hidden: {
    opacity: 0,
    filter: "blur(8px)",
  },
  show: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.25,
      ease: easeOutCinematic,
    },
  },
}

// SCALE REVEAL
export const scaleReveal = {
  hidden: {
    opacity: 0,
    scale: 0.92,
    filter: "blur(10px)",
  },
  show: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: smoothTransition,
  },
}

// STAGGERED CONTAINER
export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.095,
      delayChildren: 0.15,
    },
  },
}

// FAST STAGGER FOR QUICK REVEALS
export const fastStaggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.065,
      delayChildren: 0.08,
    },
  },
}

// VIEWPORT REVEAL CONFIG
export const viewportReveal = {
  once: true,
  amount: 0.24,
  margin: "0px 0px -8% 0px",
}

// LAZY MOTION SETTINGS
export const reduceMotionPreset = {
  skipAnimationInitialContext: true,
}

// PREMIUM HOVER SCALE
export const hoverScale = {
  scale: 1.02,
  transition: quickTransition,
}

// LUXE TEXT REVEAL
export const luxeTextReveal = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
}

// CINEMATIC BLUR TO FOCUS
export const blurToFocus = {
  hidden: { filter: "blur(20px)", opacity: 0 },
  show: {
    filter: "blur(0px)",
    opacity: 1,
    transition: {
      duration: 1.4,
      ease: easeOutCinematic,
    },
  },
}

// IMAGE ZOOM REVEAL
export const imageZoomReveal = {
  hidden: { opacity: 0, scale: 1.08, filter: "blur(15px)" },
  show: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.35,
      ease: easeOutCinematic,
    },
  },
}
