# Website Maintenance Guide

This guide will help you maintain and update your portfolio website with ease.

## Table of Contents
1. [Updating Personal Information](#updating-personal-information)
2. [Managing Projects](#managing-projects)
3. [Styling and Theme Changes](#styling-and-theme-changes)
4. [Navigation Updates](#navigation-updates)
5. [Common Maintenance Tasks](#common-maintenance-tasks)
6. [Troubleshooting](#troubleshooting)

---

## Updating Personal Information

### Contact Details
Update email, LinkedIn, GitHub, and other social links across all pages:

**Files to update:**
- `index.html` (footer, lines 182-189)
- `projects.html` (footer, lines 281-288)
- `insights-media.html` (footer, lines 163-170)
- `cv.html` (footer, lines 241-249)
- `contact.html` (footer, lines 160-167)

**Find and replace:**
```html
<!-- Replace these placeholders -->
your.email@example.com → your_actual_email@gmail.com
YOUR_LINKEDIN → your-linkedin-username
YOUR_GITHUB → your-github-username
YOUR_MEDIUM → your-medium-username
YOUR_CHANNEL → your-youtube-channel
YOUR_UPWORK → your-upwork-profile
```

### Resume/CV Content
**File:** `cv.html`

**Update sections:**
- Professional Summary (lines 62-65)
- Skills (lines 69-129)
- Professional Experience (lines 133-178)
- Education (lines 182-188)
- Certifications (lines 192-202)
- Languages (lines 220-227)

**Example - Adding a new job:**
```html
<div class="cv-item">
    <h3>Job Title</h3>
    <p class="position">Company Name</p>
    <p class="duration">Start Date - End Date | Location</p>
    <p>Brief description of role and responsibilities.</p>
    <ul>
        <li>Achievement or responsibility 1</li>
        <li>Achievement or responsibility 2</li>
        <li>Achievement or responsibility 3</li>
    </ul>
</div>
```

---

## Managing Projects

### Adding a New Project

**File:** `projects.html`

**Step 1:** Add filter category if needed (lines 57-62)
Current categories: Machine Learning & AI, Business Intelligence & Data Analysis, Data Engineering

**Step 2:** Add project detail section before closing `</section>` tag (around line 269):

```html
<div class="project-detail" id="your-project-slug" data-category="Machine Learning & AI">
    <h3>Project Name</h3>

    <h4>Problem</h4>
    <p>Describe the problem this project solves...</p>

    <h4>Solution</h4>
    <p>Explain your approach and implementation...</p>
    <ul>
        <li>Key feature 1</li>
        <li>Key feature 2</li>
        <li>Key feature 3</li>
    </ul>

    <h4>Stack Used</h4>
    <div class="project-tags">
        <span class="tag">Python</span>
        <span class="tag">TensorFlow</span>
        <span class="tag">Docker</span>
        <!-- Add more tags as needed -->
    </div>

    <h4>Outcome / Impact</h4>
    <p>Quantify results and business impact...</p>

    <div class="project-actions">
        <a href="https://github.com/YOUR_USERNAME/project-repo" class="btn btn-primary" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        <a href="#" class="btn btn-outline">Live Demo</a>
    </div>
</div>
```

**Important:** Make sure `data-category` matches one of the filter button names exactly.

### Editing Existing Projects

1. Find the project by its `id` attribute (e.g., `id="fraud-detection"`)
2. Update any section: Problem, Solution, Stack, Outcome
3. Add/remove tags by editing `<span class="tag">` elements
4. Update links in the `project-actions` section

### Removing a Project

Simply delete or comment out the entire `<div class="project-detail">` block.

---

## Styling and Theme Changes

**File:** `assets/css/style.css`

### Color Theme
The website uses CSS custom properties (variables) defined at the top of `style.css`:

```css
:root {
    --primary-color: #10B981;      /* Emerald green accent */
    --bg-dark: #0A0F14;            /* Dark background */
    --bg-darker: #050A0E;          /* Darker background */
    --text-primary: #E5E7EB;       /* Light text */
    --text-secondary: #9CA3AF;     /* Secondary text */
    --border-subtle: rgba(16, 185, 129, 0.1);
    --glass-bg: rgba(10, 15, 20, 0.6);
}
```

**To change the accent color:**
1. Update `--primary-color` value (currently #10B981 - emerald green)
2. Adjust `--border-subtle` to match: `rgba(R, G, B, 0.1)` where R, G, B are the RGB values of your new color

### Font Changes
Current font: **Inter** (Google Fonts)

**To change font:**
1. Update Google Fonts link in all HTML files (around line 18):
   ```html
   <link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap" rel="stylesheet">
   ```
2. Update font-family in `style.css` (line 13):
   ```css
   font-family: 'YourFont', sans-serif;
   ```

### Firefly Animation Speed
**Location:** `assets/css/style.css` (lines 215-272)

Adjust animation duration:
```css
.firefly {
    animation: float 15s infinite ease-in-out;  /* Change 15s to speed up/slow down */
}
```

---

## Navigation Updates

### Adding a New Page

**Step 1:** Create the HTML file (e.g., `new-page.html`)

**Step 2:** Update navigation in ALL pages:
```html
<nav class="navbar">
    <div class="container">
        <a href="index.html" class="logo">EW</a>
        <ul class="nav-menu">
            <li><a href="index.html" class="nav-link">Home</a></li>
            <li><a href="projects.html" class="nav-link">Projects</a></li>
            <li><a href="insights-media.html" class="nav-link">Blog & Media</a></li>
            <li><a href="cv.html" class="nav-link">CV</a></li>
            <li><a href="new-page.html" class="nav-link">New Page</a></li>  <!-- ADD THIS -->
            <li><a href="contact.html" class="nav-link">Contact</a></li>
        </ul>
    </div>
</nav>
```

**Step 3:** Add `active` class to the current page:
```html
<li><a href="new-page.html" class="nav-link active">New Page</a></li>
```

---

## Common Maintenance Tasks

### 1. Updating the Resume PDF

**File:** `cv.html` (line 53)
```html
<a href="assets/files/Eranda_Wijewantha_Resume.pdf" class="btn btn-primary" download>Download Resume (PDF)</a>
```

1. Save your updated resume as PDF
2. Replace the file in `assets/files/Eranda_Wijewantha_Resume.pdf`
3. Keep the filename the same, or update the link above

### 2. Changing "What I Do" Services

**File:** `index.html` (lines 65-81)

Current structure has 3 service cards. To add a 4th:

1. Change grid columns in `style.css` (line 423):
   ```css
   grid-template-columns: repeat(4, 1fr);  /* Change from 3 to 4 */
   ```

2. Add new service card in `index.html`:
   ```html
   <div class="service-card">
       <div class="service-icon">🔧</div>
       <h3>Service Name</h3>
       <p>Service description...</p>
   </div>
   ```

### 3. Enabling Substack

When you start posting on Substack:

**Files to update:**
1. `insights-media.html` (lines 56-64) - Uncomment the section
2. All footers (search for "Substack" and uncomment)

```html
<!-- Change this: -->
<!-- <a href="https://YOUR_SUBSTACK.substack.com" target="_blank" rel="noopener noreferrer">Substack</a> -->

<!-- To this: -->
<a href="https://your-username.substack.com" target="_blank" rel="noopener noreferrer">Substack</a>
```

### 4. Updating Footer Copyright Year

**All HTML files** (footer section):
```html
<p>&copy; 2025 Eranda Wijewantha. All rights reserved.</p>
```

Change 2025 to the current year (or use JavaScript to auto-update).

### 5. Modifying Page Headers

Each page has a header section. Example from `projects.html` (lines 48-52):
```html
<section class="page-header">
    <div class="container">
        <h1>Projects</h1>
        <p>Solutions that transform data into value</p>
    </div>
</section>
```

Update the `<h1>` and `<p>` as needed.

---

## Troubleshooting

### Project Filter Not Working

**Check:**
1. `assets/js/projects-filter.js` is linked in `projects.html` (line 21)
2. Filter button text matches `data-category` exactly (case-sensitive)
3. Browser console for JavaScript errors (F12 → Console tab)

### Styles Not Applying

**Solutions:**
1. Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
2. Clear browser cache
3. Check CSS file path in HTML: `<link rel="stylesheet" href="assets/css/style.css">`

### Links Not Working After Deployment

**Common issue:** Absolute vs relative paths

**Fix:** Ensure all links are relative:
- ✅ `href="assets/css/style.css"` (correct)
- ❌ `href="/assets/css/style.css"` (incorrect for GitHub Pages subpath)

### Firefly Animation Not Smooth

**Possible causes:**
1. Too many firefly elements (reduce from 8 to 5)
2. Browser performance (disable on mobile)
3. GPU acceleration: Add to `.firefly` class:
   ```css
   will-change: transform, opacity;
   transform: translateZ(0);
   ```

---

## File Structure Reference

```
@PortfolioWeb/
├── index.html                 # Homepage
├── projects.html              # Projects showcase
├── insights-media.html        # Blog & Media
├── cv.html                    # Resume/CV
├── contact.html               # Contact page
├── writing.html               # Writing page (legacy)
├── README.md                  # Project readme
├── docs/                      # All documentation
│   ├── MAINTENANCE_GUIDE.md   # This file
│   ├── DEPLOYMENT_GUIDE.md    # Deployment instructions
│   ├── CONTENT_GUIDE.md       # Adding content
│   └── TECHNICAL_DOCUMENTATION.md
├── assets/
│   ├── css/
│   │   └── style.css          # Main stylesheet
│   ├── js/
│   │   └── projects-filter.js # Project filtering
│   ├── images/
│   │   └── favicon.svg        # Favicon
│   └── files/
│       └── Eranda_Wijewantha_Resume.pdf
└── blog/                      # Blog posts (optional)
```

---

## Best Practices

1. **Always test locally** before deploying changes
2. **Keep backups** of working versions before major changes
3. **Update copyright year** annually
4. **Optimize images** before adding them (use WebP format when possible)
5. **Test on multiple browsers** (Chrome, Firefox, Safari, Edge)
6. **Test on mobile devices** (responsive design is critical)
7. **Validate HTML** using [W3C Validator](https://validator.w3.org/)
8. **Keep external links updated** (check for broken links quarterly)

---

## Quick Reference: Common Updates

| Task | File | Line(s) |
|------|------|---------|
| Update email | All HTML files (footer) | Varies |
| Add project | projects.html | ~269 |
| Change accent color | assets/css/style.css | 6 |
| Update resume PDF | assets/files/ | - |
| Add nav link | All HTML files (navbar) | ~26-32 |
| Change hero text | index.html | 48-59 |
| Update social links | All HTML files (footer) | Varies |
| Enable Substack | insights-media.html | 56-64 |

---

**Need more help?** Check the other documentation files:
- `DEPLOYMENT_GUIDE.md` - How to deploy your site
- `CONTENT_GUIDE.md` - How to add content (YouTube videos, blog posts, etc.)
- `TECHNICAL_DOCUMENTATION.md` - Technical architecture details
