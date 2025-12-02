# Portfolio Website - Technical Documentation

**Version:** 2.1 (Enhanced Minimalist Design with Interactive Filtering)
**Last Updated:** December 2025
**Author:** Eranda Wijewantha
**Tech Stack:** HTML5, CSS3, Vanilla JavaScript

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Architecture & Design Philosophy](#architecture--design-philosophy)
3. [File Structure](#file-structure)
4. [Design System](#design-system)
5. [Component Library](#component-library)
6. [JavaScript Features](#javascript-features)
7. [Page Documentation](#page-documentation)
8. [Performance Optimization](#performance-optimization)
9. [Deployment](#deployment)
10. [Browser Compatibility](#browser-compatibility)

---

## Project Overview

### Purpose
A professional, minimalistic portfolio website designed to showcase data engineering, business intelligence, and AI/ML projects. Optimized for attracting hiring managers, recruiters, and potential clients in the data science and analytics industry.

### Key Features
- ✅ **Minimal Dependencies** - Single JavaScript file for filtering
- ✅ **Interactive Project Filtering** - Category-based project filtering with smooth animations
- ✅ **Fully Responsive** - Mobile-first design approach
- ✅ **GitHub Pages Ready** - Static site with minimal build requirements
- ✅ **Fast Loading** - Optimized performance (< 2s load time)
- ✅ **SEO Optimized** - Semantic HTML, comprehensive meta tags
- ✅ **Accessible** - WCAG 2.1 compliant design
- ✅ **Professional Design** - Clean, modern, data-focused aesthetic

### Current Architecture State
- **3 Service Categories**: Machine Learning & AI, Business Intelligence & Data Analysis, Data Engineering
- **6 Production Projects**: Each with detailed case study format
- **No Profile Image**: Clean, text-focused header design
- **Substack Ready**: Commented out but ready to enable when publishing starts
- **Firefly Animation**: Subtle background animation with 8 fireflies
- **Project Filtering**: JavaScript-powered category filtering on projects page

### Technology Stack

**Front-End:**
- HTML5 (semantic markup)
- CSS3 (custom properties, Grid, Flexbox, animations)
- Vanilla JavaScript (minimal, for project filtering)

**Fonts:**
- Google Fonts: Inter (300, 400, 500, 600, 700 weights)

**Icons:**
- Emoji-based icons (no external icon libraries)

**Browser Support:**
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari 14+, Chrome Mobile)

---

## Architecture & Design Philosophy

### Design Philosophy

**Minimalism with Purpose**
- Clean, uncluttered layouts with intentional whitespace
- Content hierarchy driven by user goals (hire, learn, connect)
- Subtle animations that enhance UX without distraction
- Professional aesthetic targeting corporate/enterprise clients

**Data-Driven Presentation**
- Projects showcase measurable impact with specific metrics
- Quantifiable results (percentages, dollar amounts, time savings)
- Technical depth balanced with business value explanation
- Trust-building through clarity and specificity

**Mobile-First Responsive Design**
- Design starts at 320px viewport width
- Progressive enhancement for larger screens
- Touch-friendly interactive elements (48px minimum)
- Readable typography at all screen sizes

### Color Psychology

**Emerald Green Primary (`#10B981`)**
- Represents growth, success, and data insights
- Professional yet approachable for tech industry
- High contrast ratio for accessibility (WCAG AA compliant)
- Associated with analytics, finance, and progress

**Dark Navy Background (`#0A0F14`)**
- Sophistication and modern tech aesthetic
- Reduces eye strain for extended reading
- Makes emerald green accent highly visible
- Professional presentation for B2B context

**Supporting Colors:**
- `#050A0E` - Darker background for depth
- `#E5E7EB` - Primary text (light gray for readability)
- `#9CA3AF` - Secondary text (muted gray)
- `rgba(16, 185, 129, 0.1)` - Subtle borders and highlights

---

## File Structure

```
@PortfolioWeb/
│
├── index.html                 # Homepage: hero, 3 services, 6 featured projects
├── projects.html              # Full project details with filtering (6 projects)
├── insights-media.html        # Blog & Media: YouTube, Medium, blog posts
├── cv.html                    # Resume/CV page with downloadable PDF
├── contact.html               # Contact form and information
├── writing.html               # Legacy writing page (kept for compatibility)
│
├── docs/                      # Documentation (NEW)
│   ├── MAINTENANCE_GUIDE.md   # How to maintain and update the website
│   ├── DEPLOYMENT_GUIDE.md    # Deployment instructions for various platforms
│   ├── CONTENT_GUIDE.md       # How to add content (videos, articles, projects)
│   ├── TECHNICAL_DOCUMENTATION.md  # This file
│   └── [Other docs...]        # Historical documentation files
│
├── assets/
│   ├── css/
│   │   └── style.css         # Single stylesheet (~1,290 lines)
│   ├── js/
│   │   └── projects-filter.js # Project filtering functionality (NEW)
│   ├── images/
│   │   └── favicon.svg       # Animated firefly favicon
│   └── files/
│       └── Eranda_Wijewantha_Resume.pdf  # Downloadable CV
│
├── blog/                      # (Currently unused - placeholder for future)
│
└── README.md                  # Project readme

```

### Key File Information

**HTML Pages:**
- All pages use consistent navigation structure
- Footer is identical across all pages
- Firefly animation present on all pages (8 fireflies)
- Meta tags optimized for SEO and social sharing

**CSS Architecture:**
- Single CSS file (`style.css`) for entire site
- CSS custom properties for theme colors and spacing
- Mobile-first media queries
- Component-based structure (navbar, cards, buttons, etc.)

**JavaScript:**
- `projects-filter.js` - Handles category filtering on projects page
- Event-driven, vanilla JS (no frameworks)
- Smooth scroll integration
- FadeIn animations for filtered projects

**Documentation:**
- All documentation centralized in `/docs` folder
- Comprehensive guides for maintenance, deployment, and content addition
- README.md in root for GitHub repository overview

---

## Design System

### Color Variables

Located in `assets/css/style.css` (lines 4-16):

```css
:root {
    /* Background Colors */
    --bg-dark: #0A0F14;              /* Main page background */
    --bg-darker: #050A0E;            /* Darker sections, contrasts */
    --bg-card: #0F1419;              /* Card backgrounds */

    /* Text Colors */
    --text-primary: #E5E7EB;         /* Primary text (light gray) */
    --text-secondary: #9CA3AF;       /* Secondary text (muted gray) */

    /* Accent Colors */
    --primary-color: #10B981;        /* Emerald green - primary accent */

    /* UI Elements */
    --border-subtle: rgba(16, 185, 129, 0.1);  /* Subtle borders */
    --glass-bg: rgba(10, 15, 20, 0.6);         /* Glass morphism effect */

    /* Transitions */
    --transition: all 0.3s ease;     /* Standard transition timing */
}
```

### Typography System

**Font Family:**
- Primary: `Inter` (Google Fonts)
- Fallback: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`

**Font Weights:**
- Light (300): Subtle text, taglines
- Regular (400): Body copy, descriptions
- Medium (500): Navigation links, labels
- Semibold (600): Card titles, section headings
- Bold (700): Hero title, page headers

**Type Scale:**
```css
h1 (Hero): 3rem (48px) → 2rem (32px) mobile
h2 (Sections): 2.25rem (36px) → 1.75rem (28px) mobile
h3 (Cards): 1.5rem (24px) → 1.25rem (20px) mobile
h4 (Subsections): 1.25rem (20px) → 1.125rem (18px) mobile
p (Body): 1rem (16px)
small: 0.875rem (14px)
```

### Spacing System

**Based on 0.5rem (8px) base unit:**
- 0.5rem (8px) - Tight spacing
- 1rem (16px) - Standard spacing
- 1.5rem (24px) - Medium spacing
- 2rem (32px) - Large spacing
- 2.5rem (40px) - Extra large spacing
- 3rem (48px) - Section spacing
- 4rem (64px) - Major section breaks

### Responsive Breakpoints

```css
/* Default: Mobile first (320px+) */

@media (max-width: 768px) {
    /* Tablet and below adjustments */
    - Font size reductions
    - Grid column changes (3 → 1 columns)
    - Navigation wrapping
    - Reduced spacing
}

@media (max-width: 480px) {
    /* Small mobile specific */
    - Further font reduction
    - Stack all elements
    - Simplified layouts
}
```

---

## Component Library

### 1. Navigation Bar

**Location:** All HTML files, lines ~23-34
**CSS:** `style.css` lines 40-93

**Structure:**
```html
<nav class="navbar">
    <div class="container">
        <a href="index.html" class="logo">EW</a>
        <ul class="nav-menu">
            <li><a href="index.html" class="nav-link active">Home</a></li>
            <li><a href="projects.html" class="nav-link">Projects</a></li>
            <li><a href="insights-media.html" class="nav-link">Blog & Media</a></li>
            <li><a href="cv.html" class="nav-link">CV</a></li>
            <li><a href="contact.html" class="nav-link">Contact</a></li>
        </ul>
    </div>
</nav>
```

**Features:**
- Fixed position (stays at top during scroll)
- Glass morphism effect with backdrop blur
- Active page indicator with emerald underline
- Logo "EW" with primary color
- Responsive: wraps on mobile (no hamburger menu by design)

**Customization:**
- Change logo: Edit `.logo` text content
- Add navigation item: Insert new `<li>` with `nav-link` class
- Update active page: Move `active` class to current page link

---

### 2. Firefly Background Animation

**Location:** All HTML files, lines ~36-45
**CSS:** `style.css` lines 215-272

**Structure:**
```html
<div class="firefly-container">
    <div class="firefly"></div>
    <div class="firefly"></div>
    <div class="firefly"></div>
    <div class="firefly"></div>
    <div class="firefly"></div>
    <div class="firefly"></div>
    <div class="firefly"></div>
    <div class="firefly"></div>
</div>
```

**Animation Parameters:**
- Count: 8 fireflies
- Size: 3px × 3px
- Color: `var(--primary-color)` (emerald green)
- Animation: `float` keyframe (15-22 seconds duration, staggered)
- Glow: `box-shadow: 0 0 10px var(--primary-color)`
- Z-index: 1 (behind all content)

**Performance:**
- Uses CSS transforms (GPU accelerated)
- Subtle opacity changes (0.3 - 0.7)
- Randomized animation delays for natural effect

---

### 3. Hero Section

**Location:** `index.html` lines 48-63
**CSS:** `style.css` lines 274-304

**Structure:**
```html
<section class="hero">
    <div class="container">
        <div class="hero-content">
            <h1 class="hero-title">
                <span>Eranda</span> Wijewantha
            </h1>
            <p class="hero-subtitle">Data Engineer | BI Specialist | AI/ML Solutions</p>
            <p class="hero-tagline">
                Building data-driven systems that transform business operations and drive measurable impact
            </p>
            <div class="hero-cta">
                <a href="projects.html" class="btn btn-primary">View Projects</a>
                <a href="contact.html" class="btn btn-outline">Get in Touch</a>
            </div>
        </div>
    </div>
</section>
```

**Design Details:**
- First name ("Eranda") highlighted with emerald color via `<span>`
- Centered layout with max-width: 800px
- Two CTA buttons: Primary (solid) and Outline (ghost)
- Responsive: Font sizes reduce on mobile, CTAs stack vertically

---

### 4. Service Cards (What I Do)

**Location:** `index.html` lines 65-81
**CSS:** `style.css` lines 422-463

**Current Configuration: 3 Services**

```html
<div class="services-grid">
    <div class="service-card">
        <div class="service-icon">🤖</div>
        <h3>Machine Learning & AI</h3>
        <p>Build intelligent systems with predictive analytics...</p>
    </div>

    <div class="service-card">
        <div class="service-icon">📊</div>
        <h3>Business Intelligence & Data Analysis</h3>
        <p>Transform data into actionable insights...</p>
    </div>

    <div class="service-card">
        <div class="service-icon">⚙️</div>
        <h3>Data Engineering</h3>
        <p>Design and build scalable data infrastructure...</p>
    </div>
</div>
```

**Grid Configuration:**
- Desktop: 3 columns (`grid-template-columns: repeat(3, 1fr)`)
- Mobile: 1 column
- Gap: 2rem
- Max-width: 1100px

**Card Features:**
- Glass morphism background
- Hover effect: Slight lift with shadow
- Emoji icons (no external dependencies)
- Min-height: 300px for consistent alignment

---

### 5. Project Cards

**Two Variants:**

**A) Featured Project Card (Homepage)**

**Location:** `index.html` lines 94-171
**CSS:** `style.css` lines 465-536

```html
<div class="project-card">
    <h3>Fraud Detection ML System</h3>
    <p class="project-description">
        Real-time machine learning system that analyzes transaction patterns...
    </p>
    <div class="project-tags">
        <span class="tag">Python</span>
        <span class="tag">XGBoost</span>
        <span class="tag">PostgreSQL</span>
    </div>
    <div class="project-links">
        <a href="projects.html#fraud-detection" class="project-link">View Details →</a>
    </div>
</div>
```

**B) Full Project Detail (Projects Page)**

**Location:** `projects.html` lines 64-268
**CSS:** `style.css` lines 661-695

```html
<div class="project-detail" id="fraud-detection" data-category="Machine Learning & AI">
    <h3>Fraud Detection ML System</h3>

    <h4>Problem</h4>
    <p>Description of the business problem...</p>

    <h4>Solution</h4>
    <p>Technical approach and implementation...</p>
    <ul>
        <li>Key feature 1</li>
        <li>Key feature 2</li>
    </ul>

    <h4>Stack Used</h4>
    <div class="project-tags">
        <span class="tag">Python</span>
        <span class="tag">Scikit-learn</span>
        <!-- More tags -->
    </div>

    <h4>Outcome / Impact</h4>
    <p>Quantifiable results with specific metrics...</p>

    <div class="project-actions">
        <a href="GITHUB_URL" class="btn btn-primary" target="_blank">View on GitHub</a>
        <a href="DEMO_URL" class="btn btn-outline" target="_blank">Live Demo</a>
    </div>
</div>
```

**Important Attributes:**
- `id`: For deep linking from homepage (e.g., `#fraud-detection`)
- `data-category`: For JavaScript filtering (exact match required)

**Current Project IDs:**
1. `#fraud-detection` - Machine Learning & AI
2. `#demand-forecasting` - Machine Learning & AI
3. `#bi-dashboard` - Business Intelligence & Data Analysis
4. `#etl-pipeline` - Data Engineering
5. `#customer-segmentation` - Machine Learning & AI
6. `#web-scraping` - Data Engineering

---

### 6. Filter Buttons

**Location:** `projects.html` lines 57-62
**CSS:** `style.css` lines 628-659
**JavaScript:** `assets/js/projects-filter.js`

**Structure:**
```html
<div class="filter-buttons">
    <button class="filter-btn active">All</button>
    <button class="filter-btn">Machine Learning & AI</button>
    <button class="filter-btn">Business Intelligence & Data Analysis</button>
    <button class="filter-btn">Data Engineering</button>
</div>
```

**Functionality:**
- Clicking button filters projects by `data-category` attribute
- Active button gets emerald background
- Smooth fadeIn animation on filtered projects
- Auto-scrolls to projects section after filtering

**Categories:**
1. **All** - Shows all 6 projects
2. **Machine Learning & AI** - 3 projects (Fraud Detection, Demand Forecasting, Customer Segmentation)
3. **Business Intelligence & Data Analysis** - 1 project (BI Dashboard)
4. **Data Engineering** - 2 projects (ETL Pipeline, Web Scraping)

---

### 7. Buttons

**CSS:** `style.css` lines 95-140

**Primary Button:**
```html
<a href="#" class="btn btn-primary">View Projects</a>
```
- Emerald green background (#10B981)
- Dark text (#0A0F14)
- Solid, high-contrast CTA

**Outline Button:**
```html
<a href="#" class="btn btn-outline">Get in Touch</a>
```
- Transparent background
- Emerald green border
- Subtle hover effect

**Project Link (Arrow):**
```html
<a href="projects.html#project" class="project-link">View Details →</a>
```
- Text-based link with arrow
- Emerald color
- Underline on hover

---

### 8. Footer

**Location:** All HTML files (bottom)
**CSS:** `style.css` lines 538-594

**Structure:**
```html
<footer class="footer">
    <div class="container">
        <div class="footer-content">
            <div class="footer-section">
                <h3>Eranda Wijewantha</h3>
                <p>Data Engineer | BI Specialist | AI Solutions</p>
            </div>
            <div class="footer-section">
                <h4>Connect</h4>
                <div class="social-links">
                    <a href="mailto:your.email@example.com">Email</a>
                    <a href="https://linkedin.com/in/YOUR_LINKEDIN" target="_blank">LinkedIn</a>
                    <a href="https://github.com/YOUR_GITHUB" target="_blank">GitHub</a>
                    <a href="https://upwork.com/freelancers/YOUR_UPWORK" target="_blank">Upwork</a>
                    <a href="https://medium.com/@YOUR_MEDIUM" target="_blank">Medium</a>
                    <!-- <a href="https://YOUR_SUBSTACK.substack.com" target="_blank">Substack</a> -->
                    <a href="https://youtube.com/@YOUR_CHANNEL" target="_blank">YouTube</a>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2025 Eranda Wijewantha. All rights reserved.</p>
        </div>
    </div>
</footer>
```

**Note:** Substack link is commented out (ready to enable when publishing starts)

---

## JavaScript Features

### Project Filtering System

**File:** `assets/js/projects-filter.js` (60 lines)
**Purpose:** Category-based filtering on projects page

**How It Works:**

1. **Event Listeners:**
   ```javascript
   filterButtons.forEach(button => {
       button.addEventListener('click', function() {
           const category = this.textContent.trim();
           // Filter logic
       });
   });
   ```

2. **Filtering Logic:**
   - "All" button: Shows all projects
   - Category buttons: Shows only matching `data-category` projects
   - Non-matching projects get `display: none`

3. **Visual Feedback:**
   - Active button gets `active` class (emerald background)
   - Filtered projects get fadeIn animation
   - Smooth scroll to projects section

4. **Animation:**
   ```css
   @keyframes fadeIn {
       from { opacity: 0; transform: translateY(20px); }
       to { opacity: 1; transform: translateY(0); }
   }
   ```

**Performance:**
- No external libraries (vanilla JS)
- Minimal DOM manipulation
- CSS animations (GPU accelerated)
- Runs on DOMContentLoaded (no blocking)

---

## Page Documentation

### index.html (Homepage)

**Purpose:** Primary landing page showcasing skills and featured projects

**Sections:**
1. **Hero** (lines 48-63)
   - Name with highlighted first name
   - Title/subtitle
   - Tagline
   - 2 CTAs: "View Projects" and "Get in Touch"

2. **What I Do** (lines 65-83)
   - 3 service cards
   - Categories: ML & AI, BI & Data Analysis, Data Engineering

3. **Featured Projects** (lines 85-173)
   - 6 project cards
   - Each links to full detail on projects page via `#anchor`

4. **Footer** (lines 175-199)

**Key Customization Points:**
- Line 51-52: Update name
- Line 55: Update title/subtitle
- Line 58-60: Update tagline
- Lines 94-171: Update project cards

---

### projects.html (Project Showcase)

**Purpose:** Detailed project case studies with category filtering

**Sections:**
1. **Page Header** (lines 47-52)
2. **Filter Buttons** (lines 57-62) - 4 buttons (All + 3 categories)
3. **Project Details** (lines 64-268) - 6 full projects

**Project Distribution:**
- Machine Learning & AI: 3 projects
- Business Intelligence & Data Analysis: 1 project
- Data Engineering: 2 projects

**Deep Linking:**
All projects have `id` attributes:
- `#fraud-detection`
- `#demand-forecasting`
- `#bi-dashboard`
- `#etl-pipeline`
- `#customer-segmentation`
- `#web-scraping`

**JavaScript Integration:**
- Linked at line 21: `<script defer src="assets/js/projects-filter.js"></script>`
- Filter buttons trigger category-based filtering
- Smooth animations on show/hide

---

### insights-media.html (Blog & Media)

**Purpose:** Showcase external content (Medium, YouTube) and internal blog posts

**Sections:**
1. **Substack Newsletter** (lines 56-64) - COMMENTED OUT
   - Ready to uncomment when publishing starts

2. **Medium Articles** (lines 65-76)
   - Featured article list
   - Link to Medium profile

3. **YouTube Channel** (lines 78-109)
   - 3 video placeholders
   - Video grid layout
   - Link to YouTube channel

4. **Blog Posts** (lines 111-150)
   - 3 blog post cards
   - Links to `blog/*.html` pages (currently placeholders)

**Note on Substack:**
```html
<!-- Uncomment when Substack is active
<div class="insights-platform writing-platform">
    <h3>📝 Substack Newsletter</h3>
    ...
</div>
-->
```

---

### cv.html (Resume/CV)

**Purpose:** Online resume with downloadable PDF option

**Sections:**
1. **CV Header** (lines 47-56)
   - Title and subtitle
   - Download Resume button

2. **Professional Summary** (lines 61-65)

3. **Skills** (lines 67-130)
   - 6 skill categories in grid layout
   - Programming, Data Engineering, ML, BI, Tools, Cloud/DevOps

4. **Professional Experience** (lines 132-178)
   - 3 positions with detailed achievements
   - Bullet points with quantifiable results

5. **Education** (lines 181-188)

6. **Certifications** (lines 191-202)

7. **Research Interests** (lines 205-216)

8. **Languages** (lines 219-227)

**Resume PDF:**
- Located at: `assets/files/Eranda_Wijewantha_Resume.pdf`
- Link on line 53

---

### contact.html (Contact Page)

**Purpose:** Contact form and contact information

**Sections:**
1. **Page Header** (lines 47-52)

2. **Contact Grid** (lines 54-148)
   - Left: Contact information
     - Email
     - Location
     - Professional profiles
     - Content channels
     - Availability status

   - Right: Contact form (lines 92-125)
     - Name, Email, Company, Subject, Message fields
     - Submit button
     - Note: Form needs backend integration (Formspree, EmailJS, etc.)

3. **What I Can Help With** (lines 128-147)
   - 3 service cards: Freelance, Consulting, Speaking

**Form Integration:**
Currently uses `action="#"` method="POST"
- Integrate Formspree: `action="https://formspree.io/f/YOUR_FORM_ID"`
- Or EmailJS for JavaScript-based submission
- Or custom backend API endpoint

---

## Performance Optimization

### Current Metrics

**Lighthouse Scores (Target):**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 90+

**Load Time:** < 2 seconds on 3G connection

### Optimization Strategies

**CSS:**
- Single CSS file (reduces HTTP requests)
- CSS custom properties (efficient theming)
- No unused selectors (clean, minimal)
- Mobile-first approach (smaller default styles)

**JavaScript:**
- Single JS file (60 lines, minified)
- Loaded with `defer` attribute (non-blocking)
- No external libraries or frameworks
- Event delegation for efficiency

**Fonts:**
- Google Fonts with `display=swap` (prevents FOIT)
- Preconnect to Google Fonts servers
- Only necessary weights loaded (300-700)

**Images:**
- Minimal image usage (icon-less design with emojis)
- SVG favicon (scalable, small file size)
- Recommend WebP format for any future images

**HTML:**
- Semantic markup (better SEO and accessibility)
- Minimal inline styles
- Proper heading hierarchy (H1 → H6)
- Meta tags optimized

**Animations:**
- CSS-based (GPU accelerated)
- Firefly animation uses transforms (not position changes)
- Respects `prefers-reduced-motion` media query

---

## Deployment

### Recommended Platform: Netlify or GitHub Pages

**Why Netlify:**
- Continuous deployment from Git
- Automatic SSL certificate
- Custom domain support (free)
- Form handling built-in
- One-click rollbacks

**Why GitHub Pages:**
- Free for public repositories
- Direct Git integration
- Simple setup
- Reliable uptime

**Quick Deploy Steps:**

**Option 1: GitHub Pages**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main

# Enable GitHub Pages in repository settings
# Source: main branch, / (root) folder
# Site will be live at: https://YOUR_USERNAME.github.io/portfolio/
```

**Option 2: Netlify**
1. Push code to GitHub
2. Connect Netlify to GitHub repository
3. Build settings: None (static site)
4. Publish directory: `/`
5. Deploy

See `docs/DEPLOYMENT_GUIDE.md` for detailed instructions.

---

## Browser Compatibility

### Tested and Supported

**Desktop Browsers:**
- Google Chrome 90+ ✅
- Mozilla Firefox 88+ ✅
- Safari 14+ ✅
- Microsoft Edge 90+ ✅

**Mobile Browsers:**
- iOS Safari 14+ ✅
- Chrome Mobile (Android) ✅
- Samsung Internet ✅

### CSS Features Used

**Modern CSS (may not work on older browsers):**
- CSS Grid (IE11 not supported)
- CSS Custom Properties (IE11 not supported)
- CSS Flexbox (IE10+ partial support)
- `backdrop-filter` (Safari needs -webkit prefix)
- CSS Animations (IE10+)

**Graceful Degradation:**
- Firefly animation: Non-critical, site works without it
- Backdrop blur: Falls back to solid background
- Grid layout: Falls back to block layout on very old browsers

### Progressive Enhancement

**Base Experience (All Browsers):**
- Semantic HTML content accessible
- Readable text and navigation
- Project information visible

**Enhanced Experience (Modern Browsers):**
- Firefly animation
- Smooth transitions
- Project filtering
- Glass morphism effects

---

## Security

### Content Security Policy

**Implemented in all HTML files:**
```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; script-src 'self'; frame-src https://www.youtube.com;">
```

**Policy Details:**
- `default-src 'self'` - Only load resources from same origin
- `style-src` - Allows Google Fonts and inline styles
- `font-src` - Allows Google Fonts
- `img-src` - Allows images from any HTTPS source
- `script-src 'self'` - Only scripts from same origin
- `frame-src` - Allows YouTube embeds only

### Additional Security Headers

**Recommended (set via hosting platform):**
- `X-Frame-Options: SAMEORIGIN`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`

### HTTPS

- **Required:** All modern hosting platforms provide free SSL
- **Enforcement:** Enable "Enforce HTTPS" on GitHub Pages
- **Certificate:** Automatic via Let's Encrypt (Netlify, Vercel, etc.)

---

## Maintenance

### Regular Updates

**Weekly:**
- Check analytics for traffic patterns
- Monitor for broken links

**Monthly:**
- Add new projects as completed
- Update CV/resume with recent achievements
- Review and update metrics in project descriptions

**Quarterly:**
- Refresh screenshots or demos
- Update external links (Medium, YouTube)
- Review and optimize content

**Annually:**
- Update copyright year in footer
- Review entire site for outdated information
- Consider design refinements

### Content Management

**For detailed guides, see:**
- `docs/MAINTENANCE_GUIDE.md` - How to update website
- `docs/CONTENT_GUIDE.md` - How to add new content
- `docs/DEPLOYMENT_GUIDE.md` - How to deploy changes

---

## Future Enhancements

### Potential Additions

**Functionality:**
- [ ] Blog CMS integration (e.g., Netlify CMS)
- [ ] Search functionality for projects
- [ ] Project tags/filters expansion
- [ ] Testimonials section
- [ ] Dark/Light mode toggle

**Content:**
- [ ] Case study deep-dives (long-form blog posts)
- [ ] Video tutorials embedded
- [ ] Podcast appearances section
- [ ] Speaking engagements timeline

**Analytics:**
- [ ] Google Analytics 4 or Plausible
- [ ] Heat mapping (Hotjar)
- [ ] Conversion tracking (form submissions)

**SEO:**
- [ ] Structured data (JSON-LD)
- [ ] Open Graph tags enhancement
- [ ] Twitter Card optimization
- [ ] Sitemap.xml generation

---

## Technical Specifications

### File Sizes (Approximate)

- `style.css`: ~40KB (unminified)
- `projects-filter.js`: ~2KB
- Total HTML: ~120KB (all 5 pages)
- Google Fonts: ~15KB (cached)
- **Total Page Weight:** ~60-80KB (per page, with caching)

### Dependencies

**External:**
- Google Fonts (Inter family)
- No other external dependencies

**Internal:**
- 1 CSS file
- 1 JavaScript file
- 5 HTML pages
- 1 SVG favicon

### Performance Budget

**Target Metrics:**
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Total Page Weight: < 200KB
- HTTP Requests: < 10 per page

---

## Changelog

### Version 2.1 (December 2025) - Current
- ✅ Added JavaScript project filtering functionality
- ✅ Reduced services from 4 to 3 (ML & AI, BI & Data Analysis, Data Engineering)
- ✅ Removed profile image (cleaner design)
- ✅ Commented out Substack (ready for future activation)
- ✅ Reorganized documentation into `/docs` folder
- ✅ Created comprehensive guides (Maintenance, Deployment, Content)
- ✅ Updated all placeholder names to "Eranda Wijewantha"
- ✅ Removed unused files (about.html, blog/post*.html)
- ✅ Enhanced technical documentation

### Version 2.0 (December 2025)
- Complete redesign with minimalistic approach
- Changed to emerald green (#10B981) color scheme
- Simplified navigation (removed About page)
- Renamed "Insights & Media" to "Blog & Media"
- Added 6 featured projects on homepage
- Added deep linking for projects
- Improved responsive design

### Version 1.0 (Initial Release)
- Basic portfolio structure
- Bright green firefly theme
- 6 pages structure
- Glass morphism effects

---

## Credits & License

**Created by:** Eranda Wijewantha
**Last Updated:** December 2025
**Version:** 2.1
**License:** Free to use and modify

**Attribution:**
- Not required but appreciated
- Feel free to fork and customize for your own portfolio

---

## Additional Resources

**Documentation:**
- `docs/MAINTENANCE_GUIDE.md` - Website maintenance and updates
- `docs/DEPLOYMENT_GUIDE.md` - Deployment instructions
- `docs/CONTENT_GUIDE.md` - Adding content (projects, blog posts, videos)
- `README.md` - Project overview

**Tools Used:**
- VS Code (development)
- Chrome DevTools (testing)
- Lighthouse (performance audits)
- W3C Validator (HTML validation)

**Learning Resources:**
- MDN Web Docs: https://developer.mozilla.org/
- CSS-Tricks: https://css-tricks.com/
- Web.dev: https://web.dev/

---

*End of Technical Documentation*

**For questions or support, refer to the comprehensive guides in the `/docs` folder.**
