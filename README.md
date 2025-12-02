# Eranda Wijewantha - Portfolio Website

A minimalistic, modern, and professional portfolio website for a Data Engineer / BI Specialist / AI Solutions Builder.

**Live Site:** https://erandawijewantha.github.io/portfolio-website/

## Features

- **Pure HTML + CSS + JavaScript**: Minimal JavaScript for enhanced interactivity
- **Dark Theme**: Professional dark color scheme with emerald green accents (#10B981)
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **SEO Optimized**: Proper meta tags, semantic HTML, and structured content
- **Accessible**: WCAG compliant with proper contrast, keyboard navigation, and screen reader support
- **Security Headers**: Content Security Policy and other security best practices
- **Project Filtering**: Interactive JavaScript-based project category filtering
- **Contact Form**: Integrated Web3Forms for email submissions
- **GitHub Pages Ready**: Static site deployed and live

## Color Palette

- **Background**: `#0F172A` (Dark Slate)
- **Primary Text**: `#E2E8F0` (Light Slate)
- **Secondary Text**: `#94A3B8` (Muted Slate)
- **Primary Accent**: `#10B981` (Emerald Green)
- **Secondary Accent**: `#06B6D4` (Cyan)

## Typography

- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

## Folder Structure

```
portfolio-website/
├── index.html                  # Home page
├── projects.html               # Projects showcase with filtering
├── insights-media.html         # Blog & Media hub
├── cv.html                     # Online CV/Resume
├── contact.html                # Contact page with Web3Forms integration
├── writing.html                # Legacy writing page
├── README.md                   # This file
├── .gitignore                  # Git ignore file
├── assets/
│   ├── css/
│   │   └── style.css          # Main stylesheet
│   ├── js/
│   │   ├── projects-filter.js # Project category filtering
│   │   └── contact-form.js    # Contact form handler
│   ├── images/
│   │   ├── favicon.svg        # Site favicon
│   │   └── profile.jpg        # Profile photo
│   ├── icons/                 # Additional icons
│   └── files/                 # Downloadable files (PDF resume)
├── docs/
│   ├── DEPLOYMENT_GUIDE.md    # Deployment instructions
│   ├── MAINTENANCE_GUIDE.md   # Website maintenance guide
│   ├── CONTENT_GUIDE.md       # Adding new content
│   └── TECHNICAL_DOCUMENTATION.md  # Technical architecture
└── blog/                      # Blog posts directory (for future use)
```

## Customization Guide

### 1. Update Personal Information

**In ALL HTML files**, replace these placeholders:

- `your.email@example.com` → Your actual email
- `YOUR_LINKEDIN` → Your LinkedIn username
- `YOUR_GITHUB` → Your GitHub username
- `YOUR_UPWORK` → Your Upwork profile ID
- `YOUR_MEDIUM` → Your Medium username
- `YOUR_SUBSTACK` → Your Substack subdomain
- `YOUR_CHANNEL` → Your YouTube channel handle

### 2. Add Profile Photo

Replace `assets/images/profile.jpg` with your professional headshot:
- **Recommended size**: 250x250px (square)
- **Format**: JPG or PNG
- **Style**: Professional, grayscale preferred for consistency

### 3. Add Resume PDF

Create folder and add your resume:
```bash
mkdir assets/files
```
Add `Sameera_Ranawaka_Resume.pdf` to `assets/files/`

Update the download link in `cv.html`:
```html
<a href="assets/files/Sameera_Ranawaka_Resume.pdf" class="btn btn-primary" download>
```

### 4. Customize Projects

In `projects.html`, update each project detail section with your actual projects:

```html
<div class="project-detail">
    <h3>Your Project Name</h3>
    <h4>Problem</h4>
    <p>Describe the challenge or problem this project addressed</p>

    <h4>Solution</h4>
    <p>Explain your approach and implementation</p>

    <h4>Stack Used</h4>
    <div class="project-tags">
        <span class="tag">Technology 1</span>
        <span class="tag">Technology 2</span>
    </div>

    <h4>Outcome / Impact</h4>
    <p>Quantify results and business impact</p>

    <div class="project-actions">
        <a href="YOUR_GITHUB_REPO_URL" class="btn btn-primary">View on GitHub</a>
        <a href="YOUR_DEMO_URL" class="btn btn-outline">Live Demo</a>
    </div>
</div>
```

### 5. Update Writing Links

In `writing.html`:

**For YouTube videos**, replace video placeholder sections:
```html
<div class="video-item">
    <div class="video-placeholder">▶</div>
    <div class="video-info">
        <h4>Your Video Title</h4>
        <p>Video description</p>
    </div>
</div>
```

**For blog posts**, create new HTML files in the `blog/` folder following the structure of `post1.html`.

### 6. Customize About Page

Edit `about.html` to reflect your personal journey:
- Update professional biography
- Modify career milestones in the timeline section
- Adjust philosophy and focus areas

### 7. Update CV Content

In `cv.html`, customize:
- Professional summary
- Experience sections with your actual roles
- Education details
- Certifications
- Skills grid

## Deployment to GitHub Pages

### Step 1: Create GitHub Repository

```bash
git init
git add .
git commit -m "Initial commit: Portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **main** branch
4. Click **Save**
5. Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

### Step 3: Custom Domain (Optional)

If you have a custom domain:

1. Add a `CNAME` file to the root with your domain:
   ```
   yourdomain.com
   ```
2. Configure DNS settings with your domain provider:
   - Add CNAME record pointing to `YOUR_USERNAME.github.io`
3. Enable HTTPS in GitHub Pages settings

## Testing Before Deployment

### Local Testing

Simply open `index.html` in your browser, or use a local server:

**Using Python**:
```bash
python -m http.server 8000
```

**Using Node.js**:
```bash
npx http-server
```

Then visit `http://localhost:8000`

### Validation Checklist

- [ ] All links work (internal and external)
- [ ] All images load correctly
- [ ] Profile photo is updated
- [ ] Resume PDF is available for download
- [ ] Contact form is ready (or integrated with backend service)
- [ ] Social media links point to your profiles
- [ ] Mobile responsive design works
- [ ] All placeholder text is replaced
- [ ] No console errors in browser DevTools
- [ ] Site loads quickly (< 2 seconds)

## Contact Form Integration

The contact form in `contact.html` is currently static HTML. To make it functional:

### Option 1: Formspree (Recommended)

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Replace `#` in the form action with your Formspree endpoint

### Option 2: EmailJS

1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Add the EmailJS script and configuration
3. Update the form to use EmailJS send method

### Option 3: Netlify Forms

If deploying to Netlify instead of GitHub Pages:
```html
<form name="contact" method="POST" data-netlify="true">
```

## Performance Optimization

The site is already optimized, but you can further improve:

1. **Compress images**: Use tools like TinyPNG before uploading
2. **Minify CSS**: Use a CSS minifier for production
3. **Enable caching**: Configure via GitHub Pages or CDN
4. **Lazy loading**: Already implemented for images

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility Features

- Semantic HTML5 elements
- ARIA labels where needed
- Keyboard navigation support
- High contrast ratios (WCAG AA compliant)
- Focus indicators
- Alt text for images
- Screen reader friendly

## Security Features

- Content Security Policy headers
- No inline scripts
- `rel="noopener noreferrer"` on external links
- X-Content-Type-Options
- Referrer policy

## Maintenance

### Regular Updates

- Update project portfolio as you complete new work
- Add new blog posts to the writing section
- Keep CV current with latest experience
- Refresh testimonials if you add that section

### Analytics (Optional)

To track visitors, add Google Analytics or privacy-focused alternatives:
- [Plausible Analytics](https://plausible.io/)
- [Fathom Analytics](https://usefathom.com/)
- [Simple Analytics](https://simpleanalytics.com/)

## Support & Issues

For questions or issues with this template:
1. Check this README first
2. Review HTML/CSS comments in the code
3. Test in different browsers
4. Check browser console for errors

## License

This portfolio template is provided as-is for personal use. Feel free to customize and deploy.

## Credits

- **Design**: Minimalist dark theme inspired by Chirpy/Cotes style
- **Fonts**: Inter by Google Fonts
- **Icons**: Native emojis (no external dependencies)

---

**Last Updated**: December 2025
**Version**: 1.0.0
