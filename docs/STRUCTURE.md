# Portfolio Website Structure

Complete documentation of the portfolio website structure, file organization, and architecture.

## Directory Tree

```
@PortfolioWeb/
│
├── index.html                    # Homepage (hero, services, tech stack, featured projects)
├── about.html                    # About page (biography, career journey, timeline)
├── projects.html                 # Projects showcase (detailed project case studies)
├── writing.html                  # Writing hub (Substack, Medium, YouTube, blog links)
├── cv.html                       # Online CV/Resume (experience, skills, education)
├── contact.html                  # Contact page (form, contact info, social links)
│
├── README.md                     # Main documentation and setup guide
├── DEPLOYMENT.md                 # Step-by-step deployment instructions
├── CUSTOMIZATION.md              # Detailed customization guide
├── STRUCTURE.md                  # This file - complete structure documentation
├── .gitignore                    # Git ignore rules
│
├── assets/                       # Static assets directory
│   ├── css/
│   │   └── style.css            # Main stylesheet (all styles for entire site)
│   │
│   ├── images/
│   │   ├── favicon.svg          # Site favicon (animated firefly dot)
│   │   └── profile.jpg          # Profile photo (250x250px recommended)
│   │
│   ├── icons/                    # Additional icons (optional, currently empty)
│   │
│   └── files/                    # Downloadable files
│       └── (Add resume PDF here)
│
└── blog/                         # Blog posts directory
    ├── post1.html               # Sample blog post
    ├── post2.html               # (Create as needed)
    └── post3.html               # (Create as needed)
```

---

## File Descriptions

### HTML Pages

#### index.html
**Purpose**: Homepage and primary landing page

**Sections**:
- Navigation bar (persistent across all pages)
- Hero section with name, title, tagline, CTA buttons
- Services grid (6 service cards)
- Technology stack (12 tech items in grid)
- Featured projects (3 project cards)
- Footer with social links

**Key Elements**:
- Firefly animation container
- Responsive grid layouts
- Call-to-action buttons
- Social proof elements

**Target Audience**: First-time visitors, recruiters, potential clients

---

#### about.html
**Purpose**: Personal story, journey, and professional background

**Sections**:
- Page header
- Two-column layout: profile image + biography text
- Professional journey narrative
- Current focus areas
- Career philosophy
- Timeline of milestones (4 major events)

**Key Elements**:
- Profile photo (circular, grayscale filter)
- Timeline with animated dots
- Bulleted lists for key points
- Narrative storytelling format

**Target Audience**: Those wanting to know the person behind the work

---

#### projects.html
**Purpose**: Detailed project portfolio with case studies

**Sections**:
- Filter buttons (All, ML, BI, Data Engineering, Automation)
- 6 detailed project case studies

**Project Template Structure**:
1. Project title
2. Problem statement
3. Solution approach
4. Technology stack (tags)
5. Outcome/Impact (quantified results)
6. Action buttons (GitHub, Demo)

**Key Elements**:
- Problem-Solution-Outcome format
- Quantifiable metrics
- Technology tags
- External links to repos/demos

**Target Audience**: Technical recruiters, hiring managers, potential clients

---

#### writing.html
**Purpose**: Content hub for all writing and video content

**Sections**:
- Substack newsletter description + link
- Medium articles description + link
- YouTube section with video placeholders
- Blog posts grid (links to internal blog)

**Key Elements**:
- Platform descriptions
- Video grid (3 columns)
- Article preview cards
- External platform links

**Target Audience**: Those interested in your thoughts and teaching style

---

#### cv.html
**Purpose**: Online readable resume/CV

**Sections**:
1. Professional summary
2. Skills grid (6 categories)
3. Professional experience (3 roles)
4. Education
5. Certifications (6 listed)
6. Research areas & interests
7. Languages
8. Download PDF button

**Key Elements**:
- Chronological experience layout
- Skills organized by category
- Achievement-focused bullet points
- Download option for PDF version

**Target Audience**: Recruiters, hiring managers, background checkers

---

#### contact.html
**Purpose**: Contact information and inquiry form

**Sections**:
- Two-column layout: contact info + form
- Contact details (email, location, profiles)
- Availability status
- HTML contact form (ready for backend integration)
- Services offered (3 cards)

**Key Elements**:
- Contact form (name, email, company, subject, message)
- Professional profile links
- Availability indicator
- Service offerings reminder

**Target Audience**: Potential clients, collaborators, recruiters

---

### Stylesheets

#### assets/css/style.css
**Purpose**: Single comprehensive stylesheet for entire site

**Structure** (1000+ lines):

1. **Reset & Base Styles** (lines 1-50)
   - CSS reset
   - CSS custom properties (color variables)
   - Base element styles

2. **Typography** (lines 52-85)
   - Heading styles
   - Paragraph styles
   - Link styles
   - Selection colors

3. **Layout** (lines 87-100)
   - Container widths
   - Section spacing
   - Grid systems

4. **Navigation** (lines 102-155)
   - Fixed navbar
   - Logo styling
   - Navigation menu
   - Active states
   - Hover effects

5. **Buttons** (lines 157-195)
   - Primary button
   - Secondary button
   - Outline button
   - Hover states

6. **Firefly Animation** (lines 197-255)
   - Firefly container
   - Individual fireflies
   - Float animation
   - Timing variations

7. **Hero Section** (lines 257-290)
   - Hero layout
   - Title gradient
   - Subtitle styling
   - CTA button layout

8. **Section Components** (lines 292-450)
   - Section titles
   - Services grid
   - Service cards
   - Tech stack grid
   - Project cards

9. **Page-Specific Styles** (lines 452-750)
   - About page layout
   - Projects page
   - Writing page
   - CV page
   - Contact page

10. **Footer** (lines 752-800)
    - Footer layout
    - Social links
    - Copyright

11. **Responsive Design** (lines 802-920)
    - Mobile breakpoints
    - Tablet adjustments
    - Desktop optimization

12. **Accessibility** (lines 922-950)
    - Screen reader utilities
    - Reduced motion support
    - Focus indicators

**Design Principles**:
- Mobile-first approach
- BEM-like naming convention
- Minimal use of !important
- Consistent spacing scale
- Reusable components

---

### Assets

#### assets/images/favicon.svg
**Purpose**: Animated site favicon

**Details**:
- SVG format (32x32 viewport)
- Green glowing dot with animation
- Firefly concept visualization
- CSS animation for subtle pulse

**Customization**: Edit SVG or replace with PNG favicon

---

#### assets/images/profile.jpg
**Purpose**: Professional headshot for about page

**Specifications**:
- Recommended: 250x250px (square)
- Format: JPG or PNG
- Style: Professional, well-lit
- CSS applies: Circular crop, grayscale filter

**Note**: Currently placeholder - replace with actual photo

---

#### assets/files/
**Purpose**: Downloadable documents (PDF resume, etc.)

**Expected Files**:
- `Sameera_Ranawaka_Resume.pdf` - PDF version of CV
- (Other documents as needed)

**Note**: Create this folder and add your resume PDF

---

### Blog Posts

#### blog/post1.html
**Purpose**: Sample blog post template

**Structure**:
- Navigation (links back to main site)
- Article header (title, description, date)
- Article content (semantic HTML)
- Back to writing link
- Footer

**Template Features**:
- Proper heading hierarchy
- Code-friendly formatting
- Responsive layout
- SEO meta tags

**Usage**: Duplicate and modify for new blog posts

---

## Navigation Structure

### Site Map

```
Home (index.html)
├── About (about.html)
├── Projects (projects.html)
├── Writing (writing.html)
│   └── Blog Posts (blog/*.html)
├── CV (cv.html)
└── Contact (contact.html)
```

### Navigation Flow

**Primary Navigation** (appears on every page):
- Home → About → Projects → Writing → CV → Contact

**Secondary Navigation**:
- Footer links to all social profiles
- Project cards link to external repos/demos
- Writing cards link to external platforms or blog posts
- CTA buttons on homepage

---

## Responsive Breakpoints

### Desktop (Default)
- Container: 1200px max-width
- Grid: 3 columns for projects/services
- Full navigation visible

### Tablet (≤768px)
- Container: Flexible with padding
- Grid: 2 columns for most grids
- Navigation: Hamburger menu (structure ready)

### Mobile (≤480px)
- Container: Full width with padding
- Grid: Single column
- Tech stack: 2 columns
- Stacked layouts

---

## Color System

### Primary Colors

| Variable | Hex Code | Usage |
|----------|----------|-------|
| `--bg-primary` | #0F172A | Main background |
| `--bg-secondary` | #1E293B | Cards, sections |
| `--bg-elevated` | #334155 | Inputs, hover states |
| `--text-primary` | #E2E8F0 | Main text |
| `--text-secondary` | #94A3B8 | Descriptions, labels |
| `--accent-green` | #22C55E | Primary CTA, links |
| `--accent-blue` | #38BDF8 | Secondary accent |
| `--border-color` | #334155 | Borders, dividers |

### Semantic Usage

- **Backgrounds**: Dark slate progression (primary → secondary → elevated)
- **Text**: Light slate with opacity variations
- **Accents**: Green for primary actions, blue for highlights
- **Borders**: Subtle, low contrast

---

## Component Inventory

### Reusable Components

1. **Cards**
   - `.service-card` - Service offerings
   - `.project-card` - Project previews
   - `.cv-section` - CV sections
   - `.writing-platform` - Writing platforms

2. **Buttons**
   - `.btn-primary` - Main actions
   - `.btn-secondary` - Alternate actions
   - `.btn-outline` - Tertiary actions

3. **Grids**
   - `.services-grid` - Auto-fit 3 columns
   - `.projects-grid` - Responsive project layout
   - `.tech-grid` - Technology stack
   - `.skills-grid` - Skills categories

4. **Navigation**
   - `.navbar` - Fixed top navigation
   - `.nav-menu` - Menu items
   - `.nav-link` - Individual links

5. **Footer**
   - `.footer` - Site footer
   - `.social-links` - Social media links

6. **Form Elements**
   - `.form-group` - Form field container
   - `.form-submit` - Submit button

---

## Performance Considerations

### Optimizations Implemented

1. **CSS**
   - Single stylesheet (reduces HTTP requests)
   - Minification ready
   - Efficient selectors

2. **Images**
   - Lazy loading attribute
   - SVG for favicon (scalable, small)
   - Recommended image sizes specified

3. **Fonts**
   - Google Fonts with preconnect
   - Limited weight variations
   - System font fallbacks

4. **No JavaScript**
   - Zero JS dependencies
   - Fast initial load
   - No render blocking

### Performance Metrics (Target)

- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Largest Contentful Paint**: < 2.5s

---

## Security Implementation

### Headers Implemented

```html
<meta http-equiv="Content-Security-Policy" content="...">
<meta http-equiv="X-Content-Type-Options" content="nosniff">
<meta name="referrer" content="strict-origin-when-cross-origin">
```

### Link Security

All external links include:
```html
target="_blank" rel="noopener noreferrer"
```

### Form Security

- Ready for CSRF protection (when backend added)
- Input validation attributes
- Proper name attributes for processing

---

## Accessibility Features

### WCAG 2.1 Compliance

- **Level AA contrast ratios**
- **Semantic HTML5** elements
- **Keyboard navigation** support
- **Focus indicators** on interactive elements
- **Alt text** for images
- **Proper heading hierarchy** (h1 → h2 → h3)
- **ARIA labels** where needed
- **Reduced motion** support

### Screen Reader Support

- Descriptive link text
- Meaningful heading structure
- Form labels associated with inputs
- `.sr-only` class for screen-reader-only content

---

## Browser Support

### Fully Supported

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile Safari (iOS 14+)
- Chrome Mobile

### Graceful Degradation

- CSS Grid with flexbox fallback
- CSS custom properties with fallback colors
- Modern CSS with basic style fallbacks

---

## Maintenance Guide

### Regular Updates

**Monthly**:
- Update project portfolio
- Add new blog posts
- Refresh CV with latest experience

**Quarterly**:
- Review and optimize images
- Check for broken links
- Update skills/technologies

**Annually**:
- Redesign consideration
- Content audit
- SEO review

---

## Future Enhancement Ideas

### Potential Additions

1. **Interactive Elements**
   - Filterable projects (minimal JS)
   - Animated skill bars
   - Scroll animations

2. **Content Sections**
   - Testimonials
   - Case studies
   - Newsletter signup

3. **Technical Improvements**
   - Dark/light theme toggle
   - Blog RSS feed
   - Sitemap.xml

4. **Analytics**
   - Google Analytics
   - Plausible (privacy-focused)
   - Hotjar heatmaps

---

## Dependencies

### External Resources

1. **Google Fonts**
   - Inter font family
   - Loaded via CDN
   - Preconnect for performance

2. **None!**
   - No JavaScript libraries
   - No CSS frameworks
   - No build tools required

### Development Tools (Optional)

- Git for version control
- VS Code or preferred editor
- Browser DevTools
- Local HTTP server (Python, Node, etc.)

---

## Version History

**v1.0.0** (December 2025)
- Initial release
- 6 complete HTML pages
- Comprehensive CSS stylesheet
- Full documentation set
- GitHub Pages ready

---

This structure provides a solid foundation for a professional portfolio that's easy to maintain, customize, and deploy. The modular design allows for future enhancements while maintaining simplicity and performance.
