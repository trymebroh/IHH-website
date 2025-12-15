# Intention Holistic Health - Website Rebuild Instructions

## Project Overview
You are rebuilding the Intention Holistic Health website - a professional holistic wellness practice serving Kentucky women through pregnancy, postpartum, and motherhood. The current site is on Kajabi at https://www.intentionholistichealth.com and needs to be migrated to a custom-coded solution.

## Critical Requirements

### Brand & Design Preservation
**EXTREMELY IMPORTANT**: The owner has spent extensive time developing her brand identity. You MUST preserve:
- Exact color palette from the existing site
- Typography choices and hierarchy
- Logo placement and sizing
- Overall visual style and aesthetic
- Layout structure and spacing
- Image treatments and styling

Extract and replicate the visual design faithfully. This is non-negotiable.

### Technical Stack
- **Frontend**: Pure HTML5, CSS3, and vanilla JavaScript (no frameworks)
- **Styling**: Modern CSS with CSS Grid and Flexbox
- **Hosting**: Designed for Netlify deployment with GitHub integration
- **Blog System**: Markdown-based blog posts with simple file structure
- **Forms**: Netlify Forms for contact functionality
- **Mobile**: Fully responsive, mobile-first design

### Content to Extract & Recreate

1. **Homepage**
   - Hero section with Alicia's intro
   - "Who I Help" section
   - Three service cards (1:1 Consulting, Lab Review, HTMA)
   - "Is This You?" section
   - "The Intention Process" three-phase explanation
   - About section preview
   - Blog preview section
   - Newsletter signup
   - Footer with legal links and disclaimers

2. **Navigation Structure**
   - Home
   - About
   - Blog
   - HTMA + Consulting Services
   - Lab Review Service
   - Contact
   - Supplements (external link to Fullscript)
   - Patient Portal (external link to Practice Better)

3. **Service Pages**
   - HTMA + Consulting Services page
   - Lab Review Service page
   - Detail all three service offerings thoroughly

4. **Supporting Pages**
   - About page (her story)
   - Contact page with form
   - Blog listing page
   - Individual blog post template
   - Terms and Conditions
   - Privacy Policy
   - Medical Disclaimer

5. **External Integrations**
   - Practice Better patient portal: https://my.practicebetter.io/#/signin
   - Fullscript supplements: https://us.fullscript.com/welcome/intentionholistichealth

### Blog System Requirements

The blog system must be **extremely simple** for the owner to manage using Claude Code:

1. **File Structure**:
   ```
   /blog
     /posts
       2024-12-15-post-title.md
       2024-12-14-another-post.md
     index.html (blog listing page)
   ```

2. **Blog Post Format** (Markdown with YAML front matter):
   ```markdown
   ---
   title: "Your Post Title Here"
   date: 2024-12-15
   author: Alicia
   excerpt: "A brief summary of the post that appears on the blog listing page"
   image: "/images/blog/post-image.jpg"
   ---

   # Your Post Title

   Your blog content here in markdown format...
   ```

3. **Adding New Blog Posts Workflow**:
   The owner should be able to say to Claude Code:
   "Add a new blog post titled [TITLE] with this content: [PASTE CONTENT]"
   
   And Claude Code should:
   - Create a new markdown file with proper naming (YYYY-MM-DD-slug.md)
   - Add the YAML front matter
   - Convert the content to markdown format
   - Update the blog index page to show the new post
   - Maintain chronological order (newest first)

4. **Blog Index Page**:
   - Auto-generates from markdown files
   - Shows posts in reverse chronological order
   - Displays: post image, title, date, excerpt, "Read More" link
   - Matches the site's design aesthetic

5. **Individual Blog Post Pages**:
   - Clean, readable typography
   - Author and date displayed
   - Social sharing buttons (optional but nice)
   - "Back to Blog" navigation
   - Related posts section (optional)

### Design Extraction Instructions

From https://www.intentionholistichealth.com, extract and document:

1. **Color Palette**:
   - Primary brand colors (greens, neutrals visible)
   - Accent colors
   - Text colors (headings vs body)
   - Background colors
   - Button colors (hover states too)

2. **Typography**:
   - Font families used
   - Font sizes for H1, H2, H3, body text
   - Font weights
   - Line heights and letter spacing
   - Text transforms (uppercase sections, etc.)

3. **Spacing & Layout**:
   - Section padding and margins
   - Container widths
   - Grid/column layouts
   - Card spacing
   - Button padding

4. **Images**:
   - Extract all images from the current site
   - Document image dimensions and aspect ratios
   - Note where images are used (hero, services, about, etc.)
   - Create placeholder structure for high-res replacements later

5. **Interactive Elements**:
   - Button styles (primary, secondary)
   - Hover effects
   - Form styling
   - Navigation behavior (mobile menu, etc.)

### Form Implementation

**Contact Form** (using Netlify Forms):
```html
<form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />
  <input type="text" name="name" required />
  <input type="email" name="email" required />
  <textarea name="message" required></textarea>
  <button type="submit">Send Message</button>
</form>
```

**Newsletter Signup Form**:
Similar structure, simpler fields (just name and email)

### File Structure

```
/
├── index.html
├── about.html
├── contact.html
├── services/
│   ├── htma-consulting.html
│   ├── lab-review.html
├── blog/
│   ├── index.html
│   ├── posts/
│   │   ├── 2024-12-15-sample-post.md
│   ├── [generated-post-pages]/
├── legal/
│   ├── terms.html
│   ├── privacy.html
│   ├── disclaimer.html
├── css/
│   ├── main.css
│   ├── blog.css
├── js/
│   ├── main.js
│   ├── blog.js (for rendering markdown)
├── images/
│   ├── logo.png
│   ├── hero/
│   ├── services/
│   ├── blog/
├── README.md
└── netlify.toml
```

### Deployment Configuration

Create a `netlify.toml` file:
```toml
[build]
  publish = "."

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.processing]
  skip_processing = false
```

### GitHub Integration Instructions

The site will be deployed via GitHub to Netlify:
1. Code will be pushed to GitHub repository
2. Netlify will auto-deploy on every push to main branch
3. Owner can make changes locally in VS Code
4. Commit and push to GitHub
5. Site updates automatically

### Mobile Responsiveness

Critical breakpoints:
- Mobile: 320px - 767px
- Tablet: 768px - 1023px  
- Desktop: 1024px+

All sections must work perfectly on mobile. Test:
- Navigation (hamburger menu on mobile)
- Service cards (stack on mobile)
- Forms (easy to fill on mobile)
- Images (scale properly)
- Text (readable without zooming)

### Performance Optimization

- Optimize all images (compress without quality loss)
- Minify CSS and JavaScript
- Use semantic HTML5
- Implement lazy loading for images
- Add proper meta tags for SEO
- Include Open Graph tags for social sharing

### SEO Requirements

Each page needs:
- Unique, descriptive title tag
- Meta description (155 characters max)
- Proper heading hierarchy (H1 → H2 → H3)
- Alt text for all images
- Semantic HTML structure

### Accessibility

- ARIA labels where needed
- Keyboard navigation support
- Sufficient color contrast
- Form labels properly associated
- Focus states visible
- Skip to main content link

### Content Preservation

Extract ALL text content from the current site:
- All headings and body copy
- Service descriptions
- CTAs (Call-to-action text)
- Footer disclaimer text
- Legal pages content
- About page story

### Quality Standards

Before considering this complete:
- [ ] Visual design matches original site 95%+ accuracy
- [ ] All pages are mobile responsive
- [ ] All forms work and submit properly
- [ ] Blog system allows easy post addition
- [ ] All external links work correctly
- [ ] Site loads quickly (< 3 seconds)
- [ ] No console errors
- [ ] All images display properly
- [ ] Navigation works on all devices
- [ ] Legal/disclaimer text is accurate

### Owner's Management Capabilities

The owner should be able to easily:
1. Add new blog posts by pasting content into Claude Code
2. Update service descriptions
3. Change contact information
4. Add new service offerings
5. Update images
6. Modify text content
7. Add new pages

### Development Notes

- Write clean, well-commented code
- Use CSS variables for colors/fonts (easy theming)
- Keep JavaScript simple and vanilla (no dependencies)
- Make the code easy to understand for someone learning
- Add helpful comments explaining what each section does

### Testing Checklist

Before delivery, test:
- All navigation links
- All external links
- Form submissions
- Mobile menu functionality
- Blog post creation workflow
- Image loading
- Page load speed
- Browser compatibility (Chrome, Firefox, Safari, Edge)

## Delivery

The completed site should be:
1. Production-ready
2. Fully functional locally
3. Ready to push to GitHub
4. Ready to connect to Netlify
5. Documented for the owner to manage

## Special Instructions for Claude Code

When the owner asks you to add a blog post, you should:
1. Ask for the title and content (she'll paste it)
2. Create the markdown file with proper naming
3. Add appropriate front matter
4. Save the file in /blog/posts/
5. Update the blog index if needed
6. Confirm the post was added successfully
7. Tell her to commit and push to GitHub

Make this process as simple as possible. She should only need to paste content and you handle the technical details.
