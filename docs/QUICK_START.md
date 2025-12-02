# Quick Start Guide

Get your portfolio live in 15 minutes.

## Prerequisites

- [ ] Git installed
- [ ] GitHub account
- [ ] Text editor (VS Code recommended)
- [ ] Profile photo ready
- [ ] Resume PDF ready

---

## Step 1: Customize Essential Information (5 minutes)

### Global Find & Replace

Open **ALL HTML files** in your editor and replace:

| Find | Replace With |
|------|-------------|
| `your.email@example.com` | Your actual email |
| `YOUR_LINKEDIN` | Your LinkedIn username |
| `YOUR_GITHUB` | Your GitHub username |
| `YOUR_UPWORK` | Your Upwork ID (or remove) |
| `YOUR_MEDIUM` | Your Medium username (or remove) |
| `YOUR_SUBSTACK` | Your Substack subdomain (or remove) |
| `YOUR_CHANNEL` | Your YouTube channel (or remove) |

### Quick Tip
Most code editors (VS Code, Sublime, etc.) support "Find in Files":
- **VS Code**: Ctrl+Shift+F (Cmd+Shift+F on Mac)
- **Sublime**: Ctrl+Shift+F
- **Atom**: Ctrl+Shift+F

---

## Step 2: Add Your Assets (3 minutes)

### Profile Photo

1. Prepare your photo (250x250px recommended)
2. Save as: `assets/images/profile.jpg`
3. Replace the placeholder file

### Resume PDF

1. Create folder: `assets/files/`
2. Add your resume: `Sameera_Ranawaka_Resume.pdf`
3. Update download link in `cv.html` if you renamed it

---

## Step 3: Customize Homepage (3 minutes)

Edit `index.html`:

**Hero Section** (lines 55-68):
```html
<h1 class="hero-title">Your Name</h1>
<p class="hero-subtitle">Your Title</p>
<p class="hero-tagline">"Your tagline"</p>
```

**Update Upwork Link** (line 66):
```html
<a href="https://www.upwork.com/freelancers/~YOUR_ACTUAL_ID">
```

---

## Step 4: Deploy to GitHub Pages (4 minutes)

### Create Repository

1. Go to [github.com](https://github.com)
2. Click **+** → **New repository**
3. Name: `portfolio`
4. Visibility: **Public**
5. Click **Create repository**

### Push Code

Open terminal in your project folder:

```bash
# Initialize git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Portfolio website"

# Rename branch
git branch -M main

# Add remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push
git push -u origin main
```

### Enable GitHub Pages

1. Go to repository **Settings**
2. Click **Pages** (left sidebar)
3. Source: **main** branch, **/ (root)** folder
4. Click **Save**
5. Wait 2-3 minutes

**Your site is live!**
```
https://YOUR_USERNAME.github.io/portfolio/
```

---

## Done! 🎉

Your portfolio is now live. Here's what to do next:

### Immediate Next Steps

1. **Test your site**
   - Click all navigation links
   - Test on mobile
   - Check social links

2. **Share your portfolio**
   - Add to LinkedIn
   - Add to resume
   - Share on social media

### Within the First Week

1. **Add 2-3 real projects** to `projects.html`
2. **Write your About page** story in `about.html`
3. **Update CV** with actual experience in `cv.html`
4. **Set up contact form** (Formspree or EmailJS)

### Optional Enhancements

- [ ] Add Google Analytics
- [ ] Submit to Google Search Console
- [ ] Add custom domain
- [ ] Write first blog post
- [ ] Create portfolio case studies
- [ ] Add testimonials section

---

## Common Issues & Fixes

### Site shows 404

**Solution**:
- Verify GitHub Pages is enabled
- Wait 5 minutes for deployment
- Clear browser cache

### CSS not loading

**Solution**:
- Check file path: `assets/css/style.css`
- Ensure file is committed and pushed
- Verify in GitHub repository

### Images not showing

**Solution**:
- Check file names (case-sensitive)
- Ensure images are committed
- Use relative paths: `assets/images/photo.jpg`

### Links don't work

**Solution**:
- Check for typos in file names
- Ensure `.html` extension is included
- Test locally first

---

## Quick Reference Commands

```bash
# Check what changed
git status

# Add all changes
git add .

# Commit changes
git commit -m "Update portfolio content"

# Push to GitHub
git push

# View local site (Python)
python -m http.server 8000
```

---

## Need More Help?

- **Full Documentation**: See [README.md](README.md)
- **Customization Guide**: See [CUSTOMIZATION.md](CUSTOMIZATION.md)
- **Deployment Details**: See [DEPLOYMENT.md](DEPLOYMENT.md)
- **File Structure**: See [STRUCTURE.md](STRUCTURE.md)

---

## Checklist

### Before Going Live

- [ ] Profile photo added
- [ ] Resume PDF added
- [ ] All placeholder links updated
- [ ] Email address updated
- [ ] Social media links updated
- [ ] About page personalized
- [ ] At least 3 projects added
- [ ] CV updated with real experience
- [ ] Tested on mobile
- [ ] All links work
- [ ] No console errors

### After Going Live

- [ ] Added to LinkedIn profile
- [ ] Added to resume
- [ ] Shared on social media
- [ ] Submitted to Google Search Console
- [ ] Analytics set up (optional)
- [ ] Custom domain configured (optional)

---

**Pro Tip**: Don't try to perfect everything before launching. Get the basics right, go live, then improve iteratively. A live portfolio that's 80% complete is better than a perfect one that never launches.

---

**Congratulations on launching your portfolio!** 🚀

Keep it updated, share it widely, and let it work for you.
