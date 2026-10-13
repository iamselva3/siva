# Siva — Personal Portfolio

An editorial, handcrafted single-page portfolio for **Siva** — AI & Data Science Graduate and Front-End Developer based in Chennai, India.

Built with a bold design studio aesthetic: oversized typography, sticker-like physics chips, paper grain texture, registration crosshairs, sticky stacked project showcases with coded interactive visuals, and smooth dark/light mode transitions.

---

## 🛠 Tech Stack

- **Framework**: React 18 + Vite + TypeScript
- **Styling**: Tailwind CSS (class-based dark mode, custom editorial color palette)
- **Animation & Physics**: Framer Motion (spring physics, layout animations, line reveals, sticky card stacking)
- **3D Layer**: `@react-three/fiber` + `@react-three/drei` + `three` (interactive neural network graph, lazy-loaded with CSS fallback)
- **Icons**: `lucide-react` + `react-icons` (Simple Icons & FontAwesome)
- **Smooth Scrolling**: `lenis` (desktop smooth wheel, native touch-scroll on mobile)
- **Zero Generic UI Libs**: 100% custom handcrafted components. No MUI, Chakra, or generic templates.

---

## 🎨 Color Palette & Typography

| Token | Light Mode | Dark Mode | Usage |
| :--- | :--- | :--- | :--- |
| **Paper / Charcoal** | `#F3EEE4` | `#0C0C0D` | Canvas background |
| **Ink** | `#111111` | `#F3EEE4` | Primary high-contrast text |
| **Card** | `#FBF8F2` | `#151517` | Bento tiles & cards |
| **Accent Lime** | `#C6F135` | `#C6F135` | Hero accent, spotlight mask, active states |
| **Accent Tangerine**| `#FF5A1F` | `#FF5A1F` | Secondary warmth, learning badges |
| **Accent Sky** | `#8EC5FF` | `#8EC5FF` | Auxiliary tech chips & links |

### Typography
- **Display**: [Bricolage Grotesque](https://fonts.google.com/specimen/Bricolage+Grotesque) (tight tracking, oversized poster headers)
- **Serif Accent**: [Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif) (italic emphasis words inside headlines)
- **Monospace**: [DM Mono](https://fonts.google.com/specimen/DM+Mono) (telemetry numbers, code labels, timestamps)
- **Body**: [Inter](https://fonts.google.com/specimen/Inter) (readable paragraphs and highlights)

---

## 🚀 Quickstart

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build optimized production bundle
npm run build

# 4. Preview production build
npm run preview
```

The site will be available at `http://localhost:5180/` (or your configured Vite port).

---

## 📁 Project Directory Structure

```text
siva-portfolio/
├── public/
│   ├── images/
│   │   └── siva-cutout.png        # Transparent PNG cutout of Siva G
│   ├── resume.pdf                 # PDF Resume file
│   └── favicon.svg                # Monogram icon
├── src/
│   ├── assets/                    # Static assets
│   ├── components/
│   │   ├── canvas/
│   │   │   ├── Hero3DCanvas.tsx   # Lightweight R3F neural graph canvas
│   │   │   └── CSSFallbackCanvas.tsx # CSS fallback for 3D
│   │   ├── intro/
│   │   │   └── IntroScreen.tsx    # Session-aware preloader with Vanakkam cycle
│   │   ├── layout/
│   │   │   ├── Navbar.tsx         # Responsive top bar with sliding pill & theme toggle
│   │   │   └── Footer.tsx         # Oversized reactive wordmark & colophon
│   │   ├── sections/
│   │   │   ├── Hero.tsx           # Typographic poster, spotlight mask & face scan
│   │   │   ├── Work.tsx           # Sticky stacked-cards layout
│   │   │   ├── CaseStudyDrawer.tsx # Slide-in drawer for project case studies
│   │   │   ├── About.tsx          # Asymmetric bento grid & live IST clock
│   │   │   ├── Skills.tsx         # Interactive sticker wall & double marquee
│   │   │   ├── Journey.tsx        # Vertical timeline with drawing line
│   │   │   ├── Contact.tsx        # Giant click-to-copy email & contact form
│   │   │   └── visuals/
│   │   │       ├── ElearningVisual.tsx      # Interactive browser mockup & progress ring
│   │   │       ├── FuzzyLogicVisual.tsx     # Morphing membership curves & confusion matrix
│   │   │       └── EmotionDetectionVisual.tsx # OpenCV mock webcam HUD & 7-class bar chart
│   │   └── ui/
│   │       ├── CustomCursor.tsx   # Lerped cursor with contextual labels
│   │       ├── MagneticButton.tsx # Button with spring physics attraction
│   │       ├── TiltCard.tsx       # 3D perspective hover container
│   │       ├── StickerChip.tsx    # Draggable chip with spring-back physics
│   │       ├── SectionHeader.tsx  # Numbered label & editorial typography
│   │       ├── ScrollProgress.tsx # Vertical right-edge indicator
│   │       ├── Marquee.tsx        # Infinite bidirectional ticker
│   │       ├── Reveal.tsx         # Masked line reveal animation
│   │       └── TechIcon.tsx       # Mapped tech stack logos
│   ├── data/
│   │   ├── profile.ts             # Contact details, bio, links, location
│   │   ├── skills.ts              # Skills categories, proficiency, marquee items
│   │   ├── experience.ts          # Xlorit internship, education, hackathons
│   │   └── projects.ts            # Project details, highlights, and case studies
│   ├── hooks/
│   │   ├── useTheme.ts            # Dark/light theme with View Transitions circular reveal
│   │   ├── useMouse.ts            # Normalized cursor tracking for parallax
│   │   ├── useIST.ts              # Live Indian Standard Time ticker
│   │   ├── useSmoothScroll.ts     # Lenis smooth scrolling
│   │   └── usePrefersReducedMotion.ts # Accessibility motion detection
│   ├── lib/
│   │   └── utils.ts               # clsx + twMerge utility
│   ├── App.tsx                    # Root orchestrator
│   ├── index.css                  # Design tokens, grain overlay, and animations
│   └── main.tsx                   # Entry render point
├── index.html                     # Google Fonts, SEO tags, JSON-LD schema
├── tailwind.config.js             # Editorial color tokens & animations
└── vite.config.ts                 # Path alias & build optimizations
```

---

## 🔧 Content Customization (No JSX Editing Required)

All content is decoupled into TypeScript data modules inside `src/data/`:

### 1. Changing Profile Information
Edit `src/data/profile.ts`:
- Name, title, phone, email, LinkedIn, and GitHub usernames.
- Bio summary and hero tagline.
- Rotating circular badge copy and emotion scanner labels.

### 2. Updating Skills & Proficiencies
Edit `src/data/skills.ts`:
- Add or modify skills in `skillsData`.
- Set proficiency labels (`Daily`, `Comfortable`, or `Learning`).
- Customize the double marquee rows.

### 3. Updating Journey & Experience
Edit `src/data/experience.ts`:
- Internship bullets, education institutions, graduation years, and hackathons.

### 4. Updating Projects & Case Studies
Edit `src/data/projects.ts`:
- Project titles, descriptions, live demo links, repository URLs, and case study breakdowns (Problem, Approach, Architecture, Outcome).

---

## 📷 Swapping the Portrait Cutout

1. Replace the image file at:
   ```text
   public/images/siva-cutout.png
   ```
2. For best results, use a transparent PNG (transparent background) cropped around the waist or upper body.
3. The hero automatically applies rim-light glow and depth layering.

---

## 📄 Replacing the Resume PDF

1. Place your updated resume file in:
   ```text
   public/resume.pdf
   ```
2. Or change the link in `src/data/profile.ts`:
   ```ts
   resumeUrl: "https://your-hosted-domain.com/my-resume.pdf"
   ```

---

## 📬 Wiring the Contact Form (Formspree / EmailJS)

Create a `.env.local` file in the project root:
```env
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```
In `src/components/sections/Contact.tsx`, the form handles submission, validation, and loading feedback.

---

## 🌐 Deployment

### Vercel
```bash
npx vercel
```
Or link the GitHub repository to [Vercel](https://vercel.com/) with build command `npm run build` and output directory `dist`.

### Netlify
```bash
npx netlify deploy --prod --dir=dist
```
Or import repo on Netlify dashboard with publish directory `dist`.

---

## 📌 Checklist of Placeholders to Replace

Before deploying to your custom domain, review and update these placeholders:

1. **Photo Cutout**: 
   - `public/images/siva-cutout.png` (AI cutout already generated from your uploaded image; swap whenever you have a newer photo).
2. **Resume PDF**: 
   - `public/resume.pdf` (Replace the generated placeholder with your real PDF resume).
3. **Project Links**:
   - `src/data/projects.ts`: Update `githubUrl` and `liveUrl` with your actual repositories and live preview links.
4. **Contact Form Endpoint**:
   - Set your Formspree/EmailJS endpoint in `.env.local` or directly in `src/components/sections/Contact.tsx`.
5. **Domain URL**:
   - In `index.html`, update the Open Graph and Canonical URLs (`og:url`) to your custom domain.
