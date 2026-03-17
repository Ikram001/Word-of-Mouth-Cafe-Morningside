# Word of Mouth Morningside — Café Website

Production-ready café website built with React 19, TypeScript, Vite, Tailwind CSS v4, React Router v7, Motion.dev, GSAP, and Lucide React.

---

## 🚀 Getting Started

```bash
npm install
npm run dev       # Dev server at localhost:5173
npm run build     # Production build → dist/
npm run preview   # Preview the production build locally
```

---

## 📁 File Structure & What Each File Does

```
cafe-site/
│
├── public/
│   └── favicon.svg                ← Site tab icon — replace with your own SVG
│
├── index.html                     ← Google Fonts loaded here (Cormorant Garamond + DM Sans)
├── vite.config.ts                 ← Vite + Tailwind v4 plugin — don't touch
├── vercel.json                    ← SPA routing fix for Vercel — don't touch
├── tsconfig.json                  ← TypeScript config — don't touch
├── package.json                   ← Dependencies — run npm install after editing
│
└── src/
    ├── main.tsx                   ← App entry point — don't touch
    ├── App.tsx                    ← ⭐ ADD / REMOVE PAGES & ROUTES HERE
    ├── index.css                  ← ⭐ COLOURS, FONTS + global CSS here
    │
    ├── types/
    │   └── index.ts               ← TypeScript interfaces — update if you add new data fields
    │
    ├── hooks/
    │   └── useScrollReveal.ts     ← Scroll animation + useIsToday() helper — don't touch
    │
    ├── data/
    │   └── cafeData.ts            ← ⭐⭐ MAIN CONTENT FILE — reviews, hours, menu, business info
    │
    ├── components/
    │   ├── Layout.tsx             ← Wraps every page: Navbar + content + Footer — don't touch
    │   ├── Navbar.tsx             ← ⭐ ADD / REMOVE NAV LINKS HERE (navLinks array, line 6)
    │   ├── Footer.tsx             ← ⭐ UPDATE FOOTER NAV LINKS HERE (hardcoded array ~line 87)
    │   ├── Carousel.tsx           ← Touch/drag/autoplay carousel component — don't touch
    │   ├── ReviewCard.tsx         ← Review card UI (light + dark variants) — don't touch
    │   └── SectionHeader.tsx      ← Reusable eyebrow + heading + subtitle — don't touch
    │
    └── pages/
        ├── HomePage.tsx           ← ⭐ HERO IMAGE: HERO_BG constant at line 26
        │                             ⭐ GALLERY CAROUSEL PHOTOS: galleryPhotos array at line 30
        ├── AboutPage.tsx          ← ⭐ REPLACE LOREM IPSUM WITH REAL CONTENT HERE
        ├── MenuPage.tsx           ← Reads menu from cafeData.ts — don't touch
        ├── GalleryPage.tsx        ← ⭐ GALLERY PHOTOS: photos array at line 8
        ├── ReviewsPage.tsx        ← Reads + filters reviews from cafeData.ts — don't touch
        └── ContactPage.tsx        ← Map + hours from cafeData.ts — don't touch
```

---

## ✏️ How to Update Everything

### 🖼️ Hero Background Image
**File:** `src/pages/HomePage.tsx` → line 26

```ts
const HERO_BG = "https://images.unsplash.com/photo-XXXXXXXXX?w=1600&q=85&auto=format&fit=crop";
```

Find free images at [unsplash.com](https://unsplash.com). Copy the photo URL and append `?w=1600&q=85&auto=format&fit=crop`.

---

### 📍 Business Info (name, address, phone, rating, map)
**File:** `src/data/cafeData.ts` → `cafeData` object at the top

```ts
export const cafeData: CafeData = {
  name: "Word of Mouth Morningside",
  rating: "4.8",
  reviewCount: "191",
  address: "41 Morningside Rd, Edinburgh EH10 4DR",
  phone: "+441316297759",
  description: "Your café description here.",
  google_map_link: "https://maps.app.goo.gl/...",       // Opens Google Maps
  google_map_embed: "https://www.google.com/maps/embed?pb=...",  // iframe src
}
```

**To get a new map embed URL:** Google Maps → find your location → Share → Embed a map → copy the URL inside `src="..."` only.

---

### 🕐 Opening Hours
**File:** `src/data/cafeData.ts` → `parsedHours` array (near the bottom)

```ts
export const parsedHours: ParsedHours[] = [
  { day: "Monday",    hours: "9 AM – 4:30 PM" },
  { day: "Tuesday",   hours: "9 AM – 4:30 PM" },
  { day: "Wednesday", hours: "Closed" },   // ← change to Closed if needed
  // ...
]
```

The Contact page automatically highlights today's day in gold.

---

### 🍽️ Menu Items
**File:** `src/data/cafeData.ts` → `menuItems` array (near the bottom)

```ts
export const menuItems: MenuItem[] = [
  {
    name: "Flat White",
    description: "Double ristretto with velvety steamed milk",
    category: "Coffee",     // Must exactly match a value in menuCategories
    price: "£3.20",         // Optional — leave out to hide price
    badge: "Popular",       // Optional — small label on the card (e.g. "New", "Signature")
  },
]
```

**To add a new category**, update `menuCategories` at the very bottom of `cafeData.ts`:

```ts
export const menuCategories = ["All", "Coffee", "Food", "Cakes", "Drinks", "Specials"] as const;
```

Then use `"Specials"` as the `category` on any menu item. The filter tab appears automatically.

**To delete a menu item** — remove its `{ }` block from the array.

---

### ⭐ Reviews
**File:** `src/data/cafeData.ts` → `reviews` array

```ts
{
  reviewer: "Customer Name",
  stars: "5",           // String: "1" through "5"
  date: "2 months ago",
  text: "The review text the customer wrote.",
  ownerReply: "",       // Empty string if no reply
  localGuide: "Local Guide · 12 reviews",  // Empty string if not applicable
}
```

**What shows on the Reviews page:** only reviews with 4+ stars and genuine text (owner-reply echoes are filtered out automatically). No manual cleanup needed.

**What shows in the homepage carousel:** also 4+ stars with text, deduped.

---

### 📸 Photos

Photos are in **two places** — both need updating if you want to change images:

**Gallery page** (`src/pages/GalleryPage.tsx`, line 8):
```ts
const photos = [
  "https://your-image-url.com/photo1.jpg",
  "https://your-image-url.com/photo2.jpg",
  // ...
]
```
This controls the masonry grid + lightbox on the `/gallery` page.

**Home page gallery carousel** (`src/pages/HomePage.tsx`, line 30):
```ts
const galleryPhotos = [
  "https://your-image-url.com/photo1.jpg",
  // ...
]
```
This controls the scrolling carousel in the "A glimpse inside" section on the homepage.

> `cafeData.photoUrls` also exists in `cafeData.ts` but is not currently used by these pages. It's safe to ignore.

> ⚠️ Facebook CDN URLs (`fbcdn.net`) expire after a few weeks. Replace them with your own hosted images on Cloudinary, Google Photos, or similar.

---

### 🗺️ Navigation Links

**Navbar** — `src/components/Navbar.tsx`, `navLinks` array at line 6:

```ts
const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/menu", label: "Menu" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Find Us" },
];
```

Add, remove, or reorder entries. Both the desktop nav and mobile slide-in panel use this same array.

**Footer** — `src/components/Footer.tsx`, hardcoded array around line 87:

```ts
{ to: '/', label: 'Home' },
{ to: '/about', label: 'About Us' },
{ to: '/menu', label: 'Our Menu' },
// ...
```

Keep this in sync with the Navbar links manually.

---

### ➕ Adding a New Page

**Step 1** — Create the file: `src/pages/YourPage.tsx`

**Step 2** — Register the route in `src/App.tsx`:

```tsx
import YourPage from './pages/YourPage'

// Inside <Routes>:
<Route path="your-page" element={<YourPage />} />
```

**Step 3** — Add it to the navbar (`src/components/Navbar.tsx` → `navLinks`) and footer (`src/components/Footer.tsx`).

### ➖ Removing a Page

**Step 1** — Remove the `<Route>` from `src/App.tsx`

**Step 2** — Remove the link from `navLinks` in `src/components/Navbar.tsx`

**Step 3** — Remove the link from `src/components/Footer.tsx`

**Step 4** — Delete the file from `src/pages/`

---

### 📄 About Page — Replacing Lorem Ipsum
**File:** `src/pages/AboutPage.tsx`

Search for these sections and replace the placeholder text:

| Section | What to search for |
|---|---|
| Large pull quote | `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod` |
| First intro paragraph | `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim` |
| Second intro paragraph | `Sunt in culpa qui officia deserunt` |
| "Who we are" heading | `Lorem ipsum` (inside the `<h2>`) |
| "Who we are" paragraphs | `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nemo enim` |
| Stats cards | The 4 `{ number, label }` objects — e.g. `{ number: '2020', label: 'Est. in Morningside' }` |
| Values cards | The 4 `{ title, body }` objects — e.g. `{ title: 'Community', body: 'Lorem ipsum...' }` |

---

### 🎨 Colours & Fonts
**File:** `src/index.css` → `@theme { }` block at the top

```css
@theme {
  /* Backgrounds & dark surfaces */
  --color-espresso: #1C0F07;        /* Main dark background */
  --color-espresso-light: #2C1810;  /* Info strip, slightly lighter */
  --color-cream: #FAF6F0;           /* Main light background */
  --color-cream-dark: #F0E8DB;      /* Alternating section background */

  /* Accent colours */
  --color-gold: #D4A853;            /* Primary accent — stars, highlights, borders */
  --color-gold-light: #E8C47A;      /* Gold hover states */
  --color-latte: #C4956A;           /* Icon colour, mid-tone warm */

  /* Text colours */
  --color-coffee: #6B3D2A;          /* Links, active states */
  --color-coffee-mid: #8B5A3A;      /* Italic accent text */
  --color-warm-gray: #8A7F78;       /* Body text on light backgrounds */
  --color-warm-gray-light: #C4BBB4; /* Subtle text, captions */
  --color-charcoal: #3D3530;        /* Slightly lighter dark text */

  /* Fonts */
  --font-display: "Cormorant Garamond", Georgia, serif;  /* All headings */
  --font-body: "DM Sans", system-ui, sans-serif;         /* All body text */
}
```

**To change fonts:**
1. Update the variables above
2. Update the `<link>` tag in `index.html` to load your new Google Font

---

## 🌐 Deploying to Vercel

1. Push your project to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repo
3. Settings: Framework = **Vite**, Build command = `npm run build`, Output = `dist`
4. Deploy — done. `vercel.json` handles routing automatically.

---

## 📦 Dependencies

| Package | Purpose |
|---|---|
| `react@19` + `react-dom` | UI framework |
| `react-router-dom@7` | Page routing (`/menu`, `/about`, etc.) |
| `motion` (Motion.dev) | Scroll reveal + page animations |
| `gsap` + `ScrollTrigger` | Hero parallax scroll effect |
| `lucide-react` | SVG icon library |
| `react-helmet-async` | Per-page `<title>` and `<meta>` SEO tags |
| `tailwindcss@4` | Utility CSS (CSS-first, no config file) |
| `@tailwindcss/vite` | Tailwind v4 Vite plugin |

> ⚠️ **Tailwind note:** This project uses Tailwind v4 CSS-first config. There is no `tailwind.config.ts`. Responsive layout uses plain CSS `@media` queries in `index.css`. **Do not** use Tailwind responsive prefixes like `md:hidden` or `lg:flex` in `.tsx` files — they won't compile without a content scan config.

---

## ♿ Accessibility

- All interactive elements have `aria-label` or visible text labels
- Focus rings visible via `:focus-visible` styles in `index.css`
- Gallery lightbox: keyboard-navigable with labelled Prev/Next/Close buttons
- `prefers-reduced-motion` disables animations via `@media` in `index.css`
- Semantic HTML throughout: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- All `<img>` tags have descriptive `alt` text
- Colour contrast meets WCAG AA on all text/background combinations
- Mobile menu locks body scroll when open; auto-closes on page navigation
