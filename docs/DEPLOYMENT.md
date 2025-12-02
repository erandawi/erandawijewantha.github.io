# Deployment Guide - GitHub Pages

This guide will walk you through deploying your portfolio website to GitHub Pages.

## Prerequisites

- Git installed on your computer
- GitHub account
- Portfolio files customized with your information

## Step-by-Step Deployment

### 1. Verify Customization

Before deploying, ensure you've updated:

- [ ] All placeholder links (LinkedIn, GitHub, Upwork, etc.)
- [ ] Email addresses
- [ ] Profile photo (`assets/images/profile.jpg`)
- [ ] Resume PDF (`assets/files/Sameera_Ranawaka_Resume.pdf`)
- [ ] Project details in `projects.html`
- [ ] About page content
- [ ] CV information

### 2. Initialize Git Repository

Open terminal/command prompt in your project folder:

```bash
# Navigate to your project folder
cd "c:\Users\erand\Documents\@PortFolio\@PortfolioWeb"

# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Portfolio website"

# Rename branch to main
git branch -M main
```

### 3. Create GitHub Repository

**Option A: Via GitHub Website**

1. Go to [github.com](https://github.com)
2. Click the **+** icon → **New repository**
3. Repository name: `portfolio` (or your preferred name)
4. Description: "Personal portfolio website"
5. Keep it **Public**
6. Do NOT initialize with README (we already have files)
7. Click **Create repository**

**Option B: Via GitHub CLI** (if installed)

```bash
gh repo create portfolio --public --source=. --remote=origin --push
```

### 4. Link Local Repository to GitHub

Copy the commands from GitHub (they'll look like this):

```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### 5. Enable GitHub Pages

**Method 1: Via GitHub Settings**

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**:
   - Branch: Select **main**
   - Folder: Select **/ (root)**
5. Click **Save**
6. Wait 2-3 minutes for deployment

Your site will be available at:
```
https://YOUR_USERNAME.github.io/portfolio/
```

**Method 2: Via GitHub Actions** (Advanced)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./
```

### 6. Verify Deployment

1. Wait for deployment to complete (usually 2-5 minutes)
2. Visit your site: `https://YOUR_USERNAME.github.io/portfolio/`
3. Test all pages and links
4. Check mobile responsiveness

### 7. Custom Domain (Optional)

If you own a custom domain like `sameeraranawaka.com`:

**Step A: Create CNAME File**

Create a file named `CNAME` (no extension) in your project root:

```
sameeraranawaka.com
```

Commit and push:
```bash
git add CNAME
git commit -m "Add custom domain"
git push
```

**Step B: Configure DNS**

With your domain registrar (e.g., Namecheap, GoDaddy), add DNS records:

**For root domain (sameeraranawaka.com):**
```
Type: A
Host: @
Value: 185.199.108.153
```

**For www subdomain:**
```
Type: CNAME
Host: www
Value: YOUR_USERNAME.github.io
```

**Step C: Enable HTTPS**

1. Go to GitHub Pages settings
2. Check **Enforce HTTPS**
3. Wait for SSL certificate (can take up to 24 hours)

## Updating Your Site

After making changes:

```bash
# Stage changes
git add .

# Commit with descriptive message
git commit -m "Update project portfolio"

# Push to GitHub
git push
```

GitHub Pages will automatically rebuild your site (takes 1-2 minutes).

## Troubleshooting

### Site Not Loading

**Issue**: 404 error when visiting site

**Solutions**:
1. Verify GitHub Pages is enabled in settings
2. Check branch name is correct (main vs master)
3. Ensure index.html is in root directory
4. Wait 5 minutes and clear browser cache

### CSS Not Loading

**Issue**: Site shows unstyled HTML

**Solutions**:
1. Check `style.css` path in HTML files
2. Verify file uploaded to `assets/css/style.css`
3. Check browser console for 404 errors
4. Ensure paths are relative, not absolute

### Images Not Showing

**Issue**: Broken image links

**Solutions**:
1. Verify image files are committed and pushed
2. Check file extensions match (case-sensitive on Linux servers)
3. Use relative paths: `assets/images/photo.jpg`
4. Ensure images are in correct folders

### Custom Domain Not Working

**Issue**: Domain doesn't resolve to site

**Solutions**:
1. Verify DNS records are correct
2. Wait 24-48 hours for DNS propagation
3. Use [DNS Checker](https://dnschecker.org) to verify
4. Ensure CNAME file contains only domain name

## Performance Tips

### After Deployment

1. **Test Speed**: Use [PageSpeed Insights](https://pagespeed.web.dev/)
2. **Compress Images**: Use [TinyPNG](https://tinypng.com/) before uploading
3. **Check Links**: Use [Dead Link Checker](https://www.deadlinkchecker.com/)
4. **Test Mobile**: Use Chrome DevTools device emulation

### CDN (Optional)

For faster global loading, use Cloudflare:

1. Sign up at [cloudflare.com](https://cloudflare.com)
2. Add your custom domain
3. Update nameservers at your registrar
4. Enable caching and optimization

## SEO Optimization

### After Deployment

1. **Submit to Google**:
   - Go to [Google Search Console](https://search.google.com/search-console)
   - Add your site
   - Submit sitemap (create one using online generator)

2. **Social Media Preview**:
   - Test: [Twitter Card Validator](https://cards-dev.twitter.com/validator)
   - Test: [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)

3. **Add Meta Tags** (already included, verify):
   ```html
   <meta property="og:title" content="Sameera Ranawaka - Data Engineer">
   <meta property="og:description" content="Portfolio description">
   <meta property="og:image" content="URL to preview image">
   ```

## Monitoring

### Track Visitors (Optional)

**Plausible Analytics** (Privacy-focused, recommended):

1. Sign up: [plausible.io](https://plausible.io)
2. Add tracking script to `<head>` in all HTML files
3. View analytics without cookies

**Google Analytics**:

1. Create account: [analytics.google.com](https://analytics.google.com)
2. Get tracking ID
3. Add script before `</head>` in all HTML files

## Backup Strategy

### Regular Backups

Your GitHub repository IS your backup, but also:

1. **Clone to multiple devices**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/portfolio.git
   ```

2. **Create releases** for major versions:
   - Go to repository → Releases
   - Create new release
   - Tag version (e.g., v1.0.0)

3. **Export to zip** periodically via GitHub

## Maintenance Schedule

### Weekly
- [ ] Check for broken links
- [ ] Review analytics (if enabled)
- [ ] Test contact form

### Monthly
- [ ] Update projects with new work
- [ ] Add blog posts
- [ ] Review and update CV
- [ ] Check mobile responsiveness

### Quarterly
- [ ] Update dependencies (fonts, etc.)
- [ ] Review SEO performance
- [ ] Test on different browsers
- [ ] Update content strategy

## Need Help?

**GitHub Pages Documentation**:
- https://docs.github.com/en/pages

**Community Support**:
- GitHub Community Forum
- Stack Overflow (tag: github-pages)

**Contact Form Issues**:
- Formspree: https://help.formspree.io
- EmailJS: https://www.emailjs.com/docs

---

## Quick Reference Commands

```bash
# Check git status
git status

# Add all changes
git add .

# Commit with message
git commit -m "Your message here"

# Push to GitHub
git push

# Pull latest changes
git pull

# View commit history
git log --oneline

# Create new branch
git checkout -b feature-name

# Switch branches
git checkout main
```

---

**Deployment Complete!** 🎉

Your portfolio is now live and accessible to the world.
