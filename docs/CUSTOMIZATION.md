# Customization Guide

This guide provides detailed instructions for customizing every aspect of your portfolio website.

## Table of Contents

1. [Personal Information](#personal-information)
2. [Visual Identity](#visual-identity)
3. [Content Updates](#content-updates)
4. [Adding Features](#adding-features)
5. [Styling Changes](#styling-changes)

---

## Personal Information

### Global Replacements

Use Find & Replace (Ctrl+H in most editors) across ALL HTML files:

| Placeholder | Replace With | Location |
|------------|--------------|----------|
| `your.email@example.com` | Your email | All HTML files |
| `YOUR_LINKEDIN` | LinkedIn username | All HTML files |
| `YOUR_GITHUB` | GitHub username | All HTML files |
| `YOUR_UPWORK` | Upwork profile ID | All HTML files |
| `YOUR_MEDIUM` | Medium username | All HTML files |
| `YOUR_SUBSTACK` | Substack subdomain | All HTML files |
| `YOUR_CHANNEL` | YouTube channel | All HTML files |

### Navigation Logo

In `<nav>` section of all HTML files, update the logo:

```html
<a href="index.html" class="logo">SR</a>
```

Change `SR` to your initials or preferred short name.

---

## Visual Identity

### Profile Photo

**Location**: `assets/images/profile.jpg`

**Specifications**:
- Format: JPG or PNG
- Size: 250x250 pixels (square)
- Style: Professional headshot
- Processing: Convert to grayscale for consistency (or let CSS handle it)

**Quick tip**: The CSS already applies grayscale filter that removes on hover.

### Favicon

**Current**: Animated green dot (firefly concept)

**To customize** (`assets/images/favicon.svg`):

```svg
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Customize this SVG or replace with your own -->
  <!-- Tools: Figma, Canva, or https://favicon.io -->
</svg>
```

**Alternative**: Use a PNG favicon:
1. Create 32x32px PNG
2. Replace SVG reference in HTML:
   ```html
   <link rel="icon" type="image/png" href="assets/images/favicon.png">
   ```

### Color Scheme

**Location**: `assets/css/style.css` (lines 19-27)

```css
:root {
    --bg-primary: #0F172A;      /* Main background */
    --bg-secondary: #1E293B;    /* Card backgrounds */
    --bg-elevated: #334155;      /* Elevated elements */
    --text-primary: #E2E8F0;     /* Main text */
    --text-secondary: #94A3B8;   /* Secondary text */
    --accent-green: #22C55E;     /* Primary accent */
    --accent-blue: #38BDF8;      /* Secondary accent */
    --border-color: #334155;     /* Borders */
}
```

**Example**: Change to blue accent theme:
```css
--accent-green: #3B82F6;  /* Blue instead of green */
--accent-blue: #60A5FA;   /* Lighter blue */
```

### Typography

**Current**: Inter font from Google Fonts

**To change** (in all HTML files `<head>`):

```html
<!-- Replace this line -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">

<!-- With your preferred font, e.g., Poppins -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

**Then update CSS** (`style.css` line 34):

```css
body {
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
```

---

## Content Updates

### Homepage Hero Section

**Location**: `index.html` (lines 55-68)

```html
<h1 class="hero-title">Sameera Ranawaka</h1>
<p class="hero-subtitle">Data Engineer | BI Specialist | AI Solutions</p>
<p class="hero-tagline">"Turning invisible data signals into visible insights"</p>
```

**Customize**:
- Change name
- Update roles/titles
- Modify tagline to match your brand

**Call-to-Action Buttons**:

```html
<div class="hero-cta">
    <a href="projects.html" class="btn btn-primary">View My Work</a>
    <a href="https://www.upwork.com/freelancers/~YOUR_ID" class="btn btn-secondary">
        Hire Me on Upwork
    </a>
</div>
```

Change button text, links, or add more buttons.

### Services Section

**Location**: `index.html` (lines 72-111)

**Add a new service card**:

```html
<div class="service-card">
    <div class="service-icon">🎯</div>
    <h3>Your Service Name</h3>
    <p>Description of what you offer</p>
</div>
```

**Emoji icons**: Browse [Emojipedia](https://emojipedia.org/) or use custom icons.

### Technology Stack

**Location**: `index.html` (lines 118-133)

**Add/remove technologies**:

```html
<div class="tech-item">Python</div>
<div class="tech-item">Your Technology</div>
```

The grid auto-adjusts to fit items.

### Projects

**Location**: `projects.html`

**Template for new project**:

```html
<div class="project-detail">
    <h3>Project Name</h3>

    <h4>Problem</h4>
    <p>What challenge did this project address?</p>

    <h4>Solution</h4>
    <p>How did you solve it?</p>
    <ul>
        <li>Key feature 1</li>
        <li>Key feature 2</li>
    </ul>

    <h4>Stack Used</h4>
    <div class="project-tags">
        <span class="tag">Python</span>
        <span class="tag">PostgreSQL</span>
        <!-- Add more tags -->
    </div>

    <h4>Outcome / Impact</h4>
    <p>Quantifiable results and business impact</p>

    <div class="project-actions">
        <a href="https://github.com/user/repo" class="btn btn-primary"
           target="_blank" rel="noopener noreferrer">View on GitHub</a>
        <a href="https://demo.com" class="btn btn-outline"
           target="_blank" rel="noopener noreferrer">Live Demo</a>
    </div>
</div>
```

**Best practices**:
- Use real metrics (percentages, time saved, revenue impact)
- Link to actual repositories
- Include 4-6 best projects (quality > quantity)

### About Page

**Location**: `about.html`

**Biography section** (lines 55-90):
- Update with your personal story
- Keep it authentic and professional
- Focus on your journey and philosophy

**Timeline section** (lines 93-114):
- Add career milestones
- Keep it concise (4-6 major points)
- Use reverse chronological order

### CV Page

**Location**: `cv.html`

**Sections to customize**:

1. **Professional Summary** (lines 55-58)
2. **Skills Grid** (lines 63-106)
3. **Experience** (lines 112-180)
4. **Education** (lines 185-192)
5. **Certifications** (lines 197-208)

**Adding new experience**:

```html
<div class="cv-item">
    <h3>Company Name</h3>
    <p class="position">Your Position</p>
    <p class="duration">Start Date - End Date | Location</p>
    <p>Brief role description</p>
    <ul>
        <li>Achievement or responsibility 1</li>
        <li>Achievement or responsibility 2</li>
        <li>Use metrics where possible</li>
    </ul>
</div>
```

### Writing Page

**Location**: `writing.html`

**Update platform descriptions** (lines 55-70):

```html
<div class="writing-platform">
    <h3>📝 Platform Name</h3>
    <p>Description of what you write about here</p>
    <a href="YOUR_URL" class="btn btn-primary">Read on Platform</a>
</div>
```

**Add video placeholders** (lines 74-92):

```html
<div class="video-item">
    <div class="video-placeholder">▶</div>
    <div class="video-info">
        <h4>Video Title</h4>
        <p>Brief description</p>
    </div>
</div>
```

**Future**: Replace placeholder with actual YouTube embed:

```html
<iframe width="100%" height="315"
    src="https://www.youtube.com/embed/VIDEO_ID"
    frameborder="0" allowfullscreen>
</iframe>
```

### Contact Page

**Location**: `contact.html`

**Update contact info** (lines 55-84):

```html
<div class="contact-item">
    <h4>Email</h4>
    <a href="mailto:YOUR_EMAIL">YOUR_EMAIL</a>
</div>
```

**Contact form integration**:

Replace form action (line 88):

```html
<!-- For Formspree -->
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">

<!-- For EmailJS (requires JS) -->
<form id="contactForm" onsubmit="sendEmail(event)">

<!-- For Netlify -->
<form name="contact" method="POST" data-netlify="true">
```

---

## Adding Features

### Add a Blog Post

1. **Create new file**: `blog/your-post-title.html`
2. **Copy structure from**: `blog/post1.html`
3. **Update content**:
   - Page title
   - Heading
   - Publish date
   - Article content
4. **Link from writing page**:

```html
<div class="project-card">
    <h3>Your Post Title</h3>
    <p class="project-description">Brief summary</p>
    <div class="project-tags">
        <span class="tag">Category</span>
    </div>
    <div class="project-links">
        <a href="blog/your-post-title.html" class="project-link">Read More →</a>
    </div>
</div>
```

### Add Resume PDF

1. **Create folder**: `assets/files/`
2. **Add PDF**: Name it `Sameera_Ranawaka_Resume.pdf`
3. **Update link** in `cv.html`:

```html
<a href="assets/files/Sameera_Ranawaka_Resume.pdf" class="btn btn-primary" download>
    Download Resume (PDF)
</a>
```

### Add Testimonials Section

**In `index.html` after projects section**:

```html
<section class="testimonials">
    <div class="container">
        <h2 class="section-title">Client Testimonials</h2>
        <div class="projects-grid">
            <div class="project-card">
                <p>"Quote from client about your work"</p>
                <h4>Client Name</h4>
                <p class="text-secondary">Position, Company</p>
            </div>
            <!-- Add more testimonials -->
        </div>
    </div>
</section>
```

**Add to CSS** (`style.css`):

```css
.testimonials {
    background-color: var(--bg-secondary);
}

.testimonials .project-card {
    text-align: center;
}

.testimonials p:first-child {
    font-style: italic;
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
}
```

### Add GitHub Stats

**In `about.html` or `index.html`**:

```html
<img src="https://github-readme-stats.vercel.app/api?username=YOUR_GITHUB&show_icons=true&theme=dark"
     alt="GitHub Stats" loading="lazy">
```

### Add Skills Progress Bars

**In `cv.html` skills section**:

```html
<div class="skill-bar">
    <div class="skill-name">Python</div>
    <div class="progress">
        <div class="progress-bar" style="width: 90%"></div>
    </div>
</div>
```

**Add to CSS**:

```css
.skill-bar {
    margin-bottom: 1.5rem;
}

.skill-name {
    margin-bottom: 0.5rem;
    font-weight: 500;
}

.progress {
    background-color: var(--bg-elevated);
    border-radius: 4px;
    height: 8px;
    overflow: hidden;
}

.progress-bar {
    background: linear-gradient(90deg, var(--accent-green), var(--accent-blue));
    height: 100%;
    transition: width 1s ease;
}
```

---

## Styling Changes

### Adjust Spacing

**In `style.css`**:

```css
section {
    padding: 6rem 0;  /* Increase/decrease vertical spacing */
}

.container {
    max-width: 1200px;  /* Adjust content width */
    padding: 0 2rem;    /* Adjust horizontal padding */
}
```

### Change Button Style

**In `style.css` (lines 128-165)**:

```css
.btn-primary {
    background-color: var(--accent-green);
    border-radius: 6px;  /* Adjust roundness */
    padding: 0.875rem 2rem;  /* Adjust size */
}
```

Make buttons more rounded:
```css
border-radius: 25px;  /* Pill-shaped */
```

### Modify Firefly Animation

**Disable completely**:

```css
.firefly-container {
    display: none;  /* Remove fireflies */
}
```

**Change color**:

```css
.firefly {
    background-color: var(--accent-blue);  /* Blue instead of green */
    box-shadow: 0 0 10px var(--accent-blue), 0 0 20px var(--accent-blue);
}
```

**Adjust speed**:

```css
.firefly:nth-child(1) {
    animation-duration: 8s;  /* Faster (default: 12s) */
}
```

### Remove Gradient from Title

**In `style.css` (lines 228-233)**:

Replace:
```css
.hero-title {
    background: linear-gradient(135deg, var(--text-primary) 0%, var(--accent-green) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
```

With:
```css
.hero-title {
    color: var(--text-primary);
}
```

### Card Hover Effects

**Adjust lift on hover** (`style.css` lines 303-308):

```css
.service-card:hover {
    transform: translateY(-5px);  /* Increase for more lift */
    box-shadow: var(--shadow-lg);
}
```

Disable hover effect:
```css
.service-card:hover {
    transform: none;
}
```

---

## Advanced Customization

### Add Dark/Light Mode Toggle

This requires JavaScript. If interested:

1. Create `assets/js/theme.js`
2. Add toggle button to navbar
3. Implement localStorage persistence
4. Define light theme CSS variables

(This goes beyond the "no JS" requirement but can be added later)

### Add Analytics

**Google Analytics** (in all HTML files before `</head>`):

```html
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-YOUR_ID');
</script>
```

**Plausible** (privacy-focused, recommended):

```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

---

## Testing Your Changes

### Local Testing

1. **Open in browser**: Double-click `index.html`
2. **Use local server** (better for testing):
   ```bash
   python -m http.server 8000
   # Visit: http://localhost:8000
   ```

### Visual Regression Testing

1. Take screenshots before changes
2. Make modifications
3. Compare screenshots
4. Test across browsers (Chrome, Firefox, Safari)

### Checklist

- [ ] All internal links work
- [ ] All external links open in new tabs
- [ ] Images load properly
- [ ] Text is readable (contrast check)
- [ ] Mobile responsive (test with DevTools)
- [ ] No console errors (F12 → Console tab)
- [ ] Forms work (if activated)
- [ ] Download links work

---

## Resources

**Design Inspiration**:
- [Awwwards](https://www.awwwards.com/)
- [Dribbble](https://dribbble.com/search/portfolio)
- [Behance](https://www.behance.net/search/projects/portfolio)

**Color Tools**:
- [Coolors](https://coolors.co/) - Color palette generator
- [ColorHunt](https://colorhunt.co/) - Color scheme inspiration
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

**Icons**:
- [Emojipedia](https://emojipedia.org/) - Emoji reference
- [Font Awesome](https://fontawesome.com/) - Icon library
- [Hero Icons](https://heroicons.com/) - SVG icons

**Images**:
- [Unsplash](https://unsplash.com/) - Free high-quality photos
- [Pexels](https://www.pexels.com/) - Stock photos
- [TinyPNG](https://tinypng.com/) - Image compression

---

Need help? Check the main [README.md](README.md) or [DEPLOYMENT.md](DEPLOYMENT.md) files.
