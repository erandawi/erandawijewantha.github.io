# Deployment Guide

This guide covers deploying your portfolio website to various hosting platforms.

## Table of Contents
1. [Pre-Deployment Checklist](#pre-deployment-checklist)
2. [GitHub Pages Deployment](#github-pages-deployment)
3. [Netlify Deployment](#netlify-deployment)
4. [Vercel Deployment](#vercel-deployment)
5. [Custom Domain Setup](#custom-domain-setup)
6. [Post-Deployment Verification](#post-deployment-verification)
7. [Troubleshooting](#troubleshooting)

---

## Pre-Deployment Checklist

Before deploying, ensure you've completed these steps:

### 1. Update Personal Information
- [ ] Replace all placeholder URLs (YOUR_LINKEDIN, YOUR_GITHUB, etc.)
- [ ] Update email address: `your.email@example.com`
- [ ] Add your actual resume PDF to `assets/files/`
- [ ] Update Medium profile URL: `@YOUR_MEDIUM`
- [ ] Update YouTube channel URL: `@YOUR_CHANNEL`
- [ ] Update Upwork profile URL (if applicable)

### 2. Test Locally
```bash
# Option 1: Python HTTP Server
cd c:\Users\erand\Documents\@PortFolio\@PortfolioWeb
python -m http.server 8000

# Option 2: Node.js http-server
npx http-server -p 8000

# Open http://localhost:8000 in browser
```

### 3. Verify All Links
- [ ] Test all navigation links
- [ ] Verify external links (GitHub, LinkedIn, Medium, YouTube)
- [ ] Check project GitHub repository links
- [ ] Test resume PDF download
- [ ] Verify all images load correctly

### 4. Cross-Browser Testing
Test in:
- [ ] Google Chrome
- [ ] Mozilla Firefox
- [ ] Microsoft Edge
- [ ] Safari (if on Mac)
- [ ] Mobile browsers (Chrome Mobile, Safari iOS)

### 5. Performance Check
- [ ] Optimize images (compress PNGs, use WebP if possible)
- [ ] Ensure CSS/JS files are minified (optional but recommended)
- [ ] Check page load speed
- [ ] Test responsive design on mobile devices

---

## GitHub Pages Deployment

**Best for:** Free hosting, simple deployment, version control integration

### Method 1: Deploy from Repository

**Step 1:** Create GitHub Repository
```bash
cd c:\Users\erand\Documents\@PortFolio\@PortfolioWeb
git init
git add .
git commit -m "Initial commit: Portfolio website"
```

**Step 2:** Push to GitHub
```bash
# Create a new repository on GitHub (e.g., portfolio-website)
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
git branch -M main
git push -u origin main
```

**Step 3:** Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **Save**

**Step 4:** Wait for Deployment
- GitHub will build and deploy your site (usually 1-2 minutes)
- Your site will be available at: `https://YOUR_USERNAME.github.io/portfolio-website/`

### Method 2: Deploy to User/Organization Site

For `https://YOUR_USERNAME.github.io/` (no subfolder):

1. Create repository named exactly: `YOUR_USERNAME.github.io`
2. Push your code to this repository
3. GitHub Pages will automatically deploy from `main` branch
4. Site will be available at: `https://YOUR_USERNAME.github.io/`

### Updating Deployed Site

```bash
# Make changes to your files
git add .
git commit -m "Update: description of changes"
git push origin main

# GitHub Pages will automatically rebuild (1-2 minutes)
```

---

## Netlify Deployment

**Best for:** Continuous deployment, custom domains, form handling, serverless functions

### Step 1: Create Netlify Account
1. Go to [netlify.com](https://www.netlify.com/)
2. Sign up with GitHub account (recommended)

### Step 2: Deploy via Git (Recommended)

**Option A: Deploy from GitHub**
1. Click **"New site from Git"**
2. Choose **GitHub** → Authorize Netlify
3. Select your portfolio repository
4. Configure build settings:
   - **Build command:** (leave empty for static site)
   - **Publish directory:** `/` or `.`
5. Click **"Deploy site"**

**Option B: Manual Drag & Drop**
1. Compress your entire project folder to ZIP
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag and drop the folder or ZIP file
4. Netlify will deploy immediately

### Step 3: Custom Site Name
1. Go to **Site settings** → **Site information**
2. Click **"Change site name"**
3. Enter: `your-name-portfolio` (e.g., `eranda-wijewantha`)
4. Your site: `https://eranda-wijewantha.netlify.app/`

### Continuous Deployment
- Every push to `main` branch automatically deploys
- Preview deployments for pull requests
- Rollback to previous deployments easily

---

## Vercel Deployment

**Best for:** Fast global CDN, excellent for Next.js (though this is static HTML), zero configuration

### Step 1: Create Vercel Account
1. Go to [vercel.com](https://vercel.com/)
2. Sign up with GitHub (recommended)

### Step 2: Import Project
1. Click **"New Project"**
2. Import from GitHub repository
3. Select your portfolio repository
4. Configure project:
   - **Framework Preset:** Other
   - **Build Command:** (leave empty)
   - **Output Directory:** (leave empty or `./`)
5. Click **"Deploy"**

### Step 3: Access Your Site
- Vercel assigns URL: `https://your-repo-name.vercel.app/`
- Custom domain can be added in project settings

### CLI Deployment (Advanced)
```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to project
cd c:\Users\erand\Documents\@PortFolio\@PortfolioWeb

# Deploy
vercel

# Follow prompts to link project
```

---

## Custom Domain Setup

### Step 1: Purchase Domain
- Recommended registrars: Namecheap, Google Domains, Cloudflare
- Example: `erandawijewantha.com`

### Step 2: Configure DNS

**For GitHub Pages:**
1. In your repository: Settings → Pages → Custom domain
2. Enter: `erandawijewantha.com`
3. In your domain registrar DNS settings:
   ```
   Type: A Record
   Host: @
   Value: 185.199.108.153

   Type: A Record
   Host: @
   Value: 185.199.109.153

   Type: A Record
   Host: @
   Value: 185.199.110.153

   Type: A Record
   Host: @
   Value: 185.199.111.153

   Type: CNAME Record
   Host: www
   Value: YOUR_USERNAME.github.io
   ```

**For Netlify:**
1. In Netlify: Site settings → Domain management → Add custom domain
2. Follow Netlify's DNS instructions (either Netlify DNS or external DNS)
3. Netlify automatically provisions SSL certificate

**For Vercel:**
1. In Vercel: Project → Settings → Domains
2. Add your domain: `erandawijewantha.com`
3. Configure DNS records as shown in Vercel dashboard
4. Automatic SSL certificate

### Step 3: Enable HTTPS
- **GitHub Pages:** Check "Enforce HTTPS" in repository settings
- **Netlify/Vercel:** Automatic SSL (Let's Encrypt)

---

## Post-Deployment Verification

### Test Checklist
- [ ] Homepage loads correctly
- [ ] All pages accessible (Projects, CV, Contact, Blog & Media)
- [ ] Navigation works on all pages
- [ ] Project filter buttons functional
- [ ] External links open in new tabs
- [ ] Resume PDF downloads
- [ ] Forms work (if applicable)
- [ ] Mobile responsive design
- [ ] HTTPS enabled (padlock icon in browser)
- [ ] No console errors (F12 → Console)
- [ ] No 404 errors for assets

### SEO Verification
- [ ] Page titles correct (check browser tab)
- [ ] Meta descriptions present
- [ ] Favicon displays
- [ ] Open Graph tags (for social sharing)
- [ ] Google Search Console setup (optional)

### Performance Testing
Use tools to check performance:
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

**Target scores:**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 90+

---

## Troubleshooting

### Issue: CSS/JS Not Loading

**Symptoms:** Plain HTML with no styling, filter buttons not working

**Solutions:**
1. Check file paths (should be relative):
   ```html
   ✅ <link rel="stylesheet" href="assets/css/style.css">
   ❌ <link rel="stylesheet" href="/assets/css/style.css">
   ```

2. Verify file structure is intact:
   ```
   @PortfolioWeb/
   ├── index.html
   ├── assets/
   │   ├── css/style.css
   │   └── js/projects-filter.js
   ```

3. Check browser console (F12) for 404 errors

### Issue: GitHub Pages 404 Error

**Symptoms:** Main page works, but other pages show 404

**Solutions:**
1. Ensure all HTML files are in root directory (not in subfolders)
2. Check file names match exactly (case-sensitive on Linux servers)
3. Wait 2-5 minutes after pushing for cache to clear
4. Hard refresh: `Ctrl + Shift + R`

### Issue: Custom Domain Not Working

**Symptoms:** Domain shows error or doesn't load

**Solutions:**
1. DNS propagation takes 24-48 hours (be patient)
2. Check DNS records are correct using [DNS Checker](https://dnschecker.org/)
3. Verify CNAME file exists in repository (for GitHub Pages)
4. Ensure SSL certificate is provisioned (may take 20 minutes)

### Issue: Forms Not Submitting

**Symptoms:** Contact form doesn't work

**Note:** Static sites cannot process forms without backend

**Solutions:**
1. Use [Formspree](https://formspree.io/):
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

2. Use [Netlify Forms](https://www.netlify.com/products/forms/):
   ```html
   <form name="contact" method="POST" data-netlify="true">
   ```

3. Use [EmailJS](https://www.emailjs.com/) (JavaScript-based)

### Issue: Slow Page Load

**Solutions:**
1. Optimize images:
   ```bash
   # Compress images (use tools like TinyPNG, Squoosh)
   # Convert to WebP format for better compression
   ```

2. Minify CSS/JS:
   - Use [CSS Minifier](https://cssminifier.com/)
   - Use [JavaScript Minifier](https://javascript-minifier.com/)

3. Enable CDN (automatically enabled on Netlify/Vercel)

4. Reduce firefly elements (from 8 to 5):
   ```html
   <!-- Reduce for better performance -->
   <div class="firefly-container">
       <div class="firefly"></div>
       <div class="firefly"></div>
       <div class="firefly"></div>
       <div class="firefly"></div>
       <div class="firefly"></div>
   </div>
   ```

### Issue: Mobile Display Problems

**Solutions:**
1. Test responsive breakpoints in DevTools (F12 → Toggle device toolbar)
2. Check viewport meta tag is present:
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   ```
3. Test on real mobile devices (browsers render differently)

---

## Deployment Comparison

| Feature | GitHub Pages | Netlify | Vercel |
|---------|-------------|---------|--------|
| **Cost** | Free | Free (generous limits) | Free (generous limits) |
| **Ease of Setup** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Build Time** | 1-2 min | < 1 min | < 1 min |
| **Custom Domain** | ✅ Free | ✅ Free | ✅ Free |
| **SSL Certificate** | ✅ Free | ✅ Free | ✅ Free |
| **CDN** | ✅ Global | ✅ Global | ✅ Global (fastest) |
| **Form Handling** | ❌ No | ✅ Yes | ⚠️ Via functions |
| **Rollbacks** | Manual (Git) | ✅ One-click | ✅ One-click |
| **Analytics** | External only | ✅ Built-in | ✅ Built-in |
| **Best For** | Simple, GitHub-integrated | Feature-rich, forms | Performance-focused |

---

## Recommended Workflow

### Initial Deployment
1. ✅ Complete pre-deployment checklist
2. ✅ Push to GitHub repository
3. ✅ Deploy via **Netlify** (recommended for best features)
4. ✅ Test thoroughly
5. ✅ Add custom domain (optional)

### Ongoing Updates
```bash
# Make changes locally
# Test locally: python -m http.server 8000

# Commit and push
git add .
git commit -m "Update: [describe changes]"
git push origin main

# Netlify/Vercel auto-deploy (30-60 seconds)
# Verify changes live
```

---

## Quick Start Commands

### GitHub Repository Setup
```bash
cd c:\Users\erand\Documents\@PortFolio\@PortfolioWeb
git init
git add .
git commit -m "Initial commit: Portfolio website"
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
git push -u origin main
```

### Local Testing
```bash
# Python (if installed)
python -m http.server 8000

# Node.js
npx http-server -p 8000

# Open: http://localhost:8000
```

### Update Workflow
```bash
git add .
git commit -m "Update: [description]"
git push origin main
```

---

## Additional Resources

- **GitHub Pages Docs:** [docs.github.com/pages](https://docs.github.com/en/pages)
- **Netlify Docs:** [docs.netlify.com](https://docs.netlify.com/)
- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **DNS Checker:** [dnschecker.org](https://dnschecker.org/)
- **PageSpeed Insights:** [pagespeed.web.dev](https://pagespeed.web.dev/)
- **SSL Test:** [ssllabs.com/ssltest](https://www.ssllabs.com/ssltest/)

---

**Next Steps:**
- Review `MAINTENANCE_GUIDE.md` for updating website content
- Check `CONTENT_GUIDE.md` for adding new projects, blog posts, videos
- See `TECHNICAL_DOCUMENTATION.md` for architecture details
