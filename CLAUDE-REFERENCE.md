# Claude Reference Data

This file contains IDs, code snippets, and hex values only. All instructions remain in CLAUDE.md.

---

## Notion IDs

### Database IDs

| Database | ID |
|----------|-----|
| Session Notes | `2e277f92-bf69-80ed-a966-c331880b4dc2` |
| Tasks & Projects | `2e277f92-bf69-80de-aab2-fdc2e1e8613c` |
| Accounts Inventory | `2e277f92-bf69-802e-88c7-f0b2b097c011` |
| Dashboard Page (AI Content System) | `2df77f92-bf69-808a-80d5-e5929cf6160b` |
| Last Updated Callout Block | `2e277f92-bf69-81fd-b227-e17198f29b1d` |

---

## Code Snippets

### Last Updated Callout - Update Command

```bash
curl -X PATCH "https://api.notion.com/v1/blocks/2e277f92-bf69-81fd-b227-e17198f29b1d" \
  -H "Authorization: Bearer ${NOTION_TOKEN}" \
  -H "Content-Type: application/json" \
  -H "Notion-Version: 2022-06-28" \
  -d '{"callout": {"rich_text": [{"text": {"content": "Last Updated: [DATE] at [TIME] CST | Updated By: [ENV]"}}]}}'
```

### Property JSON Formats (for notion-cli)

```javascript
// Title (required for most databases)
{"title": [{"text": {"content": "My Title"}}]}

// Rich Text
{"rich_text": [{"text": {"content": "Some text"}}]}

// Select
{"select": {"name": "Option Name"}}

// Multi-Select
{"multi_select": [{"name": "Tag1"}, {"name": "Tag2"}]}

// Status
{"status": {"name": "Active"}}

// Date
{"date": {"start": "2026-01-08"}}

// URL
{"url": "https://example.com"}
```

### notion-cli Commands

```bash
# Create a page in a database
notion-cli create-page <database-id> '{"Title": {"title": [{"text": {"content": "Page Name"}}]}}'

# Update a page
notion-cli update-page <page-id> '{"Status": {"status": {"name": "Done"}}}'

# Query a database
notion-cli query <database-id>

# Search
notion-cli search "query"

# Help
notion-cli help
```

### GA4 Tracking Code

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

### GA4 Tracking Attributes Examples

```html
<!-- Section Tracking -->
<section data-track-section="hero">...</section>
<section data-track-section="services-overview">...</section>
<section data-track-section="pricing">...</section>
<section data-track-section="faq">...</section>

<!-- CTA Tracking -->
<a href="/apply.html" class="btn" data-track-cta="apply-hero">Apply Now</a>
<a href="/htma.html" data-track-cta="learn-htma">Learn More</a>
```

### Newsletter Form HTML Template

```html
<form data-mailerlite data-form-type="newsletter">
  <input type="email" name="email" required>
  <button type="submit">Subscribe</button>
  <p class="form-message" style="display:none;"></p>
</form>
```

### Sitemap Entry Template

```xml
<url>
  <loc>https://www.intentionholistichealth.com/blog/post.html?slug=your-post-slug</loc>
  <lastmod>2025-01-04</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.6</priority>
</url>
```

### Lighthouse Check Command

```bash
lighthouse https://drafts-website-edits--intentionholistichealth.netlify.app/blog/post.html?slug=your-post-slug --only-categories=performance,accessibility,seo --output=json --output-path=/dev/null --chrome-flags="--headless" 2>&1 | grep -E "(performance|accessibility|seo)"
```

### Blog Image Dimension Check

```bash
identify -format '%wx%h' /path/to/image.webp
```

### BDScript Subset Regeneration

```bash
npx --yes glyphhanger --whitelist="STIPCA ervicshntolamp. " --subset=/fonts/BDScript-Regular.ttf --formats=ttf
```

### Analytics API Endpoint

```
curl https://drafts-website-edits--intentionholistichealth.netlify.app/.netlify/functions/ga4-analytics?report=TYPE&days=N
```

Report types: `overview`, `pages`, `sources`, `events`, `daily`

---

## IDs and Values

### MailerLite Group IDs

| Group | ID |
|-------|-----|
| Newsletter Subscribers | `175195722960864384` |
| Holistic Habits Checklist | `175195632248554684` |

### GA4 Measurement ID

`G-3GFCR5ZRMZ`

### BDScript Current Subset Characters

`S T I P C A e r v i c s h n t o a l m p . (space)`

---

## Brand Hex Values

| Color | Hex |
|-------|-----|
| Light Sage | `#CDCFC0` |
| Warm Tan | `#D6C7B4` |
| Taupe | `#AD9985` |
| Sage Green | `#8D9488` |
| Charcoal | `#4A4B49` |
| Cream | `#F9F5F0` |

---

## Key URLs

| Resource | URL |
|----------|-----|
| Live Site | https://www.intentionholistichealth.com |
| Branch Deploy | https://drafts-website-edits--intentionholistichealth.netlify.app |
| GitHub Repo | git@github.com:trymebroh/IHH-website.git |
| GA4 Property | G-3GFCR5ZRMZ |
| Practice Better | https://my.practicebetter.io |
| Fullscript | https://us.fullscript.com/welcome/intentionholistichealth |

### Contact Email

`info@intentionholistichealth.com`

### Credentials (Alicia Harrison)

| Credential | Full Name |
|------------|-----------|
| MSN | Master of Science in Nursing |
| APRN | Advanced Practice Registered Nurse |
| FNP-C | Family Nurse Practitioner - Board Certified |
| BHPCC | Brain Health Professional Coaching Certification |
