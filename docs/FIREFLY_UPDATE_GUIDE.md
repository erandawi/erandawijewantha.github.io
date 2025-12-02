# Firefly Theme Update Guide

## ✅ COMPLETED
- [x] **style.css** - Fully updated with Firefly theme
- [x] **index.html** - Updated hero section, navigation, and fireflies

## 📝 REMAINING UPDATES

### 1. Update Navigation in All HTML Files

Replace this in **all HTML files** (about.html, projects.html, cv.html, contact.html):

**OLD:**
```html
<li><a href="writing.html" class="nav-link">Writing</a></li>
```

**NEW:**
```html
<li><a href="insights-media.html" class="nav-link">Insights & Media</a></li>
```

### 2. Add More Fireflies in All HTML Files

Replace this in **all HTML files**:

**OLD:**
```html
<div class="firefly-container">
    <div class="firefly"></div>
    <div class="firefly"></div>
    <div class="firefly"></div>
    <div class="firefly"></div>
    <div class="firefly"></div>
</div>
```

**NEW:**
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

### 3. Rename writing.html to insights-media.html

**Option A - Using Git:**
```bash
git mv writing.html insights-media.html
```

**Option B - Manual:**
1. Copy [writing.html](writing.html) → `insights-media.html`
2. Delete `writing.html`

### 4. Update insights-media.html Content

Change class names from `.writing-platform` to `.insights-platform`:

**Update page title:**
```html
<title>Sameera Ranawaka | Insights & Media</title>
```

**Update page header:**
```html
<h1>Insights & Media</h1>
<p>Sharing insights on data, AI, and technology</p>
```

**Update section heading:**
```html
<section class="insights-section">
```

**Keep both class names for compatibility:**
```html
<div class="insights-platform writing-platform">
```

### 5. Update CV Page - Emphasize Download Button

In [cv.html](cv.html), make the download button more prominent:

**Find:**
```html
<div class="cv-download">
    <a href="assets/files/Sameera_Ranawaka_Resume.pdf" class="btn btn-primary" download>Download Resume (PDF)</a>
</div>
```

**Replace with:**
```html
<div class="cv-download">
    <a href="assets/files/Sameera_Ranawaka_Resume.pdf" class="btn btn-primary" download>⬇️ Download Resume (PDF)</a>
    <p style="margin-top: 1rem; color: var(--text-muted); font-size: 0.9rem;">Available for freelance & contract projects</p>
</div>
```

## 🎨 FIREFLY THEME COLORS

Already applied in style.css:

| Variable | Color | Usage |
|----------|-------|-------|
| `--bg-primary` | #0B0F1A | Main background |
| `--bg-card` | #121A2B | Card backgrounds |
| `--bg-elevated` | #1A2332 | Inputs, elevated elements |
| `--text-primary` | #E4E6EB | Main text |
| `--text-muted` | #8A8F98 | Secondary text |
| `--accent-glow` | #7CFF6B | Primary accent (firefly green) |
| `--accent-secondary` | #4DFFB8 | Secondary accent (teal) |
| `--border-glow` | #1F3B4D | Borders |
| `--shadow-glow` | rgba(124, 255, 107, 0.15) | Glow effects |
| `--glass-bg` | rgba(18, 26, 43, 0.6) | Glass morphism |

## 🔧 QUICK UPDATE COMMANDS

### Update All Navigation Links at Once

```bash
# In VS Code: Ctrl+Shift+H (Find in Files)
# Find: writing.html" class="nav-link">Writing
# Replace: insights-media.html" class="nav-link">Insights & Media
# Files: *.html
```

### Update Firefly Containers

```bash
# Find: </div>\n    </div>\n\n    <section class="hero">
# Add 3 more firefly divs before closing
```

## 📊 UPDATED FEATURES

### Enhanced Hero Section
- New value proposition line
- Experience highlight
- 3 CTA buttons (View Portfolio, Hire on Upwork, Download CV)
- Name with glow effect on first name

### Glass Morphism Cards
- All cards now use `backdrop-filter: blur(10px)`
- Translucent backgrounds
- Glow on hover

### Enhanced Firefly Animation
- 8 fireflies instead of 5
- Brighter glow (#7CFF6B)
- Enhanced shadow effects

## ✅ TESTING CHECKLIST

After updates:

- [ ] Open each page and verify colors
- [ ] Test navigation (all links work)
- [ ] Verify firefly animation plays
- [ ] Check glass morphism effects on cards
- [ ] Test hover states (buttons, cards, links)
- [ ] Verify mobile responsiveness
- [ ] Check Download CV button works
- [ ] Test on different browsers

## 🚀 DEPLOYMENT

After all updates:

```bash
git add .
git commit -m "Apply Firefly theme with glass morphism and enhanced UI"
git push
```

GitHub Pages will auto-deploy in 2-3 minutes.

## 📁 FILES STATUS

| File | Status | Updates Needed |
|------|--------|----------------|
| style.css | ✅ Complete | None |
| index.html | ✅ Complete | None |
| about.html | ⏳ Pending | Nav + Fireflies |
| projects.html | ⏳ Pending | Nav + Fireflies |
| writing.html | ⏳ Pending | Rename to insights-media.html |
| insights-media.html | ⏳ Pending | Update class names |
| cv.html | ⏳ Pending | Nav + Fireflies + Download button |
| contact.html | ⏳ Pending | Nav + Fireflies |

## 🎯 PRIORITY ORDER

1. **High Priority** - Update navigation in all files
2. **High Priority** - Rename writing.html
3. **Medium Priority** - Add fireflies to all pages
4. **Low Priority** - Enhance CV download button

---

**All CSS styling is complete and ready!**
The theme will activate as soon as HTML files are updated.
