<<<<<<< HEAD
# Naome Imanishimwe — Professional Tech Portfolio & CV Hub

An attractive, ultra-modern, interactive, and high-performance portfolio website built for **Naome Imanishimwe** (BSc. Information Technology - Networking, AUCA).

Designed with inspiration from top-tier modern Dribbble dark-glassmorphism showcases, featuring fluid micro-animations, fast direct CV access, interactive case study modals, dynamic metrics counter, and responsive layouts.

---

## 🌟 Key Features

- **⚡ Fast CV Download & In-Browser Viewer**:
  - Direct 1-click download of `Naome_Imanishimwe_CV.pdf`.
  - In-browser interactive preview modal allowing recruiters to inspect qualifications instantly.
  - Sticky header CTA, Hero CTA, and a dedicated Resume Showcase section.
- **🎨 Modern Dribbble-Grade Aesthetics**:
  - Obsidian dark aesthetic with ambient mesh glows (Electric Violet & Neon Cyan).
  - Frosted glassmorphism (`backdrop-filter: blur(16px)`), subtle border gradients, and mouse-tracking card lighting.
  - Full Dark/Light theme switcher with local storage persistence.
- **🧩 Clean & Modular Component Architecture**:
  - Separated CSS concerns (`variables.css`, `base.css`, `components.css`, `sections.css`, `animations.css`).
  - ES6 Javascript modules (`theme.js`, `navigation.js`, `cv-modal.js`, `projects-filter.js`, `stats-counter.js`, `contact-form.js`, `glow-effect.js`).
- **🛡️ Built-in Security**:
  - Sanitized DOM manipulation to prevent XSS.
  - Comprehensive `.gitignore` preventing accidental commits of `.env`, keys, system logs, or OS temporary files.
  - Safe external link attributes (`rel="noopener noreferrer"`).
- **📱 Fully Responsive**:
  - Mobile drawer menu, fluid typography via `clamp()`, and optimized breakpoints.

---

## 📂 Project Structure

```text
Naomi-portifolio/
├── .gitignore               # Comprehensive Git ignore rules (OS, IDE, secrets, logs)
├── README.md                # Project documentation & deployment guide
├── index.html               # Semantic, accessible & SEO-optimized markup
├── assets/
│   ├── docs/
│   │   └── Naome_Imanishimwe_CV.pdf    # Official downloadable CV
│   └── images/
│       ├── avatar.jpg                  # Professional portrait of Naome
│       ├── project-auca-labs.jpg       # AUCA Labs Management System showcase
│       ├── project-network-infra.jpg   # Hybrid Cloud & Network Topology mockup
│       └── project-support-hub.jpg     # Enterprise IT Support Desk interface
├── css/
│   ├── variables.css        # CSS custom properties, design tokens, color palette
│   ├── base.css             # Resets, typography, custom scrollbar & ambient mesh
│   ├── components.css       # Buttons, badges, glass cards, modals, toast, stats
│   ├── sections.css         # Hero, About, Skills, Projects, Timeline, Contact
│   └── animations.css       # Floating orbs, pulses, and scroll reveal animations
└── js/
    ├── main.js              # Application entry point
    └── modules/
        ├── theme.js             # Dark/Light mode toggle with persistence
        ├── navigation.js        # Mobile drawer, header elevation & scroll spy
        ├── cv-modal.js          # In-browser CV viewer & download feedback
        ├── projects-filter.js   # Interactive category filters & modal details
        ├── stats-counter.js     # IntersectionObserver animated number counters
        ├── glow-effect.js       # Mouse-tracking radial gradient lighting
        └── contact-form.js      # Client validation, clipboard copy & feedback toast
```

---

## 🚀 How to Run Locally

Because the project uses standard ES6 modules (`import`/`export`), it is recommended to run it with any local HTTP server:

### Option 1: Python HTTP Server (Built-in)
```bash
# In the project root:
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

### Option 2: VS Code Live Server
1. Open the folder in VS Code.
2. Right-click `index.html` and click **"Open with Live Server"**.

### Option 3: Node.js / npx
```bash
npx serve .
```

---

## 🌐 Deploy to GitHub Pages

1. Commit and push all files to your GitHub repository:
   ```bash
   git add .
   git commit -m "feat: complete modern interactive portfolio with CV download and modular architecture"
   git push origin main
   ```
2. On GitHub, navigate to **Settings** > **Pages**.
3. Under **Build and deployment** > **Branch**, select `main` (or `master`) and folder `/ (root)`.
4. Click **Save**. Your site will be live at `https://<username>.github.io/<repo-name>/`.

---

## 👤 Profile & Credentials

- **Name**: Naome IMANISHIMWE
- **Degree**: BSc. Information Technology (Networking), Adventist University of Central Africa (AUCA)
- **Email**: naomeimanishimwe7@gmail.com
- **Phone**: +250 792 016 600
- **Location**: Kigali, Rwanda
- **Certifications**: CISCO Networking Essentials, ISOC Network Operations, Digital Talent Software Development, AUCA English Proficiency.
=======
# imanishimwe_portifolio




hello
>>>>>>> 46845073b4114127399e181e8727c9281bd58028
