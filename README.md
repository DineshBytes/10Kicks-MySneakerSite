<div align="center">

```
 ██╗ ██████╗ ██╗  ██╗██╗ ██████╗██╗  ██╗███████╗
███║██╔═████╗██║ ██╔╝██║██╔════╝██║ ██╔╝██╔════╝
╚██║██║██╔██║█████╔╝ ██║██║     █████╔╝ ███████╗
 ██║████╔╝██║██╔═██╗ ██║██║     ██╔═██╗ ╚════██║
 ██║╚██████╔╝██║  ██╗██║╚██████╗██║  ██╗███████║
 ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═╝ ╚═════╝╚═╝  ╚═╝╚══════╝
```

### *Shop the future. Drop by drop.*

<br/>

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)

![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)
![Status](https://img.shields.io/badge/Status-Live-brightgreen?style=flat-square)
![Framework](https://img.shields.io/badge/Framework-None%20%28Vanilla%20JS%29-orange?style=flat-square)

<br/>

> **10KICKS** is a high-performance, visually immersive sneaker catalogue — engineered from the ground up with modern UI paradigms, GPU-accelerated animations, and state-driven Vanilla JavaScript. No frameworks. No shortcuts. Just precision.

</div>

---

## 👟 What is 10KICKS?

10KICKS is a single-page sneaker e-commerce application built to feel premium — the kind of shopping experience you'd expect from a flagship brand store. It was built as a 3-person academic project, and this repository reflects a **complete personal redesign** of the entire home page, UI system, animation architecture, and user experience by **Dinesh**.

Every scroll effect, every glassmorphism card, every neon glow, every animated brand carousel — rebuilt from scratch.
## Live Demo  
🔗 https://10kicks.vercel.app/

---

## ✨ Features

### 🏠 Home Page *(Fully redesigned by Dinesh)*
- Immersive dark hero section with animated multi-brand carousel
- Brand-specific GPU-accelerated motion (translate, scale, rotate)
- Dynamic background sync that reacts to the active brand
- Floating product cards with staggered entrance animations
- Neon lighting and glowing shadow system
- Custom cursor with interactive hover states
- Glassmorphism design tokens used consistently throughout

### 🛍️ Product Experience
- Data-driven product grid from a structured JavaScript `DB` object
- Multi-brand catalogue: **Nike · Adidas · Puma · Converse**
- Multi-image product previews
- Size selection interface
- Quick-add to cart functionality
- Wishlist toggle per product

### 🗂️ Navigation & Pages
- SPA-style page navigation without reloads
- Smooth animated page transitions
- Sticky responsive header
- Hamburger menu for mobile layouts

### 🛒 Cart & Checkout
- Slide-out cart panel
- Slide-out wishlist panel
- Checkout flow with delivery form
- Payment methods: **Card · UPI · Net Banking · COD**

---

## 🔧 Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5 |
| Styling & Animations | CSS3 — Custom properties, keyframes, transforms |
| Logic & State | Vanilla JavaScript (ES6+) |
| Responsiveness | Bootstrap 4.5.2 (grid & utilities) |
| Typography | Google Fonts |

> **Zero frontend frameworks.** This project demonstrates full control over the DOM, rendering pipeline, and animation system — without React, Vue, or any abstraction layer.

---

## ⚡ Animation & Performance Philosophy

All animations follow GPU-friendly rules — only `transform` and `opacity` are animated, never layout-triggering properties like `width`, `height`, or `top`.

```
✅ transform: translateY() scale() rotate()   →  GPU composited
✅ opacity                                    →  GPU composited
❌ width / height / top / left / margin       →  Triggers layout reflow
```

This keeps the frame rate smooth even on mid-range devices.

---

## 🏗️ Architecture

```
10KICKS/
│
├── index.html          ← SPA shell & all page sections
├── script1.js          ← Core logic, state, DOM rendering
├── patch_db.js         ← Product database updates
├── patch_hero.js       ← Hero animation patches
├── patch_shoes.js      ← Product image & data patches
├── fix_json.js         ← Data sanitization utility
├── swap_arrays.js      ← Collection reordering utility
│
├── jordan1.jpg         ← Nike hero asset
├── samba.png           ← Adidas hero asset
├── speedcat.png        ← Puma hero asset
├── chuck.png           ← Converse hero asset
│
└── README.md
```

### Data Model

```js
const DB = {
  nike:     [ { name, price, images, sizes, ... }, ... ],
  adidas:   [ ... ],
  puma:     [ ... ],
  converse: [ ... ]
}
```

### Rendering Flow

```
Brand Selected → Filter DB → Generate HTML → Inject into DOM → Bind Events
```

---

## 🚀 Getting Started

No install. No build tools. No dependencies to pull.

```bash
# 1. Clone the repo
git clone https://github.com/DineshBytes/10Kicks-MySneakerSite.git

# 2. Live Demo  
🔗 https://10kicks.vercel.app/

Works in any modern browser. That's it.

---

## 👥 Team

This project was built collaboratively by 3 members. Here's the contribution breakdown:

| Member | Role |
|---|---|
| **Dinesh** *(this repo)* | **Complete home page redesign** — UI/UX system, glassmorphism design tokens, hero carousel, all animations, neon effects, custom cursor, staggered transitions, depth system, and overall visual direction |
| **Irfan** | Core structure — landing page skeleton, navigation, product card layout |
| **Jaswanth** | Brand category design, visual consistency |

> This is **Dinesh's version of the project** — independently pushed with a complete redesign of the entire home page, animation system, and visual identity.

---

## 📄 License

```
MIT License — © 2025 10KICKS
```

Free to use, learn from, and build on.

---

<div align="center">

**Built with obsession over pixels, performance, and polish.**

*10KICKS — Drop by drop.*

</div>
