# Intention Holistic Health Website

A custom-built website for Intention Holistic Health PLLC - a holistic wellness practice serving Kentucky women through pregnancy, postpartum, and motherhood.

## Tech Stack

- **Frontend**: Pure HTML5, CSS3, and vanilla JavaScript (no frameworks)
- **Styling**: Modern CSS with CSS Grid and Flexbox, CSS Variables for theming
- **Hosting**: Designed for Netlify deployment with GitHub integration
- **Blog System**: JavaScript-based with markdown-style content
- **Forms**: Netlify Forms for contact and newsletter functionality

## Project Structure

```
/
├── index.html              # Homepage
├── about.html              # About page
├── contact.html            # Contact page
├── services/
│   ├── htma-consulting.html    # HTMA + Consulting services
│   └── lab-review.html         # Lab Review service
├── blog/
│   ├── index.html          # Blog listing page
│   └── post.html           # Blog post template
├── legal/
│   ├── terms.html          # Terms & Conditions
│   ├── privacy.html        # Privacy Policy
│   └── disclaimer.html     # Medical Disclaimer
├── css/
│   ├── main.css            # Main stylesheet with design tokens
│   └── blog.css            # Blog-specific styles
├── js/
│   ├── main.js             # Main JavaScript (menu, popup, etc.)
│   └── blog.js             # Blog rendering system
├── images/                 # Image assets (organize by section)
├── netlify.toml            # Netlify configuration
├── CLAUDE.md               # Project instructions for AI assistant
├── QUICKSTART_GUIDE.md     # Owner's guide for managing the site
└── README.md               # This file
```

## Local Development

### Running Locally

1. Open a terminal in the project directory
2. Start a local server:
   ```bash
   # Python 3
   python -m http.server 8000

   # Or use Node.js
   npx serve
   ```
3. Open http://localhost:8000 in your browser

### Making Changes

1. Edit HTML/CSS/JS files directly
2. Refresh browser to see changes
3. Test on multiple viewport sizes

## Deployment

### GitHub + Netlify Setup

1. Push code to GitHub repository
2. Connect repository to Netlify
3. Set build settings:
   - Build command: (leave empty)
   - Publish directory: `.`
4. Deploy!

### After Deployment

- Forms will automatically work via Netlify Forms
- Check Netlify dashboard for form submissions
- SSL certificate is auto-provisioned

## Adding Blog Posts

Blog posts are defined in `/js/blog.js` in the `BLOG_POSTS` array. To add a new post:

1. Open `/js/blog.js`
2. Add a new object to the `BLOG_POSTS` array:
   ```javascript
   {
     slug: 'YYYY-MM-DD-post-slug',
     title: 'Your Post Title',
     date: 'YYYY-MM-DD',
     author: 'Alicia',
     excerpt: 'Brief summary for the listing page...',
     image: '/images/blog/your-image.jpg',
     categories: ['category1', 'category2'],
     content: `
       # Your Post Title

       Your markdown-style content here...
     `
   }
   ```
3. Save and commit changes

## Design Tokens

Colors and spacing are defined as CSS variables in `/css/main.css`:

### Colors
- `--color-sage-green: #969b8f` (primary CTA)
- `--color-dusty-rose: #d2bfb3` (secondary)
- `--color-warm-cream: #f8f2ed` (backgrounds)
- `--color-charcoal: #2d3031` (text)

### Breakpoints
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

## External Integrations

- **Practice Better**: https://my.practicebetter.io/#/signin
- **Fullscript**: https://us.fullscript.com/welcome/intentionholistichealth
- **Instagram**: @intentionholistichealth

## Support

For questions about managing this website, refer to `QUICKSTART_GUIDE.md` or contact your developer.

---

Built with care for Intention Holistic Health PLLC.
