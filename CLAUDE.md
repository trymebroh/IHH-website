# Claude.md - Project Instructions and Guardrails

**Lookup Data:** See `CLAUDE-REFERENCE.md` for IDs, code snippets, and hex values.

---

## Project Folders Structure

**IMPORTANT:** There are TWO separate IHH project folders:

| Folder | Path | Purpose |
|--------|------|---------|
| **Website** | `~/Intention-Holistic-Health-website` | Website codebase (HTML, CSS, JS, Netlify) |
| **Business** | `~/Intention-Holistic-Health` | Business operations (finance, marketing strategy, CEO summit notes) |

Both projects share Notion integration configuration. When updating documentation (especially `docs/notion-system-architecture.md`), sync changes to both folders.

---

## Workflow

First, think through the problem. Plan tasks using the TodoWrite tool (Claude Code's built-in task tracking).
Check in with me before starting work—I'll verify the plan.
Then, complete the todos one by one, marking them off as you go.
At every step, give me a high-level explanation of what you changed.
Keep every change simple and minimal. Avoid big rewrites.
At the end, update session notes in Notion summarizing the changes.

## Keeping Your Local Copy Up to Date

**Before starting work**, run `git pull` in this folder to get the latest changes from GitHub. This ensures you're working with the most recent version of the codebase.

```bash
git pull
```

---

## Notion-Based Documentation System

**Architecture Documentation:** `/docs/notion-system-architecture.md`

Internal documentation is stored in Notion (not git) for cross-device sync and professional project management. The system uses **linked databases** following Notion's official best practices.

### System Overview

**Dashboard Page:** "AI Content System" (see `CLAUDE-REFERENCE.md` for ID)

**Databases:**

| Database | Purpose | Key Properties |
|----------|---------|----------------|
| **Session Notes** | Track work sessions across devices | Date, Environment, Status, Completed, Pending, Notes |
| **Tasks & Projects** | Track actionable items with priority | Status, Priority, Category, Due Date, Assignee |
| **Accounts Inventory** | Track external services and integrations | Category, Account ID, Status, Access, Last Verified |

### Session Start Checklist

**Before starting any work session:**

1. **Check for CLAUDE.md updates:**
   - Query Session Notes database for recent entries
   - If CLAUDE.md was updated by another device, prompt user to review changes

2. **Check for pending tasks:**
   - Query Tasks & Projects database where Status != Done
   - Review high-priority items first

3. **Check recent session notes:**
   - Review last 2-3 session entries for context

### Session Notes Workflow

Session notes are organized **by date** (one entry per day), not by individual sessions. Each entry is updated throughout the day as work progresses.

**Format:**
- **Title:** `YYYY-MM-DD` (e.g., `2026-01-09`)
- **Completed:** Timestamped list of actions in chronological order
- **Pending:** Bullet list of remaining items
- **Notes:** Context for future sessions

**Completed field format:**
```
HH:MM AM/PM — Action taken
HH:MM AM/PM — Next action taken
```

**Example:**
```
6:45 PM — Tested Notion & MailerLite MCP servers (both working)
6:50 PM — Updated .mcp.json in all 3 project folders
7:00 PM — Committed and pushed changes to GitHub

8:10 PM — Optimized blog image with responsive versions
8:30 PM — Committed/pushed to drafts-website-edits
```

**Workflow:**
1. At start of session, check if a note exists for today's date
2. If exists → update the existing note (append new timestamped items)
3. If not → create new note titled with today's date
4. Update throughout the session, not just at the end

**IMPORTANT**: Session notes MUST be updated in Notion before committing and pushing to GitHub.

### AI Content System Page Updates

The AI Content System dashboard page has a **"Last Updated"** callout block at the top. This MUST be updated whenever any changes are made to the page or its databases.

**How to update:** Use the Notion API to update this specific block (not append new content). See `CLAUDE-REFERENCE.md` for the callout block ID and curl command.

**Format:** `Last Updated: [Month] [Day], [Year] at [H:MM] [AM/PM] CST | Updated By: [Environment]`

**Example:** `Last Updated: January 8, 2026 at 1:15 PM CST | Updated By: Local VS Code`

**When to update:**
- After adding/editing entries in any database on the page
- After reorganizing or cleaning up the page structure
- After adding new databases or linked views
- After any significant Notion changes during a session

**Environment values:**
- `Local VS Code` - Working from local VS Code with Claude Code
- `Browser Codex` - Working from browser-based Codex
- `Mobile` - Working from Notion mobile app
- `Manual` - Direct edits in Notion UI

### Accounts & Services Inventory

When creating or integrating ANY new external account or service, **immediately add an entry to the Accounts Inventory database**. See `CLAUDE-REFERENCE.md` for the entry format.

This includes:
- Google services (Analytics, Cloud, Search Console, etc.)
- Email marketing platforms
- Payment processors
- Third-party APIs
- Hosting/deployment services
- Client management tools

**Before finishing a session that involved new accounts:** Verify the Notion inventory is up to date.

### API Capabilities & Limitations

#### Notion API Limitations (Permanent)

These are Notion API limitations that require **manual UI steps**:

| Operation | API Support | Manual Steps Required |
|-----------|-------------|----------------------|
| **Create new databases** | NO | Must create in Notion UI first |
| **Status property options** | NO | Add options via Notion UI > Edit property |
| **Select/Multi-select options** | Partial | Can use existing options, but new ones need UI |
| **Database views** | NO | Must create views in Notion UI |
| **Relation properties** | Partial | Create in UI, then API can use them |

#### MCP Server Bug (Known Issue)

The official Notion MCP server has a **serialization bug** affecting `create-page`, `update-page`, and `move-page` operations. Object parameters are double-stringified, causing validation errors.

**Bug Status:**
- [Issue #82](https://github.com/makenotion/notion-mcp-server/issues/82) - Parameter serialization bug
- [Issue #3023](https://github.com/anthropics/claude-code/issues/3023) - Claude Code specific issue

| MCP Operation | Status | Workaround |
|---------------|--------|------------|
| Query databases | ✅ Works | Use MCP tools |
| Search | ✅ Works | Use MCP tools |
| Get page/database | ✅ Works | Use MCP tools |
| **Create page** | ❌ Broken | Use `notion-cli` |
| **Update page** | ❌ Broken | Use `notion-cli` |
| **Move page** | ❌ Broken | Use `notion-cli` |

#### Workaround: notion-cli Tool

A global CLI tool is installed at `~/.local/bin/notion-cli` that bypasses the MCP bug by making direct API calls.

See `CLAUDE-REFERENCE.md` for notion-cli commands and property JSON formats.

**When to guide user through manual steps:**

#### 1. Creating a New Database
Walk user through Notion UI:
1. Open parent page in Notion
2. Type `/database` and select "Database - Full page"
3. Name the database
4. Add properties (see property types below)
5. Set icon and description
6. Share with integration: `...` menu → Connections → Add integration

#### 2. Adding/Editing Property Options
Status, Select, and Multi-select options must be created in UI:

1. Click property header → "Edit property"
2. Add options with names
3. **Set colors** (API cannot set colors):
   - Click the color dot next to each option
   - Available colors: `default`, `gray`, `brown`, `orange`, `yellow`, `green`, `blue`, `purple`, `pink`, `red`

**Color conventions for this project:**
| Property Type | Option | Color |
|---------------|--------|-------|
| Priority | High | Red |
| Priority | Medium | Yellow |
| Priority | Low | Green |
| Status | To-do group | Gray |
| Status | In Progress group | Blue |
| Status | Complete group | Green |
| Environment | Local VS Code | Blue |
| Environment | Browser Codex | Purple |
| Environment | Mobile | Green |
| Category | Legal | Orange |
| Category | Technical | Blue |
| Category | Content | Green |
| Category | SEO | Purple |
| Category | Marketing | Pink |
| Access | Alicia (Owner) | Purple |
| Access | Developer | Blue |
| Access | API Only | Gray |

#### 3. Setting Up Status Property Groups
Status properties have special grouping (To-do, In Progress, Complete):

1. Click Status property header → "Edit property"
2. Add options under each group header
3. Drag options between groups to reorganize
4. Set colors for each option

#### 4. Creating Relations Between Databases
1. In source database, click `+` to add property
2. Select "Relation"
3. Choose target database
4. Toggle "Show on [target]" for two-way relation
5. Name the property on both sides

#### 5. Creating Database Views
Views cannot be created via API:

1. Click `+` next to existing view tabs
2. Choose view type: Table, Board, Calendar, List, Gallery, Timeline
3. Configure:
   - **Filter**: Click "Filter" → Add conditions
   - **Sort**: Click "Sort" → Add sort rules
   - **Group by**: (Board view) Select grouping property
   - **Properties**: Show/hide columns

**Recommended views per database:**
| Database | View | Type | Filter/Config |
|----------|------|------|---------------|
| Session Notes | Recent | Table | Date = Past week |
| Session Notes | Calendar | Calendar | By Date |
| Tasks | Active | Board | Status ≠ Done, Group by Status |
| Tasks | By Priority | Table | Sort by Priority |
| Accounts | All | Table | None |
| Accounts | By Category | Board | Group by Category |

### MCP Configuration

The `.mcp.json` file configures the Notion integration. It uses environment variable `${NOTION_TOKEN}` - each device must have `NOTION_TOKEN` set in their environment with a valid Notion API token.

### Database IDs Reference

See `CLAUDE-REFERENCE.md` for all Notion database IDs.

### Alternative Integrations

If MCP bug is fixed or more capabilities are needed:
- **Better Notion MCP** - 75% API coverage with optimized operations
- **Direct API via Netlify Functions** - Full API access including database creation
- **Zapier/Make.com** - No-code automation with full Notion connectors

---

## Analytics Reports

**Template:** `/docs/analytics-report-template.md`

When the user requests analytics (e.g., "Pull my analytics summary", "How's the funnel performing?", "Show me traffic"), generate a report following the standard template.

**How to pull data:**
```
curl https://drafts-website-edits--intentionholistichealth.netlify.app/.netlify/functions/ga4-analytics?report=TYPE&days=N
```

Report types: `overview`, `pages`, `sources`, `events`, `daily`

**Key metrics to always include:**
- Traffic overview (users, sessions, bounce rate, avg duration)
- Lead funnel performance (Homepage → Services → PB Click)
- Top pages
- Engagement depth (scroll milestones, time on page)
- Traffic sources
- Key events (cta_click, form_submit, etc.)
- Friction watch (Services page metrics)

**GA4 UI-only features** (cannot pull via API):
- Funnel explorations
- Path explorations
- Audience sizes

---

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

## Branching Policy (Browser vs Local)

If not 100% certain which instance we're in, ask the user.

- Browser work: first push to `browser-coded-branch` only, then optionally to `drafts-website-edits` on request.
- Local VS Code work: push to both `browser-coded-branch` and `drafts-website-edits` so browser stays current.

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

Only use colors from the official brand palette (see `/brand/Branding Board.pdf`). See `CLAUDE-REFERENCE.md` for hex values.

## Branch Merges

- Before merging any branch (including draft → live), explicitly confirm readiness with the requester/owner.
- Ensure a rollback path exists (e.g., source branch retained or a pre-merge tag/commit reference recorded) so the merge can be reversed if issues arise.

## Git Configuration

- **Use SSH for GitHub pushes** (not HTTPS). The remote should be `git@github.com:trymebroh/IHH-website.git`
- If push fails with credential errors, check the remote with `git remote -v` and switch to SSH if needed:
  ```bash
  git remote set-url origin git@github.com:trymebroh/IHH-website.git
  ```

## Google Analytics 4 (GA4) Tracking

**Measurement ID:** See `CLAUDE-REFERENCE.md` for the GA4 measurement ID.

### Required for ALL New Pages

Every new HTML page MUST include the GA4 tracking code in the `<head>` section. See `CLAUDE-REFERENCE.md` for the tracking code snippet.

### Tracking Attributes for Funnel Analytics

Add these data attributes to enable detailed funnel tracking:
- `data-track-section` on key sections (hero, services-overview, pricing, faq)
- `data-track-cta` on CTA buttons

See `CLAUDE-REFERENCE.md` for HTML examples.

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
1. **HTMA/Wellness Services:** Redirect to Practice Better for booking
2. **Lab Review:** Redirect to Practice Better for direct booking
3. **Intentional Reset:** Landing page only (direct link, not in nav) → Practice Better

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

**Subscriber Groups:** See `CLAUDE-REFERENCE.md` for MailerLite group IDs.

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

**Adding New Newsletter Forms:** See `CLAUDE-REFERENCE.md` for the HTML template.

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
See Notion "AI Content System" → Tasks/Todo section for pending legal review items.

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

**Content & Images:**
```
[ ] Post added to blog.js posts array (newest first)
[ ] Featured image optimized with ALL 4 responsive versions (see "Blog Image Optimization Workflow" below):
    - filename.webp (900px, <50KB) - blog post desktop
    - filename-mobile.webp (500px, <20KB) - blog post mobile
    - filename-small.webp (400px, <15KB) - cards desktop
    - filename-small-xs.webp (300px, <10KB) - cards mobile
[ ] Image dimensions checked and aspect ratio set in blog.js (cardAspectRatio, imageAspectRatio)
[ ] All images have descriptive alt text
[ ] Image licensing verified (stock photo license, original, etc.)
[ ] All 4 image versions in /images/blog/ folder
[ ] Source image removed from root directory
[ ] Categories assigned
[ ] Internal links to relevant service pages
[ ] Disclaimer at end of post
[ ] No prohibited terminology (coach, mentor, consult)
```

**SEO & Discoverability:**
```
[ ] Article JSON-LD schema added to blog.js post object (see below)
[ ] Post added to sitemap.xml with proper URL
[ ] Meta description set (150-160 chars)
[ ] Open Graph tags verified (og:title, og:description, og:image)
```

**Quality Assurance:**
```
[ ] Lighthouse check run (performance 80+, accessibility 90+, SEO 90+)
[ ] Homepage blog scroller verified (newest post appears)
[ ] Related posts display correctly on blog listing
[ ] GA4 tracking verified (page loads, section views fire)
[ ] Mobile preview checked (images, text, CTAs display correctly)
```

**Optional - Promotion:**
```
[ ] Ask: Should this be emailed to newsletter subscribers?
[ ] Ask: Pinterest-optimized image needed? (vertical 2:3 ratio)
[ ] Ask: Request faster indexing via Search Console URL Inspection? (not required - Google auto-crawls sitemap)
```

**Post-Publishing Cleanup (after user merges to main or says "publish"):**
```
[ ] Remove any leftover source images from root directory (e.g., "Untitled design.png")
[ ] Verify all blog images are in /images/blog/ folder only
[ ] Confirm no untracked temporary files remain
```

### Blog Image Optimization Workflow

**IMPORTANT:** Blog images must be optimized for responsive loading. The site uses these images in THREE locations:
1. **Blog post page** - Featured image (full + mobile versions)
2. **Blog index page** - Card thumbnails (small + small-xs versions)
3. **Homepage carousel** - Recent posts section (small + small-xs versions)

#### Required Image Versions

For each blog post, create these 4 optimized WebP versions:

| File Suffix | Width | Use Case | Target Size |
|-------------|-------|----------|-------------|
| `.webp` | 900px | Blog post (desktop) | <50KB |
| `-mobile.webp` | 500px | Blog post (mobile) | <20KB |
| `-small.webp` | 400px | Cards (desktop) | <15KB |
| `-small-xs.webp` | 300px | Cards (mobile) | <10KB |

#### Image Optimization Steps

1. **Get the source image** (usually uploaded to root directory as "Untitled design.png" or similar)

2. **Check dimensions and calculate aspect ratio:**
   ```bash
   cd "/Users/aliciaharrison/Desktop/VSCode Projects/IHH-website"
   python3 -c "from PIL import Image; img=Image.open('SOURCE_IMAGE.png'); print(f'Size: {img.size}, Aspect: {img.size[1]/img.size[0]*100:.2f}%')"
   ```

3. **Create all responsive versions:**
   ```bash
   cd "/Users/aliciaharrison/Desktop/VSCode Projects/IHH-website/images/blog" && python3 << 'EOF'
   from PIL import Image
   import os

   # Load original image (adjust path as needed)
   original = Image.open('../../SOURCE_IMAGE.png')
   basename = 'your-post-slug'  # Change to match blog post slug

   sizes = {
       f'{basename}.webp': 900,
       f'{basename}-mobile.webp': 500,
       f'{basename}-small.webp': 400,
       f'{basename}-small-xs.webp': 300,
   }

   for filename, target_width in sizes.items():
       ratio = original.size[1] / original.size[0]
       target_height = int(target_width * ratio)
       resized = original.resize((target_width, target_height), Image.LANCZOS)

       # Handle transparency
       if resized.mode in ('RGBA', 'P'):
           background = Image.new('RGB', resized.size, (255, 255, 255))
           if resized.mode == 'P':
               resized = resized.convert('RGBA')
           background.paste(resized, mask=resized.split()[3] if len(resized.split()) == 4 else None)
           resized = background

       resized.save(filename, 'WEBP', quality=80)
       print(f"Created {filename}: {target_width}x{target_height}, {os.path.getsize(filename)/1024:.1f}KB")
   EOF
   ```

4. **Update blog.js post entry:**
   ```javascript
   {
     slug: 'your-post-slug',
     image: '/images/blog/your-post-slug.webp',  // Must be .webp
     cardAspectRatio: 'XX.XX%',   // Calculate: (height/width)*100
     imageAspectRatio: 'XX.XX%',  // Same value
     // ... other properties
   }
   ```

5. **Delete source image from root directory:**
   ```bash
   rm "/Users/aliciaharrison/Desktop/VSCode Projects/IHH-website/SOURCE_IMAGE.png"
   ```

#### How Responsive Images Work

The codebase automatically uses the correct image version:

**Blog post page (`blog.js` lines 1227-1232):**
- Replaces `.webp` with `-mobile.webp` for srcset
- Mobile devices load 15KB instead of 41KB

**Blog index cards (`blog.js` lines 939-947):**
- Replaces `.webp` with `-small.webp` for thumbnail
- Creates `-small-xs.webp` variant for mobile srcset

**Homepage carousel (`index.html` lines 540-549):**
- Same logic as blog index cards
- Uses `-small.webp` and `-small-xs.webp` with srcset

#### Fallback Behavior

All image tags include `onerror="this.src='${post.image}'"` which falls back to the full-size image if a responsive version is missing. However, always create all 4 versions to ensure optimal performance.

### Blog Post JSON-LD Schema

Each blog post in `blog.js` should include a `schema` object with a description:

```javascript
{
  slug: 'post-slug',
  title: 'Post Title',
  // ... other properties
  schema: {
    description: 'SEO meta description for the post (150-160 chars)'
  }
}
```

The `blog.js` file automatically generates a full Article schema using:
- `title` → headline
- `date` → datePublished/dateModified
- `image` → image URL
- `schema.description` → description (falls back to excerpt if not provided)
- Author and publisher info are auto-populated

The schema is dynamically injected into the `<head>` when the post loads.

### Adding Blog Posts to Sitemap

When adding a new blog post, add an entry to `/sitemap.xml`. See `CLAUDE-REFERENCE.md` for the XML template.

**IMPORTANT:** Blog post URLs use the `?post=` parameter, NOT `?slug=`. The correct format is:
`/blog/post.html?post=your-post-slug`

### Lighthouse Check for Blog Posts

Run a quick Lighthouse audit on the new post. See `CLAUDE-REFERENCE.md` for the command.

Key targets:
- Performance: 80+
- Accessibility: 90+
- SEO: 90+

### Homepage Blog Scroller Verification

After adding a new post, verify it appears in the homepage blog section:
1. Check that `blog.js` posts array has the new post at the correct position (newest first)
2. Load homepage and confirm the new post thumbnail/title appears in the blog scroller
3. Click through to verify the link works

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

## Safari Developer Tools (Mac)

This device uses Safari on macOS. Developer tools work differently than Chrome on Windows.

### Key Shortcuts

| Action | Shortcut |
|--------|----------|
| Hard Refresh (clear cache) | `Command + Option + R` |
| Open Developer Tools | `Command + Option + I` |
| Reload Page | `Command + R` |

### One-Time Setup: Enable Developer Menu

Before using Developer Tools, you must enable the Develop menu:

1. Open Safari → **Settings** (or Preferences)
2. Click the **Advanced** tab
3. Check **"Show Develop menu in menu bar"**
4. Close Settings

You should now see "Develop" in the Safari menu bar.

### Opening Developer Tools

1. Press `Command + Option + I`
   - OR: Click **Develop** menu → **Show Web Inspector**
2. The Web Inspector panel opens (usually at bottom of window)

### Checking for JavaScript Errors

When a page isn't loading correctly:

1. Open Developer Tools (`Command + Option + I`)
2. Click the **Console** tab (in the Web Inspector toolbar)
3. Look for **red error messages**
4. Errors show:
   - The error message (what went wrong)
   - The file and line number (where it happened)
5. Copy the error text to share for debugging

### Inspecting Network Requests

To check if files are loading:

1. Open Developer Tools (`Command + Option + I`)
2. Click the **Network** tab
3. Refresh the page (`Command + R`)
4. Look for:
   - **Red entries** = failed to load
   - **Status codes**: 200 = success, 404 = not found, 500 = server error
5. Click any entry to see details

### Clearing Cache Manually

If hard refresh doesn't work:

1. Click **Develop** menu → **Empty Caches**
2. Then refresh with `Command + R`

Or clear all website data:
1. Safari → **Settings** → **Privacy**
2. Click **Manage Website Data**
3. Search for the site and click **Remove**

### Viewing Page Source

1. Right-click anywhere on the page
2. Select **Inspect Element**
3. The Elements tab shows the HTML structure
4. Use the arrow tool to hover over elements and see their code

---

## Quick Reference

### Key URLs

See `CLAUDE-REFERENCE.md` for all key URLs (live site, branch deploy, GitHub, GA4, Practice Better, Fullscript).

**Note:** The branch deploy URL always shows the latest `drafts-website-edits` branch. Use this for testing before merging to main. Branch deploys are FREE (no Netlify credits).

### Contact & Credentials

See `CLAUDE-REFERENCE.md` for contact email and Alicia Harrison's credentials (MSN, APRN, FNP-C, BHPCC).
