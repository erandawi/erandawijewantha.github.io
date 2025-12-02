# Content Addition Guide

This guide shows you exactly how to add different types of content to your portfolio website.

## Table of Contents
1. [Adding YouTube Videos](#adding-youtube-videos)
2. [Adding Medium Articles](#adding-medium-articles)
3. [Adding Blog Posts](#adding-blog-posts)
4. [Adding New Projects](#adding-new-projects)
5. [Enabling Substack](#enabling-substack)
6. [Updating GitHub Repositories](#updating-github-repositories)
7. [Adding Case Studies](#adding-case-studies)

---

## Adding YouTube Videos

### Option 1: Replace Placeholder Videos (Recommended)

**File:** `insights-media.html`

**Location:** Lines 82-104 (video grid section)

**Current structure:**
```html
<div class="video-item">
    <div class="video-placeholder">▶</div>
    <div class="video-info">
        <h4>Building ETL Pipelines with Python & Airflow</h4>
        <p>Complete tutorial on designing and deploying production ETL workflows</p>
    </div>
</div>
```

**Step 1:** Get YouTube video ID
- Your video URL: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- Video ID is: `dQw4w9WgXcQ` (everything after `v=`)

**Step 2:** Replace placeholder with actual video

**Before:**
```html
<div class="video-item">
    <div class="video-placeholder">▶</div>
    <div class="video-info">
        <h4>Building ETL Pipelines with Python & Airflow</h4>
        <p>Complete tutorial on designing and deploying production ETL workflows</p>
    </div>
</div>
```

**After:**
```html
<div class="video-item">
    <iframe
        width="100%"
        height="200"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="Building ETL Pipelines with Python & Airflow"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
    </iframe>
    <div class="video-info">
        <h4>Building ETL Pipelines with Python & Airflow</h4>
        <p>Complete tutorial on designing and deploying production ETL workflows</p>
    </div>
</div>
```

**Step 3:** Update title and description to match your actual video

**Step 4:** Add CSS for responsive iframe (if not already present)

Add to `assets/css/style.css`:
```css
.video-item iframe {
    width: 100%;
    height: 200px;
    border-radius: 8px;
    margin-bottom: 1rem;
}
```

### Option 2: Add New Video to Grid

Add a new `video-item` before the closing `</div>` of `video-grid`:

```html
<div class="video-grid">
    <!-- Existing videos... -->

    <!-- NEW VIDEO -->
    <div class="video-item">
        <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="Your Video Title"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
        </iframe>
        <div class="video-info">
            <h4>Your Video Title</h4>
            <p>Brief description of what the video covers</p>
        </div>
    </div>
</div>
```

### Option 3: Create YouTube Playlist Section

If you have many videos, create a playlist section:

```html
<div class="insights-platform writing-platform">
    <h3>🎥 YouTube Playlists</h3>

    <div class="playlist-section">
        <h4>Data Engineering Series</h4>
        <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/videoseries?list=YOUR_PLAYLIST_ID"
            title="Data Engineering Playlist"
            frameborder="0"
            allowfullscreen>
        </iframe>
    </div>

    <div style="margin-top: 2rem;">
        <a href="https://youtube.com/@YOUR_CHANNEL" class="btn btn-primary" target="_blank" rel="noopener noreferrer">View All Videos</a>
    </div>
</div>
```

---

## Adding Medium Articles

### Update Featured Articles List

**File:** `insights-media.html`

**Location:** Lines 68-74

**Current structure:**
```html
<p><strong>Popular articles:</strong></p>
<ul>
    <li>"Building Production-Ready ML Pipelines with Apache Airflow"</li>
    <li>"5 Power BI DAX Patterns Every Analyst Should Know"</li>
    <li>"From Pandas to Polars: Why I Switched and You Should Too"</li>
    <li>"Implementing Real-Time Fraud Detection with Python"</li>
</ul>
```

**To add new article:**

1. Add to the list:
```html
<ul>
    <li>"Building Production-Ready ML Pipelines with Apache Airflow"</li>
    <li>"5 Power BI DAX Patterns Every Analyst Should Know"</li>
    <li>"From Pandas to Polars: Why I Switched and You Should Too"</li>
    <li>"Implementing Real-Time Fraud Detection with Python"</li>
    <li>"Your New Article Title Here"</li>  <!-- NEW -->
</ul>
```

2. Make articles clickable (recommended):
```html
<p><strong>Popular articles:</strong></p>
<ul>
    <li><a href="https://medium.com/@YOUR_MEDIUM/article-slug-123" target="_blank" rel="noopener noreferrer">Building Production-Ready ML Pipelines with Apache Airflow</a></li>
    <li><a href="https://medium.com/@YOUR_MEDIUM/article-slug-456" target="_blank" rel="noopener noreferrer">5 Power BI DAX Patterns Every Analyst Should Know</a></li>
    <!-- Add more linked articles -->
</ul>
```

### Create Medium Article Cards (Advanced)

For a more visual presentation:

```html
<div class="insights-platform writing-platform">
    <h3>✍️ Medium Articles</h3>
    <p>Technical articles and tutorials on data science, machine learning, and analytics.</p>

    <div class="projects-grid" style="margin-top: 2rem;">
        <div class="project-card">
            <h3>Building Production-Ready ML Pipelines</h3>
            <p class="project-description">A comprehensive guide to designing, building, and deploying machine learning pipelines using Apache Airflow</p>
            <div class="project-tags">
                <span class="tag">Machine Learning</span>
                <span class="tag">Apache Airflow</span>
                <span class="tag">Python</span>
            </div>
            <div class="project-links">
                <a href="https://medium.com/@YOUR_MEDIUM/article-slug" class="project-link" target="_blank" rel="noopener noreferrer">Read on Medium →</a>
            </div>
        </div>

        <!-- Add more article cards -->
    </div>

    <div style="margin-top: 2rem;">
        <a href="https://medium.com/@YOUR_MEDIUM" class="btn btn-primary" target="_blank" rel="noopener noreferrer">View All Articles</a>
    </div>
</div>
```

---

## Adding Blog Posts

### Creating Individual Blog Post Pages

**Step 1:** Create new HTML file in `/blog` folder

Create: `blog/your-post-slug.html`

**Template:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Brief description of your blog post">
    <title>Your Blog Post Title | Eranda Wijewantha</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../assets/css/style.css">
    <link rel="icon" type="image/svg+xml" href="../assets/images/favicon.svg">
</head>
<body>
    <nav class="navbar">
        <div class="container">
            <a href="../index.html" class="logo">EW</a>
            <ul class="nav-menu">
                <li><a href="../index.html" class="nav-link">Home</a></li>
                <li><a href="../projects.html" class="nav-link">Projects</a></li>
                <li><a href="../insights-media.html" class="nav-link active">Blog & Media</a></li>
                <li><a href="../cv.html" class="nav-link">CV</a></li>
                <li><a href="../contact.html" class="nav-link">Contact</a></li>
            </ul>
        </div>
    </nav>

    <div class="firefly-container">
        <div class="firefly"></div>
        <div class="firefly"></div>
        <div class="firefly"></div>
        <div class="firefly"></div>
        <div class="firefly"></div>
    </div>

    <section class="page-header">
        <div class="container">
            <h1>Your Blog Post Title</h1>
            <p class="text-secondary">Published on January 15, 2025 • 8 min read</p>
        </div>
    </section>

    <section class="blog-content">
        <div class="container" style="max-width: 800px;">
            <article>
                <h2>Introduction</h2>
                <p>Your blog post content starts here...</p>

                <h2>Main Section</h2>
                <p>Continue your content...</p>

                <h3>Subsection</h3>
                <p>More detailed content...</p>

                <pre><code>// Code examples
function example() {
    console.log("Hello World");
}
</code></pre>

                <h2>Conclusion</h2>
                <p>Wrap up your post...</p>
            </article>

            <div style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid var(--border-subtle);">
                <a href="../insights-media.html" class="btn btn-outline">← Back to Blog & Media</a>
            </div>
        </div>
    </section>

    <footer class="footer">
        <!-- Copy footer from insights-media.html -->
    </footer>
</body>
</html>
```

**Step 2:** Add blog post card to insights-media.html

**Location:** Lines 115-149 (Blog Posts section)

```html
<div class="project-card">
    <h3>Your Blog Post Title</h3>
    <p class="project-description">Brief 1-2 sentence description of what the post covers</p>
    <div class="project-tags">
        <span class="tag">Data Engineering</span>
        <span class="tag">Python</span>
    </div>
    <div class="project-links">
        <a href="blog/your-post-slug.html" class="project-link">Read More →</a>
    </div>
</div>
```

**Step 3:** Add CSS for blog content (if needed)

Add to `assets/css/style.css`:
```css
.blog-content {
    padding: 4rem 0;
}

.blog-content article {
    line-height: 1.8;
}

.blog-content h2 {
    margin-top: 2.5rem;
    margin-bottom: 1rem;
    color: var(--text-primary);
}

.blog-content h3 {
    margin-top: 2rem;
    margin-bottom: 0.75rem;
    color: var(--primary-color);
}

.blog-content pre {
    background: var(--bg-darker);
    padding: 1.5rem;
    border-radius: 8px;
    overflow-x: auto;
    margin: 1.5rem 0;
}

.blog-content code {
    font-family: 'Courier New', monospace;
    color: var(--primary-color);
}

.blog-content img {
    max-width: 100%;
    border-radius: 8px;
    margin: 2rem 0;
}
```

---

## Adding New Projects

### Complete Step-by-Step Guide

**File:** `projects.html`

**Step 1:** Determine project category
Choose from:
- Machine Learning & AI
- Business Intelligence & Data Analysis
- Data Engineering

**Step 2:** Add project detail section

**Location:** Before closing `</section>` tag (around line 269)

**Full template:**
```html
<div class="project-detail" id="your-project-id" data-category="Machine Learning & AI">
    <h3>Your Project Name</h3>

    <h4>Problem</h4>
    <p>
        Describe the business problem or challenge this project addresses.
        Be specific about the pain points and why this needed to be solved.
        Example: "The marketing team struggled to identify high-value customers,
        resulting in inefficient ad spend and 23% lower conversion rates."
    </p>

    <h4>Solution</h4>
    <p>
        Explain your technical approach and implementation strategy.
        What did you build? What technologies did you use? How does it work?
    </p>
    <p>Key features and capabilities:</p>
    <ul>
        <li>Feature 1: Describe what it does and why it matters</li>
        <li>Feature 2: Technical implementation detail</li>
        <li>Feature 3: Unique aspect of your solution</li>
        <li>Feature 4: Integration or deployment approach</li>
    </ul>

    <h4>Stack Used</h4>
    <div class="project-tags">
        <span class="tag">Python</span>
        <span class="tag">TensorFlow</span>
        <span class="tag">PostgreSQL</span>
        <span class="tag">Docker</span>
        <span class="tag">AWS</span>
        <!-- Add all relevant technologies -->
    </div>

    <h4>Outcome / Impact</h4>
    <p>
        Quantify the results with metrics and business impact.
        Example: "Increased customer retention by 34%, reduced churn by $1.2M annually,
        and improved prediction accuracy to 91%. System now processes 100K+ customer
        profiles daily with 99.9% uptime."
    </p>

    <div class="project-actions">
        <a href="https://github.com/YOUR_USERNAME/project-repo" class="btn btn-primary" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        <a href="https://your-demo-link.com" class="btn btn-outline" target="_blank" rel="noopener noreferrer">Live Demo</a>
        <a href="blog/project-case-study.html" class="btn btn-outline">Case Study</a>
    </div>
</div>
```

**Step 3:** Ensure `data-category` matches filter button exactly

Check lines 58-61 for exact category names:
```html
<button class="filter-btn">Machine Learning & AI</button>
<button class="filter-btn">Business Intelligence & Data Analysis</button>
<button class="filter-btn">Data Engineering</button>
```

**Step 4:** Update project count if needed

If you're showcasing project count on homepage, update `index.html`:
```html
<p>Built <strong>10+ production systems</strong> processing millions of records</p>
```

### Project Writing Tips

**Problem Section:**
- Start with business context
- Quantify the pain point if possible
- Be specific about who was affected

**Solution Section:**
- Explain your approach clearly
- Highlight technical decisions and why you made them
- Use bullet points for features (easier to scan)

**Stack Section:**
- List all major technologies
- Order by importance/relevance
- Don't overload (8-12 tags max)

**Outcome Section:**
- Always include metrics (percentages, dollar amounts, time saved)
- Show before/after comparisons
- Mention system performance (uptime, scale, speed)

---

## Enabling Substack

When you start publishing on Substack, follow these steps:

### Step 1: Uncomment Substack Section

**File:** `insights-media.html`

**Location:** Lines 56-64

**Change from:**
```html
<!-- Uncomment when Substack is active
<div class="insights-platform writing-platform">
    <h3>📝 Substack Newsletter</h3>
    <p>Deep dives into data engineering patterns...</p>
    <a href="https://YOUR_SUBSTACK.substack.com" class="btn btn-primary">Read on Substack</a>
</div>
-->
```

**To:**
```html
<div class="insights-platform writing-platform">
    <h3>📝 Substack Newsletter</h3>
    <p>Deep dives into data engineering patterns, AI implementations, and lessons learned from real-world projects. I share technical tutorials, architecture decisions, and insights that help data professionals build better systems.</p>
    <p><strong>Topics covered:</strong> Data pipeline design, ML model deployment, BI best practices, career advice for data professionals</p>
    <a href="https://your-username.substack.com" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Read on Substack</a>
</div>
```

### Step 2: Update Substack URL

Replace `https://your-username.substack.com` with your actual Substack URL.

### Step 3: Uncomment Footer Links

Update footer in all pages:

**Files:** `index.html`, `projects.html`, `insights-media.html`, `cv.html`, `contact.html`

**Change from:**
```html
<!-- <a href="https://YOUR_SUBSTACK.substack.com" target="_blank" rel="noopener noreferrer">Substack</a> -->
```

**To:**
```html
<a href="https://your-username.substack.com" target="_blank" rel="noopener noreferrer">Substack</a>
```

### Step 4: Add Featured Newsletter Posts (Optional)

Add a section showcasing your best Substack posts:

```html
<div class="insights-platform writing-platform">
    <h3>📝 Featured Newsletter Posts</h3>

    <div class="projects-grid" style="margin-top: 2rem;">
        <div class="project-card">
            <h3>Building Scalable Data Pipelines</h3>
            <p class="project-description">A deep dive into designing fault-tolerant, scalable data pipelines for enterprise environments</p>
            <div class="project-links">
                <a href="https://your-username.substack.com/p/building-scalable-pipelines" class="project-link" target="_blank" rel="noopener noreferrer">Read Post →</a>
            </div>
        </div>

        <!-- Add more newsletter posts -->
    </div>

    <div style="margin-top: 2rem;">
        <a href="https://your-username.substack.com" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Subscribe to Newsletter</a>
    </div>
</div>
```

---

## Updating GitHub Repositories

### Add GitHub Link to Existing Project

**File:** `projects.html`

Find your project's `project-actions` section and update:

```html
<div class="project-actions">
    <!-- Update this URL with your actual GitHub repository -->
    <a href="https://github.com/YOUR_USERNAME/actual-repo-name" class="btn btn-primary" target="_blank" rel="noopener noreferrer">View on GitHub</a>
</div>
```

### Remove GitHub Link (Private Repository)

If project is private/proprietary:

```html
<div class="project-actions">
    <!-- Remove GitHub link, keep only case study -->
    <a href="blog/project-case-study.html" class="btn btn-primary">Read Case Study</a>
</div>
```

### Add GitHub Repository Showcase (Homepage)

Add to `index.html` to showcase pinned repositories:

```html
<section class="github-section">
    <div class="container">
        <h2 class="section-title">Open Source Contributions</h2>

        <div class="projects-grid">
            <div class="project-card">
                <h3>fraud-detection-ml</h3>
                <p class="project-description">Machine learning system for real-time fraud detection with 94% accuracy</p>
                <div class="project-tags">
                    <span class="tag">Python</span>
                    <span class="tag">Scikit-learn</span>
                    <span class="tag">XGBoost</span>
                </div>
                <div class="project-links">
                    <a href="https://github.com/YOUR_USERNAME/fraud-detection-ml" class="project-link" target="_blank" rel="noopener noreferrer">
                        ⭐ 45 stars | View Repository →
                    </a>
                </div>
            </div>

            <!-- Add more repositories -->
        </div>
    </div>
</section>
```

---

## Adding Case Studies

### Create Detailed Case Study Page

**Step 1:** Create new file: `blog/case-study-project-name.html`

**Step 2:** Use detailed case study template:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Case Study: Project Name | Eranda Wijewantha</title>
    <link rel="stylesheet" href="../assets/css/style.css">
</head>
<body>
    <!-- Copy navbar from projects.html -->

    <section class="page-header">
        <div class="container">
            <h1>Case Study: Project Name</h1>
            <p>In-depth analysis of problem, solution, and impact</p>
        </div>
    </section>

    <section class="blog-content">
        <div class="container" style="max-width: 900px;">
            <article>
                <h2>Executive Summary</h2>
                <ul>
                    <li><strong>Client:</strong> Financial Services Company (NDA)</li>
                    <li><strong>Duration:</strong> 3 months</li>
                    <li><strong>Team Size:</strong> Solo developer</li>
                    <li><strong>Technologies:</strong> Python, XGBoost, PostgreSQL, Docker</li>
                    <li><strong>Impact:</strong> $2.3M annual savings, 67% reduction in false positives</li>
                </ul>

                <h2>The Challenge</h2>
                <p>Detailed explanation of the problem...</p>

                <h2>Discovery & Research</h2>
                <p>How you analyzed the problem...</p>

                <h2>Solution Design</h2>
                <h3>Architecture</h3>
                <p>Technical architecture decisions...</p>

                <h3>Implementation</h3>
                <p>Step-by-step implementation approach...</p>

                <h2>Results & Impact</h2>
                <p>Detailed metrics and outcomes...</p>

                <h2>Lessons Learned</h2>
                <ul>
                    <li>Key takeaway 1</li>
                    <li>Key takeaway 2</li>
                    <li>Key takeaway 3</li>
                </ul>

                <h2>Technologies Used</h2>
                <div class="project-tags">
                    <span class="tag">Python</span>
                    <!-- Add all tags -->
                </div>
            </article>

            <div style="margin-top: 3rem;">
                <a href="../projects.html" class="btn btn-outline">← Back to Projects</a>
            </div>
        </div>
    </section>

    <!-- Copy footer -->
</body>
</html>
```

**Step 3:** Link from projects.html

```html
<div class="project-actions">
    <a href="blog/case-study-project-name.html" class="btn btn-outline">Read Case Study</a>
</div>
```

---

## Content Quality Checklist

Before adding any content, ensure:

### Writing Quality
- [ ] No spelling or grammar errors
- [ ] Clear, concise language
- [ ] Jargon explained when used
- [ ] Active voice preferred
- [ ] Short paragraphs (3-4 sentences max)

### Technical Accuracy
- [ ] Code examples tested and work
- [ ] Technologies/versions accurate
- [ ] Metrics are real (or clearly marked as examples)
- [ ] Links are valid and open

### SEO & Accessibility
- [ ] Page title is descriptive
- [ ] Meta description present (150-160 characters)
- [ ] Headings in logical order (H1 → H2 → H3)
- [ ] Images have alt text
- [ ] Links are descriptive (not "click here")

### Professionalism
- [ ] Maintains consistent tone with rest of site
- [ ] No confidential client information disclosed
- [ ] Ethical and responsible AI/data practices highlighted
- [ ] Achievements quantified but not exaggerated

---

## Quick Reference

| Content Type | Primary File | Section | Approx. Line |
|--------------|-------------|---------|--------------|
| YouTube Videos | insights-media.html | Video Grid | 82-104 |
| Medium Articles | insights-media.html | Medium Section | 65-76 |
| Blog Posts | Create blog/*.html | - | New file |
| Projects | projects.html | Projects Section | ~269 |
| Substack | insights-media.html | Commented | 56-64 |
| GitHub Links | projects.html | Project Actions | Varies |

---

**Next Steps:**
- Review `MAINTENANCE_GUIDE.md` for general website updates
- Check `DEPLOYMENT_GUIDE.md` for publishing changes
- See `TECHNICAL_DOCUMENTATION.md` for architecture details
