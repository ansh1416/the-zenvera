# The Zenvera - Luxury Fragrance Brand

A premium, high-performance luxury fragrance e-commerce experience built with React, Vite, and Tailwind CSS.

## ✨ Design Features

### Modern Color Palette
- **Dark Luxury Theme**: Dark void backgrounds with warm neutrals
- **Gold Accent System**: Premium `#d4a574` and `#e8b77f` accents for CTAs and interactive elements
- **Warm Neutrals**: Ivory, champagne, and skin tones for sophisticated text hierarchy
- **Premium Accents**: Rose gold, burgundy, and blush tones for complementary elements

### Sophisticated Typography
- **Headlines**: Playfair Display (serif) for elegant, luxury feel
- **Subheadings**: Cormorant Garamond for sophisticated alternatives
- **Body**: Inter (sans-serif) for modern readability
- **Responsive Sizing**: Clamp-based sizing scales perfectly across all devices

### Brand Identity
- Smooth, luxury animations with cubic-bezier easing
- Refined glassmorphic effects
- Sophisticated color transitions and hover effects
- Premium scrollbar and UI elements

## 📚 Design System

See [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) for comprehensive design documentation including:
- Complete color palette reference
- Typography hierarchy details
- Component color specifications
- Accessibility guidelines
- Implementation examples

## 🚀 Quick Start

### Install Dependencies
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Visit `http://localhost:5173` to see your site live.

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🎨 Using the Design System

### CSS Custom Properties
All colors are available as CSS custom properties in `src/index.css`:

```css
color: var(--zen-gold);           /* Primary accent */
color: var(--zen-gold-light);     /* Bright accent */
color: var(--zen-rose-gold);      /* Elegant accent */
color: var(--zen-burgundy);       /* Deep accent */
background: var(--zen-void);      /* Primary background */
```

### Tailwind Color Utilities
With the extended tailwind config, use color utilities directly:

```html
<!-- Text Colors -->
<p className="text-zen-gold-light">Premium accent text</p>
<p className="text-zen-ivory">Primary text</p>

<!-- Background Colors -->
<div className="bg-zen-void">Dark background</div>
<div className="bg-zen-smoke">Hover state</div>

<!-- Borders -->
<div className="border-zen-gold border-opacity-30">Accent border</div>
```

### Typography Classes
```html
<!-- Headings -->
<h1 className="font-display text-5xl">Hero Title</h1>
<h2 className="font-display text-3xl">Section Header</h2>

<!-- Body Text -->
<p className="font-sans text-base">Body content</p>
<small className="text-zen-text-muted">Secondary text</small>
```

### Premium Button Example
```html
<button className="px-8 py-3 rounded-full border border-zen-gold border-opacity-30 bg-gradient-to-r from-zen-gold from-opacity-8 to-zen-gold to-opacity-5 text-zen-gold-light hover:shadow-luxury-gold-hover transition-all duration-700">
  Shop Now
</button>
```

## 🎯 Key Features

- ⚡ **Lightning Fast**: Vite + React for optimal performance
- 🎨 **Premium Design**: Luxury color palette and typography
- 📱 **Responsive**: Mobile-first, fully responsive design
- ✨ **Smooth Animations**: Framer Motion & GSAP integration
- 🛒 **E-commerce Ready**: Cart context and product management
- ♿ **Accessible**: WCAG compliant color contrasts and interactions
- 🔒 **Production Ready**: Optimized builds and performance

## 📦 Tech Stack

- **React 19** - UI Framework
- **Vite** - Build tool
- **Tailwind CSS 4** - Styling
- **Framer Motion** - Animations
- **GSAP** - Advanced animations
- **Lenis** - Smooth scrolling
- **React Router** - Navigation

## 📂 Project Structure

```
the-zenvera/
├── src/
│   ├── components/        # Reusable components
│   ├── pages/            # Page components
│   ├── sections/         # Section components
│   ├── context/          # React context (Cart)
│   ├── data/             # Product data
│   ├── utils/            # Utility functions
│   ├── App.jsx           # Main app component
│   ├── App.css           # Global styles
│   └── index.css         # Root styles & design tokens
├── public/               # Static assets
├── tailwind.config.js    # Tailwind configuration
├── vite.config.js        # Vite configuration
└── DESIGN_SYSTEM.md      # Design documentation
```

## 🔧 Development

### Add a New Color
1. Add to CSS custom properties in `src/index.css`
2. Add to `tailwind.config.js` in the colors extend section
3. Use via `var(--color-name)` or `text-color-name` utility class

### Typography Updates
Edit font sizes in `tailwind.config.js` `fontSize` section for consistency.

### Component Styling
Use the predefined variables and Tailwind utilities for consistency:
```jsx
className="text-zen-gold-light hover:text-zen-champagne-bright transition-all duration-700"
```

## 📱 Responsive Design

All components use responsive Tailwind breakpoints:
- `sm:` - 640px+
- `md:` - 768px+
- `lg:` - 1024px+
- `xl:` - 1280px+
- `2xl:` - 1536px+

## 🚢 Deployment

The project is optimized for Vercel deployment. See `vercel.json` for deployment configuration.

```bash
npm run build
# Deploy the dist/ folder
```

## 📞 Need Help?

Refer to [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) for:
- Color palette reference
- Typography guidelines
- Component specifications
- Accessibility checklist

---

**The Zenvera** - Where luxury meets digital elegance.
