# Claude.md - Project Instructions and Guardrails

## Workflow

First, think through the problem. Read the codebase and write a plan in tasks/todo.md
The plan should be a checklist of todo items.
Check in with me before starting work—I'll verify the plan.
Then, complete the todos one by one, marking them off as you go.
At every step, give me a high-level explanation of what you changed.
Keep every change simple and minimal. Avoid big rewrites.
At the end, add a review section in todo.md summarizing the changes.

## Session Notes

Update `session-notes/YYYY-MM-DD.md` at the end of each working session:
- **Completed**: What was accomplished this session
- **Pending**: What remains to be done
- **Notes**: Any relevant context for future sessions

**IMPORTANT**: Session notes MUST be updated before committing and pushing to GitHub. This is a prerequisite for any commit/push operation.

## Deployment Workflow

**IMPORTANT: Only push to `drafts-website-edits` branch.**

Netlify uses credit-based pricing. Each production deploy costs 15 credits.

| Plan | Credits/Month | Cost |
|------|---------------|------|
| Free | 300 | $0 |
| Personal | 1,000 | $9/month |

**Credit costs:**
- Production deploy: 15 credits
- Bandwidth: 10 credits/GB
- Web requests: 3 credits/10,000
- Form submission: 1 credit
- Deploy previews: FREE
- Branch deploys: FREE

**Workflow to minimize costs:**
- **After edits**: Push only to `drafts-website-edits`
- **Preview changes**: User tests on localhost (free)
- **Deploy to production**: User merges to main in bulk (1-2x/week max)

**Free tier target:** 4-5 production deploys/month = 60-75 credits, leaving ~225 for traffic.

**DO NOT** push to main after every change. Let the user handle merges to main.

## Model Selection

**Default Model:** claude-sonnet-4-5-20250929 (Sonnet 4.5)

Use `/model` to switch models based on the task phase:

| Phase | Recommended Model | Rationale |
|-------|-------------------|-----------|
| **Planning & Architecture** | Opus 4.5 | Complex reasoning, system design, trade-off analysis |
| **Code Implementation** | Sonnet 4.5 | Best balance of speed, cost, and code quality |
| **Bug Fixes & Small Changes** | Sonnet 4.5 or Haiku 3.5 | Quick iterations, straightforward tasks |
| **Code Review & Refactoring** | Opus 4.5 | Deep understanding of patterns, edge cases |
| **Documentation** | Sonnet 4.5 | Clear writing with good context understanding |
| **Quick Questions & Lookups** | Haiku 3.5 | Fast responses, lower cost |

**When to upgrade to Opus 4.5:**
- Designing new features or systems from scratch
- Debugging complex, multi-file issues
- Security-sensitive code review
- Performance optimization requiring deep analysis

**When Haiku 3.5 is sufficient:**
- Simple file edits
- Running commands and scripts
- Straightforward Q&A about the codebase

## Adding New Content (Blog Posts, Copy, etc.)

When adding new content to the site, **always ask about style preferences** before implementing:

### Available Blog Templates

1. **Default Template** (`/blog/post.html`)
   - Two-column layout with sidebar
   - Category filtering in sidebar
   - Newsletter signup in sidebar
   - Standard blog card format

2. **Superior Style Template** (`/blog/post-superior.html`)
   - Full-width single column layout
   - Author block with credentials ("Written by [Name], MSN, APRN, FNP-C")
   - Reading progress bar at top
   - In-content CTA boxes (use `[CTA:title|description|link|text]` in content)
   - Previous/Next post navigation
   - Optional disclaimer and references sections
   - More generous spacing and larger typography

### Workflow for New Content

1. **Ask which template/style to use:**
   - "Would you like to use the default blog style or the Superior-style full-width template?"
   - "I have two blog templates available: [describe both]. Which would you prefer?"

2. **If a new style is requested:**
   - Ask for a reference link or detailed description
   - Create a new template following the existing pattern
   - Document the new template in this file

3. **For new posts**, gather:
   - Title and content
   - Featured image
   - Categories
   - Template preference
   - Any special elements (disclaimer, references, in-content CTAs)

4. **Before publishing any new blog post:**
   - Verify the post includes appropriate disclosures (Educational & Imagery Disclaimer)
   - If disclaimer is missing, prompt Alicia to add one or use the standard disclaimer
   - Always ask before pushing to GitHub

### Internal Linking Strategy

**Proactively offer to add internal links** in blog posts to relevant service pages. This helps:
- Guide readers to services that can help them
- Increase conversion from visitor to client
- Improve SEO through internal linking

**Key pages to link to:**
| Topic in Blog Post | Link To |
|--------------------|---------|
| HTMA, mineral testing, hair analysis | `/htma.html` (What is HTMA?) |
| Lab work, blood tests, "normal" results | `/services/lab-review.html` |
| Wellness support, hormone support | `/services/` |
| Getting started, booking | `/apply.html` or `/contact.html` |

**When to suggest links:**
- After writing or reviewing blog content
- When a post mentions services Alicia offers
- When a post discusses problems that her services solve

**Example prompt to user:**
> "This post discusses HTMA testing. Would you like me to add a link to the 'What is HTMA?' page so readers can learn more and potentially book a consultation?"

### Standard Blog Disclaimer

All blog posts should include this disclaimer (or similar) at the end:

> This content is for educational and informational purposes only and is not intended to diagnose, treat, cure, or prevent any disease. It does not replace individualized medical advice, diagnosis, or treatment. Readers should consult their licensed healthcare provider regarding personal health concerns.
>
> Any individuals depicted in images on this website or associated content are models or stock photography subjects and are not patients, clients, or recipients of services from Intention Holistic Health. Images are used for illustrative purposes only and do not represent clinical relationships, medical outcomes, or specific health conditions.
>
> Intention Holistic Health provides educational wellness guidance and, where applicable, Kentucky-based nurse practitioner services within scope and licensure.

---

## Promotional System Template

**Reference:** "Design this like the Intentional Reset promo" - Use this template for future promotions.

### Overview

The promotional system consists of two components:
1. **Bottom Floating Bar** - Persistent, non-intrusive bar at bottom of screen
2. **Info Popup Modal** - Detailed information shown when bar is clicked

### Design Specifications

#### Bottom Promo Bar

| Breakpoint | Height | Elements Shown |
|------------|--------|----------------|
| **Desktop** (>1024px) | 60px | Thumbnail + "NEW" badge + Text + "See Details" button |
| **Tablet** (768-1024px) | 55px | Thumbnail + "NEW" badge + Text + "See Details" button |
| **Mobile** (<768px) | 50px | "NEW" badge + Text + Dismiss X (no thumbnail, no button) |

**Styling:**
- Background: Sage green (`--color-sage-green` / #8D9488)
- Text: Cream (`--color-cream` / #F9F5F0)
- Badge: Cream background with sage text
- Hover: Darker sage (`--color-sage-dark`)
- Position: Fixed to bottom, z-index 1000

**Behavior:**
- Clicking anywhere on bar opens the modal (except dismiss button)
- Dismiss button: **Mobile only** - saves to sessionStorage so it doesn't reappear that session
- Desktop/Tablet: Always visible (no dismiss option)

#### Popup Modal

**Content Structure:**
1. Hero image from the promotion (full width, top)
2. "NEW" badge
3. Title (Playfair Display)
4. Subtitle (italic)
5. Description (2-3 sentences)
6. Two CTAs:
   - Primary: "Learn More" → Links to promotion page
   - Secondary: "Apply Now" → Links to `/apply.html`

**Styling:**
- Background: Cream
- Max-width: 420px (95% on mobile)
- Border-radius: 12px
- Overlay: Semi-transparent black (60% opacity)

**Behavior:**
- Opens with fade-in + slide-up animation
- Closes via: X button, clicking overlay, or Escape key
- Body scroll locked when open

### Implementation Checklist for New Promotions

When creating a new promotion:

1. [ ] Create promotional hero image (portrait orientation works best, ~950x1188)
2. [ ] Update bar thumbnail reference in HTML
3. [ ] Update modal image reference in HTML
4. [ ] Update "NEW" badge text if needed (or change to "LIMITED TIME", etc.)
5. [ ] Update bar text copy
6. [ ] Update modal title, subtitle, and description
7. [ ] Update CTA links (primary → promo page, secondary → apply page)
8. [ ] Add promo HTML/JS to desired pages (before cookie consent banner)

### Files Modified for Promotions

| File | Purpose |
|------|---------|
| `/css/main.css` | Contains `.promo-bottom-bar` and `.promo-modal` styles |
| Target pages | HTML for bar + modal + inline JS (added before `</body>`) |

### Current Promotion: Intentional Reset

**Active on pages:**
- `index.html` (Homepage)
- `htma.html` (What is HTMA?)
- `services/services.html` (Packages & Programs)
- `services/lab-review.html` (Lab Review)

**Promo page:** `/services/intentional-reset.html`

---

## Brand & Style Preferences

### Typography

**Stylized Section Titles (Alicia's Preference)**
- Font: Playfair Display
- Style: Italic
- Transform: Uppercase (all caps)
- Letter-spacing: 0.08em
- CSS class: `.ir-styled-title`

Use this style for section headings throughout service pages and landing pages where an elegant, editorial feel is desired.

**Home Page Banner Fonts (top to bottom)**
1. **Playfair Display SC** - Small caps variant for headlines
2. **Glacial Indifference** - Clean sans-serif for body/subtext
3. **Beautifully Delicious Script** - Script font for accent/signature text

These are the specific fonts used in the hero banner design and should be used when recreating banner elements in HTML/CSS.

**IMPORTANT: BDScript Subset Font**

The Beautifully Delicious Script font uses a **subset** (`/fonts/BDScript-subset.ttf`) to reduce file size. When adding new text that uses this font (`.hero-banner-script`, `.script-title`, `.contact-hero-title`), you **MUST**:

1. Check that all characters in the new text are included in the subset
2. Current subset characters: `S T I P C A e r v i c s h n t o a l m p . (space)`
3. If new characters are needed, regenerate the subset using:
   ```bash
   npx --yes glyphhanger --whitelist="STIPCA ervicshntolamp. " --subset=/fonts/BDScript-Regular.ttf --formats=ttf
   ```
4. Update the comment in `css/main.css` to reflect the new character set

Missing characters will fall back to a generic cursive font, causing inconsistent rendering across devices.

### Brand Colors

Only use colors from the official brand palette (see `/brand/Branding Board.pdf`):

| Color | Hex | Usage |
|-------|-----|-------|
| Light Sage | `#CDCFC0` | Backgrounds, badges |
| Warm Tan | `#D6C7B4` | Accents, buttons |
| Taupe | `#AD9985` | Secondary accents |
| Sage Green | `#8D9488` | Primary brand color |
| Charcoal | `#4A4B49` | Text, dark elements |
| Cream | `#F9F5F0` | Backgrounds, header |

## Branch Merges

- Before merging any branch (including draft → live), explicitly confirm readiness with the requester/owner.
- Ensure a rollback path exists (e.g., source branch retained or a pre-merge tag/commit reference recorded) so the merge can be reversed if issues arise.

## Communication for Codex Users

- Assume many users are non-technical. When explaining technical terms or steps, use clear, plain language and supportive analogies to make concepts approachable.
- Remind Codex users to push their updates to GitHub if they haven't yet, so work doesn't get lost in the temporary workspace.
- **Save/Backup Requests:** If the user asks to "save," "backup," or similar, clarify the intent:
  - **Commit** = Create a save point (like a checkpoint in a video game)
  - **Push** = Send it to the backup database/library (GitHub) so it's stored remotely
  - Ask: "Would you like me to commit (create a save point) and push (send to the backup)?"

## Git Configuration

- **Use SSH for GitHub pushes** (not HTTPS). The remote should be `git@github.com:trymebroh/IHH-website.git`
- If push fails with credential errors, check the remote with `git remote -v` and switch to SSH if needed:
  ```bash
  git remote set-url origin git@github.com:trymebroh/IHH-website.git
  ```

## Google Analytics 4 (GA4) Tracking

**Measurement ID:** `G-3GFCR5ZRMZ`

### Required for ALL New Pages

Every new HTML page MUST include the GA4 tracking code in the `<head>` section:

```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-3GFCR5ZRMZ"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-3GFCR5ZRMZ');
</script>
```

### Tracking Attributes for Funnel Analytics

Add these data attributes to enable detailed funnel tracking:

**Section Tracking** - Add to important page sections:
```html
<section data-track-section="hero">...</section>
<section data-track-section="services-overview">...</section>
<section data-track-section="pricing">...</section>
<section data-track-section="faq">...</section>
```

**CTA Tracking** - Add to buttons and important links:
```html
<a href="/apply.html" class="btn" data-track-cta="apply-hero">Apply Now</a>
<a href="/htma.html" data-track-cta="learn-htma">Learn More</a>
```

### Events Automatically Tracked

The following events are already tracked in `/js/main.js`:

| Event | Description |
|-------|-------------|
| `cta_click` | Any element with `data-track-cta` attribute |
| `section_view` | When sections with `data-track-section` scroll 50% into view |
| `form_submit` | All form submissions |
| `popup_shown` | Exit-intent popup displays |
| `popup_closed` | Exit-intent popup dismissed |
| `outbound_click` | Clicks on external links |

### Checklist for New Pages

When creating any new page:

1. [ ] Add GA4 tracking code to `<head>`
2. [ ] Add `data-track-section` to key sections (hero, services, pricing, CTA, FAQ)
3. [ ] Add `data-track-cta` to all CTA buttons
4. [ ] Ensure page includes `/js/main.js` script
5. [ ] Test tracking with GA4 Realtime reports

### Checklist for New Blog Posts

Blog posts use JavaScript rendering in `/js/blog.js`, so:

1. [ ] GA4 is already loaded on blog pages (`/blog/post.html`, `/blog/post-superior.html`)
2. [ ] Add tracking attributes to any inline CTAs in blog content
3. [ ] Form tracking is automatic for newsletter signup

### Recommended Sections to Track

| Page Type | Recommended Sections |
|-----------|---------------------|
| Service pages | hero, problem, solution, process, pricing, faq, final-cta |
| Landing pages | hero, features, benefits, testimonials, cta |
| Blog posts | content, related-posts, newsletter-signup |
| Apply/Contact | form-start, form-submit |

### Viewing Analytics

- **Realtime:** GA4 > Reports > Realtime (see live visitors)
- **Events:** GA4 > Reports > Engagement > Events
- **Conversions:** Set up conversion events in GA4 > Admin > Events > Mark as conversion

---

## Site Architecture & Structure

### Page Hierarchy

```
/ (index.html)                    # Homepage - main entry point
├── /about.html                   # About Alicia page
├── /contact.html                 # Contact form page
├── /apply.html                   # Application form for services
├── /htma.html                    # Educational: What is HTMA?
├── /services/
│   ├── services.html             # Main services page (HTMA packages)
│   ├── lab-review.html           # Lab Review service
│   └── intentional-reset.html    # Limited-time offer (no nav link)
├── /blog/
│   ├── index.html                # Blog listing page
│   ├── post.html                 # Default blog post template
│   └── post-superior.html        # Full-width blog post template
├── /legal/
│   ├── terms.html                # Terms of Service
│   ├── privacy.html              # Privacy Policy
│   └── disclaimer.html           # Medical Disclaimer
├── /drafts/                      # Draft versions (not indexed)
├── /archive/                     # Archived pages (not indexed)
├── /tasks/                       # Internal task files (not indexed)
└── /session-notes/               # Session documentation (not indexed)
```

### Navigation Structure

**Desktop Navigation:**
- Home | About | Blog | Services (dropdown) | Contact | Supplements | Patient Portal

**Services Dropdown:**
- Sessions → `/services/lab-review.html`
- Packages and Programs → `/services/`
- What is HTMA? → `/htma.html`

**Mobile Navigation:**
- Same structure in hamburger menu

**Footer Quick Links:**
- About, Blog, Sessions, Packages and Programs, What is HTMA?, Contact

**Footer Resources:**
- Supplements, Patient Portal

**Footer Legal:**
- Terms, Privacy, Disclaimer
- Social icons: Instagram, Facebook, Pinterest, LinkedIn

### Service Menu Structure (3-Tier)

The homepage presents services in three categories:

| Type | Description | Links To |
|------|-------------|----------|
| **Sessions** | One-time consultations for quick clarity | `/services/lab-review.html` |
| **Packages** | Structured offerings with defined scope | `/services/` |
| **Personalized Programs** | Ongoing, tailored patient-provider support | `/services/` |

**Homepage Card Copy:**
1. **Sessions**: "Focused, one-time consultations designed to bring clarity to a specific question or concern — no long-term commitment required."
2. **Packages**: "Structured offerings with a clear scope — including testing, interpretation, and actionable guidance to build your wellness foundation."
3. **Personalized Programs**: "Ongoing, tailored support with a patient-provider partnership — for those ready for deeper, long-term wellness guidance."

### User Flow

```
Homepage → Learn (HTMA page, Blog) → Service Page → Apply Page → Patient Portal
                                         ↓
                               Lab Review (direct booking OK)
```

**Key Conversion Points:**
1. **HTMA/Wellness Services:** Require application first → `/apply.html`
2. **Lab Review:** Can book directly (no application required)
3. **Intentional Reset:** Landing page only (direct link, not in nav)

---

## SEO & Technical SEO

### Implemented SEO Components

| Component | File/Location | Status |
|-----------|---------------|--------|
| robots.txt | `/robots.txt` | Implemented |
| sitemap.xml | `/sitemap.xml` | Implemented |
| LocalBusiness Schema | `/index.html` | Implemented |
| Service Schema | `/services/` | Implemented |
| Article Schema | `/htma.html` | Implemented |
| Person Schema | `/about.html` | Implemented |
| FAQPage Schema | Multiple pages | Implemented |
| Meta descriptions | All pages | Implemented |
| Open Graph tags | All pages | Implemented |
| Canonical URLs | Via og:url | Implemented |

### Schema Markup Guidelines

When adding new pages, include appropriate JSON-LD schemas:

**Service Pages:** Use `Service` + `FAQPage` schemas
**Educational/Article Pages:** Use `Article` + `FAQPage` schemas
**About/Team Pages:** Use `Person` schema
**Homepage:** Use `LocalBusiness` schema (already done)

### Sitemap Maintenance

When adding new public pages:
1. Add entry to `/sitemap.xml`
2. Set appropriate `priority` (1.0 homepage, 0.9 services, 0.8 main pages, 0.7 blog, 0.3 legal)
3. Update `lastmod` date

### robots.txt Rules

Currently blocked directories:
- `/drafts/` - Draft page versions
- `/archive/` - Archived pages
- `/tasks/` - Internal task files
- `/session-notes/` - Session documentation

Explicitly allowed (for JS-rendered content):
- `/blog/post.html` - Blog post template (Googlebot renders JS)
- `/blog/post-superior.html` - Full-width blog post template

---

## Data & Integrations

### Netlify

**Deployment:** Auto-deploys from `drafts-website-edits` branch
**Forms:** Netlify Forms handles contact and application forms
**Functions:** `/netlify/functions/` for serverless functions

**Netlify Forms Used:**
- Contact form (`contact.html`)
- Application form (`apply.html`)

**Netlify Functions:**
- `easter-egg-track.js` - Easter egg counter using Netlify Blobs
- `subscribe.js` - MailerLite newsletter/lead magnet subscriptions

### MailerLite Email Marketing

**API Integration:** Newsletter and lead magnet forms submit to MailerLite via Netlify Function

**Environment Variable Required:**
- `MAILERLITE_API_KEY` - Must be set in Netlify dashboard (Site settings → Environment variables)

**Subscriber Groups:**
| Group | ID | Purpose |
|-------|-----|---------|
| Newsletter Subscribers | `175195722960864384` | General newsletter signups |
| Holistic Habits Checklist | `175195632248554684` | Lead magnet signups |

**Forms Using MailerLite:**
| Location | Form Type | Groups Added To |
|----------|-----------|-----------------|
| Homepage newsletter section | `newsletter` | Newsletter Subscribers |
| Homepage exit-intent popup | `lead-magnet` | Both groups (gets checklist + newsletter) |
| Blog sidebar | `newsletter` | Newsletter Subscribers |
| Blog bottom popup | `newsletter` | Newsletter Subscribers |

**How It Works:**
1. Form has `data-mailerlite` attribute and `data-form-type` (newsletter or lead-magnet)
2. JavaScript in `main.js` intercepts form submission
3. Sends to `/.netlify/functions/subscribe`
4. Function adds subscriber to appropriate MailerLite group(s)
5. MailerLite automation delivers lead magnet email (configured in MailerLite dashboard)

**Adding New Newsletter Forms:**
```html
<form data-mailerlite data-form-type="newsletter">
  <input type="email" name="email" required>
  <button type="submit">Subscribe</button>
  <p class="form-message" style="display:none;"></p>
</form>
```

### External Integrations

| Service | Purpose | Integration Point |
|---------|---------|-------------------|
| Practice Better | Patient portal, scheduling | External link |
| Fullscript | Supplements store | External link |
| Google Analytics 4 | Analytics | JS tracking code |
| MailerLite | Email marketing, lead magnets | Netlify Function API |

### Cookie Consent

- **Consent Mode v2** implemented for GA4
- Cookies stored in `localStorage`:
  - `cookie_consent` - 'accepted' or 'declined'
  - `popup_dismissed` - exit-intent popup state
  - `newsletter_subscribed` - blog popup state
  - `device_id` - easter egg tracking ID

---

## Compliance Requirements

### Terminology Restrictions

**NEVER use these terms in user-facing content:**
- "coach" / "coaching"
- "mentor" / "mentorship"
- "consult" / "consulting"

**Use instead:**
- "wellness practitioner"
- "wellness support"
- "guidance"
- "program" (e.g., "Signature Program")

### Results/Outcomes Language

Avoid definitive claims. Use qualifying language:
- "may help" instead of "will help"
- "designed to support" instead of "treats"
- "individual results vary" disclaimers

### Service Availability

- **Kentucky residents only** for all clinical services
- Update any "available anywhere" language to reflect this

### Legal Pages

Legal pages (`/legal/*.html`) require attorney review before changes.
See `/tasks/legal-attorney-review.md` for pending items.

### External Links (Global Rule)

**ALL external links MUST open in a new tab.** This is a non-negotiable requirement.

When adding any link that goes to an external website:
1. Add `target="_blank"` to open in new tab
2. Add `rel="noopener noreferrer"` for security
3. This applies to blog posts, service pages, footer links, and all content

**Example:**
```html
<a href="https://example.com" target="_blank" rel="noopener noreferrer">External Link</a>
```

**In blog.js markdown:** External links are automatically detected and rendered with proper attributes. Any link starting with `http://` or `https://` will get `target="_blank" rel="noopener noreferrer"` added automatically.

---

## Audit Checklists

### New Page Checklist

When creating any new page, verify:

```
[ ] Page added to navigation (if public)
[ ] Page added to sitemap.xml
[ ] GA4 tracking code in <head>
[ ] Cookie consent banner included
[ ] data-track-section on key sections
[ ] data-track-cta on CTA buttons
[ ] Meta description (150-160 chars)
[ ] og:title, og:description, og:image tags
[ ] Appropriate JSON-LD schema
[ ] Mobile responsive design
[ ] BHPCC seal in footer (if applicable)
[ ] External links have target="_blank" rel="noopener"
[ ] Font preloads included
[ ] /js/main.js included
```

### New Blog Post Checklist

```
[ ] Post added to blog.js posts array
[ ] Featured image optimized (<200KB WebP)
[ ] Image dimensions checked and aspect ratio set (see below)
[ ] Categories assigned
[ ] Internal links to relevant service pages
[ ] Disclaimer at end of post
[ ] No prohibited terminology
[ ] Image in /images/blog/ folder
```

### Blog Image Aspect Ratios

**Always check image dimensions** when adding a new blog post and set appropriate aspect ratios:

```bash
identify -format '%wx%h' /path/to/image.webp
```

Calculate aspect ratio: `height / width * 100%`

| Aspect Ratio | Percentage | When to Use |
|--------------|------------|-------------|
| 16:9 | 56.25% | Default - most landscape images |
| 3:2 | 66.67% | Standard photo format |
| 4:3 | 75% | Classic/square-ish |
| 1:1 | 100% | Square images |

**Add to blog post object in blog.js:**
```javascript
{
  slug: 'post-slug',
  // ... other properties
  cardAspectRatio: '75%',      // For blog listing cards
  imageAspectRatio: '75%',     // For featured image on post page
}
```

**Note:** Only add these properties if the image differs from 16:9. The default (56.25%) is used automatically if not specified.

### Content Revision Checklist

Before publishing any content changes:

```
[ ] Terminology compliance check (no coach/mentor/consult)
[ ] Kentucky-only language for services
[ ] Results/outcomes language is qualified
[ ] Internal links are working
[ ] No broken images
[ ] Mobile preview looks correct
```

### SEO Audit Checklist (Periodic)

Run this audit when making significant changes:

```
[ ] All pages have unique meta descriptions
[ ] No duplicate H1 tags on any page
[ ] All images have alt text
[ ] Internal links are not broken
[ ] External links work and open in new tab
[ ] Schema markup validates (use Google Rich Results Test)
[ ] Sitemap is up to date
[ ] robots.txt is correct
[ ] Page speed acceptable (use Lighthouse)
[ ] Mobile-friendly (use Google Mobile-Friendly Test)
```

---

## File Organization

### CSS Files

| File | Purpose |
|------|---------|
| `/css/main.css` | Global styles, header, footer, components |
| `/css/blog.css` | Blog listing and post styles |
| `/css/htma.css` | HTMA educational page styles |
| `/css/services-v2.css` | V3 service page styles |
| `/css/about-v2.css` | About page styles |

### JavaScript Files

| File | Purpose |
|------|---------|
| `/js/main.js` | Global: mobile nav, popups, GA4 events, cookie consent |
| `/js/blog.js` | Blog: post rendering, search, newsletter |

### Image Folders

| Folder | Purpose |
|--------|---------|
| `/images/` | General site images |
| `/images/hero/` | Hero banner images |
| `/images/blog/` | Blog post images |
| `/images/services/` | Service page images |
| `/images/about/` | About page images |
| `/images/graphics/` | Decorative graphics |
| `/brand/` | Brand assets (logo, branding board)

---

## Quick Reference

### Key URLs

- **Live Site:** https://www.intentionholistichealth.com
- **Branch Deploy (Testing):** https://drafts-website-edits--intentionholistichealth.netlify.app
- **GitHub Repo:** git@github.com:trymebroh/IHH-website.git
- **Netlify Dashboard:** (via Alicia's account)
- **GA4 Property:** G-3GFCR5ZRMZ
- **Practice Better:** https://my.practicebetter.io
- **Fullscript:** https://us.fullscript.com/welcome/intentionholistichealth

**Note:** The branch deploy URL always shows the latest `drafts-website-edits` branch. Use this for testing before merging to main. Branch deploys are FREE (no Netlify credits).

### Contact Email

`info@intentionholistichealth.com`

### Credentials (Alicia Harrison)

- MSN - Master of Science in Nursing
- APRN - Advanced Practice Registered Nurse
- FNP-C - Family Nurse Practitioner - Board Certified
- BHPCC - Board of Holistic Practitioners Certification Council
